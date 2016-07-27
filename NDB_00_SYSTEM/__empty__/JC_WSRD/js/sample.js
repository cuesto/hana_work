//Only runs once DOM is ready
$(document).ready(function(){
	//When button with ID btn1 is pressed
	$("#btn1").click(function(){
		//change all test on h1 tag
		//$("h1").text("this is a jQuery test")
		callXSJS()
	});

	$("#btn2").click(function(){
		$("h2").fadeOut();
	});
});

function callXSJS() {
	$.ajax({
		type: "GET",
		url: "xsjs/GetBPListSQL_JSON.xsjs",
		error: function(xhr,status,error){
			alert("Fail - "+ status);
		},
		success: function(json){
			displayXSJS(json);
		}
	});
}

function displayXSJS(json){
	
	//Header
	$("#resultTable thead").append(
			"<tr>"	+
			"<th>#</th>"	+
			"<th>Code</th>" +
			"<th>Name</th>"+
			"<th>Type</th>"+
			"<th>Balance</th>"+
	"</tr>");

	//Lines	
	for (var i=0;i<Object.keys(json).length;i++){
		$("#resultTable tbody").append(
				"<tr>"+
				"<td>"+i+"</td>"+				
				"<td>"+json[i].CardCode+"</td>"+
				"<td>"+json[i].CardName+"</td>"+
				"<td>"+json[i].CardType+"</td>"+
				"<td>"+json[i].Balance+"</td>"+
				"</tr>");
	};
}



//create new elements
var newHeading = document.createElement("h1");
var newParagraph = document.createElement("p");

//to add content, use innerHTML
newHeading.innerHTML = "Did you Know?";
newParagraph.innerHTML = "Most kagaroos are left-handed";

//Add new elements to the HTML
document.getElementById("jsDiv").appendChild(newHeading);
document.getElementById("jsDiv").appendChild(newParagraph);

//Untyped variables
var a = 10;
var b = 20;
var c = 'The sum of a + b is -> ' + (a+b);

//Pops an Alert to user
alert(c);
