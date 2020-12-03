import React, {useEffect} from 'react';
import BlogList from './BlogList';

const BlogsPage = (props) => {
    const { posts, isLoading, setIsLoading, setPosts } = props;

    useEffect(() => {
        const hyphenate = (str) => {
          return str.toLowerCase().split(' ').join('-')
        };
      
        const addHyphenTitle = (arr) => {
          arr.forEach((obj) => {
            obj.hyphenTitle = hyphenate(obj.title)
          })
        };
    
        const getPosts = async () => {
            console.log(localStorage.getItem('JWT'))
          try {
            //set isLoading to true?
            const response = await fetch('http://localhost:3000/blog/all', {
                method: 'GET', 
                mode: 'cors',
                headers: { Authorization: `JWT ${localStorage.getItem('JWT')}`}
            })
            const data = await response.json()
            console.log(data)
            addHyphenTitle(data)
            setPosts(data.reverse())
            setIsLoading(false)
          } catch (err) {
            console.log(err)
          }
        };
        getPosts()
      }, [isLoading]);

    return (
        <div>
            {isLoading ? <h2>Loading Blogs</h2> : <BlogList posts={posts} setIsLoading={setIsLoading} />}
        </div>
    );
}

export default BlogsPage;