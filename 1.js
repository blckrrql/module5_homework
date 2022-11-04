let inputValue = prompt('Введите число')
let value = +inputValue;
if(typeof value =='number' && !isNaN(value)) {
  if(value == 0) {
    console.log('ноль')
  } else if (value % 2 == 0) {
    console.log('чётное')
  } else {
    console.log('нечётное')
  }
} else {
  console.log('Упс, кажется Вы ошиблись')
}