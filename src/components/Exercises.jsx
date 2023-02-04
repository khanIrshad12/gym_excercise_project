import React,{useState,useEffect} from 'react';
import { Typography,Box,Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { excerciseOptions,fetchData } from '../utils/fetchData';
import ExcerciseCard from './ExcerciseCard';

const Exercises = ({excercises,bodyPart,setExcercises}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ExcercisePerPage=9;
  const indexOfLastIndex=currentPage * ExcercisePerPage;
  const indexOfFirstIndex=indexOfLastIndex-ExcercisePerPage;
  const currentExcercise=excercises.slice(indexOfFirstIndex,indexOfLastIndex)
  const paginate=(e,value)=>{
    setCurrentPage(value);
    window.scrollTo({top:'1800px', behavior:'smooth'})
  }
  const fetchExcerciseData=async()=>{
    let ExcerciseDataslider=[];
    if(bodyPart === 'all'){
      ExcerciseDataslider= await fetchData('https://exercisedb.p.rapidapi.com/exercises',excerciseOptions); 
    }else{
      ExcerciseDataslider=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,excerciseOptions);
    }
    setExcercises(ExcerciseDataslider)
    }

  useEffect( ()=>{
    fetchExcerciseData()
  },[bodyPart])
  
  return (
    <Box id='excercises'
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'
    >
    <Typography varient='h3' mb='46px'>
      Showing Results
    </Typography>
    <Stack direction='row' flexWrap="wrap" justifyContent='center' sx={{gap:{lg:'110px',xs:'50px'}}}>
    {currentExcercise.map((excercise,idx)=>(
      <ExcerciseCard key={idx} excercise={excercise} />
    ))}
    </Stack>
    <Stack alignItems='center' mt='20px'>
    {excercises.length >ExcercisePerPage && 
    <Pagination 
    count={Math.ceil(excercises.length/ExcercisePerPage)}
    shape="rounded"
    defaultPage={1}
    page={currentPage}
    onChange={paginate}
    size='large'
     />//onchange={}in it mui material provide (e,value) its is happen behind the scean

    
    }
    </Stack>
    </Box>
  )
}

export default Exercises