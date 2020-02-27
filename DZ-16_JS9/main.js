function zero(x) {
    if (x < 10) x = `0` + x;
    return x;
}
let l;
let s = 0;
let m = 0;
let h = 0;
let timer = function() {
    let z = document.querySelector(`.watch`).innerHTML;
    // console.log(z);
    // let w = z.split(":");

    console.log(s);
    l = setInterval(function() {
        s = s + 1;
        if (s > 60) {
            s = 0;
            m++;
            if (m > 60) {
                m = 0;
                h++;
            }
        }
        document.querySelector(`.watch`).innerHTML = `${zero(h)}:${zero(
            m
        )}:${zero(s)}`;
    }, 1000);
};

setInterval(function() {
    let d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getUTCFullYear();
    //
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    // console.log(month);
    document.querySelector(`.data`).innerHTML = `${zero(day)}.${zero(
        month
    )}.${year}`;
    document.querySelector(`.time`).innerHTML = `${zero(hour)}:${zero(
        minute
    )}:${zero(second)}`;
}, 100);

document.querySelector(`.start`).addEventListener(`click`, function() {
    timer();
    // clearTimeout(timer);
});

document.querySelector(`.stop`).addEventListener(`click`, function() {
    console.log(`w`);
    clearTimeout(l);
});

document.querySelector(`.reset`).addEventListener(`click`, function() {
    document.querySelector(`.watch`).innerHTML = `00:00:00`;
    s = 0;
    m = 0;
    h = 0;
});

document.querySelector(`.loop`).addEventListener(`click`, function() {
    document.querySelector(`.result`).innerHTML +=
        document.querySelector(`.watch`).innerHTML + `<br>`;
});
let z = +document.querySelector(`.number`).innerHTML;
console.log(z);
let s1 = 0;
let m1 = z;
let timer2 = function() {
    z = +document.querySelector(`.number`).innerHTML;
    m1 = z;
    l2 = setInterval(function() {
        if (s1 == 0) {
            m1--;
            s1 = 59;
        }
        s1--;
        document.querySelector(`.timerTime`).innerHTML = `${m1}:${s1}`;
        if (m1 == 0 && s1 == 0) {
            alert(`Time out`);
            clearTimeout(l2);
        }
    }, 1000);
};

// timer2();

document.querySelector(`.add`).addEventListener(`click`, function() {
    let z = +document.querySelector(`.number`).innerHTML;
    z++;
    document.querySelector(`.number`).innerHTML = z;
});

document.querySelector(`.min`).addEventListener(`click`, function() {
    let z = +document.querySelector(`.number`).innerHTML;
    z--;
    document.querySelector(`.number`).innerHTML = z;
});

document.querySelector(`.startTimer`).addEventListener(`click`, function() {
    timer2();
});
document.querySelector(`.timerStop`).addEventListener(`click`, function() {
    clearTimeout(l2);
});
document.querySelector(`.timerReset`).addEventListener(`click`, function() {
    document.querySelector(`.timerTime`).innerHTML = `00:00`;
    z = +document.querySelector(`.number`).innerHTML;
    console.log(z);
    s1 = 0;
    m1 = z;
});
