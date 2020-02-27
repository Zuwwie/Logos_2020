let res = -1
let i = 0
function tabs(text) {
  do {
    var x = text.indexOf(` `, i + 1)
    i = x
    console.log(x)
    res++
  } while (x != -1)
}
let ask = prompt(`Введіть текст`)
var len1 = ask.length
console.log(len1)

tabs(ask)
alert(` Ви ввели ${res} пробілів`)
desafc()
