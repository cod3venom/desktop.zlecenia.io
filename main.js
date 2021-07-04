// Modules to control application life and create native browser window
require('dotenv').config()
const {app} = require('electron')
const BootLoader = require('./src/kernel/bootLoader')


class Main{

  __cmain = () =>{
    new BootLoader().run();
  }

}

const main = new Main();
app.on("ready", main.__cmain);

