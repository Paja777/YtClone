import { Typography, Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import React, { useEffect, useState } from "react";
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
   fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
   .then(data => setVideos(data.items))
   .catch(error => console.log(`Error : ${error}`))
  },[selectedCategory])
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography variant="body2" className="copyrigth" sx={{mt: 1.5, color: '#fff'}}>Copyrigth 2023 PAJA</Typography>
      </Box>
      <Box p={2} sx={{overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: "#f31503"}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
