
let titlebar = document.getElementById("titleBar");




let dropzone = document.getElementById("main-content");
let droplogo = document.getElementById("dropzone-logo");


//on drop
function convertImages(event) { //called from html main-content div's ondrop function attribute
    droplogo.classList.remove("dropzone-logo-raise");
    var length = event.dataTransfer.files.length;
    for (var i = 0; i < length; i++) {
        console.log("file" + i + ": " + event.dataTransfer.files[i].path);
        ipcRenderer.send("handleItem", event.dataTransfer.files[i].path);
        }
    }


dropzone.ondragover = (event) => {
    droplogo.classList.add("dropzone-logo-raise");
}
dropzone.ondragleave = (event) => {
    droplogo.classList.remove("dropzone-logo-raise");
}

document.ondragover = document.ondrop = (event) => {
    event.preventDefault()    
  }
  
//   document.body.ondrop = (event) => {
//     console.log(ev.dataTransfer.files[0].path)
//     event.preventDefault()
//   }
  









//onanimationend called on every end of animation in window,
//with name in event.

// window.onanimationend = function(event){
//     if(event.animationName === "nudge"){
//         addButton.classList.remove("addButtonNudge");
//         console.log(event);
//     }
//     if(event.animationName === "nod"){
//         addButton.classList.remove("addButtonNod");
//         console.log(event);
//     }
// };




// node/electron window.___ functions from preload.js
function toggleAlwaysOnTop(){
    window.toggleOnTop();
    pin = document.getElementById("pin");
    pin.classList.toggle("unpinned");
    
}

function minimize(){
    window.getFocusedWindow().minimize();
    titlebar.classList.remove("draggableThing"); //probably not necessary
    console.log("function minimize");

}
function maximize(){;
    if(window.getFocusedWindow().isMaximized()){ //if maximized, unmaximize
        window.getFocusedWindow().unmaximize(); //restore also seems to work
        console.log("function unmaximized");
    }
    else{ //if not maximized, maximize
        window.getFocusedWindow().maximize();
        titlebar.classList.add("draggableThing");
    }
}
function closeWindow(){
    window.getFocusedWindow().close();
}





//respond to messages from main //these could probably added to max/min functions above?
ipcRenderer.on("unmaximized", (event, message) =>{
    titlebar.classList.remove("draggableThing");
    console.log("ipc unmaximized");
});
ipcRenderer.on("maximized", (event, message) =>{
    titlebar.classList.add("draggableThing");
    console.log("ipc maximized");
});




// let holdingTitleBar = false;
// document.addEventListener("mousedown", function(event){
//     holdingTitleBar = true;
//     console.log("holding");
// });
// document.addEventListener("mouseup", function(event){
//     holdingTitleBar = false;
//     console.log("mouseup");
// });

// document.addEventListener("mousemove", function(event) {
//     console.log(holdingTitleBar);
//     if(holdingTitleBar){
//         titlebar.classList.remove("draggableThing");
//         console.log(titlebar.classList);
//     }
//   });