import { Stack} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom"
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{mt:{sm:'32px',xs:'20px'},gap:{sm:'122px',xs:'40px'} ,justifyContent:'none',px:'20px'}}>
    <Link to="/">
    <img  src={Logo} alt="logo" style={{width:'48px', height:'48px',margin: '0 20px'}} />
    </Link>
    <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
      <Link to='/' style={{color:'#3A1212',boderBottom:'3px solid #FF2625'}}>Home</Link>
      <a href="#excercise" style={{textDecoration:'none',color:'#3A1212'  }}>
        Excercise
      </a>
    </Stack>

    </Stack>
  )
}

export default Navbar