import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

const Message = ({ post, handleDelete, setPosts, posts }) => {
    const [onEdit, isOnEdit] = useState(false)
    const {message, user, id} = post
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
        .then(updatedPost => {
            console.log(editedPost.id)
            const updatePost = posts.map(post => post.id === id ? updatedPost : post)
            setPosts(updatePost) 
        })
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
    </div>
  )
}

export default Message
