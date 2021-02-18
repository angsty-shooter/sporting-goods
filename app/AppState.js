import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  currentBalance = 1100

  items = {
    artemis:{
      price: 500,
      quantity: 1
    },
    spear:{
      price: 200,
      quantity: 100
    },
    shield:{
      price: 300,
      quantity: 100
    },
    nike:{
      price: 1000,
      quantity: 1
    },
    chanclas:{
      price: 200,
      quantity: 2000
    },
    leafCrown:{
      price: 300,
      quantity: 100
    }
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
