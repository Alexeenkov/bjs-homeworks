"use strict"; // код  обрабатывается в строгом режиме
//Задача №1 3.1 «Обработка исключений и замыкания»
function parseCount(value) {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    } else {
        return parsed;
    }
}


function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

//Задача №2 3.1 «Обработка исключений и замыкания»
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (
            b + c <= a ||
            a + c <= b ||
            a + b <= c
        ) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            return true;
        }
    }

    getPerimeter() {
        return +(this.a + this.b + this.c).toFixed(3);
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            getPerimeter: function() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea: function() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }

}