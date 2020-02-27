let arr1 = [1, 2, 3],
    arr3 = [],
    arr2 = [10, 200, 333];

function arrToString(arr) {
    arr3 = `‘` + arr.join("’‘") + `’`;
    return console.log(arr3);
}

arrToString(arr1);
arrToString(arr2);
