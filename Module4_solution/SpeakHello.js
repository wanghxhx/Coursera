(function (window){
	var speakWord = "Hello";
	speakhello = function (name) {
  	console.log(speakWord + " " + name);
  }	;
  window.helloSpeaker=speakhello ;
})(window);