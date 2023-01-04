const video = document.querySelector("video")

async function setup(){
   await navigator.mediaDevices.getUserMedia({video:true})
   video.srcObject = stream 
}