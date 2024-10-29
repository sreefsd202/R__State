import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var [count,setc]=useState(0)

  const addInput =()=>{
    setc(count+1)
}
const subInput =()=>{
  setc(count-1)
}
  return (
    <div>
      <Typography variant='h6'>Count:{count}</Typography>
      <Button variant='contained' color='success' onClick={addInput}>+</Button>&nbsp;
      <Button variant='contained' color='error' onClick={subInput}>-</Button>
    </div>
  )
}

export default Counter