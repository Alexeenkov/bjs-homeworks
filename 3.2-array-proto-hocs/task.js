'use strict';

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    sleep(100);
    return args.reduce((sum, arg) => sum += +arg, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.every((item, i) => item === arr2[i]) && arr2.every((item, i) => item === arr1[i]);
}

const mSum = memorize(sum, 5);

function memorize(fn, limit) {
    const memory = [];
    if (limit <= 0 || typeof limit !== 'number' || limit !== limit) limit = 1;
    return function() {
        const indexInMemory = memory.findIndex(item => compareArrays(item.args, [...arguments]));
        if (indexInMemory !== -1) return memory[indexInMemory].result;
        if (memory.length >= limit) memory.shift();
        const result = fn(...arguments);
        memory.push({ args: [...arguments], result });
        return result;
    };
}

// console.log(mSum(3, 4));
// console.log(mSum(3, 4));
// console.log(mSum(5, 5));
// console.log(mSum(8, 5));
// console.log(mSum(0, 5));
// console.log(mSum(3, 5));
// console.log(mSum(3, 5));
// console.log(mSum(3, 5));


// 3. testCase (необязательная часть задания)

function testCase(numberOfCases) {
    const testArray = [];

    // Создадим массив, содержащий случайные подмассивы. Количество случайных подмассивов - numberOfCases (если numberOfCases - четное), и numberOfCases + 1 (если numberOfCases - нечетное). Длина случайного подмассива - от 1 до 5 элементов.
    // Случайные подмассивы внутри тестового массива идут повторяющимися парами

    for (let i = 0; i <= Math.round(numberOfCases / 2); i++) {
        let subarray = [];
        let subArraySize = Math.round(Math.random() * 10 / 2);
        if (subArraySize === 0) subArraySize = 1;
        for (let j = 0; j < subArraySize; j++) {
            subarray.push(Math.round(Math.random() * 100));
        }
        testArray.push(subarray);
        // testArray.push(subarray);
    }

    console.time('Время случайного теста без оптимизации');

    testArray.forEach(item => {
        sum(...item);
    });

    console.timeEnd('Время случайного теста без оптимизации');

    console.time('Время случайного теста с оптимизацией');

    testArray.forEach(item => {
        mSum(...item);
    });

    console.timeEnd('Время случайного теста с оптимизацией');

}

// testCase(10);
// testCase(50);
// testCase(100);