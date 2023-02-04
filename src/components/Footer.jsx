import React from 'react'
import { Stack,Box,Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt="80px" bgcolor='#fff3f4'>
    <Stack justifyContent='center' alignItems='center' gap='40px' px="40px" pt='24px'>
      <img src={Logo} alt="logo" width='200px' height='45px' pt='40px' pb='40px' />
      <Typography varient='h5'>
        Made By ❤️ Irshad Khan
      </Typography>
    </Stack>
    </Box>
  )
}

export default Footer