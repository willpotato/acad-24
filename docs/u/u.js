// find query string for user

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
                      .exec(window.location.search);

    return (results !== null) ? results[1] || 0 : false;
}

var user = $.urlParam('u'); // user specified

console.log($.urlParam('ref')); //registration
console.log($.urlParam('email')); //bobo@example.com
console.log(user);