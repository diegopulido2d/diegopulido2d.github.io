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
            hidden: 240,
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

    let gifoObj = {
      'gifo': 'https://media3.giphy.com/media/'+result.data['id']+'/giphy.gif?cid=c0654d684obin35i33tj26i50xe0ho4gpxjao6ue4uwp07o7&rid=giphy.gif&ct=g'
    }


    var gifoJson = JSON.parse(localStorage.getItem("uplGifos")) || [];
    gifoJson.push(gifoObj);
    localStorage.setItem("uplGifos", JSON.stringify(gifoJson));
    


  }).catch(error => console.log('error', error)); 

};








var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}