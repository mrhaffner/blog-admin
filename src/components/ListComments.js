import React from 'react';

const ListComments = (props) => {
    const { comments, postId, setIsLoading } = props
    const list = comments.filter(comment => comment.post === postId).reverse()

    const handleDelete = (comment) => async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`http://localhost:3000/blog/${postId}/comment/${comment['_id']}`, {
                method: 'DELETE',
                mode: 'cors',
                headers: { Authorization: `JWT ${localStorage.getItem('JWT')}`},
            })
            const data = await response;
            console.log('response:', data);
            setIsLoading(true);
        } catch (err) {
            console.log('error:', err)
        }
    };

    return (
        <div>
            {list.map((comment) => {
                return (
                    <div key={comment["_id"]}>
                        <h4>By {comment.author} on {comment.date}</h4>
                        <p>{comment.text}</p>
                        <button onClick={handleDelete(comment)} >Delete Comment</button>
                    </div>
                )
            })}
        </div>
    )
    
}

export default ListComments;