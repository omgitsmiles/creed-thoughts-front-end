import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom'; 

const NewPost = ({ posts, onHandleSubmit, users, onHandleNewUserSubmit }) => {
  const [blogPost, setBlogPost] = useState("")
  const [selector, setSelector] = useState("")
  const [newUser, setNewUser] = useState("")
  let navigate = useNavigate();

  function handleNewUser(e){
    e.preventDefault()
    const addNewUser = {username: newUser}
    if (newUser !== "") {
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(addNewUser)
    })
    .then(r => r.json())
    .then(newU => onHandleNewUserSubmit(newU))
    alert("New User Added")
    } else {
      alert("Put your name in!")
    }
  }
  

  function handleSubmit(e){
    e.preventDefault()
    const newPost = {username: selector, message: blogPost}
    fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then(r => r.json())
        .then(addedPost => onHandleSubmit(addedPost))
        setBlogPost("")
        alert("Posted your blog, Creed")
        navigate("/home")
    }

  const renderUsers = users.map(user => user.username)

  return (
    <>
    <h1 className="postHeader">Write your post here Creed - Ryan</h1>
    <div>
    <form className="newClassPost">
      <TextField className="newUser" id="outlined-basic" label="New User?" variant="outlined" onChange={(e) => setNewUser(e.target.value)}/>
      <br></br>
      <Button variant="contained secondary" onClick={handleNewUser}>Add new user</Button>
      <br></br>
      <br></br>
    </form>
    </div>
    <Autocomplete
        className="comboBox"
        id="free-solo-demo"
        freeSolo
        sx={{ width: 300 }}
        options={renderUsers}
        onSelect={(e) => setSelector(e.target.value)}
        renderInput={(params) => <TextField {...params} label="Who's Posting" />}
      />
     
    <div className="newPost">
    <Box
    sx={{
      '& .MuiTextField-root': { m: 1, width: '75ch' },
    }}
    noValidate
    autoComplete="off"
    >
      <br></br>
      <br></br>
    <form onSubmit={handleSubmit}>
    <TextField 
          className="blogPost"
          id="outlined-multiline-static"
          label="Post"
          multiline
          rows={10}
          value={blogPost}
          onChange={(e) => setBlogPost(e.target.value)}
        />
        <br></br>
        <Button className="postBtn" variant="contained secondary" type="submit" endIcon={<SendIcon />} >
        Post
      </Button>
      </form>
    </Box>
    </div>
    </>
  )
}

export default NewPost