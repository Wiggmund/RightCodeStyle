{ // Style for function-constructor or classes

    /* Wrong */
    function createShape() {}
    function createUser() {}
    var petya = new createUser();
    var circle = new createShape();

    /* Right */
    function Shape() {}
    function User() {}
    var circle = new Shape();
    var petya = new User();

    // Правильно будет давать имена существительные, а не глагольные
}

{ // Style for annonymos function and regular-function

    /* Wrong */
    function first () {
        var a = first ();
    }

    /* Right */
    function second() {
        var b = second();
    }

    // Между именем ф-ции и скобками пробела быть не должно
    
    /* ========================== */
    
    /* Wrong */
    var a = function() {
        return 2 + 2;
    };

    /* Right */
    var b = function () {
        return 2 + 2;
    };

    // Нужно ставить пробел между объявлениям и скобками
}

{ // Order of arguments in function

    /* Wrong */
    function saveCityZipCode(zipCode, city) {}
    saveCityZipCode(city, ziCode);
    
    /* Right */
    function saveCityZipCode(city, zipCode) {}
    saveCityZipCode(city, zipCode);

    // Нужно давать правильный, с точки зрения логики либо судя с названия, порядок аргументов ф-ции.
}

/* Рекомендации
    - Одна задача - одна функция. Если функция делает больше чем одну задачу, она становится менее универсальной. И в будущем при расширения кода может протребоваться много правок и переписывания кода

    - низкоуровневые детали, также лучше выносить в отдельные функции, что делает код более читабельным

    - сложные условия заслуживают отдельной функциии. Поскольку условия имеют свойства рости в процессе развития проекта.

    - флаги в аргументах указывают на многозадачность функции. Следовательно нужно сделать рефакторинг и переработать функцию - сделать еще одну, котороя возьмет на себя выполнения другой задачи
        {
                    Wrong
            function getNumber(isOdd) {
                if (isOdd) {
                    return 3;
                } else {
                    return 2;
                }
            }

                    Right
            function getOddNumber() {
                return 3;
            }
            function getPairedNumber() {
                return 2;
            }
        }
    
    - избегайте побочных эфектов. Если нет на то причин: то возвращайте результат из функции, а не присваивать результат в другие переменные из замыкания

    - всяко и везде используйте возможности массивов
*/


