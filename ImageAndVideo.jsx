/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";

const MediaUpload = ({ mediaType, label, accept, preview = true }) => {
  const [media, setMedia] = useState(null);
  const [mediaURL, setMediaURL] = useState("");

  const handleMediaChange = (event) => {
    const selectedMedia = event.target.files[0];
    if (selectedMedia) {
      setMedia(selectedMedia);
      setMediaURL(URL.createObjectURL(selectedMedia)); // Generate a preview URL
    }
  };

  return (
    <form className="mar">
      <h2 className="align">{label}</h2>
      <input
        className="align"
        type="file"
        name={mediaType}
        accept={accept}
        required
        onChange={handleMediaChange}
        multiple={false}
      />
      {preview && mediaURL && (
        <div className="padding">
          {mediaType === "image" && <img src={mediaURL} alt="Preview" />}
          {mediaType === "video" && <video src={mediaURL} controls autoPlay />}
          {mediaType === "music" && <audio src={mediaURL} controls autoPlay></audio>}
        </div>
      )}
    </form>
  );
};

export default MediaUpload;
