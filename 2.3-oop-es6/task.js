'use strict'

//! Задача № 1:

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    fix() {
        this.state = this._state * 1.5;
    }
    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }
    get state() {
        return this._state;
    }
}

//? Пример использования:

// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

// console.log(sherlock.releaseDate); // 2019
// console.log(sherlock.state); // 100
// sherlock.fix();
// console.log(sherlock.state); // 100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

//? Пример использования:

// const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); // "Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); // 10
// picknick.fix();
// console.log(picknick.state); // 15

//! Задача № 2:

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                let givenBook = this.books[i];
                this.books.splice(i, 1);
                return givenBook;
            }
        }
        return null;
    }
}

//? Пример использования:
// const library = new Library("Библиотека имени Ленина");

// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// let givenBook = library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3
// console.log(givenBook); // объект со свойством state = 100;
// givenBook.state = 30;
// console.log(givenBook); // state = 30;
// givenBook.fix();
// console.log(givenBook); // state = 45;
// library.addBook(givenBook); // вернули починенную книгу

// console.log(library.books);

//! Задача №3:

class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }
    getName() {
        return this.name;
    }
    addGrade(grade, subject) {
        if (grade >= 1 && grade <= 5) {
            if (this.marks[subject]) {
                this.marks[subject].push(grade);
            } else {
                this.marks[subject] = [];
                this.marks[subject].push(grade);
            }
            return this.marks[subject].length;
        } else {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5. \n`;
        }
    }
    getAverageBySubject(subject) {
        if (this.marks[subject]) {
            let sumMarks = 0;
            for (let mark of this.marks[subject]) {
                sumMarks += mark;
            }
            let result = sumMarks / this.marks[subject].length;
            return result;
        } else {
            return 0;
        }
    }
    getTotalAverage() {
        let sumMarks = 0;
        let countMarks = 0; // счётчик количества оценок
        for (let discipline in this.marks) {
            for (let mark of this.marks[discipline]) {
                sumMarks += mark;
                countMarks += 1;
            }
        }
        let result = sumMarks / countMarks;
        if (isNaN(result)) {
            return 0;
        } else {
            return result;
        }
    }
}

//? Пример использования:
// const log = new StudentLog('Олег Никифоров');

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');
// console.log(log.marks);
// console.log(log.getTotalAverage()); // 3,75