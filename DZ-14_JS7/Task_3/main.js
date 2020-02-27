let btn = document.getElementsByClassName(`button`);
console.log(btn[0]);
btn[0].addEventListener("click", function() {
    let text = document.getElementById(`in`).value;
    if (text != ``) {
        console.log(text);
        document.getElementById(`up`).value = `${text}`;
    }
});

// document.forms[`placeholder`].lol.placeholder = `lol`;

document
    .getElementsByClassName(`but`)[0]
    .addEventListener(`mouseout`, function() {
        if (document.forms[`placeholder`].lol.value != ``) {
            document.forms[`placeholder`].lol.placeholder =
                document.forms[`placeholder`].lol.value;
            console.log(`work`);
            document.forms[`placeholder`].lol.value = ``;
        }
    });
