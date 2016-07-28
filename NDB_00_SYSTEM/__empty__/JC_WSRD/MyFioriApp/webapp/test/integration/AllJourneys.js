jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.test.opaQunit");
jQuery.sap.require("sap.ui.test.Opa5");

jQuery.sap.require("sales.test.integration.pages.Common");
jQuery.sap.require("sales.test.integration.pages.App");
jQuery.sap.require("sales.test.integration.pages.Browser");
jQuery.sap.require("sales.test.integration.pages.Master");
jQuery.sap.require("sales.test.integration.pages.Detail");
jQuery.sap.require("sales.test.integration.pages.NotFound");

sap.ui.test.Opa5.extendConfig({
	arrangements: new sales.test.integration.pages.Common(),
	viewNamespace: "sales.view."
});

jQuery.sap.require("sales.test.integration.MasterJourney");
jQuery.sap.require("sales.test.integration.NavigationJourney");
jQuery.sap.require("sales.test.integration.NotFoundJourney");
jQuery.sap.require("sales.test.integration.BusyJourney");
jQuery.sap.require("sales.test.integration.FLPIntegrationJourney");