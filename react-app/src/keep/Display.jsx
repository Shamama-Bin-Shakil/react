import React from 'react';

const Display = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="card m-5" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.message}</p>
                    <button onClick={deleteNote} className="btn btn-danger mx-2">Delete</button>

                </div>
            </div>
        </>
    )
}

export default Display;