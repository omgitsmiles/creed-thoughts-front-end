import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

import EditIcon from '@mui/icons-material/Edit';

const Message = ({ post:{message, user, id}, handleDelete }) => {

  return (
    <div>
    <main className="postBorder">{message} -{user.username}
    <ClearIcon fontSize='small' className="editPosts" onClick={() => handleDelete(id)}/> 
    <EditIcon fontSize='small' className="editPosts"/></main>
    <div></div>
    </div>
  )
}

export default Message
