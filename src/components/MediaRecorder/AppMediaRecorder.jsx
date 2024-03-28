import './index.css'
import { useState } from "react";
import VideoRecorder from './VideoRecorder';
import AudioRecorder from './AudioRecorder';

const AppMediaRecorder = () => {
  let [recordOption, setRecordOption] = useState("video");
  const toggleRecordOption = (type) => {
      return () => {
          setRecordOption(type);
      };
  };
  return (
      <div>
          <h1>Media Recorder - classic</h1>
          <div className="button-flex">
              <button onClick={toggleRecordOption("video")}>
                Record Video
              </button>
              <button onClick={toggleRecordOption("audio")}>
                Record Audio
              </button>
          </div>
          <div>
              {recordOption === "video" ? <VideoRecorder /> : <AudioRecorder />}
          </div>
      </div>
  );
};
export default AppMediaRecorder;