import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { youtubeOptions } from "../utils/fetchData";
import { fetchData,excerciseOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import SimilarExcercises from "../components/SimilarExcercises";
import ExcerciseVideos from "../components/ExcerciseVideos";
const ExerciseDetail = () => {
  const [excerciseDetail,setExcerciseDetail]=useState({});
  const [excerciseVideos,setExcerciseVideos]=useState([]);
  const [targetMuscleExcercises, setTargetMuscleExcercises] = useState([]);
  const [equipmentMuscleExcercises, setEquipmentMuscleExcercises] = useState([])
  const {id} =useParams();

  useEffect(()=>{
    const fetchExcerciseData=async()=>{
      const excerciseDbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeVideo='https://youtube-search-and-download.p.rapidapi.com'
      const excerciseDetailData=await fetchData(`${excerciseDbUrl}/exercises/exercise/${id}`,excerciseOptions);
      setExcerciseDetail(excerciseDetailData);
      const excerciseVideosData= await fetchData(`${youtubeVideo}/search?query=${excerciseDetailData}`,youtubeOptions);
      setExcerciseVideos(excerciseVideosData.contents);

      const targetMuscleExcerciseData= await fetchData(`${excerciseDbUrl}/excercise/target/${excerciseDetailData.target}`,excerciseOptions);
      setTargetMuscleExcercises(targetMuscleExcerciseData)
      const equipmentMuscleExcerciseData= await fetchData(`${excerciseDbUrl}/excercise/equipment/${excerciseDetailData.equipment}`,excerciseOptions);
      setEquipmentMuscleExcercises(equipmentMuscleExcerciseData)
    }
    fetchExcerciseData()
  },[id])
  return (
    <Box>
      <Detail excerciseDetail={excerciseDetail} />
      <ExcerciseVideos excerciseVideos={excerciseVideos} name={excerciseDetail.name} />
      <SimilarExcercises targetMuscleExcercises={targetMuscleExcercises} equipmentMuscleExcercises={equipmentMuscleExcercises} />

    </Box>
  )
}

export default ExerciseDetail