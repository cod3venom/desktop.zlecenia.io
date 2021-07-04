/*
 * Project: Zlecenia.io_client_PC.
 * Author: Levan Ostrowski
 * User: cod3venom
 * Date: 03.07.2021
 * Time: 20:53
 * Github: https://github.com/cod3venom
*/
const Http = require('../http/http');
const {session, ipcRenderer} = require('electron');

module.exports = class SessionManager {

    static async isLogged(){
        const request_data = new URLSearchParams();
        request_data.append("is_logged", "");
        const response = await Http.post(process.env.APEX_GATE, request_data);

        if (response.hasOwnProperty("STATUS")){
            return response["STATUS"] === "TRUE";
        }

        return false;
    }
}



