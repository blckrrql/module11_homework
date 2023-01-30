let num = prompt("Введите число");

if ((num % 2) == 0 && !isNaN(num)) {
  console.log(`Число ${num} чётное`);
} else if ((num % 2) !== 0 && !isNaN(num)) {
  console.log(`Число ${num} нечётное`);
} else {
    console.log("Данные неверны");
}