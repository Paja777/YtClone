import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"; 

const VideoCard = ({video: {id: {videoId}, snippet} }) => {
  
  return (
    <Card sx={{width: {md: '320px', xs: '100%'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
          image={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          sx={{height: 180, width: { md: 358, xs: '100%'}}}
          >
          </CardMedia>
        </Link>
        <CardContent sx={{height: '106px', backgroundColor: '#1e1e1e', width: {md: '320px', xs: '100%'}}}>
        <Link to={videoId? `/video/:${videoId}` : ''}>
          <Typography variant='subtitle1' fontWeight='bold' color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color="gray">
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
            <CheckCircleIcon sx={{fontSize: 12, color: 'gray', ml: '12px' }}/>
          </Typography>
          
        </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard