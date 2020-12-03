import React, {useState, } from 'react';
import { useHistory } from 'react-router-dom';
import PostForm from './PostForm';

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
                    Authorization: `JWT ${localStorage.getItem('JWT')}`
                },
                body: JSON.stringify({ title, text }),
            })
            const data = await response;
            console.log('response:', data);
            setIsLoading(true);
            history.push('/blog');
            //setIsLoading and redirect should not happen if it fails?
        } catch (err) {
            console.log('error:', err)
        }
    };

    

    return (
        <div>
            <h2>Create New Post</h2>
            <PostForm handleSubmit={handleSubmit} setTitle={setTitle} setText={setText} />
        </div>
    );
}

export default NewPost;