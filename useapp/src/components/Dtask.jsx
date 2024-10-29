import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Dtask = () => {
    var [name,setname]=useState()

    const react =()=>{
        setname(" React") 
    }

    const angular=()=>{
        setname(" Angular") 
    }

    const vue =()=>{
        setname(" Vue") 
    }
    useEffect(()=>{
        angular()
    },[])
  return (
    <div>
        <Typography variant='h6'>Welcome{name}</Typography> <br />
        <Button variant='contained' color='primary' onClick={react} >React</Button>&nbsp;
        <Button variant='contained' color='success' onClick={angular} >Angular</Button>&nbsp;
        <Button variant='contained' color='error' onClick={vue} >Vue</Button>
    </div>
  )
}

export default Dtask