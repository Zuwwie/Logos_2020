let aeraTEXT = document.querySelector(`.textAera`).textContent;
let aeraHTML = document.querySelector(`.textAera`).innerHTML;
let aera = document.querySelector(`.textAera`);
let getSel = (sel) => document.querySelector(sel);
let displayBlock = (sel) => (document.querySelector(sel).style.display = `block`);
let displayNone = (sel) => (document.querySelector(sel).style.display = `none`);
let test = /^[0-9]{1,}$/;

let bold = true;
document.querySelector(`.bold`).addEventListener(`click`, function() {
	if (bold) {
		aera.style.fontWeight = `bold`;
		bold = false;
	} else {
		aera.style.fontWeight = ``;
		bold = true;
	}
});
let italic = true;
document.querySelector(`.italic`).addEventListener(`click`, function() {
	if (italic) {
		aera.style.fontStyle = `italic`;
		italic = false;
	} else {
		aera.style.fontStyle = ``;
		italic = true;
	}
});
let underline = true;
document.querySelector(`.underline`).addEventListener(`click`, function() {
	if (underline) {
		aera.style.textDecoration = `underline`;
		underline = false;
		saparite = true;
	} else {
		aera.style.textDecoration = ``;
		underline = true;
		saparite = true;
	}
});
let saparite = true;
document.querySelector(`.saparite`).addEventListener(`click`, function() {
	if (saparite) {
		aera.style.textDecoration = `line-through
        `;
		saparite = false;
		underline = true;
	} else {
		aera.style.textDecoration = ``;
		saparite = true;
		underline = true;
	}
});
let left = true;
document.querySelector(`.left`).addEventListener(`click`, function() {
	if (left) {
		aera.style.textAlign = `left`;
	}
});
let center = true;
document.querySelector(`.center`).addEventListener(`click`, function() {
	if (center) {
		aera.style.textAlign = `center`;
	}
});

let right = true;
document.querySelector(`.right`).addEventListener(`click`, function() {
	if (right) {
		aera.style.textAlign = `right`;
	}
});
// console.log(document.forms[`sing`].login.value);
document.querySelector(`.lock`).addEventListener(`click`, function() {
	if (sing) {
		document.querySelector(`.login`).style.display = `block`;
		document.querySelector(`.sing`).style.display = `block`;
	}
});
document.querySelector(`.login`).addEventListener(`click`, function() {
	document.querySelector(`.login`).style.display = `none`;
	document.querySelector(`.sing`).style.display = `none`;
	document.querySelector(`.background`).style.display = ``;
	displayNone(`.inputTable`);
	displayNone(`.ul`);
	displayNone(`.ol`);
});
let sing = true;
document.querySelector(`.singButton`).addEventListener(`click`, function() {
	if (document.forms[`sing`].login.value == `admin`) {
	var log = true;
	    document.forms[`sing`].login.style.border = ``;
	} else {
	    document.forms[`sing`].login.style.border = `2px solid red`;
	}
	if (document.forms[`sing`].password.value == `admin`) {
	var pass = true;
	    document.forms[`sing`].password.style.border = ``;
	} else {
	    document.forms[`sing`].password.style.border = `2px solid red`;
	}
	if (log && pass) {
		document.querySelector(`.login`).style.display = `none`;
		document.querySelector(`.sing`).style.display = `none`;
		document.querySelector(`.lock`).style.backgroundImage = `url(icon/unlock.svg)`;
		document.querySelector(`.html`).style.backgroundImage = `url(icon/bug.svg)`;
		sing = false;
	}
});
document.querySelector(`.html`).addEventListener(`click`, function() {
	if (sing == false) {
		document.querySelector(`.head`).style.display = `none`;
		document.getElementById(`area`).style.visibility = `visible`;
		displayNone(`.textAera`);
		getSel(`.secondHead`).style.display = `grid`;
		displayBlock(`.editArea`);
	}
});
document.getElementById(`area`).style.visibility = `hidden `;
document.getElementById(`area`).style.height = window.innerHeight - 205 + `px`;
document.getElementById(`area`).value = document.querySelector(`.textAera`).innerHTML;

document.querySelector(`.save`).addEventListener(`click`, function() {
	document.querySelector(`.head`).style.display = `grid`;
	document.querySelector(`.secondHead`).style.display = `none`;
	document.getElementById(`area`).style.visibility = `hidden `;
	document.querySelector(`.editArea`).style.display = `none`;
	document.querySelector(`.textAera`).innerHTML = document.getElementById(`area`).value;
	document.querySelector(`.textAera`).style.display = ``;
});
document.querySelector(`.table`).addEventListener(`click`, function() {
	getSel(`.login`).style.display = `block`;
	displayBlock(`.inputTable`);
});
document.querySelector(`.oderList`).addEventListener(`click`, function() {
	getSel(`.login`).style.display = `block`;
	displayBlock(`.ol`);
});
document.querySelector(`.unList`).addEventListener(`click`, function() {
	getSel(`.login`).style.display = `block`;
	displayBlock(`.ul`);
});

