// document.forms[`f1`];
let firstName = /^[w][a-z]{0,19}$/,
    lastName = /^[w][a-z]{0,19}$/,
    email = /^[a-zA-Z0-9_.]{3,}\@[a-z]{3,5}\.[a-z]{2,4}$/,
    phone = /[a-z]{1,20}/,
    password = /^[a-zA-Z0-9]{8,15}$/;

document.querySelector(`.singUp`).addEventListener(`click`, function() {
    if (firstName.test(document.forms[`f1`][0].value)) {
        done(0);
    } else {
        error(0);
    }
    if (lastName.test(document.forms[`f1`][1].value)) {
        done(1);
    } else {
        error(1);
    }
    if (email.test(document.forms[`f1`][2].value)) {
        done(2);
    } else {
        error(2);
    }
    if (phone.test(document.forms[`f1`][3].value)) {
        done(3);
    } else {
        error(3);
    }
    if (password.test(document.forms[`f1`][4].value)) {
        done(4);
    } else {
        error(4);
    }
});

let error = function(x) {
    document.forms[`f1`][x].style.border = `1px solid red`;
};
let done = function(x) {
    document.forms[`f1`][x].style.border = `1px solid green`;
};
//
//
//
str = ``;
for (let i = 0; i < document.getElementsByName(`countTr`)[0].value; i++) {
    for (let z = 0; z < document.getElementsByName(`countTd`)[0].value; z++) {
        td += `<td style="width: ${
            document.getElementsByName(`widthTd`)[0].value
        }px; height: ${
            document.getElementsByName(`heightTd`)[0].value
        }px; border: ${document.getElementsByName(`widthBorder`)[0].value}px ${
            document.getElementsByName(`StyleBorder`)[0].value
        } ${document.getElementsByName(`colorBorder`)[0].value};"> TR </td>`;
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
