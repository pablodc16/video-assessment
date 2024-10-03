export default function VideoPlayer({ videoURL, videoTitle }) {
  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={videoURL}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h1>{videoTitle}</h1>
    </div>
  );
}
