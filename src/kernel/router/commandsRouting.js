/*
 * Project: Zlecenia.io_client_PC.
 * Author: Levan Ostrowski
 * User: cod3venom
 * Date: 04.07.2021
 * Time: 22:23
 * Github: https://github.com/cod3venom
*/
const {app, BrowserWindow, ipcMain} = require('electron');
const TopBar = require("../window/topbar/TopBar");

module.exports =  class CommandsRouter {

    constructor(mainWindow) {
        this.mainWindow = mainWindow;
        this.topbar = new TopBar(this.mainWindow);
    }


    installRouting(){
        this.mainWindow.on('app-command', async (evt, cmd)=>{
           if (cmd === 'browser-backward' || cmd === 'browser-forward'){
               evt.preventDefault();
               console.log(evt);
               return;
           }
        });
        ipcMain.on("close__window", async(evt, data)=>{
            await this.topbar.close(evt);
        });
        ipcMain.on("maximize__window", async(evt, data)=>{
           await this.topbar.maximize(evt);
        });
        ipcMain.on("minimize__window", async(evt, data)=>{
            await this.topbar.minimize(evt);
        });
        ipcMain.on("unmaximize__window", async(evt, data)=>{
            await this.topbar.unmaximize(evt);
        })
    }
}


