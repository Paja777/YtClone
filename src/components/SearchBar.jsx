import { Paper, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [inputValue, setinputValue] = useState('');
  const navigate = useNavigate();
  return (
    <Paper
      component="form"
      onSubmit={() => {navigate(`/search/${inputValue}`)}}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
    <input
      className="search-bar"
      placeholder="Search..."
      value={inputValue}

      onChange={(e) => {setinputValue(e.target.value)}}
    />
    <IconButton>
        <SearchIcon />
    </IconButton>
      
    </Paper>
  );
};

export default SearchBar;
