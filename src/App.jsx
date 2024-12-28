import './App.css'
import AudioRecorder from './AudioRecorder'
import ImageUpload from './ImageUpload '
import MusicUpload from './MusicUpload'
import VideoUpload from './VideoUpload'

function App() {
   
  return (
    <div>
        <ImageUpload />
        <VideoUpload />
        <MusicUpload />
        <AudioRecorder/>
    </div>
  )
}

export default App
