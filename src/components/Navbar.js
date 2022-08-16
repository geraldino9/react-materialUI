import { Pets,Mail,Notifications } from '@mui/icons-material'

import { AppBar, Box, styled, Toolbar, Typography,InputBase, Badge, Avatar, Menu, MenuItem  } from '@mui/material'
import React, { useState } from 'react'

const StyledToolBar = styled(Toolbar)(
  {
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"green"
  
  }
);

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius:theme.shape.borderRadius,
  width: "40%"
 })); 

 const Icons = styled(Box)(({theme}) => ({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display:"flex"
  }
 })); 


 const USerBox = styled(Box)( ({theme})=>({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  [theme.breakpoints.up("sm")]:{
    display:"none"
  }
 }) )



export const Navbar = () => {
  const [open,setOpen]= useState(false);
  return (
    <AppBar position="sticky">      
      <StyledToolBar>
        <Typography variant='h6' sx ={{display:{xs:"none", sm:"block"}}} >
          Nombre de la aplicacion
        </Typography>
        <Pets sx ={{display:{xs:"block", sm:"none"}}}/>
        <Search> <InputBase placeholder='Search...'/> </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar onClick={e=>setOpen(true)} src="" sx={{width:"30px", height:"30px"}}/>
        </Icons>
        <USerBox>
          <Avatar onClick={e=>setOpen(true)} src="" sx={{width:"30px", height:"30px"}}/>
          <Typography variant='span' >
            Juan
          </Typography>
        </USerBox>
      </StyledToolBar>

      <Menu
        id="basic-menu"
        aria-labelledby='demo-positioned-button'
        onClick={e=>setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
