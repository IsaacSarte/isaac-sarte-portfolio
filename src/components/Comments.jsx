import React, { useState, useEffect, Suspense } from 'react';

// axios
import axios from 'axios';

// Style Components
import styled from 'styled-components';

// Framer Motion
import { motion } from 'framer-motion';

// Components
import Loading from "../subComponents/Loading";
import LogoComp from '../subComponents/LogoComp';
import HomeButton from '../subComponents/HomeButton';

const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;

    @media screen and (max-width: 500px) {
        background-attachment: fixed;
        background-size: cover;
    }
`

const CommentTitle = styled.h1`
    position: fixed;
    top: 1rem;
    left: 5rem;
    font-size: 6rem;
    opacity: 0.3;

    >span {
        font-size: 12.5rem;
    }

    @media screen and (max-width: 500px) {
        top: 5rem;
        left: 4rem;
        font-size: 2rem;
        opacity: 0.3;

        >span {
            font-size: 4rem;
        }
    }
`

const Container = styled.div`
    width: 100%;
    position: relative;
    padding-bottom: 5rem;
`

const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;

    >h1 {
        text-align: center;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
    }
    
    >form>input {
        width: 85%;
        padding: 1rem;
    }

    >form>button {
        background-color: transparent;
        padding: 1rem 1rem;
        border: 1px solid #000;
        border-radius: 15px;
        outline: none;
        cursor: pointer;
        font-size: 1.05rem;
        font-weight: 550;
        transition: all 0.25s forwards;
    }

    &:hover>form>button {
        transform: scale(1.025);
    }

    @media screen and (max-width: 500px) {
        >h1 {
            font-size: 1.25rem;
        }
        >form>input {
            width: 85%;
            padding: 1rem;
        }
    }
`

const Flex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 7rem;
    max-width: 100%;
    position: relative;

    >div {
        background-color: transparent;
        border: 5px solid #000;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        width: 25rem;
        height: 25vh;
        transition: all 0.25s forwards;
        cursor: pointer;
        /* position: absolute; */
    }

    >div>li {
        list-style: none;
        padding: 1rem;
    }

    @media screen and (max-width: 500px) {
        transform: translate(2%, 0);
        max-width: 70%;

        >div {
            height: 25vh;
        }
    }
`

const Details = styled.div`
    >div {
        text-align: center;
    }

    >div>span {
        font-size: 1.25rem;
    }
`


const baseURL = 'https://isaac-comments-api.herokuapp.com/api/v1/comments';

const Comments = () => {

    /* State Management */
    const [getComments, setGetComments] = useState([]);

    // Add Comment State
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [feedback, setFeedback] = useState('');
    const [status, setStatus] = useState('Add Comment');

    useEffect(() => {
        axios.get(baseURL)
            .then(res => {
                console.log(res.data.data)
                setGetComments(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    const handleAdd = (e) => {
        e.preventDefault();
        const addURL = baseURL;

        setStatus('Add Comment');

        return axios.post(
            addURL,
            { name: name, title: title, feedback: feedback }
        ).then((res) => {
            window.location.reload();
        })
    }

    return (
        <Suspense fallback={<Loading />}>
            <MainContainer
                initial='hidden'
                animate='show'
                exit={{
                    opacity: 0, transition: { duration: 0.5 }
                }}
            >
                <Container>
                    <LogoComp />
                    <HomeButton />
                    <CommentTitle>
                        <span>S</span>ee Comments
                    </CommentTitle>
                    <Center>
                        <br /><br /><br /><br />
                        <Form>
                            <h1>Give me your Feedback</h1>
                            <br /><br />
                            <form>
                                {/* <input type="hidden" name="" value={id} /> */}
                                <input type="text" name="" id="" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
                                <input type="text" name="" id="" required placeholder="Title " value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
                                <input type="text" name="" id="" required placeholder="Feedback " value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                                <br /><br />
                                {status === 'Add Comment' ? (
                                    <button onClick={(e) => handleAdd(e)}>
                                        Add Comment
                                    </button>
                                ) : (
                                    null
                                )}

                            </form>
                            <br /><br />

                            <br />
                            <br /><br />
                        </Form>

                        <Flex>
                            {
                                getComments.map((value, index) => (
                                    <motion.div
                                        whileHover={{ color: '#fff', backgroundColor: '#000' }}
                                    >
                                        <li key={index}
                                            id={value.id}
                                        >
                                            <Details>
                                                <div>
                                                    <h1>
                                                        <strong>{value.attributes.name}</strong>
                                                    </h1>
                                                    <br /><br />
                                                    <h2>
                                                        <strong>{value.attributes.title}</strong>
                                                    </h2>
                                                    <br /><br />
                                                    <span>
                                                        <i>"{value.attributes.feedback}"</i>
                                                    </span>
                                                </div>
                                            </Details>
                                            {/* <button status={'Delete'} onClick={(e) => handleDelete(e, value.id)}>Delete Comment</button> */}
                                            {" "}
                                            {/* <button onClick={() => handleEdit(value.id)}>Edit Comment</button> */}
                                        </li>
                                        <br />
                                    </motion.div>
                                ))
                            }
                        </Flex>

                    </Center>
                </Container>
            </MainContainer>
        </Suspense>
    )
}

export default Comments
