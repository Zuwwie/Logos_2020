let btn = document.querySelectorAll(`.bcolor`);
// console.log(btn);

// console.log(btn[0].style);
// console.log(btn2);
// console.log(btn2[0].style);

btn.forEach(function(item) {
	// console.log(item.style);
	item.addEventListener(`click`, function() {
		let s = getComputedStyle(item).backgroundColor;
		document.body.style.backgroundImage = ``;
		document.body.style.backgroundColor = `${s}`;
		// console.log(document.body.style.backgroundColor);
	});
});

let btn2 = document.querySelectorAll(`.icolor`);
btn2.forEach(function(item) {
	item.addEventListener(`click`, function() {
		let s = getComputedStyle(item).backgroundImage;
		// console.log(s);
		// console.log(getComputedStyle(item).backgroundImage);
		document.body.style.backgroundImage = `${s}`;
	});
});
let getSel = (sel) => document.querySelector(sel);
let check = true;
let check1 = true;
getSel(`#bgP`).addEventListener(`click`, function() {
	let x = document.getElementsByClassName(`img`);
	if (check1 == true) {
		x[0].style.opacity = 1;
		x[0].style.height = 500 + `px`;
		x[0].style.width = 500 + `px`;

		x[0].style.zIndex += 1;

		check1 = false;
		check = true;
	} else {
		x[0].style.opacity = 0;
		x[0].style.height = 0 + `px`;
		x[0].style.width = 0 + `px`;
		check1 = true;
		check = false;
		x[0].style.zIndex = 0;
	}
	console.log(x);
});
getSel(`#bgC`).addEventListener(`click`, function() {
	let x = document.getElementsByClassName(`color`);
	if (check == true) {
		x[0].style.opacity = 1;
		x[0].style.height = 500 + `px`;
		x[0].style.width = 500 + `px`;
		x[0].style.zIndex += 2;

		check = false;
		check1 = true;
	} else {
		x[0].style.opacity = 0;
		x[0].style.height = 0 + `px`;
		x[0].style.width = 0 + `px`;
		check = true;
		check1 = false;
		x[0].style.zIndex = 0;
	}
	console.log(x);
});

function ask(x) {}
