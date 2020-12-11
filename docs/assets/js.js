// scroll-to-top button
function ttop() {
    var body = $("html, body");
    body.stop().animate({scrollTop:0}, 800, 'swing', function() {
    });
}

function copyIP() {
	var iptxt = document.getElementById("ip");
	var ip = iptxt.substr(6, 8);
	ip.select();
	ip.setSelectionRange(0, 99999);
	document.execCommand("copy");
	console.log(ip)
}