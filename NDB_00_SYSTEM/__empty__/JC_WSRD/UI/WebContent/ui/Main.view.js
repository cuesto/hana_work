sap.ui.jsview("ui.Main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf ui.Main
	*/ 
	getControllerName : function() {
		return "ui.Main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf ui.Main
	*/ 
	createContent : function(oController) {
    return this.createShell(oController);
},
	
createShell : function (oController)
{
    var oShell = new sap.ui.ux3.Shell("myShell", {
        appTitle: "B1 App Demo based on UI5, SAP B1 Solution Architects Team",
        appIcon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/640px-SAP_2011_logo.svg.png",
        appIconTooltip: "SAP logo",
        showLogoutButton: true,
        //showSearchTool: true,
        showInspectorTool: true,
        showFeederTool: true,
        worksetItems: [new sap.ui.ux3.NavigationItem("WI_1",{key:"wi_1",text:"XS OData"}),
                       new sap.ui.ux3.NavigationItem("WI_2",{key:"wi_2",text:"B1 UDQ Service"}),
                       new sap.ui.ux3.NavigationItem("WI_3",{key:"wi_3",text:"XS JavaScript", 
                           subItems:
			               [
			                  new sap.ui.ux3.NavigationItem("WI_3_1",{key:"wi_3_1",text:"XSJS No Param"}),
			                  new sap.ui.ux3.NavigationItem("WI_3_2",{key:"wi_3_2",text:"XSJS With Param"})]}),
        ],
        // Change "ui.odata" to <uifolder>.<InitialView>
        content: new sap.ui.view({viewName:"ui.odata", type:sap.ui.core.mvc.ViewType.JS}),
			
        headerItems: [new sap.ui.commons.TextView({text:"User Name",tooltip:"U.Name"}),
                                    new sap.ui.commons.MenuButton({
                                        text: "Help",
                                        tooltip: "Help Menu",
                                        menu: new sap.ui.commons.Menu("menu1",{items:[
                                            new sap.ui.commons.MenuItem("menuitem1",{text:"Help"}),
                                            new sap.ui.commons.MenuItem("menuitem3",{text:"About"})]})
                                    })],

        worksetItemSelected: function(oEvent){
            var sId = oEvent.getParameter("id");
            var oShell = oEvent.oSource;
				
				
            switch (sId) {
                /** - Move this Comment Line as long as the views below are implemented

				case "WI_1":
					var view = sap.ui.view({viewName:"ui.odata", type:sap.ui.core.mvc.ViewType.JS});
					oShell.setContent(view, true);
					break;
				case "WI_2":
					break;
				case "WI_3":
					break;
				case "WI_3_1":
					break;
				case "WI_3_2":
					var view = sap.ui.view({viewName:"ui.xsjs", type:sap.ui.core.mvc.ViewType.JS});
					oShell.setContent(view, true);
					break;
				 **/
                default:
                    break;
            }
        },
        logout:function(){
            alert("Logout Button has been clicked.");
        },
        search:function(oEvent){
            alert("Search triggered: " + oEvent.getParameter("text"));
        },
    });
    return oShell;
	}

});
