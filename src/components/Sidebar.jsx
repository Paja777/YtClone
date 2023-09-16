import React from "react";

import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = () => {
    const selectedCategory = 'New';
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      console.log('paja');
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{ backgroundColor: category.name === selectedCategory && "#FC1503", color: "white" }}
        >
          <span style={{marginRight: '2px'}}>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
