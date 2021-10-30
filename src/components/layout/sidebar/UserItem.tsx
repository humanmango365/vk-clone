import { Link, useHistory } from 'react-router-dom'
import { Box } from '@mui/system'
import React, { FC } from 'react'
import userLogo from '../../../images/user.png'
import { Avatar, Card } from '@mui/material'
import { QuestionAnswer } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { IUser } from '../../../types'

const UserItem:FC = () => {

  const history = useHistory()

  const users:IUser[] = [
    {
      avatar: userLogo,
      name: 'Max Payne',
      isOnline: true,
      id: '1'
    },
    {
      avatar: userLogo,
      name: 'Adam Jensen',
      isOnline: false,
      id: '2'
    },
    {
      avatar: userLogo,
      name: 'Alan Wake',
      isOnline: true,
      id: '3'
    },
    {
      avatar: userLogo,
      name: 'Bruce Wayne',
      isOnline: true,
      id: '4'
    }
  ]

  return (
    <Card
    variant='outlined'
    sx={{
      padding: 2,
      backgroundColor: '#F1F7Fa',
      borderRadius: '10px'
    }}>
      {users.map(user => (
          <Link to={`/profile/${user.id}`} key={user.id} style={{
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
              <Avatar src={user.avatar} alt="" 
                sx={{width: 40, height: 40}} 
              />
              {user.isOnline && <Box sx={{
                backgroundColor: '#4FB14F',
                width: 10,
                height: 10,
                position: 'absolute',
                bottom: 0,
                left: 0,
                borderRadius: '50%',
                border: '2px solid #F1F7Fa'
              }}/>}
              <span style={{fontSize: '.9em'}}>{user.name}</span>
            </Box>
          </Link>
        )
      )}

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => history.push('/messages')}>
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Сообщения"/>
          </ListItemButton>
        </ListItem>
      </List>

    </Card>
  )
}

export default UserItem
