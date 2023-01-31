export function isEven(num) {
let result;

  if (((num % 2) == 0) && (!isNaN(num))) {
    result = `Число ${num} - чётное`;
  } else if (((num % 2) !== 0) && (!isNaN(num))) {
    result = `Число ${num} - нечётное`;
  } else {
      result = "Данные неверны";
  }
  return result;
}