//RECORD GIFOS


var recorder;
var image = document.getElementsByClassName('recordedGifo')[0];
var image2 = document.getElementsByClassName('recordedGifo2')[0];
let video = document.querySelector("video");
let stream = null;

let form = new FormData();


async function getMedia() {
  
    try {
      stream = await navigator.mediaDevices.getUserMedia({video: true});
      
      if(stream){
        let tabCardTit = document.getElementsByClassName('tabCardTit')[1];
        tabCardTit.style.display = 'none';
        let tabCardDesc = document.getElementsByClassName('tabCardDesc')[1];
        tabCardDesc.style.display = 'none';
        video.style.display = 'block';
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
    image2.src = URL.createObjectURL(recorder.getBlob());

    form.append('file', recorder.getBlob(), 'myGif.gif');

    recorder.camera.stop();
    recorder.destroy();
    recorder = null;
}


document.getElementById('btn-start-recording').onclick = function() {

    let btnGrabar = document.getElementById('btn-start-recording');
    btnGrabar.style.display = 'none';
    let btnStop = document.getElementById('btn-stop-recording');
    btnStop.style.display = 'inline';

    captureCamera(function(camera) {
        recorder = RecordRTC(camera, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            onGifPreview: function(gifURL) {
                image.src = gifURL;
                image2.src = gifURL;
            }
        });

        recorder.startRecording();

        // release camera on stopRecording
        recorder.camera = camera;

        document.getElementById('btn-stop-recording').disabled = false;
    });
};


document.getElementById('btn-stop-recording').onclick = function() {

  
  let btnStop = document.getElementById('btn-stop-recording');
  btnStop.style.display = 'none';
  let btnSend = document.getElementById('btn-send');
  btnSend.style.display = 'inline';
  let btnBack= document.getElementById('btnBack');
  btnBack.style.display = 'inline';
  let columna= document.getElementById('columna');
  columna.style.display = 'inline';

  video.style.display = 'none';
  image.style.display = 'inline';

  recorder.stopRecording(stopRecordingCallback);
};



document.getElementById('btnBack').onclick = function() {
    
  let btnGrabar = document.getElementById('btn-start-recording');
    btnGrabar.style.display = 'inline';
  let btnSend = document.getElementById('btn-send');
  btnSend.style.display = 'none';
  let btnBack= document.getElementById('btnBack');
  btnBack.style.display = 'none';
  let columna= document.getElementById('columna');
  columna.style.display = 'none';

  video.style.display = 'inline';
  image.style.display = 'none';

};



function uploadGifo(){

  const apiKey3= 'f7Vi6MThkVsup5hqnFvUaOhAlxZ7RAtg';
  const uploadGifosReq = 'https://upload.giphy.com/v1/gifs?api_key='+apiKey3; 
 
  fetch(uploadGifosReq, {
    method: 'POST',
    body: form
  })
  .then(response => response.json())
  .then(result => {

    let urlGiphy = 'https://media3.giphy.com/media/'+result.data['id']+'/giphy.gif?cid=c0654d684obin35i33tj26i50xe0ho4gpxjao6ue4uwp07o7&rid=giphy.gif&ct=g';

    let gifoObj = {
      'gifo': urlGiphy
    }

    var gifoJson = JSON.parse(localStorage.getItem("uplGifos")) || [];
    gifoJson.push(gifoObj);
    localStorage.setItem("uplGifos", JSON.stringify(gifoJson));


    let url = fetch('https://media3.giphy.com/media/'+result.data['id']+'/giphy.gif?cid=c0654d684obin35i33tj26i50xe0ho4gpxjao6ue4uwp07o7&rid=giphy.gif&ct=g');
    url.then(response => response.blob())
    .then(result => { 
        const urlBlob = URL.createObjectURL(result);
        document.getElementsByClassName('downloadIcon')[0].href = urlBlob;
        document.getElementsByClassName('textarea')[0].setAttribute("value", urlGiphy);
    });

    

    


  }).catch(error => console.log('error', error)); 

};








var currentTab = 0; 
showTab(currentTab); 

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  fixStepIndicator(n)
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");
  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function validateForm() {
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < y.length; i++) {
    if (y[i].value == "") {
      y[i].className += " invalid";
      valid = false;
    }
  }
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}