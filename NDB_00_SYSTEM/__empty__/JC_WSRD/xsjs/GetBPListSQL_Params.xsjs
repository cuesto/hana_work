//http://52.42.196.23:8000/JC_WSRD/xsjs/GetBPListSQL_Params.xsjs?bpType=C&top=10
var conn = null, rs = null;

function showData(query, bpType, topNb){
	conn = $.hdb.getConnection();
	rs = conn.executeQuery(query, topNb, bpType);
	
	$.response.contentType = "application/json"; //specify output
	$.response.setBody(JSON.stringify(rs));
	$.response.status = $.net.http.OK;
	
	conn.close();
}

var query = 'SELECT TOP ? "CardCode", "CardName", "CardType", "Balance" ' +
'FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ? ';

var bpType = $.request.parameters.get('bpType');
var topNb = $.request.parameters.get('top');

showData(query, bpType, topNb);