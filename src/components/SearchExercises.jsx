import React,{useState,useEffect} from 'react'
import { Typography,Box,Stack,TextField,Button } from '@mui/material';
import { excerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScroll from './HorizontalScroll';
const SearchExercises = ({setExcercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState('');
  
  const [bodyParts,setBodyParts]=useState([]);
  console.log(bodyParts)
useEffect(()=>{
  const fetchExcerciseData=async()=>{
    const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',excerciseOptions);
    setBodyParts(['all',...bodyPartsData])
  }
  fetchExcerciseData();
},[])

  const handleClick= async ()=>{
    if(search){
      const excerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises',excerciseOptions);
      console.log(excerciseData)
      
      setExcercises(excerciseData.filter(item=> item.name.toLowerCase().includes(search) 
      || item.target.toLowerCase().includes(search) 
      || item.equipment.toLowerCase().includes(search) 
      ||item.bodyPart.toLowerCase().includes(search) ))
      window.scrollTo({top:1800,left:100,behavior:'smooth'})
      setSearch('');
      
    }
  };
  return (
    <Stack justifyContent='center' alignItems='center' mt='37px' p="20px">
    <Typography fontWeight='700' sx={{textAlign:'center',fontSize:{lg:'44px',xs:'30px'}}} mb='50px'>
      Awesome Excercise You <br/>Should Know
    </Typography>
    <Box position='relative' mb='72px'>
    <TextField
      sx={{
        input:{
          fontWeight:'700',
          border:'none',
          borderRadius:'4px'
        },
        width:{lg:'800px',xs:'350px'},
        backgroundColor:'#fff',
        borderRadius:'40px'
      }}
      height='76px'
      value={search}
      onChange={(e)=>setSearch(e.target.value.toLowerCase())}
      placeholder="Search You Excercise"
      type='text'
    />
    <Button className='search-btn'
    sx={{bgcolor:'#ff2625',
    color:'#fff',
    width:{lg:'175px',xs:'80px'},
    fontSize:{lg:'20px',xs:'14px'},
    textTransform:'none',
    height:'56px',
    position:'absolute',
    right:'0'
    }}
    onClick={handleClick}
    >
      Search
    </Button>
    </Box>
    <Box sx={{position:'relative', width:'100%',p:'20px'}}>
      <HorizontalScroll data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
    </Box>
    </Stack>
  )
}

export default SearchExercises