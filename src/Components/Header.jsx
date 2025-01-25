import { Box, Typography } from '@mui/material'
import React from 'react'
import Dirt from "../assets/dirt.png"

export default function Header() {
  return (
    <Box className="header" sx={{width: "100%", height: "90%", paddingLeft: "20px", display: "flex", justifyContent: "center"}}>
      <Box className="header-text-box" sx={{width: "50%", height: "100%", display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column"}}>
        <Typography variant='h3' sx={{color: "#fff", fontWeight: "900"}} className='header-text-head'>
          CraftHub-
        </Typography>
        <Typography variant='h5' sx={{color: "#ddd", textAlign: "left"}} className='header-text'>
          Это универсальная платформа для покупки игровых дорогоценностей и построек. CraftHub стримится быть лучше каждым днем! В последнем обновлении была улучшена пользовательский интерфейс и было добавлена новые функции по типу АККАУНТА CraftHub! Мы всегда работаем над новыми идеами и всегда готовы удивить вас с своим сервисом!
        </Typography>
      </Box>
      <Box className="header-image-box" sx={{width: "40%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <img src={Dirt} alt="Dirt Block" className='grassBlock'/>
      </Box>
    </Box>
  )
}
