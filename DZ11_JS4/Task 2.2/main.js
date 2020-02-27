function mail() {
    let x = ask.indexOf(`@`);
    console.log(x);
    len--;
    console.log(len);

    if (x <= 0 || x >= len) {
        alert("Щось пішло не так");
    } else {
        alert(`Тепер ми знаємо ваш мейл)))`);
    }
}
let ask = prompt(`Введіть мейл`);
var len = ask.length;
mail();
