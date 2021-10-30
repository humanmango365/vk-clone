
import MenuItem from './menu/MenuItem';
import React, { FC } from 'react'
import UserItem from './UserItem'

const Sidebar:FC = () => {
  return (
    <div>
      <UserItem />
      <MenuItem />
    </div>
  )
}

export default Sidebar

