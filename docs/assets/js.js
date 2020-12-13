// scroll-to-top button
function ttop() {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 800, 'swing', function() {
    });
}

//ip select on click
function copyIP() {
	var iptxt = document.getElementById("ip");
	var ip = iptxt.substr(6, 8);
	ip.select();
	ip.setSelectionRange(0, 99999);
	document.execCommand("copy");
	console.log(ip)
}

//get srvdata
$.getJSON('https://eu.mc-api.net/v3/server/ping/cheems.xyz',
  function(data) {
    $.each(data, function(index, value) {
      // console.log(value);
    });
    var online = data.version.name;
    var status = data.online
    var playermax = data.players.max
    var players = data.players.online
    console.log(online);
    console.log(" " + status + " ")
    console.log(players + "/" + playermax)
  });