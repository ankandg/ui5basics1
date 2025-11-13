sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History"
], (Controller, History) => {
    "use strict";

    return Controller.extend("aiui5.controller.View2", {
        onInit() {
            const oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("object").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function(oEvent) {
            const sSalesOrderID = oEvent.getParameter("arguments").SalesOrderID;

            // For JSON model, find the sales order in the array
            const oModel = this.getView().getModel();
            const aSalesOrders = oModel.getProperty("/SalesOrders");
            const oSalesOrder = aSalesOrders.find(order => order.SalesOrderID === sSalesOrderID);

            if (oSalesOrder) {
                // Create a path to the specific item in the array
                const iIndex = aSalesOrders.indexOf(oSalesOrder);
                this.getView().bindElement({
                    path: "/SalesOrders/" + iIndex
                });
            }
        },

        onNavBack: function() {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("worklist", {}, true);
            }
        }
    });
});
