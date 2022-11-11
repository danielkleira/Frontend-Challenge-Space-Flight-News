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
import Select from "@mui/material/Select";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  const { setSort, listArticlesTitle } = useContext(ArticleContext);
  const [inputValue, setInputValue] = useState("");

  const handleChange = () => {
    listArticlesTitle(inputValue);
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
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => handleChange()}>
                    <SearchIcon />
                  </IconButton>
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
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={""}
              autoWidth
              label="Sort"
            >
              <MenuItem onClick={() => setSort("oldest")}>
                Mais antigas
              </MenuItem>
              <MenuItem onClick={() => setSort("newest")}>Mais novas</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
