function deleat() {
    var x = ask.indexOf(`//`);
    // console.log(x); //індекс символів щоб знати з якого починати
    res = ask.substr(x + 2); //+2 бо починаєм з 0 + 2 символи тре пропустити
}
let ask = prompt(`Введіть посилання`);
let res;
deleat();
console.log(res);
