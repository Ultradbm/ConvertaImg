// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

const { ipcRenderer } = require('electron');
const {BrowserWindow} = require('electron').remote;

window.getFocusedWindow = () => {
  return BrowserWindow.getFocusedWindow();
}
window.getCurrentWindow = () =>{
  return BrowserWindow.getCurrentWindow();
}

window.toggleOnTop = () => {
  ipcRenderer.send('stickyNotif')
}

window.ipcRenderer = require('electron').ipcRenderer;




window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  } 
  
  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})

//to reset zoom------------------------------------------------------
//or show menu and click on actual size seems best way
//or set zoom to 1 in preferences or delete that part
// process.once('loaded', () => {
//   global.electron = require('electron')
//   electron.webFrame.setZoomFactor(1)
// })
