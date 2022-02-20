import React, { useState, useEffect } from 'react';

// axios
import axios from 'axios';

// Style Components
import styled from 'styled-components';

// Images
import books from '../assets/Images/books.jpg';

// Framer Motion
import { motion } from 'framer-motion';

// Components
import LogoComp from '../subComponents/LogoComp';
import HomeButton from '../subComponents/HomeButton';
import SocialIcons from '../subComponents/SocialIcons';

const MainContainer = styled.div`
    background-image: url(${books});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: center;
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
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
    /* height: 100vh; */
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
    gap: 1rem;
    max-width: 50%;
    left: 50%;
    transform: translate(6%, 0);

    >div {
        background-color: transparent;
        border: 2px solid #000;
        width: 25rem;
        height: 50vh;
        transition: all 0.25s forwards;
        cursor: pointer;
    }

    >div>li {
        list-style: none;
    }

    @media screen and (max-width: 500px) {
        transform: translate(2%, 0);
        max-width: 70%;

        >div {
            height: 30vh;
        }
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

    // Edit State
    const [status, setStatus] = useState('Add Comment');
    const [id, setId] = useState(0);

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

    // const handleDelete = (e, id) => {
    //     setName('');
    //     setTitle('');
    //     setFeedback('');
    //     e.preventDefault();
    //     console.log(e)
    //     const deleteURL = baseURL + `/${id}`;
    //     return axios.delete(
    //         deleteURL, { id: id }
    //     )
    // }

    const handleAdd = (e, id) => {
        e.preventDefault();
        const addURL = baseURL;

        setStatus('Add Comment');

        return axios.post(
            addURL,
            { name: name, title: title, feedback: feedback }
        )
    }

    // const handleEdit = (id) => {
    //     axios.get(`${baseURL}/${id}`)
    //         .then(res => {
    //             setName(res.data.data.attributes.name)
    //             setTitle(res.data.data.attributes.title)
    //             setFeedback(res.data.data.attributes.feedback)
    //             setId(id)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     console.log(id)
    //     setStatus('Update Comment');
    // }

    // const handleUpdate = (e) => {
    //     e.preventDefault();
    //     const editURL = baseURL + `/${id}`;
    //     return axios.put(
    //         editURL,
    //         { name: name, title: title, feedback: feedback }
    //     )
    // }

    return (
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
                <SocialIcons />
                <CommentTitle>
                    <span>S</span>ee Comments
                </CommentTitle>
                <Center>
                    <Form>
                        <h1>Give me your Feedback</h1>
                        <br /><br />
                        <form>
                            <input type="hidden" name="" value={id} />
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
                                        <p>
                                            Name: &nbsp;
                                            <strong>{value.attributes.name}</strong>
                                        </p>
                                        <p>
                                            Title: &nbsp;
                                            <strong>{value.attributes.title}</strong>
                                        </p>
                                        <p>
                                            Feedback: &nbsp;
                                            <strong>{value.attributes.feedback}</strong>
                                        </p>
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
    )
}

export default Comments