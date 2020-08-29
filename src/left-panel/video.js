import React from "react";
import { Box } from "@material-ui/core";
import VideoPlayer from "../components/video/videoPlayer.component.js";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    player: {
        background: 'black',
    }
});

const Video = ({ link }) => {
    const classes = useStyles();
  return (
    <Box>
      <VideoPlayer link={link} className={classes.player} />
    </Box>
  );
};

export default Video;
