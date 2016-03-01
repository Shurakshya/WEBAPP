// the javascript file to consume restful API. 

$(document).ready(function() {
	var baseUrl = 'http://localhost:8080/sampleHospital/webapi/';
	(function getUsers() {
		$.ajax({
			type : 'GET',
			url : baseUrl + 'users',
			dataType : 'xml',
			cache : false,

			success : function(data) {
				$('#listusers').empty();
				$(data).find('user').each(function() {
					var name = $(this).find('fullName').text();
					$("<ul><li></li></ul>").html(name).appendTo('#listusers')
				});

			},
		});
	})();

	(function getAlerts() {
		$.ajax({
			type : 'GET',
			url : baseUrl + 'alerts',
			dataType : 'xml',
			cache : false,

			success : function(response) {
				$('#listnotify').empty();
				$(response).find('alert').each(function() {
					var content = $(this).find('content').text();
					$("<li></li>").html(content).appendTo('#listnotify')
				});

				setTimeout(getAlerts, 3000);

			},
		});
	})();

	(function getMessages() {
		$.ajax({
			type : 'GET',
			url : baseUrl + 'messages',
			dataType : 'xml',
			cache : false,

			success : function(data) {
				$('#listMessage').empty();
				$(data).find('message').each(function() {
					var content = $(this).find('content').text();
					$("<li></li>").html(content).appendTo('#listMessage')
				});
				setTimeout(getMessages, 3000);
			},
		});
	})();

});

// to post the data on the server
/*
 * $.ajax({ method: "POST", url: baseUrl + 'users', data: { name: "John",
 * location: "Boston" } }) .done(function( msg ) { alert( "Data Saved: " + msg );
 * 
 * });
 * 
 * 
 * var menuId = $( "ul.nav" ).first().attr( "id" ); var request = $.ajax({ url:
 * baseUrl + 'alerts', method: "POST", data: { id : menuId }, dataType: "html"
 * });
 * 
 * request.done(function( msg ) { $( "#log" ).html( msg ); });
 * 
 * request.fail(function( jqXHR, textStatus ) { alert( "Request failed: " +
 * textStatus ); });
 */

/*
 * function onLoadnotification(link){ var url =
 * "http://localhost:8080/sampleHospital/webapi/"; var xhttp;
 * 
 * if(window.XMLHttpRequest){ xhttp = new XMLHttpRequest(); } else{ xhttp = new
 * ActiveXObject(Miscrosoft.XMLHTTP); }
 * 
 * xhttp.onreadystatechange = function(location){ if(xhttp.readyState == 4 &&
 * xhttp.status == 200){ loadnotification(xhttp); } };
 * 
 * xhttp.open('GET', url + link, true ); xhttp.send(); } // to load alerts
 * 
 * $(function(){
 * 
 * $('#notice').on('click', function(){
 * 
 * onLoadnotification('alerts');
 * 
 * }); });
 * 
 * 
 * 
 * function loadnotification(xml){
 * 
 * var xmlReq = xml.responseXML; var i; var table;
 * 
 * table = '<table><tr><th> Id </th><th> notifications</th><th> Date </th>';
 * 
 * x = xmlReq.getElementsByTagName("alerts");
 * 
 * for(i = 0; i < x.length; i++){
 * 
 * table += "<tr><td>" +
 * x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</td><td>" +
 * x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue + "</td></tr>";
 * x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td></tr></table>"; }
 * document.getElementById("listusers").innerHTML = table; } // to Consume the
 * users from the API
 * 
 * function onLoadusers(link){ var url =
 * "http://localhost:8080/sampleHospital/webapi/"; var xhttp;
 * 
 * if(window.XMLHttpRequest){ xhttp = new XMLHttpRequest(); } else{ xhttp = new
 * ActiveXObject(Miscrosoft.XMLHTTP); }
 * 
 * xhttp.onreadystatechange = function(location){ if(xhttp.readyState == 4 &&
 * xhttp.status == 200){ loadusers(xhttp); } };
 * 
 * xhttp.open('GET', url + link, true ); xhttp.send(); }
 * 
 * 
 * //to load messages
 * 
 * $(function(){
 * 
 * $('.chat-info dropdown').on('click', function(){ ('.dropdown-menu').hide();
 * onLoadusers('users');
 * 
 * }); });
 * 
 * 
 * function loadusers(xml){
 * 
 * var xmlReq = xml.responseXML; var i; var table;
 * 
 * table = '<table><tr><th> Id </th><th> notifications</th><th> Date </th>';
 * 
 * x = xmlReq.getElementsByTagName("users");
 * 
 * for(i = 0; i < x.length; i++){
 * 
 * table += "<tr><td>" +
 * x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</td><td>" +
 * x[i].getElementsByTagName("content")[0].childNodes[0].nodeValue + "</td></tr>";
 * x[i].getElementsByTagName("date")[0].childNodes[0].nodeValue + "</td></tr></table>"; }
 * document.getElementById("chatgroups").innerHTML = table; }
 */
/*
 * var baseUrl = "http://localhost:8080/sampleHospital/webapi/";
 * 
 * function getAlerts(){ $.ajax({ url : baseUrl + 'users', type:'get',
 * dataType:'xml', success : listAlert
 * 
 * }); }
 */

/*
 * var BaseURL = 'http://localhost:8080/sampleHospital/webapi/'; (function (){
 * $.ajax ({ url: BaseURL + 'users', dataType:'xml', type: 'get', success:
 * function(){ console.log('poll'); }, }); });
 * 
 * /*function xmlParser(data){ var xml = $.parseXML(data);
 * $(xml).find("alerts").each(function () { $(".main").append(
 * $(this).find("notification").text() ); }); }
 */

