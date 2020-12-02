import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const PostTeaser = (props) => {
    const { title, date, hyphenTitle, isPublished, id, setIsLoading } = props;

    // const [published, setPublished] = useState(null)

    // useEffect(() => {
        
    // }, [published])

    //const buttonDisplay = () => isPublished ? 'Unpublish Post' : 'Publish Post'

    const handlePublish = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/blog/${id}/publish`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ published: isPublished ? false : true }),
            })
            const data = await response
            console.log('response:', data)
            setIsLoading(true)
        } catch (err) {
            console.log('error:', err)
        }
        //update a state somewhere to rerender post/s
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