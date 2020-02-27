let ask = +prompt(`Введіть число`);

function getDigits(number) {
    while (number > 1) {
        number--;
    }
    number = number.toFixed(4);
    return number;
}
console.log(getDigits(ask));
