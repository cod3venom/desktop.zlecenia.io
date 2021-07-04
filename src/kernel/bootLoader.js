/*
 * Project: Zlecenia.io_client_PC.
 * Author: Levan Ostrowski
 * User: cod3venom
 * Date: 04.07.2021
 * Time: 22:26
 * Github: https://github.com/cod3venom
*/

const {electron, app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');
const CommandsRouter = require('./router/commandsRouting');
module.exports = class BootLoader {
    mainWindow;
    constructor() {

    }

    run(){
        this.mainWindow = new BrowserWindow({
            frame:false,
            transparent: true,
            minWidth:1600,
            minHeight:1300,
            width:1700,
            height:1300,
            resizable:true,
            hasShadow:true,
            closable:false,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false,
                enableRemoteModule: true,
                preload: path.join(__dirname, '../../preload.js'),

            }
        });

        this.mainWindow.maximize();
        this.mainWindow.setMenu(null)
        this.mainWindow.loadFile('index.html').then();
        const router = new CommandsRouter(this.mainWindow);
        router.installRouting();

        this.mainWindow.webContents.openDevTools();
    }

}


