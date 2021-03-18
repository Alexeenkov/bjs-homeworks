'use strict'

// Задача № 1:

function getSolutions(a, b, c) { // Вычисляет значение дескриминанта и корней уравнения
    let D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return {
            D,
            roots: []
        };
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return {
            D,
            roots: [x1]
        };
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D,
            roots: [x1, x2]
        };
    }
}

function showSolutionsMessage(a, b, c) { // Выводит результаты вычисления функции getSolutions()
    let result = getSolutions(a, b, c);
    let x1 = result.roots[0];
    let x2 = result.roots[1];

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (x1 === undefined) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (x1 !== undefined && x2 === undefined) {
        console.log(`Уравнение имеет один корень ${x1}`);
    } else if (x1 !== undefined && x2 !== undefined) {
        console.log(`Уравнение имеет два корня. ${x1}, ${x2}`);
    }
}

showSolutionsMessage(2, 4, 2); // Вызываем функцию с конкретными аргументами

// Задача № 2:

function getAverageScore(data) { // Обходит массив с оценками и выводит в консоль результаты вычисления средней оценки по каждому предмету
    let marks; // Сюда будем записывать массив с оценками на каждом шаге итерации объекта data для передачи его в функцию getAverageMark()
    let result = {}; // Сюда будем добавлять результат вычислений каждой итерации объекта data
    result.average = 0; // Добавляем к объекту data свойство, в которое будем записывать среднюю оценку по всем предметам 
    let averageMark; // Сюда будем записывать результат вычисления функции getAverageMark() на каждой итерации объкта data (чтобы не вычислять несколько раз)
    let dataLength = 0; // Здесь будем считать количество итераций объекта data, чтобы узнать его длину (количество предметов)
    // debugger
    for (let lesson in data) {
        marks = data[lesson];
        averageMark = getAverageMark(marks); // Результат вычисления функции getAverageMark()
        result[lesson] = averageMark;
        result.average += averageMark;
        dataLength++;
    }
    result.average = result.average / dataLength;
    return result;
}

function getAverageMark(marks) { // Вычисляет и возвращает среднюю оценку за предмет
    let summMarks = 0;
    for (let i = 0; i < marks.length; i++) {
        summMarks += marks[i];
    }
    return (summMarks / marks.length);
}

console.log(getAverageScore({ // Вызываем функцию, передаем в неё данные по оценкам в виде объекта (указанный формат)
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
}));

// Задача № 3:

function getPersonData(secretData) { // Дешифрует передаваемый объект (в определенном формате)
    let secret; // Сюда будем передавать значение итерируемого свойства
    let result = {}; // Сюда будем записывать результат дешифровки
    for (let name in secretData) {
        secret = secretData[name];
        if (name === 'aaa') {
            result.firstName = getDecodedValue(secret);
        } else if (name === 'bbb') {
            result.lastName = getDecodedValue(secret);
        }
    }
    return result;
}

function getDecodedValue(secret) { // 
    if (secret === 0) {
        return 'Эмильо';
    } else {
        return 'Родриго';
    }
}

console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));