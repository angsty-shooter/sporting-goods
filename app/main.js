import ValuesController from "./Controllers/ValuesController.js";
import SportingController from "./Controllers/SportingController.js";

class App {
  //valuesController = new ValuesController();
  sportingController = new SportingController()
}

window["app"] = new App();
