/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import './AudioRecorder.css';
import './ReactMicStyles.css';

const AudioRecorder = () => {
  const [record, setRecord] = useState(false);
  const [audioData, setAudioData] = useState(null);
  // const [fileName, setFileName] = useState('جديد'); // 

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    setAudioData(recordedBlob);
  };

  // const downloadAudio = () => {
  //   if (audioData) {
  //     const blob = new Blob([audioData.blob], { type: audioData.mimeType });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement('a');
  //     a.href = url;
  //     a.download = `${fileName }.mp3`; 
  //     a.click();
  //     URL.revokeObjectURL(url); 
  //     }
  // };

  return (
    <div>
      <h1>تسجيل الصوت</h1>
      <ReactMic
  record={record}
  className="sound-wave"
  onStop={onStop}
  onData={onData}
  strokeColor="#007BFF" /* لون الموجة */
  backgroundColor="#f4f4f9" /* لون الخلفية */
  mimeType="mp3" /* نوع الملف المسجل */
  visualSetting="sinewave" /* شكل الموجة الصوتية */
  echoCancellation={true} /* تقليل الضوضاء */
  autoGainControl={true} /* ضبط تلقائي للصوت */
  noiseSuppression={true} /* تقليل الضجيج */
  channelCount={1} /* عدد القنوات الصوتية */
  bitRate={128000} /* معدل البيانات */
  sampleRate={44100} /* معدل العينات */
  timeSlice={100} /* تحديث الموجة الصوتية كل 100 مللي ثانية */
  bufferSize={4096} /* حجم المخزن المؤقت */
  crossOrigin="anonymous" /* إعدادات المصدر عبر النطاقات */
 />

      <div>
        <button onClick={startRecording} type="button">بدء التسجيل</button>
        <button onClick={stopRecording} type="button">إيقاف التسجيل</button>
      </div>
      {audioData && (
        <>
          <audio controls src={audioData.blobURL} controlsList="nodownload"></audio>
          {/* <div>
            <label>
              اسم الملف:
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="أدخل اسم الملف"
              />
            </label>
          </div> 
           <button onClick={downloadAudio} type="button">تحميل الملف</button> */}

        </>
      )}
    </div>
  );
};

export default AudioRecorder;
