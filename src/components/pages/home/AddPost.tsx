import { TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, {  FC, KeyboardEvent, useState } from 'react'
import { IPost, TypeSetState } from '../../../types'

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost:FC<IAddPost> = ({setPosts}) => {

  const [content, setContent] = useState<string>('')

  const addPostHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { 
      setPosts(prev => [{
        author: {
          id: '5',
          avatar: '',
          name: 'Gandalf',
          isOnline: false
        },
        createdAt: '2.2.2',
        content
      }, ...prev]) 
      setContent('')
    }
  }

  return (
    <Box sx={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px 15px'
    }}>

      <TextField 
      label='Что нового?' 
      variant='outlined' 
      InputProps={{
        sx: {
          borderRadius: '25px',
          backgroundColor: '#F9F9F9'
        }
      }}
      sx={{
        width: '100%'
      }}

      value={content}
      onKeyPress={addPostHandler}
      onChange={e => setContent(e.target.value)}
      />
    </Box>
  )
}

export default AddPost
