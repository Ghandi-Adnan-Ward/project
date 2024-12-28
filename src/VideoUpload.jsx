/* eslint-disable no-unused-vars */
import  { useState } from "react";
import './MusicUpload.css';

const VideoUpload = () => {
    const [video, setVideo] = useState(null);
    const [videoURL, setVideoURL] = useState("");
  
    const handleVideoChange = (event) => {
        const selectedVideo = event.target.files[0];
        if (selectedVideo) {
          setVideo(selectedVideo);
          setVideoURL(URL.createObjectURL(selectedVideo)); // Generate a preview URl
        }
      };

  return (
    <form className="mar" >
          <h2 className="align">اختر مقطع فيديو ليتم تشغيله</h2>
          <input
        type="file"
        name="video"
        accept="video/mp4, video/avi, video/mpeg"
        required
        onChange={handleVideoChange}
        multiple={false}
      />
      {videoURL && (
        <div className="padding">
        <video src={videoURL} controls autoPlay  alt='video'>
            
          </video>
        </div>
      )}
    </form>
)
}

export default VideoUpload