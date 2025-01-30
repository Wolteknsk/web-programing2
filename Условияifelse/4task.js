function getDecade(day) {
    if (day >= 1 && day <= 10) {
        return "первая";
    } else if (day >= 11 && day <= 20) {
        return "вторая";
    } else if (day >= 21 && day <= 31) {
        return "третья";
    } else {
        return "некорректный день"; // Если день вне интервала от 1 до 31
    }
}

function processUserDay() {
    let input = prompt("Введите число дня месяца (от 1 до 31):");

    if (input === null || input.trim() === "") {
        alert("Пожалуйста, введите число дня месяца.");
        return;
    }

    if (isNaN(input)) {
        alert("Вы ввели не число!");
        return;
    }

    let day = parseFloat(input);
    let decade = getDecade(day);

    if (decade === "некорректный день") {
        console.log("Введен некорректный день!");
    } else {
        console.log("День", day, "попадает в", decade, "декаду месяца.");
    }
}

processUserDay();

