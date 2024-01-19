import { Box, Stack } from '@mui/material'
import React from 'react'

const ChannelHeader = () => {
  return (
<Box  sx={{
      boxShadow: 'none',
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'start',
      width: { xs: '100%', md: '90%' },
      margin: 'auto ',
      borderBottom: '1px solid #666' ,
      paddingBottom: '10px',
    }}>
<Stack direction="row" display="flex" flexWrap="wrap" >
         <button style={{cursor:"pointer" , backgroundColor:"transparent" , border:"none" , color:"#999" , margin:"0 10px" , fontSize:"22px"}}>Home</button>
         <button style={{cursor:"pointer" , backgroundColor:"transparent" , border:"none" , color:"#999" , margin:"0 10px" , fontSize:"22px"}}>Videos</button>
         <button style={{cursor:"pointer" , backgroundColor:"transparent" , border:"none" , color:"#999" , margin:"0 10px" , fontSize:"22px"}}>PlayLists</button>
         <button style={{cursor:"pointer" , backgroundColor:"transparent" , border:"none" , color:"#999" , margin:"0 10px" , fontSize:"22px"}}>Live</button>
         <button style={{cursor:"pointer" , backgroundColor:"transparent" , border:"none" , color:"#999" , margin:"0 10px" , fontSize:"22px"}}>Community</button>
    </Stack>
</Box>
  )
}

export default ChannelHeader