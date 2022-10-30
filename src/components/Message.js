import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

const Message = ({ post, handleDelete, setPosts, posts }) => {
    const [onEdit, isOnEdit] = useState(false) 
    const [isEdited, setIsEdited] = useState(false)
    const [editPost, setEditPost] = useState("")
    const {message, user, id, created_at, updated_at} = post

    
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
        .then(updatedPost => {
            const updatePost = posts.map(post => post.id === id ? updatedPost : post)
            setPosts(updatePost)
            setIsEdited(true) 
        })
    }

    const edited = (
        <form onSubmit={handleEditPost}>
          <input
            className="editPost"
            name="content"
            type="text"
            defaultValue={message}
            onChange={(e) => setEditPost(e.target.value)}
          />
          <input type="submit" />
        </form>
      )

  return (
    <div>
    <main className="postBorder"> <h3>{!isEdited ? created_at.slice(0, 10) : updated_at.slice(0, 10)}</h3>
    {message} -{user.username}
    <ClearIcon fontSize='small' className="editPosts" onClick={() => handleDelete(id)}/> 
    <EditIcon fontSize='small' className="editPosts" onClick={() => isOnEdit(onEdit => !onEdit)}/>
    {onEdit ? (
        edited
        ) : (
        null
        )}
    </main>
    </div>
  )
}

export default Message
