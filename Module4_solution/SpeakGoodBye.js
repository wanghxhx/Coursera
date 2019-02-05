(function (window){
	var speakWord = "Good Bye";
	speakgoodbye = function (name) {
	  console.log(speakWord + " " + name);
	};
	window.byeSpeaker = speakgoodbye;
})(window);



