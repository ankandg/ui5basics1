sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.aenox.fiori.allui5models.controller.Sales", {
        onInit() {

            let jsonData = new sap.ui.model.json.JSONModel("./model/sales_data.json");
           
             this.getView().setModel(jsonData,"s");


        }
    });
});