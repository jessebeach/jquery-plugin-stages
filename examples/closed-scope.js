function appender(message) {
  $('.output').append($('<p>', {
    text: message
  }));
}


var globalHello = "Hello, I am the \"globalHello\" variable. My context is global. Look for me on the window.";

appender(globalHello);

// This is our proto-plugin.
(function (globalHello) {
  appender(globalHello);
  
  var globalHello = "Cheerio, my text is local. You won\'t find me in your Inspector!";
  appender('local hello: ' + globalHello);
}(globalHello));

appender(globalHello);