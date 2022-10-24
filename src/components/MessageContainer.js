import React from 'react'
import Message from './Message'

const MessageContainer = ({ posts }) => {

    const renderPosts = posts.map(post => (
        <Message key={post.id} post={post} />
    ))

  return (
    <div>{renderPosts}</div>
  )
}

export default MessageContainer