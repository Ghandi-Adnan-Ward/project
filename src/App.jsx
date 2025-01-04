/* eslint-disable no-unused-vars */
import MediaUpload from '../ImageAndVideo'
import './App.css'
import AudioRecorder from './AudioRecorder'
import ImageUpload from './ImageUpload '
import MusicUpload from './MusicUpload'
import VideoUpload from './VideoUpload'

function App() {
   
  return (
    <div>
        {/* <ImageUpload />
        <VideoUpload />
        <MusicUpload /> */}

        <MediaUpload
        mediaType="image" 
        label="اختر صورة لرفعها" 
        accept="image/png, image/jpg, image/jpeg" 
      />
      <MediaUpload 
        mediaType="video" 
        label="اختر فيديو لرفعه" 
        accept="video/mp4, video/avi, video/mpeg" 
      />
      <MediaUpload
        mediaType="music" 
        label="اختر صوت لرفعها" 
        accept="audio/mp3, audio/mpa, audio/m4a, audio/*"
      />
        <AudioRecorder/>
    </div>
  )
}

export default App
