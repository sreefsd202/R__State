import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar color='secondary'>
            <Toolbar>
               <Typography variant='h6' component='div' sx={{flexGrow:1}}>My-app</Typography>
               &nbsp;
               <Link to='/s'>
               <Button variant='contained'>State</Button>
               </Link>
               &nbsp;&nbsp;
               <Link to='/c'>
               
               <Button variant='contained'>Counter</Button></Link>
               &nbsp;&nbsp;
               <Link to='/d'>
               <Button variant='contained'>Home</Button></Link>
                              

            </Toolbar>
        </AppBar>
        <br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar