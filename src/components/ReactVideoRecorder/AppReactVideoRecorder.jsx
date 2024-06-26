import VideoRecorder from 'react-video-recorder'

const AppReactVideoRecorder = () => {
  
  return (
    <>
      <h1>React Video Recorder lib</h1>
      <div className="container">
      <VideoRecorder
        chunkSize={250}
        constraints={{
          audio: true,
          video: true
        }}
        countdownTime={3000}
        dataAvailableTimeout={500}
        isFlipped
        mimeType={undefined}
        onError={function noRefCheck(){}}
        onOpenVideoInput={function noRefCheck(){}}
        onRecordingComplete={function noRefCheck(){}}
        onStartRecording={function noRefCheck(){}}
        onStopRecording={function noRefCheck(){}}
        onStopReplaying={function noRefCheck(){}}
        onTurnOffCamera={function noRefCheck(){}}
        onTurnOnCamera={function noRefCheck(){}}
        renderActions={function noRefCheck(){}}
        renderDisconnectedView={function noRefCheck(){}}
        renderErrorView={function noRefCheck(){}}
        renderLoadingView={function noRefCheck(){}}
        renderUnsupportedView={function noRefCheck(){}}
        renderVideoInputView={function noRefCheck(){}}
        t={function noRefCheck(){}}
        timeLimit={undefined}
      />
      </div>
    </>
  );
};
export default AppReactVideoRecorder;



