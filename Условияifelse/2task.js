function compareUserVariables() {
  let input1 = prompt("Введите значение для test1:");
  let input2 = prompt("Введите значение для test2:");

  if (input1 === null || input1.trim() === "" || input2 === null || input2.trim() === "") {
    alert("Пожалуйста, введите значения для обеих переменных.");
    return;
  }

    if(isNaN(input1) || isNaN(input2)) {
      alert("Вы ввели не число!");
      return;
    }

  let test1 = parseFloat(input1);
  let test2 = parseFloat(input2);

  if (test1 > test2) {
    console.log("Значение переменной test1 больше, чем значение переменной test2");
  } else if (test2 > test1) {
    console.log("Значение переменной test2 больше, чем значение переменной test1");
  } else {
    console.log("Значения переменных test1 и test2 равны");
  }
}

compareUserVariables();

