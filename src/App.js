import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import BlogsPage from './components/BlogsPage';
import LogIn from './components/LogIn';
import PostPage from './components/PostPage';
import NewPost from './components/NewPost';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false)

  // useEffect(() => {
  //   const hyphenate = (str) => {
  //     return str.toLowerCase().split(' ').join('-')
  //   };
  
  //   const addHyphenTitle = (arr) => {
  //     arr.forEach((obj) => {
  //       obj.hyphenTitle = hyphenate(obj.title)
  //     })
  //   };

  //   const getPosts = async () => {
  //     try {
  //       //set isLoading to true?
  //       const response = await fetch('http://localhost:3000/blog/all', {method: 'GET', mode: 'cors'})
  //       const data = await response.json()
  //       addHyphenTitle(data)
  //       setPosts(data.reverse())
  //       setIsLoading(false)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   };
  //   getPosts()
  // }, [isLoading]);

  return (
    <Router>
      <div>
        {loggedIn ? <NavBar setLoggedIn={setLoggedIn} /> : null}
        <Switch>
          <Route path='/new'
            render={() => {
              return (
                loggedIn 
                  ? <NewPost setIsLoading={setIsLoading} />
                  : <Redirect to='/'/>
              )
            }} 
          />
          <Route path='/blog:hyphenTitle'
            render={() => {
              return (
                loggedIn 
                  ? <PostPage posts={posts} setIsLoading={setIsLoading} isLoading={isLoading} />
                  : <Redirect to='/'/>
              )
            }} 
          />
          <Route path='/blog'
            render={() => {
              return (
                loggedIn 
                  ? <BlogsPage posts={posts} isLoading={isLoading} setIsLoading={setIsLoading} setPosts={setPosts} />
                  : <Redirect to='/'/>
              )
            }} 
          />
          <Route path='/'
            render={() => {
              return (
                loggedIn 
                  ? <Redirect to='/blog'/>
                  : <LogIn loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
              )
            }} 
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
