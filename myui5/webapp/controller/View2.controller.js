sap.ui.define([
  'aeonx/hr/payroll/controller/BaseController'
], (BaseController) => {
  'use strict';

  return BaseController.extend("aeonx.hr.payroll.controller.View2", {
      onInit: function() {
      },
      onBack: function(){
        this.getView().getParent().to("idView1")
      }
  });
});