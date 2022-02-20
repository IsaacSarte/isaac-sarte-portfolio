import React, { useState, useEffect } from 'react';

// axios
import axios from 'axios';


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
            <ul>
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
            </ul>
            <br />
            <br /><br />
        </div>
    )
}

export default Comments