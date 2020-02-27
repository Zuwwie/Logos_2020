let ask = prompt(`Введіть радіус`);
console.log(ask);
console.log(isFinite(ask));

function aera(x) {
    let res = Math.PI * Math.pow(x, 2);
    res = res.toFixed(2);
    console.log(res);
    return alert(`Радіус = ${res}`);
}
if (ask == null) {
    alert(`Ви нічого не ввели`);
} else {
    if (isFinite(ask)) {
        aera(ask);
    } else {
        alert(`Ви ввели не число`);
    }
}
