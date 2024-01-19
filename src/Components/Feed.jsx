// import { useState , useEffect } from "react"
import { Stack , Box , Typography } from "@mui/material"
import SideBar from "./SideBar"
import Videos from "./Videos"
import { fetchFromAPI } from "../Utils/FetchFromApi"
import { useEffect, useState } from "react"
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
          setVideos(data);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, [selectedCategory]);
  return (
    <Stack sx={{flexDirection:{sx:"column" , md:"row"}}}>
        <Box sx={{height:{sx:"auto" , md:"92vh"} , borderRight:"1px solid #3d3d3d" , p:{sx:0 , md:2}}}>
            <SideBar 
               selectedCategory={selectedCategory} 
               setSelectedCategory={setSelectedCategory}
            />
            <Typography sx={{color:"#fff"  , display:"flex" , alignItems:"center" , justifyContent:"center"}} variant="body2">
            CopyRight @2023 Ahmed Sultan
            </Typography>
        </Box>
        <Box p={2} sx={{overflowY:"auto" , height:"90vh" , flex:2}}>
          <Typography variant="h4" fontWeight="bold" mb={3} sx={{color:"#fff"}}>
            {selectedCategory}
            <span style={{color:"#f31503"}}> Videos</span>
          </Typography>
          <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Feed