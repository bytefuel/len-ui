import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useEffect } from "react";
import { ColorModeContext, tokens } from "../../theme";
// import InputBase from '@mui/material/InputBase';/
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";

 const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // Set the background color of the entire screen based on the color mode
  const backgroundColor = colorMode === "dark" ? colors.primary[900] : theme.palette.background.default;

  // useEffect to set the initial background color based on the initial color mode
  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    return () => {
      document.body.style.backgroundColor = ''; // Reset background color when component unmounts
    };
  }, [backgroundColor]);

  return (
    <Box 
    display="flex" 
    justifyContent="space-between" 
    p={2} 
    bgcolor={backgroundColor}
    sx={{
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)", // Adjust values as needed
      
    }}
    
    >
  
      {/* SEARCH BAR */}
      {/* <Box display="flex" borderRadius="3px">
        <InputBase 
        sx={{ ml:35, flex: 1 }}  
        placeholder="Search" />
        <IconButton type="button" sx={{ p:1}}>
          <SearchIcon />
        </IconButton>
      </Box> */}



      {/* ICONS */}
      <Box 
      display="flex"
      justifyContent='flex-end'
      marginLeft="85%"
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {colorMode === "dark" ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};


export default Topbar;