// getSel(`.createTable`).addEventListener(`click`, function() {
//     console.log(`w`);
// });
// console.log(document.getElementsByName(`countTr`)[0].value);
// console.log(document.getElementsByName(`widthTd`)[0].value);
// console.log(document.getElementsByName(`widthBorder`)[0].value);
// console.log(document.getElementsByName(`countTd`)[0].value);
// console.log(document.getElementsByName(`heightTd`)[0].value);
// console.log(document.getElementsByName(`StyleBorder`)[0].value);
// console.log(document.getElementsByName(`colorBorder`)[0].value);

function reset() {
	document.getElementsByName(`countTr`)[0].value = ``;
	document.getElementsByName(`widthTd`)[0].value = ``;
	document.getElementsByName(`widthBorder`)[0].value = ``;
	document.getElementsByName(`countTd`)[0].value = ``;
	document.getElementsByName(`heightTd`)[0].value = ``;
	document.getElementsByName(`heightTd`)[0].value = ``;
	document.getElementsByName(`countOlli`)[0].value = ``;
	document.getElementsByName(`olMark`)[0].value = ``;
	document.getElementsByName(`countUlli`)[0].value = ``;
	document.getElementsByName(`olMark`)[0].value = ``;
}
// console.log(document.querySelectorAll(`.reset`).length);
// document.querySelectorAll(`.reset`);

for (let i = 0; i < document.querySelectorAll(`.reset`).length; i++) {
	document.querySelectorAll(`.reset`)[i].addEventListener(`click`, function() {
		reset();
	});
}
let ifTable = 0;
let td = ``,
	tr = ``,
	str = ``;
document.querySelector(`.createTable`).addEventListener(`click`, function() {
	if (test.test(document.getElementsByName(`countTr`)[0].value)) {
		ifTable++;
		document.getElementsByName(`countTr`)[0].style.border = `1px solid green`;
	} else {
		document.getElementsByName(`countTr`)[0].style.border = `1px solid red`;
	}
	if (test.test(document.getElementsByName(`countTd`)[0].value)) {
		ifTable++;
		document.getElementsByName(`countTd`)[0].style.border = `1px solid green`;
	} else {
		document.getElementsByName(`countTd`)[0].style.border = `1px solid red`;
	}
	if (test.test(document.getElementsByName(`widthTd`)[0].value)) {
		ifTable++;
		document.getElementsByName(`widthTd`)[0].style.border = `1px solid green`;
	} else {
		document.getElementsByName(`widthTd`)[0].style.border = `1px solid red`;
	}
	if (test.test(document.getElementsByName(`heightTd`)[0].value)) {
		ifTable++;
		document.getElementsByName(`heightTd`)[0].style.border = `1px solid green`;
	} else {
		document.getElementsByName(`heightTd`)[0].style.border = `1px solid red`;
	}
	if (test.test(document.getElementsByName(`widthBorder`)[0].value)) {
		ifTable++;
		document.getElementsByName(`widthBorder`)[0].style.border = `1px solid green`;
	} else {
		document.getElementsByName(`widthBorder`)[0].style.border = `1px solid red`;
	}
	if (ifTable == 5) {
		str = ``;
		for (let i = 0; i < document.getElementsByName(`countTr`)[0].value; i++) {
			for (let z = 0; z < document.getElementsByName(`countTd`)[0].value; z++) {
				td += `<td style="width: ${document.getElementsByName(`widthTd`)[0]
					.value}px; height: ${document.getElementsByName(`heightTd`)[0]
					.value}px; border: ${document.getElementsByName(`widthBorder`)[0]
					.value}px ${document.getElementsByName(`StyleBorder`)[0].value} ${document.getElementsByName(
					`colorBorder`
				)[0].value};"> TR </td>`;
			}
			tr += `<tr>` + td + `</tr>`;
			td = ``;
		}

		str = `<table >` + tr + `</table>`;
		console.log(str);
		document.querySelector(`#area`).value += str;
		str = ``;
		displayNone(`.inputTable`);
		displayNone(`.login`);
	} else {
		alert(`перевірьте всі значення`);
	}
});

