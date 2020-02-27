let fish = document.querySelector('#fish');

window.addEventListener('keydown', function(event) {
	console.log('keyCode', event);
	if (event.keyCode == 37) {
		let goLeft = fish.offsetLeft;
		if (goLeft > 200) {
			console.log(goLeft);
			fish.style.left = goLeft - 10 + 'px';
			fish.style.transform = 'translate(-50%, -50%)';
		}
	}
	if (event.keyCode == 38) {
		let goUp = fish.offsetTop;
		if (goUp > 200) {
			console.log(goUp);
			fish.style.top = goUp - 10 + 'px';
			fish.style.transform = 'translate(-50%, -50%) rotate(90deg) ';
		}
	}
	if (event.keyCode == 39) {
		console.log(window.innerWidth);
		let goRight = fish.offsetLeft;
		// this.console.log(window.innerWidth);
		if (goRight < window.innerWidth - 200) {
			fish.style.left = goRight + 10 + 'px';
			fish.style.transform = 'translate(-50%, -50%) scaleX(-1)';
		}
	}
	if (event.keyCode == 40) {
		console.log(window.innerHeight);
		let goTop = fish.offsetTop;
		if (goTop < window.innerHeight - 200) {
			fish.style.top = goTop + 10 + 'px';
			fish.style.transform = 'translate(-50%, -50%) rotate(270deg)';
		}
	}
});
