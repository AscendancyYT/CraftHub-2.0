import { Alert, Box, Button, Collapse, IconButton, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';

export default function Contact() {
  const phoneNumber = useRef('');
  const name = useRef('');
  const text = useRef('');

  const [open, setOpen] = React.useState(false);

  function generateID(length){
    let charLength = length / 2 + 1
    
    let randomChar1 = Math.floor(Math.random() * charLength);
    let randomChar2 = Math.floor(Math.random() * charLength);
    let randomChar3 = Math.floor(Math.random() * charLength);
    let randomChar4 = Math.floor(Math.random() * charLength);
    let randomChar5 = Math.floor(Math.random() * charLength);
    let randomChar6 = Math.floor(Math.random() * charLength);

    return `MSG-${randomChar1}${randomChar2}${randomChar3}-${randomChar4}${randomChar5}${randomChar6}-ID`
  }

  function Send(e){
    const MSG_DB_API = `http://localhost:7500/messages`;

    if(phoneNumber.current.value.length > 0 && name.current.value.length > 0 && text.current.value.length > 0){        
      axios.post(MSG_DB_API, {
        id: generateID(9),
        phoneNumber: phoneNumber.current.value,
        name: name.current.value,
        text: text.current.value
      }).then(()=>{
        phoneNumber.current.value = ""
        name.current.value = ""
        text.current.value = ""
        setOpen(true)
      })
    }else{
      alert("Заполните все поля")
    }
  }
  return (
    <Box className="contact" sx={{width: "100vw", height: "100vh", position: "relative", background: "#111827", display: "flex", alignItems: "center",justifyContent: "space-between", flexDirection: "column"}}>
      <Navbar />
      <Box className="contat-form" sx={{width: "420px", border: "1px solid #000", height: "80%", marginBottom: "20px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", background: "#ccc"}}>
        <Typography variant='h5' sx={{color: "#000", fontWeight: "900", width: "100%", height: "10%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "default"}}>Напишите нам</Typography>
        <TextField required inputRef={phoneNumber} id="outlined-number phone-number" label="Номер телеграм" type="number" slotProps={{inputLabel: {shrink: true}}} name='number'/>
        <TextField required id="outlined-text" label="Как вас звать?" type='text' slotProps={{inputLabel: {shrink: true}}} inputRef={name}/>
        <TextField required id="outlined-multiline-static" label="Ваш вопрос" multiline rows={4} inputRef={text}/>
        <Box sx={{width: "100%", height: "10%", display: "flex", alignItems: "center", justifyContent: "center", gap: "30px"}}>
        <Button onClick={Send} variant="contained" size="medium" >
          Отправить
        </Button>
        <Button variant="outlined" href="/" size='medium'>Назад</Button>
        <Collapse sx={{position: "absolute", top: 10, right: 10}} in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Ваш вопрос отправлен нашим админам
        </Alert>
      </Collapse>
        </Box>
      </Box>
    </Box>
  )
}
