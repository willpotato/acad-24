// scroll-to-top button
function ttop() {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 800, 'swing', function() {
    });
}

//ip select on click
function copyIP() {
	var iptxt = document.getElementById("ip");
	var ip = iptxt.substring(6, 11);
	ip.select();
	ip.setSelectionRange(0, 99999);
	document.execCommand("copy");
	console.log(ip)
}

//service worker init

if('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('./assets/sw.js')
  .then(function() {
    console.log("Service Worker registered successfully");
  })
  .catch(function() {
    console.log("Service worker registration failed")
  });
}

//get srvdata
$.getJSON('https://eu.mc-api.net/v3/server/ping/hypixel.net',
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