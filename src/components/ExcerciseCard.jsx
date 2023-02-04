import React from 'react';
import { Stack,Typography,Button } from '@mui/material';
import {Link} from 'react-router-dom'

const ExcerciseCard = ({excercise}) => {
  return (
    <Link className='exercise-card' to={`/excercise/${excercise.id}`}>
    <img src={excercise.gifUrl } alt={excercise.name}  />
    <Stack direction='row'>
    <Button sx={{ml:'21px',fontSize:'14px',borderRadius:'20px',background:'#ffa9a9',color:'#000',textTransform:'capitalize'}}>
        {excercise.bodyPart}
    </Button>
    <Button sx={{ml:'21px',fontSize:'14px',borderRadius:'20px',background:'#fcc757',color:'#000',textTransform:'capitalize'}}>
        {excercise.target}
    </Button>
    </Stack>
    <Typography ml='21px' fontSize='22px' fontWeight='bold' color='#000'>
    {excercise.name}
    </Typography>
    </Link>
  )
}


export default ExcerciseCard