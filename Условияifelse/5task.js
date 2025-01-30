function getSeason(month) {
    if (month >= 1 && month <= 12) {
        if (month >= 3 && month <= 5) {
            return "весна";
        } else if (month >= 6 && month <= 8) {
            return "лето";
        } else if (month >= 9 && month <= 11) {
            return "осень";
        } else {
            return "зима"; // Месяцы 12, 1 и 2
        }
    } else {
        return "некорректный месяц";
    }
}


function processUserMonth() {
    let input = prompt("Введите номер месяца (от 1 до 12):");

    if (input === null || input.trim() === "") {
        alert("Пожалуйста, введите номер месяца.");
        return;
    }

    if (isNaN(input)) {
        alert("Вы ввели не число!");
        return;
    }


    let month = parseFloat(input);
    let season = getSeason(month);
    if (season === "некорректный месяц") {
        console.log("Введен некорректный месяц!");
    } else {
         console.log("Месяц", month, "принадлежит к", season);
    }
}

processUserMonth();

