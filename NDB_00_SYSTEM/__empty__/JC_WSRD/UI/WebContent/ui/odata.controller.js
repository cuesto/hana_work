sap.ui.controller("ui.odata", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui.odata
*/
	onInit: function() {
		//Create model to Load the XSOData
		var oModelBP = new sap.ui.model.odata.ODataModel("../../odata/b1services.xsodata");

		// load the table we created in the view
		var oTable = sap.ui.getCore().byId("ID_SALES_TABLE");

		//attach the model to the table
		oTable.setModel(oModelBP);
	},

	populateSalesTable: function()
	{
		//Pop up function was called
		//alert("Sales by BP Populate by XSOData: ");

		//load table created on the view
		var oTable = sap.ui.getCore().byId("ID_SALES_TABLE");

		//bind table to an specific oData service
		oTable.bindRows("/SalesByGroup");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui.odata
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui.odata
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui.odata
*/
//	onExit: function() {
//
//	}

});