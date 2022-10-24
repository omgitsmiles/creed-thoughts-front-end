import React from 'react'
import Message from './Message'

const MessageContainer = ({ posts, handleDelete, setPosts }) => {

    const renderPosts = posts.map(post => (
        <Message key={post.id} post={post} handleDelete={handleDelete} setPosts={setPosts}/>
    ))

  return (
    <div>{renderPosts}</div>
  )
}

export default MessageContainer