import React from "react";
import "./App.css";
import VideoPlayer from "./left-panel/video.js";
import { makeStyles } from "@material-ui/core/styles";
import ItemList from './right-panel/item-list'

const styles = makeStyles({
  App: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    minHeight: '100vh'
  },
});


function App() {
  const classes = styles();
  return (
    <div className={classes.App}>
      <VideoPlayer link="series/welcome.mp4" />
      <ItemList />
    </div>
  );
}

export default App;
