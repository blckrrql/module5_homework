let x = undefined
const typeX = typeof x;
console.log(typeX)
if ((typeX == 'number' || typeX == 'bigInt') && !(isNaN(x))) {
   console.log(x + ' - число')
} else if (typeX == 'string') {
    console.log(x + ' - строка')
} else if (typeX == 'boolean') {
    console.log(x + ' - логический тип')
} else {
    console.log('Тип X не определён')
}