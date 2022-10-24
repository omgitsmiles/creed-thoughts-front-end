import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const NewPost = () => {
  const [blogPost, setBlogPost] = useState("")

  const newPost = {message: blogPost}

  function handleSubmit(e){
    e.preventDefault()
    
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