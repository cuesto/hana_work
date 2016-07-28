sap.ui.controller("ui.xsjs", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ui.xsjs
*/
//	onInit: function() {
//
//	},


populateXSJSTable : function(srvcType, rows)
{
	var xsjsUrl = "../../xsjs/GetBPListSQL_Params.xsjs?bpType="+srvcType+"&top="+rows;

	//jQuery Call
	$.ajax({
		url: xsjsUrl,
		method: 'GET',
		dataType: 'json',
		success: this.onCompleteCall,
		error: this.onErrorCall
	});
},

onCompleteCall: function(result)
{
	var oTable = sap.ui.getCore().byId("ID_BP_Table3");
	var oModelBP = new sap.ui.model.json.JSONModel();
	oModelBP.setData(result);

	oTable.setModel(oModelBP);

	//bind table to an specific oData service
	oTable.bindRows("/");
},

onErrorCall: function(jqXHR, textStatus, errorThrown)
{
	sap.ui.commons.MessageBox.show(jqXHR.responseText,
		"ERROR",
		"Error in calling service");
	return;
},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ui.xsjs
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ui.xsjs
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ui.xsjs
*/
//	onExit: function() {
//
//	}

});