/*
 * Project: Zlecenia.io_client_PC.
 * Author: Levan Ostrowski
 * User: cod3venom
 * Date: 03.07.2021
 * Time: 21:02
 * Github: https://github.com/cod3venom
*/

const axios = require('axios')

module.exports = class Http
{


    static get()
    {

    }

    static async post(address, data)
    {
         return axios.post(address, data)
            .then((response) => {
                return response.data;
            }, (error) => {
                console.log(error);
            });
    }

}
class ReqType {
    static POST = "POST";
    static GET = "GET";
}

