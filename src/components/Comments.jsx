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
`

const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
    height: 100vh;
    position: relative;
    padding-bottom: 5rem;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`

// Framer-motion config
const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }

}


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

    const handleDelete = (e, id) => {
        setName('');
        setTitle('');
        setFeedback('');
        e.preventDefault();
        console.log(e)
        const deleteURL = baseURL + `/${id}`;
        return axios.delete(
            deleteURL, { id: id }
        )
    }

    const handleAdd = (e, id) => {
        e.preventDefault();
        const addURL = baseURL;

        setStatus('Add Comment');

        return axios.post(
            addURL,
            { name: name, title: title, feedback: feedback }
        )
    }

    const handleEdit = (id) => {
        axios.get(`${baseURL}/${id}`)
            .then(res => {
                setName(res.data.data.attributes.name)
                setTitle(res.data.data.attributes.title)
                setFeedback(res.data.data.attributes.feedback)
                setId(id)
            })
            .catch(err => {
                console.log(err)
            })
        console.log(id)
        setStatus('Update Comment');
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const editURL = baseURL + `/${id}`;
        return axios.put(
            editURL,
            { name: name, title: title, feedback: feedback }
        )
    }

    return (
        <MainContainer
            variants={container}
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
                <Center>
                    <div>
                        <h1>See Comments</h1>
                        <br /><br />
                        <h3>Create Comment</h3>
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
                                <button onClick={(e) => handleUpdate(e)}>
                                    Update Comment
                                </button>
                            )}

                        </form>
                        <br /><br />

                        <br />
                        <br /><br />
                    </div>

                    <Grid>
                        {
                            getComments.map((value, index) => (
                                <>
                                    <li key={index}
                                        id={value.id}
                                    >
                                        <p>
                                            ID: &nbsp;
                                            <strong>{value.id}</strong><br />
                                        </p>
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
                                        <button status={'Delete'} onClick={(e) => handleDelete(e, value.id)}>Delete Comment</button>
                                        {" "}
                                        <button onClick={() => handleEdit(value.id)}>Edit Comment</button>
                                    </li>
                                    <br />

                                </>
                            ))
                        }
                    </Grid>

                </Center>
            </Container>
        </MainContainer>
    )
}

export default Comments