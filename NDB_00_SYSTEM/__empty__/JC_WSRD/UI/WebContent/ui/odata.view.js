sap.ui.jsview("ui.odata", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui.odata
	*/ 
	getControllerName : function() {
		return "ui.odata";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui.odata
	*/ 
	createContent : function(oController) {
		var oTable = new sap.ui.table.Table("ID_SALES_TABLE",
		{
			title: "Sales by BP Group via XS OData",
			selectionMode: sap.ui.table.SelectionMode.Single,
			navigationMode: sap.ui.table.NavigationMode.Paginator,
			toolbar: new sap.ui.commons.Toolbar
			({
				items: [new sap.ui.commons.Button({
					text: "Populate data", press:
						function(){
							oController.populateSalesTable();
						}
					})
				]
			})
		});

		oTable.setVisibleRowCount(5);

		oTable.addColumn(new sap.ui.table.Column(
		{
			label: new sap.ui.commons.Label({ text: "GroupCode"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "GroupCode"),
			sortProperty: "GroupCode",
			filterProperty: "GroupCode"
		}));

		oTable.addColumn(new sap.ui.table.Column(
		{
			label: new sap.ui.commons.Label({ text: "GroupName"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "GroupName"),
			sortProperty: "GroupName",
			filterProperty: "GroupName"
		}));

		oTable.addColumn(new sap.ui.table.Column(
		{
			label: new sap.ui.commons.Label({ text: "DocTotal"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "DocTotal"),
			sortProperty: "DocTotal",
			filterProperty: "DocTotal"
		}));

		oTable.addColumn(new sap.ui.table.Column(
		{
			label: new sap.ui.commons.Label({ text: "GrosProfit"}),
			template: new sap.ui.commons.TextView().bindProperty("text", "GrosProfit"),
			sortProperty: "GrosProfit",
			filterProperty: "GrosProfit"
		}));


		return oTable;
	}
});
