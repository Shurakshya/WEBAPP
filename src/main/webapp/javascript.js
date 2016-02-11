/**
 * 
 */
 /* var BaseURL = 'http://localhost:8079/sampleHospital/webapi/';
var output = document.getElementById('notify');
(function getAlerts(){
    $.ajax({
        url: 'http://localhost:8079/sampleHospital/webapi/alerts',
        datatype:'text',
        success: function(data){
        output.innerHTML = data;
        }, 
        complete:poll,
        timeout:30000
        });
    
        
    })();


function xmlParser(data){
    var xml = $.parseXML(data);
    $(xml).find("alerts").each(function () {
        $(".main").append(
            $(this).find("notification").text()
        );
    });
}

var output = document.getElementById('longPollingResult');
(function poll() {
   $.ajax({url: "http://localhost:8080/examplejee6longpolling/longpolling", 
        success: function(data) {
            output.innerHTML = data;
        }, dataType: "text", complete: poll, timeout: 30000});
})(); */



function onLoadnotification(link){
		var url = "http://localhost:8080/sampleHospital/webapi/";
		var xhttp;
		
		if(window.XMLHttpRequest){
			xhttp = new XMLHttpRequest();
		}
		else{
			xhttp = new ActiveXObject(Miscrosoft.XMLHTTP);
		}
		
		xhttp.onreadystatechange = function(location){
			if(xhttp.readyState == 4 && xhttp.status == 200){
				loadnotification(xhttp);
			}
		};	
		
		xhttp.open('GET', url + link, true );
		xhttp.send();
	}


// to load messages

$(function(){
	
	$('#notice').on('click', function(){
		
		onLoadnotification('alerts');
		
	});
});	


/*
// to load notifications

$(function(){
	
	$('#notifications').on('click', function(){
		
		onLoad('alerts');
		
	});
});

*/

function loadnotification(xml){
	
	var xmlReq = xml.responseXML;
	var i;
	var table;
	
	table = '<table><tr><th> Id </th><th> notifications</th><th> Date </th>';
	
	x = xmlReq.getElementsByTagName("alerts");
	
	for(i = 0; i < x.length; i++){
		
		 table += "<tr><td>" +
		    x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
		    "</td><td>" +
		    x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue +
		    "</td></tr>";
		    x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue +
		    "</td></tr></table>";
		}
		  document.getElementById("listnotify").innerHTML = table;
		  
}
