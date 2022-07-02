import React, { useState } from 'react';

const Add = (props) => {
    const [note, setnote] = useState({
        title: "",
        message: ""
    });

    const inputEvent = (event) => {
        const { name, value } = event.target;

        setnote((predata) => {
            return {
                ...predata,
                [name]: value
            }
        })
    }
    const addEvent = () => {
        props.keypass(note);
        setnote({
            title: "",
            message: ""
        })
    }
    return (
        <div className="container my-4">
            <div>
                <div class="mb-3">
                    <label htmlFor="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name='title' value={note.title} onChange={inputEvent} />
                </div>
                <div class="mb-3">
                    <label htmlFor="message" class="form-label">Message</label>
                    <textarea class="form-control" id="message" name='message' value={note.message} onChange={inputEvent}></textarea>
                </div>
                <button onClick={addEvent} class="btn btn-warning">Submit</button>
            </div>
        </div>
    )
}

export default Add;