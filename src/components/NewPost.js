import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const NewPost = ({ posts:{ id } }) => {
  const [blogPost, setBlogPost] = useState("")


  function handleSubmit(e){
    e.preventDefault()
    const newPost = {message: blogPost}
    fetch(`http://localhost:9292/posts/${id}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(newPost)
        })
        .then(r => r.json())
        .then(data => console.log(data))
        setBlogPost("")
  }

  return (
    <>
    <Box
    sx={{
      '& .MuiTextField-root': { m: 1, width: '75ch' },
    }}
    noValidate
    autoComplete="off"
    >
      <br></br>
      <br></br>
    <form onSubmit={(e) => handleSubmit(e)}>
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
        <Button className="postBtn" variant="contained" type="submit" endIcon={<SendIcon />} >
        Post
      </Button>
      </form>
    </Box>
      
    
    </>
  )
}

export default NewPost