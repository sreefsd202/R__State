import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setname]=useState("Sree")
    var [val,setval]=useState()
    const handleInput =(e)=>{
        console.log(e.target.value)
        setname(e.target.value) 
    }
    const handleOut =()=>{
        setval(name)
    }
  return (
    <div>
       <Typography variant='h6'>
        Welcome  {val}
       </Typography>
       <TextField variant='outlined' onChange={handleInput} label='Enter name'></TextField> <br /><br />
       <Button variant='contained' onClick={handleOut}>submit</Button>
    </div>
  )
}

export default StateBasics