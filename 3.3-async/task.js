"use strict"; // код  обрабатывается в строгом режиме
//Задача №1 3.1 «Асинхронность»
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    isIdExist(id) {
        return this.alarmCollection.findIndex((alarm) => alarm.id === id) > -1;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.')
        };

        if (this.isIdExist(id)) {
            return console.error('Будильник с таким id уже существует')
        };

        this.alarmCollection.push({ id, time, callback });
    }

    removeClock(id) {
        this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.id !== id);
        return !this.isIdExist(id);
    }

    getCurrentFormattedTime(minutesToAdd = 0) {
        const date = new Date();
        date.setMinutes(date.getMinutes() - date.getTimezoneOffset() + minutesToAdd);
        return date.toISOString().slice(11, 16);
    }

    start() {
        const checkClock = (alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) alarm.callback();
        }
        if (!this.timerId) this.timerId = setInterval(() => this.alarmCollection.forEach(checkClock), 6000);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        console.log('Печать всех будильников в количестве: ' + this.alarmCollection.length);
        this.alarmCollection.forEach((alarm) => console.log(`Будильник №${alarm.id} заведён на ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    const clock = new AlarmClock();

    clock.addClock(
        clock.getCurrentFormattedTime(),
        () => console.log('Пора вставать!'),
        1
    );

    clock.addClock(
        clock.getCurrentFormattedTime(1),
        () => {
            console.log('Давай вставай уже!');
            clock.removeClock(2);
        },
        2
    );

    try {
        clock.addClock(
            clock.getCurrentFormattedTime(1),
            () => console.log('Иди умываться!'),
        );
    } catch (error) {
        console.error(error);
    }

    clock.addClock(
        clock.getCurrentFormattedTime(2),
        () => console.log('Вставай, а то проспишь!'),
        1
    );

    clock.addClock(
        clock.getCurrentFormattedTime(2),
        () => {
            console.log('Вставай, а то проспишь!');
            clock.clearAlarms();
            clock.printAlarms();
        },
        3
    );

    clock.printAlarms();

    clock.start();
};

testCase();