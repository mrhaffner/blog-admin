import React, {useState, } from 'react';
import { useHistory } from 'react-router-dom';

const NewPost = (props) => {
    const { setIsLoading } = props;
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify({ title, text, }))
        try {
            const response = await fetch(`http://localhost:3000/blog`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, text }),
            })
            const data = await response
            console.log('response:', data)
            setIsLoading(true)
            history.push('/blog')
        } catch (err) {
            console.log('error:', err)
        }
    };

    //creating post should redirect to /blog

    return (
        <div>
            <h2>Create New Post</h2>
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

export default NewPost;