import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

const Message = ({ post:{message, user, id}, handleDelete, setPosts }) => {
    const [onEdit, isOnEdit] = useState(false)
    const [editPost, setEditPost] = useState("")

    function handleEditPost(e) {
        e.preventDefault()
        const editedPost = {message: editPost}
        fetch(`http://localhost:9292/posts/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editedPost)
        })
        .then(r => r.json())
        .then(data => setPosts(data))
    }

    const edited = (
        <form onSubmit={handleEditPost}>
          <input
            name="content"
            type="text"
            value={editPost}
            onChange={(e) => setEditPost(e.target.value)}
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
          edited
        )}
    </main>
    <div></div>
    </div>
  )
}

export default Message
