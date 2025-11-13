sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("aiui5.controller.View1", {
        onInit() {
            // The JSON model is already loaded via manifest.json
        },

        onItemPress: function(oEvent) {
            const oItem = oEvent.getSource();
            const oContext = oItem.getBindingContext();
            const sSalesOrderID = oContext.getProperty("SalesOrderID");

            // Navigate to the detail view
            this.getOwnerComponent().getRouter().navTo("object", {
                SalesOrderID: sSalesOrderID
            });
        }
    });
});
