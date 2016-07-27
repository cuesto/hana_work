function showData(dbType){
	$.response.contentType = "application/json";
	var conn = $.hdb.getConnection();
	
	//load procedure of specified schema
	var getBpByTypeProc = conn.loadProcedure('SBODEMOUS', 'GETBPBYTYPE');
	
	var rs = getBpByTypeProc(dbType);
	
	//Build response
	$.response.setBody(JSON.stringify(rs));
	$.response.status = $.net.http.OK;
	
	conn.close();
}

var bpType = $.request.parameters.get("bpType");

showData(bpType);