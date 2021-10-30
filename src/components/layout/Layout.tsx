import { Grid } from '@mui/material'
import React, {FC} from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const  Layout:FC = ({children}) => {
  return (
  <div style={{
    overflow: 'hidden'
  }}>
    <Header />
    <Grid container spacing={2} paddingX={5}>
      <Grid item md={3}>
        <Sidebar />
      </Grid>
      <Grid item md={9}>
        {children}
      </Grid>
    </Grid>
  </div>
  )
}
export default Layout