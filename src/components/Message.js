import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

const Message = ({ post:{message, user, id}, handleDelete }) => {
    const [onEdit, isOnEdit] = useState(false)


    const editForm = (
        <form>
          <input
            name="content"
            type="text"
            // value={editInputValue.content}
            // onChange={handleEditChange}
          />
          <input type="submit" />
        </form>
      );

  return (
    <div>
    <main className="postBorder">{message} -{user.username}
    <ClearIcon fontSize='small' className="editPosts" onClick={() => handleDelete(id)}/> 
    <EditIcon fontSize='small' className="editPosts" onClick={() => isOnEdit(onEdit => !onEdit)}/>
    {!onEdit ? (
          null
        ) : (
          editForm
        )}
    </main>
    <div></div>
    </div>
  )
}

export default Message
