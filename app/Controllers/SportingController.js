import { sportingService } from "../Services/SportingService.js";
import { ProxyState } from "../AppState.js";

function _draw(){
    document.getElementById("balance").innerHTML = `$${ProxyState.currentBalance}`
}
export default class SportingController{
    constructor(){
        ProxyState.on("currentBalance", _draw)
        _draw()
    }

    buy(key){
        sportingService.buy(key)
        console.log("hello from controller");
    }
}