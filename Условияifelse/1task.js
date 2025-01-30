function checkVariable() {
    let input = prompt("Пожалуйста, введите число:");

    // Проверка, что ввод был не null и не пустой
    if (input === null || input.trim() === "") {
        alert("Вы не ввели число!");
        return;
    }
    if(isNaN(input)) {
      alert("Вы ввели не число!");
      return;
    }

    let test = parseFloat(input); 

    if (test > 10) {
        console.log("Переменная test больше 10");
    } else {
        console.log("Переменная test не больше 10");
    }

    if (test < 10) {
        console.log("Переменная test меньше 10");
    } else {
        console.log("Переменная test не меньше 10");
    }

    if (test >= 10) {
        console.log("Переменная test больше или равна 10");
    } else {
        console.log("Переменная test не больше и не равна 10");
    }

    if (test <= 10) {
        console.log("Переменная test меньше или равна 10");
    } else {
        console.log("Переменная test не меньше и не равна 10");
    }

  
    console.log("test > 10:", test > 10);
    console.log("test < 10:", test < 10);
    console.log("test >= 10:", test >= 10);
    console.log("test <= 10:", test <= 10);

}

checkVariable();

