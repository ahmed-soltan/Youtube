import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import PropTypes from "prop-types";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos , direction }) => {
  console.log(videos)
  return (
    <Box sx={{
      width: { xs: '100%', md: '100%' },
    }}>
          <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {videos && videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
    </Box>
  );
}
Videos.propTypes = {
  videos: PropTypes.array,
};

export default Videos;