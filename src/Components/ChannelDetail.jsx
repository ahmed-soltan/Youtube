import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../Utils/FetchFromApi";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import ChannelHeader from "./ChannelHeader";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();
  // console.log(channelDetail);
  // console.log(videos);

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data);
      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideos(videosData);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box
        style={{
          zIndex: 10,
          background:
            " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(7,6,94,1) 0%, rgba(9,107,121,1) 0%, rgba(55,59,164,1) 30%, rgba(0,212,255,1) 100%)",
          height:"300px"  
        }}
      >
      </Box>
      <Box>
        <ChannelCard channelDetail={channelDetail&&channelDetail[0] } length={videos && videos.length}/>

      </Box>
      <Box>
        <ChannelHeader />

      </Box>
      <Box display="flex" pl={1} >
          <Box my={3} sx={{ mr: { sm: '100px' } }}>
              <Videos videos={videos}></Videos>
          </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
