import { Box, Grid } from "@mui/material";
import VideoCard from "./VideoCard";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  return (
    <Box>
      <Grid container spacing={4}>
        {videos &&
          videos.map((item, idx) => (
            <Grid item key={idx} xs={12} sm={12} md={6} lg={3}>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

Videos.propTypes = {
  videos: PropTypes.array,
};

export default Videos;
