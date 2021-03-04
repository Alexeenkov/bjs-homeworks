'use strict'

function getResult(a, b, c) {

    // Сначала проверяю, не равен ли аргумент "а" нулю, так как такого быть не должно.
    // Через дискриминант решаются только квадратные уравнения.
    if (a === 0) {
        alert('Коэффициент при первом слагаемом уравнения не может быть равным нулю! \n Измените его и попробуйте снова.');
        window.location.reload();
    }

    // Если всё ок, тогда считаем дискриминант и возвращаем ответ в виде массива.

    let discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return [];
    } else if (discriminant === 0) {
        let x = (-b) / 2 * a;
        return [x];
    } else if (discriminant > 0) {
        let x1 = (-b + (discriminant ** (1 / 2))) / (2 * a);
        let x2 = (-b - (discriminant ** (1 / 2))) / (2 * a);
        return [x1, x2];
    } else {
        alert('Ошибка вычисления. Проверьте правильность введенных значений!'); // Ну мало ли.. Топим на надёжность =))
    }

}

function getAverageMark(marks) {

    let marksLength = marks.length; // Эта переменная будет содержать значение длины массива
    let marksSum = 0; // В этой переменной будем накапливать сумму
    let result; // В эту переменную запишем ответ

    if (marksLength === 0) {
        alert('Введите оценки для расчёта средней!');
        return 0;
    } else if (marksLength > 5) {
        alert('Считать среднюю оценку можно не более, чем по 5 предметам. Рассчитана средняя оценка только по первым 5 оценкам!');
        marks.splice(5);
        marksLength = 5;
    }

    for (let mark of marks) {
        marksSum += mark;
    }

    result = (marksSum / marksLength);

    return Number(result.toFixed(1));
}

function askDrink(name, dateOfBirthday) {

    let todayDate = new Date();
    todayDate = todayDate.getFullYear();
    let yearOfBirth = dateOfBirthday.getFullYear();

    if (name) {
        let age = todayDate - yearOfBirth;
        if (age >= 18) {
            return `Не желаете ли олд-фэшн, ${name}?`;
        } else if (age > 0 && age < 18) {
            return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
        } else {
            return `${name}, похоже, вы ещё не родились..`;
        }
    } else {
        return `Как тебя звать, дружище?`;
    }

}