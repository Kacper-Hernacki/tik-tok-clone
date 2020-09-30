import React, { useRef, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Video.css";
// import Video1 from "./video1.mp4";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video__player"
        loop
        src={url}
      ></video>
      <Header channel={channel} />
      <Footer channel={channel} description={description} song={song} />
      <Sidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;
