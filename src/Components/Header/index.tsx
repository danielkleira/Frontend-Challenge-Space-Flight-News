import * as React from "react";
import { useState, useContext } from "react";
import { ArticleContext } from "../../Providers/Articles";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useNavigate } from "react-router-dom";

export default function Header() {
  const { setSort, listArticlesTitle, sorter } = useContext(ArticleContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {
    listArticlesTitle(inputValue);
    navigate(`/${inputValue}`);
  };

  const handleChange2 = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#302E53" }}>
        <Toolbar sx={{ alignSelf: "flex-end", backgroundColor: "#302E53" }}>
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              sx={{ color: "white" }}
            >
              Search
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
              sx={{ color: "white" }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => handleChange()}
                  ><SearchIcon sx={{ color: "white" }} /></IconButton>
                </InputAdornment>
              }
              label="Search"
            />
          </FormControl>

          <FormControl
            sx={{
              m: 1,
              minWidth: 90,
            }}
          >
            <InputLabel
              id="demo-simple-select-autowidth-label"
              sx={{ color: "white" }}
            >
              Sort
            </InputLabel>
            <Select
              sx={{ color: "white" }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={sorter}
              onChange={handleChange2}
              autoWidth
              label="Sort"
              data-testId="select"
            >
              <MenuItem data-testId="oldest" value={"oldest"}>
                Mais antigas
              </MenuItem>
              <MenuItem data-testId="newest" value={"newest"}>
                Mais novas
              </MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
