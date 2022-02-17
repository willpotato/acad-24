// scroll-to-top button
function ttop() {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 800, 'swing', function() {
    });
}

//ip select on click

function copyIP() {
	var ip = document.getElementById("ip").innerHTML;
	var iptxt = ip.substring(6, 16);
  navigator.clipboard.writeText(iptxt);
}

//service worker init

if ('serviceWorker' in navigator) {
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
$.getJSON('https://eu.mc-api.net/v3/server/ping/cheems.xyz', function(srvdata) {
  console.log("Server online: " + srvdata.online)

  /*
  if (srvdata.online = "true") {
    console.log("Server ping successful")
    var version = srvdata.version.name
    var status = srvdata.online
    var playermax = srvdata.players.max
    var players = srvdata.players.online
    console.log(version);
    console.log(" " + status + " ")
    console.log(players + "/" + playermax)
  } else {
    if (srvdata.online = "false") {
      console.log("Server ping failed")
      console.log(srvdata.online)
    } else {
      console.log("Server ping error")
      console.log(srvdata.online)
    };
  };
  */
});