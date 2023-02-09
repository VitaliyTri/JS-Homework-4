// // Задание 1
// // Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// // 0 – это ноль
// // 1 – нечетное число
// // 2 – четное число
// // 3 – нечетное число
// // …
// // 10 – четное число

// let num = 11;
// for (let i = 0; i <= num; i++) {
//     if (i == 0) {
//         console.log(`${i} - это ноль`);
//     }
//     else if (i % 2 > 0) {
//         console.log(`${i} - это нечётное число`);
//     }
//     else console.log(`${i} - это чётное число`);
// }


// // Задание 2
// // Дан массив [1, 2, 3, 4, 5, 6, 7]
// // Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(3, 2);
// console.log(array);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
const array = new Array(5);
let sum = 0;
for (let i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * 10);
    sum += array[i];
}
console.log(array);
console.log(`Сумма элементов массива равна '${sum}'`);

// 2. Найти минимальное число
let minNum = array[0];
for (let i = 0; i < array.length; i++) {
    if (array[i] < minNum) {
        minNum = array[i];
    }
}
console.log(`Минимальное число - '${minNum}'`);

// 3. Найти есть ли в этом массиве число 3
let counterOfThree = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == 3) {
        counterOfThree++;
    }
}
counterOfThree !== 0 ? console.log(`В этом массиве есть число '3'`) : console.log(`В этом массиве нет числа '3'`);