sap.ui.jsview("ui.xsjs", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui.xsjs
	*/ 
	getControllerName : function() {
		return "ui.xsjs";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui.xsjs
	*/ 
	createContent : function(oController) {
		return this.createBPTable(oController);
	},
	
	createBPTable : function(oController)
    {
		var oInput = new sap.ui.commons.TextField({value: "Select BP Type", tooltip: "Choose XSJS call"});
		// Create a ListBox
		  var oListBox = new sap.ui.commons.ListBox({items : [
		  			new sap.ui.core.ListItem({text:"C", additionalText:"Customer"}),
		  			new sap.ui.core.ListItem({text:"L", additionalText:"Lead"}),
		  			new sap.ui.core.ListItem({text:"S", additionalText:"Supplier"})]
		  		});
		  // Create a ComboBox
		  
		  var oComboBox = new sap.ui.commons.ComboBox({tooltip:"BP Type", 
		  						displaySecondaryValues:true, value:"Select BP TYPE", "association:listBox" : oListBox});
		  var oText = new sap.ui.commons.TextField({name: "Rows", value: 10});
		  
		  
		  //
		  //
    	  var oTable = new sap.ui.table.Table("ID_BP_Table3" ,
    			  	   {
    						title: "XSJS Call with parameters",
    						selectionMode: sap.ui.table.SelectionMode.Single,
    						navigationMode: sap.ui.table.NavigationMode.Paginator,
    						toolbar: new sap.ui.commons.Toolbar
    						({
    							 items: [ 
											oComboBox,
											oText,
	    							        new sap.ui.commons.Button({text: "Populate data", press: 
	    							        	function()
	    							        	{ 
	    							        		var srvcType = oComboBox.getValue();
	    							        		var rows = oText.getValue();
	    							        		oController.populateXSJSTable(srvcType, rows);
	    							        	}
	    							         })
    							        ]
    						})
    			  	   });
    	  //
		  var oLink = new sap.ui.commons.Link();
		  //
		  oTable.addColumn(new sap.ui.table.Column(
		  {
			  label: new sap.ui.commons.Label({text:"Code"}),
			  template: oLink.bindProperty("text", "CardCode"),
			  sortProperty: "CardCode",
			  filterProperty: "CardCode"
		  }));	
		  //	
		  oTable.addColumn(new sap.ui.table.Column(
		  {
			  label: new sap.ui.commons.Label({text:"Name"}),
		 	  template: new sap.ui.commons.TextView().bindProperty("text", "CardName"),
		 	  sortProperty: "CardName",
			  filterProperty: "CardName"
		  }));
		  //
		  oTable.addColumn(new sap.ui.table.Column(
		  {
			  label: new sap.ui.commons.Label({text:"Type"}),
		 	  template: new sap.ui.commons.TextView().bindProperty("text", "CardType"),
		 	  sortProperty: "CardType",
			  filterProperty: "CardType"
		  }));
	  	  //		  
		  oTable.addColumn(new sap.ui.table.Column(
		  {
			  label: new sap.ui.commons.Label({text:"Balance"}),
			  template: new sap.ui.commons.TextView().bindProperty("text", "Balance"),
			  sortProperty: "Balance",
			  filterProperty: "Balance"
			}));
		  oTable.setVisibleRowCount(10);
		  //
		  return oTable;   		
	}
});
