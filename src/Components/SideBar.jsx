import { Stack, Box, Typography } from "@mui/material";
import { categories } from "../Utils/Constants";

const SideBar = ({selectedCategory , setSelectedCategory}) => {

  return (
    <Stack
      direction="row"
      sx={{
        height: { sx: "auto", md: "92%" },
        overflowY: "auto",
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => (
        <button key={item.name} className="category-btn" style={{backgroundColor:item.name===selectedCategory && "#FC1503",color:"#fff"}} onClick={()=>setSelectedCategory(item.name)}>
          <span style={{color:item.name===selectedCategory ? "#fff" : "#FC1503"}}>{item.icon}</span>
          <span style={{margin:"0 15px" , opacity:item.name===selectedCategory ? 1 : 0.8 , fontSize:"16px"}}>{item.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
