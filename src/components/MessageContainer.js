import React from 'react'
import Message from './Message'

const MessageContainer = ({ posts, handleDelete }) => {

    const renderPosts = posts.map(post => (
        <Message key={post.id} post={post} handleDelete={handleDelete}/>
    ))

  return (
    <div>{renderPosts}</div>
  )
}

export default MessageContainer