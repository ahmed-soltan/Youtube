import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoProfilePicture } from '../Utils/Constants';
const ChannelCard = ({channelDetail , length}) => {
  return (
    <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'start',
      width: { xs: '100%', md: '90%' },
      height: '100%',
      margin: '40px 0',
      flexWrap:"wrap"
    }}
  >

      <CardContent sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', textAlign: 'start', flexWrap:"wrap", color: '#fff' }}>
        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '160px', width: '160px', mb: 2 , border: '1px solid #e3e3e3' }}
        />
       <Box>
       <Typography variant="h5" ml={{xs:0 , md:3}}>
          { channelDetail?.snippet?.title}{' '}
          
          <CheckCircleIcon sx={{ fontSize: '25px', color: 'gray', ml: '5px' }} />
        </Typography>
       <Typography variant="p" display="block" ml={{xs:0 , md:3}} mt={1} mb={1} color="#999">
        {channelDetail?.snippet?.customUrl}{'  '}{'  '}{'  '}{'  '}
        {length} Videos
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography ml={{xs:0 , md:3}} mt={1} mb={1}  sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
       <Typography variant="p" display="block" ml={{xs:0 , md:3}} color="#999" sx={{width:{xs:"90%" , md:"800px"}}}>
          { channelDetail?.snippet?.description}{' '}
        </Typography>
       </Box>
      </CardContent>
    <button style={{border:"0" , fontSize:"20px" , cursor:"pointer" , padding:"10px" , borderRadius:"20px" , backgroundColor:"#fff" , color:"#000"}}>
      Subscribe
    </button>
  </Box>
);
  
}

export default ChannelCard