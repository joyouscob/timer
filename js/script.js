(function() {
	 "use strict";
	 var secondsLabel = document.getElementById('seconds'), 
	minutesLabel = document.getElementById('minutes'), 
	hoursLabel = document.getElementById('hours'), 
	startButton = document.getElementById('start'), 
	resetButton = document.getElementById('reset'), 
	stopButton = document.getElementById('stop'), 
	totalSeconds = 0, 
	timer = null;
	//limit = minutes + seconds * 60 - 1

	 startButton.onclick = function() {
	   if (!timer) {
	     timer = setInterval(setTime, 1000);
	   }
	 };
	 stopButton.onclick = function() {
	if (timer) {
		clearInterval(timer);
		timer = null;
	}
	// if song is playing remove from body
	else if (song) {
		document.getElementById('song').remove();
	}
	 }

	 resetButton.onclick = function() {
	     totalSeconds = 0;
	     clearInterval(timer);
	     timer = null;
    	  secondsLabel.innerHTML = "00";
		  minutesLabel.innerHTML = "00";
		  hoursLabel.innerHTML = "00";
	 };
	
	/***
	* Convert total seconds into minutes and hours, then change the labels
	* If time reaches the limit is set then a song will play.
	***/
	 function setTime() {
	   totalSeconds++;
	   secondsLabel.innerHTML = pad(totalSeconds % 60);
	   minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
	   hoursLabel.innerHTML = pad(parseInt(totalSeconds / 3600));
	
	//When 25mins have passed append a youtube clip to the DOM
	// todo - definable limit and song
		if (totalSeconds == 1499) {
			var song = document.createElement('div');
			song.id = "song";
			song.innerHTML = '<iframe width="0" height="0"src="http://www.youtube.com/embed/YEYxOPtQqWw?rel=0&autoplay=1&loop=1&start=1"></iframe>';		
		
			var objBody = document.getElementsByTagName("body").item(0);
			objBody.appendChild(song);
		}
	 }
	
	// Pad a single digit with 0
	 function pad(val) {
	   var valString = val + "";
	   if (valString.length < 2) {
	     return "0" + valString;
	   } else {
	     return valString;
	   }
	 }
		
})();