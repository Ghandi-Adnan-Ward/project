/* eslint-disable no-unused-vars */
import  { useState } from "react";
import './MusicUpload.css';

const MusicUpload = () => {
    const [audio, setAudio] = useState(null);
    const [audioURL, setAudioURL] = useState("");

    const handleAudioChange = (event) => {
        const selectedAudio = event.target.files[0];
        if (selectedAudio) {
          setAudio(selectedAudio);
          setAudioURL(URL.createObjectURL(selectedAudio)); // Generate a preview URL
        }
      };

  return (
    <form className="mar" >
        <h2 className="align">اختر مقطع صوتي ليتم تشغيله</h2>
        <input
        type="file"
        name="audio"
        accept="audio/mp3, audio/mpa, audio/m4a, audio/*"
        required
        onChange={handleAudioChange}
        multiple={false}
      />
      {audioURL && (
        <div className="padding">
        <audio  src={audioURL} controls autoPlay>
          </audio>
        </div>
      )}
    </form>
)
}

export default MusicUpload