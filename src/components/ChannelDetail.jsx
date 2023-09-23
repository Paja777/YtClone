import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { Box, Stack } from "@mui/material";

const ChanelDetail = () => {
  const [channelDetails, setChannelDetails] = useState([]);
  const [channelVideos, setChannelVideos] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetails(data.items);
      })
      .catch((error) => console.log(error));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setChannelVideos(data.items))
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <Stack direction="column">
      <Box sx={{ backgroundColor: "#000", padding: 0 }}>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        {channelDetails.map((detail, index) => (
          <Box key={index}>
            <ChannelCard channelDetail={detail} marginTop="-110px" />
          </Box>
        ))}
        <Box display="flex" p="2" sx={{ml: "60px"}}>
          <Videos videos={channelVideos} />
        </Box>
      </Box>
    </Stack>
  );
};

export default ChanelDetail;
