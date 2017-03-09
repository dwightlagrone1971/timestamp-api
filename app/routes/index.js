'use strict';

var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function convertUnixTimeCallback(result){
    console.log(result);
}

(function(){
    var baseUri = 'http://www.convert-unix-time.com/api?';
    var getScript = (baseUri+'timestamp=now&returnType=jsonp&callback=convertUnixTimeCallback');
    
});