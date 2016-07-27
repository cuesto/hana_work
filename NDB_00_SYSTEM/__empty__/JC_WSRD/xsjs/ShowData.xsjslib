var conn = null, rs = null;

function showData(query, bpType, topNb){
	conn = $.hdb.getConnection();
	rs = conn.executeQuery(query, topNb, bpType);
	
	$.response.contentType = "application/json";
	$.response.setBody(JSON.stringify(rs));
	$.response.status = $.net.http.OK;
	
	conn.close();
}