//http://52.42.196.23:8000/JC_WSRD/xsjs/GetDataSQL_CallLib.xsjs?bpType=C&top=1
$.import("JC_WSRD.xsjs", "ShowData");

var query = 'SELECT TOP ? "CardCode", "CardName", "CardType", "Balance" ' +
'FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ? ';

var bpType = $.request.parameters.get('bpType');
var topNb = $.request.parameters.get('top');

$.JC_WSRD.xsjs.ShowData.showData(query, bpType, topNb);