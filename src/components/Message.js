import React from 'react'

const Message = ({ post }) => {

  return (
    <div>
    <main className="postBorder">{post.message}</main>
    </div>
  )
}

export default Message
