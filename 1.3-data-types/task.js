'use strict'

function calculateTotalMortgage(percent, contribution, amount, date) {

    // Про принцип программирования YAGNI знаю. 
    // Сделал дополнительные проверки и функции исключительно с целью отработки практических навыков!
    // Буду благодарен любой критике. Чем больше, тем благодарнее =))

    // Смотрим, не ввёл ли пользователь процентную ставку через запятую;
    // Если ввёл, то заменяем её на точку; 
    // В любом случае извлекаем число с плавающей точкой из строки (в случае, если пользователь указал символ %, например).
    if (percent.indexOf(',') !== -1) {
        percent = parseFloat(percent.replace(',', '.'));
    } else {
        percent = parseFloat(percent);
    }
    contribution = parseInt(contribution);
    amount = parseInt(amount);

    // Проверяем, введены ли все значения корректно:
    if (isNaN(percent) || isNaN(contribution) || isNaN(amount)) {
        return 'Заполните все поля корректными значениями!';
    }
    if (date == 'Invalid Date') {
        return 'Введите дату окончания ипотеки!';
    } else {
        // Если всё введено хорошо, то считаем общую стоимость ипотеки:
        let todayDate = new Date(); // Сегодняшняя дата
        let creditSum = amount - contribution; // Тело кредита (сумма, которую необходимо вернуть банку)
        // Считаем количество выплачиваемых месяцев. 
        // Вычисления могут быть с погрешностью по дням, так как считать вплоть до дня можно, но мне очень долго формулу высчитывать.
        // Такой задачи не стояло ))
        let countMonths = (date.getFullYear() - todayDate.getFullYear()) * 12 - (todayDate.getMonth() + 1) + date.getMonth() + 1;
        // Вычисляем процентную ставку за месяц (Зачем делить на 100? Указано в задании..)
        let monthlyPercent = percent / 100 / 12;
        //Вычисляем ежемесячную оплату:
        let monthlyPayment = creditSum * (monthlyPercent + monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1));
        // Итого, общая сумма ипотеки:
        let totalAmount = +(monthlyPayment * countMonths).toFixed(2);
        console.log(totalAmount);
        return totalAmount;
    }

}

function getGreeting(name) {
    if (name) {
        return `Привет, мир! Меня зовут ${name}`;
    } else {
        return `Привет, мир! Меня зовут Аноним`;
    }
}