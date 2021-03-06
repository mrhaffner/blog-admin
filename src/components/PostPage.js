import React, {useState, } from 'react';
import { useParams, useHistory } from "react-router-dom";
import Comments from './Comments'
import PostForm from './PostForm'

const PostPage = (props) => {
    const { posts, setIsLoading, isLoading } = props;
    const history = useHistory();
    let params = useParams()
    
    const post = posts.find(obj => obj.hyphenTitle === params.hyphenTitle);

    const [title, setTitle] = useState(post.title);
    const [text, setText] = useState(post.text);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify({ title, text, }))
        try {
            const response = await fetch(`http://localhost:3000/blog/${post['_id']}/update`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('JWT')}`,
                },
                body: JSON.stringify({ title, text }),
            })
            const data = await response;
            console.log('response:', data);
            setIsLoading(true);
            history.push(`/blog`);
        } catch (err) {
            console.log('error:', err)
        }
    };

    const handleDelete = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/blog/${post['_id']}/delete`, {
                method: 'DELETE',
                mode: 'cors',
                Authorization: `JWT ${localStorage.getItem('JWT')}`,
            })
            const data = await response;
            console.log('response:', data);
            setIsLoading(true);
            history.push('/blog');
        } catch (err) {
            console.log('error:', err)
        }
    };

    return (
        isLoading
            ? (<h2>Page Loading</h2>)
            : (
                <div>
                    <PostForm handleSubmit={handleSubmit} setTitle={setTitle} setText={setText} title={title} text={text} />
                    <h4>By Admin on {post.date}</h4>
                    <button onClick={handleDelete} >Delete Post</button>
                    <Comments post={post} />
                </div>
            )
    );
}

export default PostPage;