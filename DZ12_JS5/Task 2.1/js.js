let arr1 = [1, 2, 3, 4, 5, 5];
let arr2 = [10, 20];

function arrCopy() {
    for (let i = arr1.length - 1; i >= 0; i--) {
        arr2.unshift(arr1[i]);
    }
}
arrCopy();
// arr2.unshift(2);
console.log(arr1);
console.log(arr2);
