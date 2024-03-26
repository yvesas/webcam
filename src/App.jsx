/* eslint-disable no-unused-vars */
import './App.css'
import { useState, useRef } from "react";
// import Permissions from './components/Permissions'
// import WebcamStreamCapture from './components/WebcamStreamCapture.jsx'
import VideoRecorder from "./components/VideoRecorder";
import AudioRecorder from "./components/AudioRecorder";

const App = () => {
    let [recordOption, setRecordOption] = useState("video");
    const toggleRecordOption = (type) => {
        return () => {
            setRecordOption(type);
        };
    };
    return (
        <div>
            <h1>React Media Recorder</h1>
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
export default App;

    // return (
    //   <div>
    //     <h1>Hello</h1>
    //     <Permissions/>
    //     {/* <WebcamStreamCapture/> */}
    //   </div>
    // )