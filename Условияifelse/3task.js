function checkNumberRange(num) {
  if (num >= 10 && num <= 20) {
    console.log("Число", num, "находится в диапазоне от 10 до 20 включительно.");
    return true; 
  } else {
    console.log("Число", num, "не находится в диапазоне от 10 до 20 включительно.");
    return false; 
  }
}

let num1 = 15;
checkNumberRange(num1); // Выведет: "Число 15 находится в диапазоне от 10 до 20 включительно."

let num2 = 5;
checkNumberRange(num2); // Выведет: "Число 5 не находится в диапазоне от 10 до 20 включительно."

let num3 = 25;
checkNumberRange(num3); // Выведет: "Число 25 не находится в диапазоне от 10 до 20 включительно."

let num4 = 10;
checkNumberRange(num4); // Выведет: "Число 10 находится в диапазоне от 10 до 20 включительно."

let num5 = 20;
checkNumberRange(num5); // Выведет: "Число 20 находится в диапазоне от 10 до 20 включительно."

// Пример с вводом от пользователя
function checkUserNumberRange() {
  let input = prompt("Введите число:");

  if (input === null || input.trim() === "") {
    alert("Пожалуйста, введите число.");
    return;
  }

    if(isNaN(input)) {
      alert("Вы ввели не число!");
      return;
    }


  let num = parseFloat(input);
  checkNumberRange(num);
}

checkUserNumberRange();

