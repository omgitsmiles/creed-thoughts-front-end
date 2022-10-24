import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';

const NewPost = () => {
  const [blogPost, setBlogPost] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    console.log(blogPost)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <Box
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
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
          defaultValue={blogPost}
          onChange={(e) => setBlogPost(e.target.value)}
        />
    </Box>
    <Fab variant="extended" color="primary" aria-label="add" className="postBtn">
        Post
    </Fab>
    </form>
    </>
  )
}

export default NewPost