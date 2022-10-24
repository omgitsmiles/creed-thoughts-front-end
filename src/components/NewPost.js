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
    <form>
    <Box
    sx={{
      '& .MuiTextField-root': { m: 1, width: '75ch' },
    }}
    noValidate
    autoComplete="off"
    >
      <br></br>
      <br></br>
    
    <TextField 
          className="blogPost"
          id="outlined-multiline-static"
          label="Post"
          multiline
          rows={10}
          value={blogPost}
          onChange={(e) => setBlogPost(e.target.value)}
        />
    </Box>
      <Button className="postBtn" variant="contained" endIcon={<SendIcon />} onClick={(e) => handleSubmit(e)}>
        Post
      </Button>
    </form>
    </>
  )
}

export default NewPost