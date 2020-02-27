const arr1 = [`html`, `css`, `html`, `js`];
const arr2 = [`html`, `css`, `js`, `html`, `js`, `python`, `js`, `scss`];
function removeDuplicates(arr) {
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        let search = arr.indexOf(arr[i], i + 1);
        // console.log(search);
        if (search > 0) {
            let splice = arr.splice(search, 1);
            // console.log(splice);
            i--;
        }
    }
    console.log(arr);
}
removeDuplicates(arr1);
removeDuplicates(arr2);
