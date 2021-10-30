import { Avatar, Box, ImageList, ImageListItem } from '@mui/material'
import React, { FC } from 'react'
import { IPost } from '../../../types'
import { Link } from 'react-router-dom'

interface IPosts {
  posts: IPost[]
}

const Posts:FC<IPosts> = ({posts}) => {
  return (
    <>
      {posts.map(post => (
        <Box key={post.author.id} sx={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px 15px',
          marginTop: '20px'
        }}>
          <Link to={`/profile/${post.author.id}`} style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none', 
            color: '#111', 
            marginBottom: 22
            }}>
            <Box sx={{
              position: 'relative', marginRight: 5, display: 'flex',
              alignItems: 'center', columnGap: 1
            }}>
              <Avatar src={post.author.avatar} alt="" 
                sx={{width: 40, height: 40}} 
              />
              {post.author.isOnline && <Box sx={{
                backgroundColor: '#4FB14F',
                width: 10,
                height: 10,
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '50%',
                border: '2px solid #F1F7Fa'
              }}/>}
              <div>
                <div style={{fontSize: '.9em'}}>{post.author.name}</div>
                <div style={{fontSize: '.9em', opacity: '.6'}}>{post.createdAt}</div>
              </div>
            </Box>
          </Link>

          <p>
            {post.content}
          </p>

          {post.images && 
          <ImageList>
            {post.images.map(url => (
              <ImageListItem key={url}>
                <img src={url} alt="error" loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
          }
      </Box>))}
    </>
  )
}

export default Posts
