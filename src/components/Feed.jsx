import { Typography, Box, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import React from "react";

const Feed = () => {
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar/>
        <Typography variant="body2" className="copyrigth" sx={{mt: 1.5, color: '#fff'}}>Copyrigth 2023 PAJA</Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
