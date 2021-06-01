
const constraints = { video: true }

const recorder = RecordRTC(stream, {
  // audio, video, canvas, gif
 type: 'video',

 // audio/webm
 // audio/webm;codecs=pcm
 // video/mp4
 // video/webm;codecs=vp9
 // video/webm;codecs=vp8
 // video/webm;codecs=h264
 // video/x-matroska;codecs=avc1
 // video/mpeg -- NOT supported by any browser, yet
 // audio/wav
 // audio/ogg  -- ONLY Firefox
 // demo: simple-demos/isTypeSupported.html
 mimeType: 'video/webm',

 // MediaStreamRecorder, StereoAudioRecorder, WebAssemblyRecorder
 // CanvasRecorder, GifRecorder, WhammyRecorder
 recorderType: MediaStreamRecorder,

 // disable logs
 disableLogs: true,

 // get intervals based blobs
 // value in milliseconds
 timeSlice: 1000,

 // requires timeSlice above
 // returns blob via callback function
 ondataavailable: function(blob) {},

 // auto stop recording if camera stops
 checkForInactiveTracks: false,

 // requires timeSlice above
 onTimeStamp: function(timestamp) {},

 // both for audio and video tracks
 bitsPerSecond: 128000,

 // only for audio track
 // ignored when codecs=pcm
 audioBitsPerSecond: 128000,

 // only for video track
 videoBitsPerSecond: 128000,

 // used by CanvasRecorder and WhammyRecorder
 // it is kind of a "frameRate"
 frameInterval: 90,


 // used by CanvasRecorder and WhammyRecorder
 // you can pass {width:640, height: 480} as well
 video: HTMLVideoElement,

 // used by CanvasRecorder and WhammyRecorder
 canvas: {
     width: 600,
     height: 300
 },

 // used by StereoAudioRecorder
 // the range 22050 to 96000.
 sampleRate: 96000,

 // used by StereoAudioRecorder
 // the range 22050 to 96000.
 // let us force 16khz recording:
 desiredSampRate: 16000,

 // used by StereoAudioRecorder
 // Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
 bufferSize: 16384,

 // used by StereoAudioRecorder
 // 1 or 2
 numberOfAudioChannels: 2,

 // used by WebAssemblyRecorder
 frameRate: 30,

 // used by WebAssemblyRecorder
 bitrate: 128000,

 // used by MultiStreamRecorder - to access HTMLCanvasElement
 elementClass: 'multi-streams-mixer'
});


async function getMedia(constraints) {
    let stream = null;
    let video = document.querySelector("video");
  
    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      
      if(stream){
        let tabCardTit = document.getElementsByClassName('tabCardTit')[1];
        tabCardTit.style.display = 'none';
        let tabCardDesc = document.getElementsByClassName('tabCardDesc')[1];
        tabCardDesc.style.display = 'none';
        let videoRec = document.getElementsByTagName('video')[0];
        videoRec.style.display = 'block';
        video.srcObject = stream;
      }
      //


    } catch(err) {
      /* handle the error */
    }
  }