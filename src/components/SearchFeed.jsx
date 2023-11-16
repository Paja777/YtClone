import { Typography, Box, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {

  
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  console.log(searchTerm)
  

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(`Error : ${error}`));
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2, ml: '60px'}}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          Results for <span style={{ color: "#f31503" }}>{searchTerm}</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
