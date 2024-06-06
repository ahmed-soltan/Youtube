import React from "react";
import { NavLink } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import {
  demoThumbnailUrl,
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../Utils/Constants";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        height: "280px",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      <NavLink to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY` }>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ height: "180px", width: "100%", borderRadius: "10px" }}
        />
        <CardContent>
          <NavLink to={videoId ? `/video/${videoId}` : demoVideoUrl }>
            <Typography
              variant="p"
              sx={{ color: "#fff", display: "block" }}
              fontWeight="bold"
            >
              {snippet?.title.substr(0, 50)|| demoVideoTitle.substr(0, 50)}
            </Typography>
          </NavLink>
          <NavLink sx={{color:"#fff"}} to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="p" mr={1} sx={{ color: "#999" }}>
              {snippet?.channelTitle.substr(0, 30) || demoChannelTitle}
              <CheckCircleIcon sx={{ fontSize: '15px', color: 'gray', ml: '5px' }} />

            </Typography>
          </NavLink>
        </CardContent>
      </NavLink>
    </Card>
  );
};

export default VideoCard;
