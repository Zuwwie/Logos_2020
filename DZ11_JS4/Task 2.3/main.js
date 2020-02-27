function task() {
    let i = 0;
    do {
        var x = ask.indexOf(`${ask2}`, i + 1);
        i = x;
        res++;
    } while (x != -1);
}

let ask = prompt(`Введіть текст`);
let ask2 = prompt(`Введіть що в ньому потрібно знайти`);
let res = -1;
task();
alert(`Знайдено ${res} співпадінь`);
