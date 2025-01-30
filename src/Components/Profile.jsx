import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Join from './SignUp';

export default function Profile() {

  const [logged, setLogged] = React.useState(false);


  return (
    <Box sx={{width: "100%", height: "100vh", position: "relative", overflowX: "hidden", background: "#111827"}}>
      <Navbar />

    {logged == false ? <Join /> : <div>123321</div>}
    </Box>
  )
}
