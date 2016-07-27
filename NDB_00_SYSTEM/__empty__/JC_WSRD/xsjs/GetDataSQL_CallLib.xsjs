$.import("JC_WSRD.xsjs", "ShowData");

var query = 'SELECT TOP ? "CardCode", "CardName", "CardType", "Balance" ' +
'FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ? ';

var bpType = $.request.parameters.get('bpType');
var topNb = $.request.parameters.get('top');

$.JC_WSRD.xsjs.ShowData.showData(query, bpType, topNb);