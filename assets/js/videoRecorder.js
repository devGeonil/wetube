const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;


const handleVideoData = (event) => {
  const {data:videoFile} = event;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(videoFile);
  link.download = "recorded.webm";
  document.body.appendChild(link);
  link.click();
}
const startRecording = () =>{
  videoRecorder = new MediaRecorder(streamObject);
  videoRecorder.start();
  videoRecorder.addEventListener("dataavailable", handleVideoData);
  recordBtn.addEventListener("click", stopRecording);
}

const stopRecording = () => {
  videoRecorder.stop();
  recordBtn.addEventListener("click", getVideo);
  recordBtn.removeEventListener("click", stopRecording);
  recordBtn.innerHTML = "Start recordign";
}

const getVideo = async () => {
  try{
    const stream = await navigator.mediaDevices.getUserMedia(
      {
        audio:true,
        //video:{height:720, width:1280}
      }
    )
    videoPreview.srcObject = stream;
    videoPreview.muted = true;
    videoPreview.play();
    recordBtn.innerHTML = "Stop recordign";
    streamObject = stream;
    startRecording();
  }catch(error){
    console.dir(error);
    recordBtn.innerHTML = "Can't record";
  }finally{
    recordBtn.removeEventListener("click", getVideo);
  }
}

function init(){
  recordBtn.addEventListener("click", getVideo);
  //recordBtn.onclick= getVideo;
}

if(recorderContainer){
  init();
}
