/* eslint-disable no-unused-vars */
import './App.css'
// import Permissions from './components/Permissions'
import AppMediaRecorder from './components/MediaRecorder/AppMediaRecorder';
// import AppReactVideoRecorder from './components/ReactVideoRecorder/AppReactVideoRecorder';
import ReactWebCam from './components/ReactWebcam';

const App = () => {
    
    return (
        <>
        <AppMediaRecorder/>
        <ReactWebCam/>
        {/* <AppReactVideoRecorder/> */}
        </>
    );
};
export default App;

    // return (
    //   <div>
    //     <h1>Hello</h1>
    //     <Permissions/>
    //   </div>
    // )