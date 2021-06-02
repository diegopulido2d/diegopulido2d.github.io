var recorder;
var image = document.getElementById('recordedGifo');


async function getMedia() {
    let stream = null;
    let video = document.querySelector("video");
  
    try {
      stream = await navigator.mediaDevices.getUserMedia({video: true});
      
      if(stream){
        let tabCardTit = document.getElementsByClassName('tabCardTit')[1];
        tabCardTit.style.display = 'none';
        let tabCardDesc = document.getElementsByClassName('tabCardDesc')[1];
        tabCardDesc.style.display = 'none';
        let videoRec = document.getElementsByTagName('video')[0];
        videoRec.style.display = 'block';
        video.srcObject = stream;
      }

    } catch(err) {
    }
} 


function captureCamera(callback) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(camera) {
        callback(camera);
    }).catch(function(error) {
        alert('Unable to capture your camera. Please check console logs.');
        console.error(error);
    });
}

function stopRecordingCallback() {
    image.src = URL.createObjectURL(recorder.getBlob());
    recorder.camera.stop();
    recorder.destroy();
    recorder = null;
}


document.getElementById('btn-start-recording').onclick = function() {
    this.disabled = true;
    captureCamera(function(camera) {
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifPreview: function(gifURL) {
                image.src = gifURL;
            }
        });

        recorder.startRecording();

        // release camera on stopRecording
        recorder.camera = camera;

        document.getElementById('btn-stop-recording').disabled = false;
    });
};

document.getElementById('btn-stop-recording').onclick = function() {
    this.disabled = true;
    recorder.stopRecording(stopRecordingCallback);
};