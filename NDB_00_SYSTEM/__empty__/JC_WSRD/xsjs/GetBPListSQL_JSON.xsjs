function getBPJSON(bpType){
	$.response.contentType = "application/json";
	var conn = $.hdb.getConnection();
	
	var query = 'SELECT "CardCode", "CardName", "CardType", "Balance" ' +
	'FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ? ';
	
	var rs = conn.executeQuery(query, bpType);
	
	conn.close();
	
	//formatting not required for JSON response, already JSON format
	$.response.setBody(JSON.stringify(rs));
	$.response.status = $.net.http.OK;
}

getBPJSON('C');