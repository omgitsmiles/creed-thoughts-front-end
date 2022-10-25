import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom'; 

const NewPost = ({ posts, onHandleSubmit }) => {
  const [blogPost, setBlogPost] = useState("")
  const [users, setUsers] = useState([])
  const [selector, setSelector] = useState("")
  let navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(r => r.json())
    .then(setUsers)
  }, [])
  
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