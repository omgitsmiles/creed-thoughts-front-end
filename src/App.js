import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import MessageContainer from './components/MessageContainer';
import NewPost from './components/NewPost';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(()=> {
    fetch(`http://localhost:9292/posts`)
    .then(r => r.json())
    .then(setPosts)
  }, [])


// name delete post more specific?
// deleted const is actually updated posts
  function handleDelete(deletedPostID) {
    const updatedPosts = posts.filter(post => post.id !== deletedPostID)
    fetch(`http://localhost:9292/posts/${deletedPostID}`, {
      method: "DELETE"
    })
    setPosts(updatedPosts)
  }

  function onHandleSubmit(creedPost) {
    setPosts([...posts, creedPost])
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<MessageContainer posts={posts} handleDelete={handleDelete} setPosts={setPosts}/>}/>
        <Route path="/newpost" element={<NewPost posts={posts} onHandleSubmit={onHandleSubmit}/>}/>
        <Route path="*" element={<h1>Took a wrong turn</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
