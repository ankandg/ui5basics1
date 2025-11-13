sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    return UIComponent.extend("aiui5.Component",{
        //linking of manifest file
        metadata: {
            manifest: "json"
        },
        init : function(){
            //calling parent class constructor
            UIComponent.prototype.init.apply(this);

            // create the views based on the url/hash
            this.getRouter().initialize();
        },
        createContent: function(){
            //object of rootview
            var oRootView = new sap.ui.view({
                viewName:"aiui5.view.App",
                id:'idRootView',
                type:'XML'
            });

            //create object of view1
            var oView1 = new sap.ui.view({
                viewName: "aiui5.view.View1",
                id: 'idView1',
                type: 'XML'
            });

             //create object of view2
            var oView2 = new sap.ui.view({
                viewName: "aiui5.view.View2",
                id: 'idView2',
                type: 'XML'
            });

            //obtain  the obejct of container controll of rootview
            //later we can add multiple views inside
              var oAppCon = oRootView.byId("idAppCon");
            //integrate the pages(views) within the container of rootview
            oAppCon.addPage(oView1).addPage(oView2);

            return oRootView;
        }
    });
});