document.querySelector(`.cteateOl`).addEventListener(`click`, function() {
	if (test.test(document.getElementsByName(`countOlli`)[0].value)) {
		str = ``;
		let z = ``;
		for (let i = 0; i < document.getElementsByName(`countOlli`)[0].value; i++) {
			z += `<li>Item ${i + 1} </li>`;
		}
		str = `<ol type=${document.getElementsByName(`olMark`)[0].value}>  ${z}  </ol>`;
		document.querySelector(`#area`).value += str;
		str = ``;
		displayNone(`.ol`);
		displayNone(`.login`);
	} else {
		document.getElementsByName(`countOlli`)[0].style.border = `1px solid red`;
		alert(`Невірне значення`);
	}
});
document.querySelector(`.createUl`).addEventListener(`click`, function() {
	if (test.test(document.getElementsByName(`countUlli`)[0].value)) {
		str = ``;
		let z = ``;
		for (let i = 0; i < document.getElementsByName(`countUlli`)[0].value; i++) {
			z += `<li>Item ${i + 1} </li>`;
		}
		str = `<ul type=${document.getElementsByName(`olMark`)[0].value}>  ${z}  </ul>`;
		document.querySelector(`#area`).value += str;
		str = ``;
		displayNone(`.ul`);
		displayNone(`.login`);
	} else {
		document.getElementsByName(`countUlli`)[0].style.border = `1px solid red`;
		alert(`Невірне значення`);
	}
});
let fontSize = true;
document.querySelector(`.fontSize`).addEventListener(`click`, function() {
	if (fontSize) {
		document.querySelector(`.size`).style.display = `grid`;
		fontSize = false;
	} else {
		document.querySelector(`.size`).style.display = ``;
		fontSize = true;
	}
});
console.log(document.querySelector(`.size`).children.length);
for (let i = 0; i < document.querySelector(`.size`).children.length; i++) {
	document.querySelector(`.size`).children[i].addEventListener(`click`, function() {
		// console.log(this.innerHTML + `px`);
		aera.style.fontSize = this.innerHTML + `px`;
	});
}
// console.log(document.getElementsByTagName(`section`)[0]);
let fontType = true;
document.querySelector(`.fontType`).addEventListener(`click`, function() {
	if (fontType) {
		document.querySelector(`.type`).style.display = `grid`;
		fontType = false;
	} else {
		document.querySelector(`.type`).style.display = ``;
		fontType = true;
	}
});
for (let i = 0; i < document.querySelector(`.type`).children.length; i++) {
	document.querySelector(`.type`).children[i].addEventListener(`click`, function() {
		console.log(this.innerHTML);
		aera.style.fontFamily = `'${this.innerHTML}'`;
		console.log(aera.style.fontFamily);
	});
}

for (let i = 0; i < document.querySelector(`.color`).children.length; i++) {
	document.querySelector(`.color`).children[i].addEventListener(`click`, function() {
		// console.log(this.style.backgroundColor);
		aera.style.color = this.style.backgroundColor;
	});
}
let fontColor = true;
document.querySelector(`.fontColor`).addEventListener(`click`, function() {
	if (fontColor) {
		displayBlock(`.font`);
		fontColor = false;
	} else {
		displayNone(`.font`);
		fontColor = true;
	}
});
document.querySelector(`.fontBg`).addEventListener(`click`, function() {
	document.querySelector(`.modColor`).addEventListener(`click`, function() {
		document.querySelector(`.bgcolor`).style.display = `grid`;
		document.querySelector(`.bgimg`).style.display = `none`;
		document.querySelector(`.bginput`).style.display = `none`;
	});
	document.querySelector(`.modImg`).addEventListener(`click`, function() {
		document.querySelector(`.bgimg`).style.display = `grid`;
		document.querySelector(`.bgcolor`).style.display = `none`;
		document.querySelector(`.bginput`).style.display = `none`;
	});
	document.querySelector(`.modFiles`).addEventListener(`click`, function() {
		document.querySelector(`.bgcolor`).style.display = `none`;
		document.querySelector(`.bgimg`).style.display = `none`;
		document.querySelector(`.bginput`).style.display = `block`;
	});
});
for (let i = 0; i < document.querySelector(`.bgcolor`).children.length; i++) {
	document.querySelector(`.bgcolor`).children[i].addEventListener(`click`, function() {
		// console.log(document.querySelectorAll(`.main`));
		document.querySelector(`.body`).style.backgroundImage =``
		document.querySelector(`.body`).style.backgroundColor = this.style.backgroundColor;
		aera.style.backgroundColor = `inherit`;
	});
}
for (let i = 0; i < document.querySelector(`.bgimg`).children.length; i++) {
	document.querySelector(`.bgimg`).children[i].addEventListener(`click`, function() {
		// console.log(document.querySelectorAll(`.main`));
		document.querySelector(`.body`).style.backgroundImage = this.style.backgroundImage;
		aera.style.backgroundColor = `inherit`;
	});
}

var input = document.querySelector('input');
document.querySelector('input').addEventListener(`change`, function() {
	let link = URL.createObjectURL(this.files[0]);
  document.querySelector('.body').style.backgroundImage = `url(${link})`;
});
let fontBg = true
document.querySelector(`.fontBg`).addEventListener(`click`,function(){
	if (fontBg) {
		document.querySelector(`.background`).style.display = `block`;
		fontBg = false;
		displayBlock(`.login`)
	} else {
		document.querySelector(`.background`).style.display = ``;
		fontBg = true;
		displayNone(`.login`)
	}
})