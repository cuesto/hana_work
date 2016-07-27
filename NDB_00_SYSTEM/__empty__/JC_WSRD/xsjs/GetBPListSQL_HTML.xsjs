$.response.contentType = "text/html";
var output = "Hola, " + $.session.getUsername() + " <br><br>";
var bpType = "C";
var conn = $.hdb.getConnection();

var query = 'SELECT "CardCode", "CardName", "CardType", "Balance" ' +
			'FROM "SBODEMOUS"."OCRD" WHERE "CardType"= ? ';
var rs = conn.executeQuery(query, bpType);

var i;
for(i = 0; i < rs.length; i++){
	output += '<br>';
	
	output += rs[i].CardCode + " - " +
		      rs[i].CardName + " - " +
		      rs[i].CardType + " - " +
		      rs[i].Balance;
}

conn.close();

$.response.setBody(output);