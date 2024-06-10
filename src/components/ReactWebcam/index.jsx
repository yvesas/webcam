// import { useRef, useEffect, useState } from "react"
import Webcam from "react-webcam";

const ReactWebCam = () => {
  // const reactionVideoRef = useRef<HTMLVideoElement | null>(null);
  // const webcamRef = useRef<Webcam | null>(null);
  
  return (
    <>
      <h1>React WebCam Lib</h1>
      <div className="container">
        <Webcam />
      </div>
    </>
  );
};
export default ReactWebCam;