import React from 'react';

const PostForm = (props) => {
    const { handleSubmit, setTitle, setText, title, text } = props;
    return (
        <div>
            <form action="">
                <label htmlFor="title">Title</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} /><br/>
                <label htmlFor="text">Text</label><br/>
                <textarea name="text" id="" cols="30" rows="10" onChange={(e) => setText(e.target.value)} value={text} /><br/>
                <button onClick={handleSubmit} >Create Post</button>
            </form>
        </div>
    );
}

export default PostForm;