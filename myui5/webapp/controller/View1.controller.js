sap.ui.define([
  'aeonx/hr/payroll/controller/BaseController'
], (BaseController) => {
  'use strict';

  return BaseController.extend("aeonx.hr.payroll.controller.View1", {
      onInit: function() {
      },
      onNext: function() {
        this.getView().getParent().to("idView2");
      }
  });
});