import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

export default function Contact() {
  return (
    <Box className="contact" sx={{width: "100vw", height: "100vh", position: "relative", background: "#111827", display: "flex", alignItems: "center",justifyContent: "space-between", flexDirection: "column"}}>
      <Navbar />
      <Box className="contat-form" sx={{width: "420px", border: "1px solid #000", height: "80%", marginBottom: "20px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", background: "#ccc"}}>
        <Typography variant='h5' sx={{color: "#000", fontWeight: "900", width: "100%", height: "10%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default"}}>Напишите нам</Typography>
        <TextField id="outlined-number" label="Номер телеграм" type="number" slotProps={{inputLabel: {shrink: true}}}/>
        <TextField id="outlined-text" label="Как вас звать?" type="number" slotProps={{inputLabel: {shrink: true}}}/>
        <TextField id="outlined-multiline-static" label="Ваш вопрос" multiline rows={4}  />
        <Box sx={{width: "100%", height: "10%", display: "flex", alignItems: "center", justifyContent: "center", gap: "30px"}}>
        <Button variant="contained" size="medium" >
          Отправить
        </Button>
        <Button variant="outlined" href="/" size='medium'>Назад</Button>
        </Box>
      </Box>
    </Box>
  )
}
