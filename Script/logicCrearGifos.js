
function comenzar() {
    document.getElementById("display").setAttribute("class", "display");
    document.getElementById("video").setAttribute("class", "displayVideo1");
          
}
function cancelar() {
    document.getElementById("display").setAttribute("class", "display");
              
}


navigator.mediaDevices.getUserMedia({audio:false, video:true}).then ((stream)=>{
   console.log(stream)

let video = document.getElementById("videos")

video.srcObject = stream

video.onloadeddata = (ev) => VideoTrackList.play()

}).catch((err)=>console.log(err))




