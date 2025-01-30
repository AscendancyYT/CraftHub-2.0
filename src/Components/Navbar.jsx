import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Box sx={{width: "50%", height: "100%", display: "flex", alignItems: 'center', justifyContent: "start", paddingLeft: "20px", color: "#fff"}}>
        <Typography variant="h3" sx={{fontFamily: "cursive"}}>CraftHub</Typography>
      </Box>
      <Box sx={{width: "50%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", paddingRight: "20px"}}>
        <Link to="/">
          <Typography variant="p" sx={{color: "#ddd", fontFamily: "cursive", cursor: "pointer", transition: "all .2s linear"}} className="navigation-link">Главная</Typography>
        </Link>
        <Link to="/contact">
          <Typography variant="p" sx={{color: "#ddd", fontFamily: "cursive", cursor: "pointer", transition: "all .2s linear"}} className="navigation-link">Контакт</Typography>
        </Link>
        <Link to='/products'>
          <Typography variant="p" sx={{color: "#ddd", fontFamily: "cursive", cursor: "pointer", transition: "all .2s linear"}} className="navigation-link">Продукты</Typography>
        </Link>
        <Link to="/profile">
          <Typography variant="p" sx={{color: "#ddd", fontFamily: "cursive", cursor: "pointer", transition: "all .2s linear"}} className="navigation-link">Профиль</Typography>
        </Link>
      </Box>
    </div>
  );
}
