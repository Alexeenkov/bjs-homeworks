 function averageMark(a, g, p) {

     let algebra = a;
     let geography = g;
     let physics = p;

     let middleMark = (algebra + geography + physics) / 3;

     return Number(middleMark.toFixed(1));
 }

 function sayHello(userName) {
     // С целью отработки приктических навыков сделал так, чтобы имя начиналось с Большой буквы
     // вне зависимости от того, с какой её написал пользователь.
     let highFirstLetter = userName.slice(0, 1).toUpperCase(); // Вырезаем первую букву и делаем её большой
     let myName = String(highFirstLetter + userName.slice(1)); // Добавляем вырезанную букву к остальному выражению. Возвращаем строку
     let message = `Привет, мир! Меня зовут ${myName}`;

     return message;
 }

 function calculateFormula() {
     let x = 2;
     let y = 22;
     let z = 0;

     result = x * y + 5 * z + x - 1;

     return result;
 }