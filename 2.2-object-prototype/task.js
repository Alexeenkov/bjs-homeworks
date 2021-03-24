'use strict'

function isPalindrome() {
    let thisString = this.toLowerCase(); // переводим строку в нижний регистр
    let newString = ''; // сюда будем записывать новую строку без пробелов
    let reverseString = ''; // сюда будем записывать инвертированную строку

    // Удаляем пробелы в строке:
    for (let i = 0; i < thisString.length; i++) {
        if (thisString[i] === ' ') {
            continue;
        } else {
            newString += thisString[i];
        }
    }

    // Создаём инвертированную строку:
    for (let i = newString.length - 1; i >= 0; i--) {
        reverseString += newString[i];
    }

    return newString == reverseString;
};

String.prototype.isPalindrome = isPalindrome;

function getAverageMark(marks) {
    let sumMarks = 0; // сюда будем записывать сумму всех оценок
    let countMarks = 0; // сюда будем записывать количество этих оценок
    // Вычисляем эти значения:
    for (let mark of marks) {
        sumMarks += mark;
        countMarks += 1;
    }
    let roundedAverage = Math.round(sumMarks / countMarks); // средняя оценка за предмет

    // Почему-то тесты не проходил, поэтому добавил проверку (хотя при отсутствии оценок roundedAverage = 0):
    if (isNaN(roundedAverage)) {
        return 0;
    }
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = +new Date();
    birthday = +new Date(birthday);
    let diff = now - birthday;
    let age = diff / 31536e6; // Возраст посетителя (без учета високосных лет)
    let countLeapYear = (Math.floor((age) / 4) * 864e5) / 31536e6; // Сколько високосных лет прожил посетитель
    age = Math.floor(age + countLeapYear); // Возраст посетителя (полный, с учетом високосных лет)

    return age >= 18;
}