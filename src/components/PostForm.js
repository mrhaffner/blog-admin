import React from 'react';

const PostForm = (props) => {
    const { handleSubmit, setTitle, setText } = props;
    return (
        <div>
            <form action="">
                <label htmlFor="title">Title</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)} /><br/>
                <label htmlFor="text">Text</label><br/>
                <textarea name="text" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)} /><br/>
                <button onClick={handleSubmit} >Create Post</button>
            </form>
        </div>
    );
}

export default PostForm;