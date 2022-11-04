let myMap = new Map([
['Valeriia', 22],
['Sergey', 24],
['Marina', 39],
['Dmitry', 35],
['Iuliia', 22]
]);

for (let [key, value] of myMap) {
  console.log('Ключ — ' + key + ', значение — ' + value)
}