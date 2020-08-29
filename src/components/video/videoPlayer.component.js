import React from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends React.Component {
    render() {
        return (
            <ReactPlayer playing url='welcome.mp4'
                height='80vh'
                width='75vw'
                controls='true'
            />
        )
    }
}

export default VideoPlayer;