/*
 * Project: Zlecenia.io_client_PC.
 * Author: Levan Ostrowski
 * User: cod3venom
 * Date: 04.07.2021
 * Time: 22:16
 * Github: https://github.com/cod3venom
*/

const  {remote, ipcMain} = require('electron');

module.exports = class TopBar {

    constructor(mainWindow) {
        this.mainWindow = mainWindow;
        this.minWidth = 1600;
        this.minHeight = 1200;
        this.isMaximized = false;
    }


    async close(evt){
        this.mainWindow.close();
        this.mainWindow = null;
    }

    async maximize(evt){
        this.mainWindow.maximize();
    }

    async unmaximize(evt){
        this.mainWindow.unmaximize();
    }

    async minimize(evt){
        this.mainWindow.minimize();
    }

}


