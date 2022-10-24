import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Clear } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

const Message = ({ post }) => {

  return (
    <div>
    <main className="postBorder">{post.message} <ClearIcon fontSize='small' onClick={() => console.log("Hi")}/> <EditIcon fontSize='small'/></main>
    <div></div>
    </div>
  )
}

export default Message
