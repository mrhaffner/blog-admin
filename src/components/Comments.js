import React, {useState, useEffect } from 'react';
import ListComments from './ListComments';

const Comments = (props) => {
    const { post } = props;

    const [comments, setComments] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getComments = async () => {
          try {
            //set isLoading to true?
            const response = await fetch('http://localhost:3000/blog/comments', {
              method: 'GET', 
              mode: 'cors',
            })
            const data = await response.json()
            console.log(data)
            setComments(data)
            setIsLoading(false)
          } catch (err) {
            console.log(err)
          }
        }
        getComments()
      }, [isLoading]);

    return (
        <div>
            <h3>Comments</h3>
            {isLoading ? <h2>Comments Loading</h2> : <ListComments comments={comments} postId={post["_id"]} setIsLoading={setIsLoading} />}
        </div>
    );
}

export default Comments;