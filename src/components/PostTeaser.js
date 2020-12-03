import React from 'react';
import { Link } from "react-router-dom";

const PostTeaser = (props) => {
    const { title, date, hyphenTitle, isPublished, id, setIsLoading } = props;

    const handlePublish = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/blog/${id}/publish`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `JWT ${localStorage.getItem('JWT')}`,
                },
                body: JSON.stringify({ published: isPublished ? false : true }),
            })
            const data = await response
            console.log('response:', data)
            setIsLoading(true)
        } catch (err) {
            console.log('error:', err)
        }
    }

    return (
        <div>
            <div>
                <Link to={`/blog/${hyphenTitle}`}>{title}</Link>
                <h4>By Admin on {date}</h4>
                <button onClick={handlePublish}>{isPublished ? 'Unpublish Post' : 'Publish Post'}</button>
            </div>
        </div>
    );
}

export default PostTeaser;