// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const {ipcMain} = require("electron")

const fs = require("fs")
const sharp = require("sharp")
//***** To install module, in root folder right click and run git bash/cmd and npm install [module name],
//***** then run ./node_modules/.bin/electron-rebuild--------------------------------------------------------B


ipcMain.on("stickyNotif", (event, arg) => {
  mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop());
})

ipcMain.on("handleItem", (event, filename) => {
  console.log(filename);
  sharp(filename).toFile(filename.split(".").slice(0,-1).join("")  + "_ImageConverter.png", function(err){
    //handle errors like who does that though, interns feel free to take care of this
  });
})

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  //Menu.setApplicationMenu(null);
  mainWindow = new BrowserWindow({
    width: 600,
    minWidth: 250,
    height: 250,
    minHeight: 200,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    frame: false,
  })


  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  mainWindow.setAlwaysOnTop(true);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.on("unmaximize", function(){
    mainWindow.webContents.send("unmaximized", "window was minimized");
  })
  mainWindow.on("maximize", function(){
    mainWindow.webContents.send("maximized", "window was maximized");
  })


}



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
