import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = ({ link }) => {
        return (
            <ReactPlayer playing url={link}
                height='80vh'
                width='75vw'
                controls='true'
            />
        )   
}

export default VideoPlayer;