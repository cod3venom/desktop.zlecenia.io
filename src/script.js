/*
 * Project: Zlecenia.io_client_PC.
 * Author: Levan Ostrowski
 * User: cod3venom
 * Date: 03.07.2021
 * Time: 18:03
 * Github: https://github.com/cod3venom
*/

const {remote, ipcRenderer} = require('electron');

class TopBar
{
    remoteWindow;
    closeBtn;
    maximizeBtn;
    minimizeBtn;
    isMaximized = false;



    setRemoteWindow(remoteWindow) { this.remoteWindow = remoteWindow; }
    getRemoteWindow() { return this.remoteWindow; }


    setCloseBtn(closeBtn) { this.closeBtn = closeBtn; }
    getCloseBtn(closeBtn) { return this.closeBtn; }

    setMaximizeBtn(maximizeBtn) { this.maximizeBtn = maximizeBtn; }
    getMaximizeBtn() { return this.maximizeBtn; }

    setMinimizeBtn(minimizeBtn) { this.minimizeBtn = minimizeBtn; }
    getMinimizeBtn() { return this.minimizeBtn; }

    hookControls(){
        if (this.closeBtn instanceof Element && this.maximizeBtn instanceof Element && this.minimizeBtn instanceof Element){
            const self = this;
            this.closeBtn.addEventListener('click', async function (evt) { await self.close(evt); })
            this.maximizeBtn.addEventListener('click', async function (evt) { await self.maximize(evt); })
            this.minimizeBtn.addEventListener('click', async function (evt) { await self.minimize(evt); })
        }
    }
    async close(evt){
        ipcRenderer.send("close__window");
    }

    async maximize(evt){
        if (!this.isMaximized)
        {
            ipcRenderer.send("maximize__window");
            this.isMaximized = true;
            return evt;
        }
        if (this.isMaximized)
        {
            ipcRenderer.send("unmaximize__window");
            this.isMaximized = false;
        }
    }

    async minimize(evt){
        ipcRenderer.send("minimize__window");
    }


}



const topbar = new TopBar();
topbar.setRemoteWindow(remote);
topbar.setCloseBtn(document.getElementById("window__close__btn"));
topbar.setMaximizeBtn(document.getElementById("window__maximize__btn"));
topbar.setMinimizeBtn(document.getElementById("window__minimize__btn"));
topbar.hookControls();
