import { Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { FC } from 'react'
import { useHistory } from 'react-router'
import { menu } from './dataMenu'

const MenuItem:FC = () => {

  const history = useHistory()

  return (
    <Card 
      variant='outlined'
      sx={{
        backgroundColor: '#F1F7Fa',
        borderRadius: '10px',
        marginTop: 5,
        marginBottom: 10
    }}>
      <List>
        {menu.map(item => (
        <ListItem key={item.link}>
          <ListItemButton  onClick={() => {
            history.push(item.link)
          }}>
            <ListItemIcon>
              <item.icon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>))}
      </List>
    </Card>
  )
}

export default MenuItem
