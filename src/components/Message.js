import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Clear } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

const Message = ({ post:{message, user} }) => {


  return (
    <div>
    <main className="postBorder">{message} -{user.username}<ClearIcon fontSize='small' className="materialUI" onClick={() => console.log("Hi")}/> 
    <EditIcon fontSize='small' className="materialUI"/></main>
    <div></div>
    </div>
  )
}

export default Message
