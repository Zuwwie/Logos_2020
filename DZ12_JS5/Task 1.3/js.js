let ask = +prompt(`Введіть число`);
console.log(ask);
console.log(isFinite(ask));
let num = isFinite(ask);

function sqrt(x) {
    let res = Math.sqrt(x);
    console.log(res);
    return alert(`Готово = ${res}`);
}

if (num != true) {
    alert(`Введіть число будь ласка`);
} else {
    console.log(`swich`);
    switch (true) {
        case ask == 0:
            alert(`Не підходить`);
            break;
        case ask > 0:
            console.log(ask);
            sqrt(ask);
            break;
        case ask < 0:
            alert(`Введіть додатнє значення`);
            break;
    }
}
