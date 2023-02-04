import React from 'react'
import { Typography,Button,Stack } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png'
const Detail = ({excerciseDetail}) => {
    const {name,target,gifUrl,bodyPart}=excerciseDetail;
    const extraDetail=[
        {
            icon:BodyPartImage,
            name:bodyPart,
        },
        {
            icon:TargetImage,
            name:bodyPart, 
        },
        {
            icon:EquipmentImage,
            name:bodyPart,
        },
    ]
    
  return (
    <Stack gap='60px' sx={{flexDirection:{lg:'row'},p:'20px' , alignItems:'center'}}>
   <img src={gifUrl} alt={name} loading='lazy' />
   <Stack>
    <Typography varient='h3'>
    {name}
    </Typography>
    <Typography>
        Excercise keep you strong. {name} {` `}
        is one of the best excercises to target to ${target}.It will help You
        improve your mood and gain energy.
    </Typography>
    {extraDetail.map(item=>(
        <Stack key={item.name} direction='row' gap='24px'>
        <Button sx={{background:'fff2db',borderRadius:'50%',weight:'100px',height:'100px'}}>
            <img src={item.icon} alt={bodyPart} style={{height:'50px', width:'50px' }} />
        </Button>
        <Typography varinet='h5' textTransform='capitalize'>
            {item.name}
        </Typography>
        </Stack>
    ))}
    
   </Stack>
    </Stack>
  )
}

export default Detail