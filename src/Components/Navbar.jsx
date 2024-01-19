import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { logo } from "../Utils/Constants";
import SearchBar from "./SearchBar.jsx";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#000",
        justifyContent: "space-between",
      }}
    >

        <NavLink to='/' style={{display:"flex" , alignItems:"center"}}>
            <img src={logo}  alt="logo" height={45} />
            <Typography variant="h4" sx={{color:"#fff" }} ml={2} className="logo" fontWeight="bold">
              Youtube
            </Typography>
        </NavLink>
        <SearchBar/>
    </Stack>
  );
};

export default Navbar;
