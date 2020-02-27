let arr1 = [`Ivan`, `Pavlo`, `Ira`];

const arr2 = [`Oleksiy`, `Andriana`];

function getLength(arr) {
    let arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr);
        let ask = arr[i];
        // console.log(ask);
        ask = ask.length;
        // console.log(ask);
        arr3.push(ask);
        // console.log(arr3);
    }
    return console.log(arr3);
}
getLength(arr1);
getLength(arr2);
