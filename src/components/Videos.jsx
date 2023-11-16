import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import React from 'react'

const Videos = ({videos}) => {

  if (!videos) return "...Loading";
  
  const channelItems = videos.filter((item) => item.id.channelId);
  
  const videoItems = videos.filter((item) => !item.id.channelId);

  return (
    <Stack direction='row' flexWrap="wrap" justifyContent="start" gap={2}>
      {/* Render items with channelId first */}
      {channelItems.map((item, index) => (
        <Box key={index}>
          <ChannelCard channelDetail={item} /> 
        </Box> 
      ))}

      {/* Then render other items without channelId */}
      {videoItems.map((item, index) => (
        <Box key={index}>
          <VideoCard video={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default Videos