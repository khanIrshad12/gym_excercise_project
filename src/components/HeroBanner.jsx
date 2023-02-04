
import { Box,Stack,Typography,Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{mt:{lg:'212px',xs:'70px',},ml:{sm:'50px'}}} position='relative' p='20px'>
    <Typography color='#FF2625' fontSize='26px' fontWeight='600'>
        Fitness Club
    </Typography>
    <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'40px'}}} mb='20px' mt='20px'>
      Sweat, Smile <br/> and Repeat
    </Typography>
    <Typography fontWeight={400} sx={{fontSize:'22px', lineHeight:'35px' }} mb={4}>
      Check out the most effective exercise
    </Typography>

    <Button variant="contained" color='error' href='#exercises' sx={{background:'#ff2526',padding:'10px'}}>
      Explore Exercise
    </Button>
    <Typography fontWeight={700} fontSize={200} sx={{opacity:'0.1',display:{lg:'Block',xs:'none'}}} color='#ff2526'>
      Excercise
    </Typography>
    <img src={HeroBannerImage} alt='Banner-Image' className='hero-banner-img' />
   
    </Box>
  )
}

export default HeroBanner