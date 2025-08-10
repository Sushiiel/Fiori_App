sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Text",
    "sap/m/Button",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter"
  ], function (Controller, Dialog, Text, Button, Sorter, Filter) {
    "use strict";
    return Controller.extend("project1.controller.MainView", {
      onInit: function () {
        var oSmartFilter = this.byId("smartFilterBar");
        if (oSmartFilter) {
          oSmartFilter.attachSearch(this._onSmartFilterSearch, this);
        }
      },
  
      _onSmartFilterSearch: function (oEvent) {
        // Example: read filterValues and log
        var mParams = oEvent.getParameter("selectionSet");
        console.log("SmartFilter search params:", mParams);
      },
  
      onOpenCustomFilter: function () {
        var oTable = this.byId("smartTable").getTable();
        var oBinding = oTable.getBinding("items") || oTable.getBinding("rows");
        if (!oBinding) return;
        var aFilters = [new Filter("Category", "EQ", "Accessories")];
        oBinding.filter(aFilters);
      },
  
      onApprovePress: function () {
        var oDialog = new Dialog({
          title: this.getView().getModel("i18n").getProperty("dlgConfirmTitle"),
          content: new Text({ text: this.getView().getModel("i18n").getProperty("dlgConfirmText") }),
          beginButton: new Button({
            text: this.getView().getModel("i18n").getProperty("yes"),
            press: function () {
              // place backend call or logic here
              oDialog.close();
            }
          }),
          endButton: new Button({
            text: this.getView().getModel("i18n").getProperty("no"),
            press: function () {
              oDialog.close();
            }
          }),
          afterClose: function () {
            oDialog.destroy();
          }
        });
        oDialog.open();
      }
    });
  });
  