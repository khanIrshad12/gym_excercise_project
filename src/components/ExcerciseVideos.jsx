import React from 'react'
import { Box,Typography,Stack } from '@mui/material'

const ExcerciseVideos = ({excerciseVideos,name}) => {
  if(!excerciseVideos.length) return 'loading';
  return (
    <Box sx={{marginTop:{lg:"200px",xs:'20px'}}} p='20px'>
    <Typography varient='h3' mb='33px'>
    Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> excercise videos
    </Typography>
    <Stack sx={{flexDirection:{lg:'row'},gap:{lg:'110px',xs:'0'}}}>
      {excerciseVideos?.slice(0,6).map((item,index)=>(
        <a
        key={index}
        className="excercise-video"
        href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
        target='_blank'
        rel='noreferrer'
        >
      <img src={item.video.thumbnail[0].url} alt={item.video.title} />
      <Box>
        <Typography varient='h5' color='#000'>
          {item.video.title}
        </Typography>
        <Typography varient='h6' color='#000'>
          {item.video.channelName}
        </Typography>
      </Box>
        </a>
        
      ))
      }
    </Stack>
    </Box>
  )
}

export default ExcerciseVideos