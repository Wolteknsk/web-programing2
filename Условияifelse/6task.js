function checkAge() {
  let input = prompt("Сколько вам лет?");

  if (input === null || input.trim() === "") {
    alert("Пожалуйста, введите ваш возраст.");
    return;
  }

  if (isNaN(input)) {
      alert("Вы ввели не число!");
      return;
  }


  let age = parseFloat(input);

  if (age >= 18) {
    alert("Добро пожаловать!");
  } else {
    alert("Доступ запрещен.");
  }
}

checkAge();

