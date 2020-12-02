import React from 'react';
import PostTeaser from './PostTeaser'

const BlogList = (props) => {
    const { posts, setIsLoading } = props;
    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.hyphenTitle}>
                        <PostTeaser title={post.title} date={post.date} hyphenTitle={post.hyphenTitle} isPublished={post.isPublished} id={post['_id']} setIsLoading={setIsLoading} />
                    </div>
                )
            })}
        </div>
    );
}

export default BlogList;