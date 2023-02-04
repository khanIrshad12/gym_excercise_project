import React,{useContext} from 'react'
import { Box,Typography } from '@mui/material';
import ExcerciseCard from './ExcerciseCard'
import BodyParts from './BodyParts'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};
const HorizontalScroll = ({data,bodyPart,setBodyPart,isBodyParts}) => {
  return (
    <ScrollMenu RightArrow={RightArrow} LeftArrow={LeftArrow}>
   {data.map((item)=>(
    
    <Box
    key={item.id || item}
    itemId={item.id || item}
    title={item.id || item}
    m='0 40px'
    >
    {console.log(item)}
    {isBodyParts ? <BodyParts item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />:<ExcerciseCard excercise={item}/>}
   
    </Box>
    )
    )} 
   
    </ScrollMenu>
  )
}

export default HorizontalScroll