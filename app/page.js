"use client";

import { useState } from "react";

import VideoList from "@/components/video-list";
import VideoPlayer from "@/components/video-player";

export default function Home() {
  const [currentURL, setCurrentURL] = useState(
    "https://www.youtube.com/embed/RhXmPfQ0U2k?si=99L9CYARLlja6Owf"
  );
  const [currentTitle, setCurrentTitle] = useState(
    "Beautiful places in the world"
  );

  const changeVideoHandler = (newUrl, newTitle) => {
    setCurrentURL(newUrl);
    setCurrentTitle(newTitle);
  };

  return (
    <div className="container">
      <h1 className="main-title">Welcome to my youtube clone</h1>
      <VideoPlayer videoURL={currentURL} videoTitle={currentTitle} />
      <VideoList videoAction={changeVideoHandler} />
    </div>
  );
}
