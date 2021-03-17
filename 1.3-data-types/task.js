'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {

    // Смотрим, не ввёл ли пользователь процентную ставку через запятую;
    // Если ввёл, то заменяем её на точку; 
    // В любом случае извлекаем число с плавающей точкой из строки (в случае, если пользователь указал символ %, например).
    if (percent.indexOf(',') !== -1 && typeof percent == 'string') {
        percent = parseFloat(percent.replace(',', '.'));
    } else {
        percent = parseFloat(percent);
    }
    contribution = parseInt(contribution);
    amount = parseInt(amount);
    // Проверяем, введены ли все значения корректно:
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || percent <= 0 || amount <= 0 || contribution < 0) {
        return 'Заполните все поля корректными значениями!';
    }
    // Сегодняшняя дата
    let todayDate = new Date();
    // Считаем количество выплачиваемых месяцев. 
    let countMonths = (date.getFullYear() - todayDate.getFullYear()) * 12 - (todayDate.getMonth() + 1) + date.getMonth() + 1;
    if (date == 'Invalid Date' || countMonths < 12) {
        return 'Введите корректную дату окончания ипотеки!';
    } else {
        // Если всё введено хорошо, то считаем общую стоимость ипотеки:
        let creditSum = amount - contribution; // Тело кредита (сумма, которую необходимо вернуть банку)
        // Вычисляем процентную ставку за месяц (Зачем делить на 100? Указано в задании..)
        let monthlyPercent = percent / 100 / 12;
        //Вычисляем ежемесячную оплату:
        let monthlyPayment = creditSum * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1));
        // Итого, общая сумма ипотеки:
        let totalAmount = +(monthlyPayment * countMonths).toFixed(2);
        console.log(totalAmount);
        return totalAmount + ' рублей';
    }

}

function getGreeting(name) {
    if (!name) {
        name = 'Аноним';
    }
    return `Привет, мир! Меня зовут ${name}.`;
}