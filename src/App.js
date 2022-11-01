import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import MessageContainer from './components/MessageContainer';
import NewPost from './components/NewPost';

function App() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(()=> {
    fetch("http://localhost:9292/posts")
    .then(r => r.json())
    .then(setPosts)
  }, [])

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(r => r.json())
    .then(setUsers)
  }, [])

  function handleDelete(deletedPostID) {
    fetch(`http://localhost:9292/posts/${deletedPostID}`, {
      method: "DELETE"
    })
    const updatedPosts = posts.filter(post => post.id !== deletedPostID)
    setPosts(updatedPosts)
  }

  function onHandleSubmit(blogPost) {
    setPosts([...posts, blogPost])
  }

  function onHandleNewUserSubmit(newUser) {
    setUsers([...users, newUser])
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<MessageContainer posts={posts} handleDelete={handleDelete} setPosts={setPosts}/>}/>
        <Route path="/posts/new" element={<NewPost posts={posts} onHandleSubmit={onHandleSubmit} users={users} onHandleNewUserSubmit={onHandleNewUserSubmit}/>}/>
        <Route path="*" element={<h1>Took a wrong turn</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
