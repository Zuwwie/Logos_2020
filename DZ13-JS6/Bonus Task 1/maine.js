let boxStyle = document.getElementsByClassName('box');
console.log(document.getElementsByClassName('box'));
console.log(boxStyle);
console.log(boxStyle[0]);

function bg() {
	for (let i = 0; i < 3; i++) {
		let ask = prompt(`Введіть посилання на картинку`);
		boxStyle[i].style.backgroundImage = `url(${ask})`;
	}
}

bg();
