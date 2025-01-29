import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Box sx={{width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "20px"}}>
      <Typography variant='h1'>Упс..</Typography>
      <Typography variant='h2'>Похоже, такая страница не сушествует</Typography>
      <Link to="/">
        <Button variant='contained'>Назад</Button>
      </Link>
    </Box>
  )
}
