function appender(message) {
  $('.output').append($('<p>', {
    text: message
  }));
}

// Passing variables by value.

var globalString = "Hello, I am the \"globalString\" variable. My context is global. Look for me on the window.";

appender(globalString);

(function (globalString) {
  appender(globalString);
  
  globalString = "Cheerio, my text is local. You won\'t find me in your Inspector!";
  appender('local: ' + globalString);
}(globalString));

appender(globalString);

// Passing variables by reference.

var globalObject = {text: 'Hi, this is the global Object'};

appender(globalObject.text);

// This is our proto-plugin.
(function (globalObject) {
  appender(globalObject.text);
  
  globalObject.text = "Cheerio, this is the local Object.";
  appender('local: ' + globalObject.text);
}(globalObject));

appender(globalObject.text);