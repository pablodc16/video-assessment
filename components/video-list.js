const videosInfo = [
    { url: 'https://www.youtube.com/embed/RhXmPfQ0U2k?si=99L9CYARLlja6Owf', title: 'Beautiful places in the world' },
    { url: 'https://www.youtube.com/embed/zvUdwRvVirk?si=RNR_9Vq0qCg7aYi2', title: 'Switzerland 4K' },
    { url: 'https://www.youtube.com/embed/3YTohytF9oE?si=WLl7HPBKVPUOkO_H', title: '6 hours Fantastic Views of the Earth 4K' },
    { url: 'https://www.youtube.com/embed/KJwYBJMSbPI?si=rRd4S9RkI3yQCTvQ', title: 'EARTH 4K' },
]

export default function VideoList({ videoAction }) {
    return(
        <div className="video-list">
            <h1>Video List</h1>
            <ul>
                {videosInfo.map((video, index) => (
                    <li key={index}>
                        <button onClick={() => videoAction(video.url, video.title)}>{video.title}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
