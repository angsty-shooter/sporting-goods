import { ProxyState } from "../AppState.js";


class SportingService{

buy(key){
    console.log("hello from services");
    if (ProxyState.currentBalance >= ProxyState.items[key].price && ProxyState.items[key].quantity > 0){
        ProxyState.currentBalance -= ProxyState.items[key].price
        --ProxyState.items[key].quantity
        console.log(ProxyState.items[key].quantity)
    }
}
}
export const sportingService = new SportingService