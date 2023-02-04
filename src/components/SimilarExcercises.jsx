import React from 'react';
import { Stack,Typography,Box } from '@mui/material';
import HorizontalScroll from './HorizontalScroll';
import Loader from './Loader';

const SimilarExcercises = ({targetMuscleExcercises,equipmentMuscleExcercises}) => {
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
    <Typography varient='h3'>
    Excercise that target the same muscle group
    </Typography>
    <Stack direction='row' sx={{p:'2',position:'relative'}} mt={5}>
    {
      targetMuscleExcercises.length ? <HorizontalScroll data={targetMuscleExcercises} /> : <Loader/>
    }
    </Stack>
    <Typography varient='h3'>
    Excercise that use the same equipment
    </Typography>
    <Stack direction='row' sx={{p:'2',position:'relative'}} mt={5}>
    {
      equipmentMuscleExcercises.length ? <HorizontalScroll data={equipmentMuscleExcercises} /> : <Loader/>
    }
    </Stack>
    </Box>
  )
}

export default SimilarExcercises