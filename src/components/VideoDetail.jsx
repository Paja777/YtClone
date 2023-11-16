import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams, Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Videos from "./Videos";


const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [videos, setVideos] = useState(null);

  
  // const {title} = video;
  // console.log(video);
  
  useEffect(() => {
    fetchFromAPI(`videos?part=contentDetails&id=${id}`).then((data) =>
      setVideo(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items))
  },[id]);

  if (!video?.snippet) return '...Loading';
  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = video;
  console.log(video)
  return (
    <Box minHeight="95vh">
    <Stack direction={{ xs: "column", md: "row" }}>
      <Box flex={1}>
        <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
            <Link to={`/channel/${channelId}`}>
              <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                {channelTitle}
                <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
      <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
        <Videos videos={videos} direction="column" />
      </Box>
    </Stack>
  </Box>
  );
};

export default VideoDetail;
