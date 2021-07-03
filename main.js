// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')


class Main{

  async  createWindow(){
    const mainWindow = new BrowserWindow({
      frame:false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
    mainWindow.setMenu(null)
    mainWindow.maximize();
    await mainWindow.loadFile('index.html')
    mainWindow.webContents.openDevTools();
  }
}


app.on("ready", new Main().createWindow);

