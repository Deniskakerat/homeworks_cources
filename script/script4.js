//Task1
"use strict";

/*
Створити функцію create_account(user_name: string, password: string, secret_words: array). Ця функція повинна повертати
функцію check().
Функція  check порівнює значення її аргументів з password та secret_words: password повинен повністю збігатись,
secret_words може містити одну неточність (невірне слово).
Пароль має містити не менше 6 символів, включати як мінімум одну велику літеру, одну маленьку, спеціальний символ
і цифру.

Приклад 1:
create_account("Tom", "Qwerty1", ["1", "word"]) повертяє null

Приклад 2:
tom = create_account("Tom", "Qwerty1_", ["1", "word"])
tom("Qwerty1_",  ["1", "word"]) повертає true
tom("Qwerty1_",  ["word"]) повертає  false, бо довжини секретных слів різні ["1", "word"] та ["word"]
tom("Qwerty1_",  ["word", "12"]) повертає true
tom("Qwerty1!",  ["word", "1"]) повертає false, бо"Qwerty1!" не дорівнює "Qwerty1_"
*/
function create_account(user_name, password, secret_words) {
    let pswd = password, words = secret_words;
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let pswd_lower = password.toLowerCase();
    if ((password.length >= 6) && !(password === pswd_lower) &&
        (/\d/.test(password)) && specialChars.test(password)) {
        return function check(password, secret_words) {
            return (password === pswd && (secret_words[0] === words[0] || secret_words[0] === secret_words[1]
                || words[1] === words[0] || secret_words[1] === secret_words[1])
                && words.length === secret_words.length);
        }
    }

}

create_account("Tom", "Qwerty1", ["1", "word"]);
let tom = create_account("Tom", "Qwerty1_", ["1", "word"]);
console.log(tom("Qwerty1_", ["1", "word"]));//повертає true
// secret_words може містити одну неточність (невірне слово)
console.log(tom("Qwerty1_", ["word"]));
//повертає  false, бо довжини секретных слів різні ["1", "word"] та ["word"]
console.log(tom("Qwerty1_", ["word", "12"])); //повертає true
console.log(tom("Qwerty1!", ["word", "1"]));// повертає false, бо"Qwerty1!" не дорівнює "Qwerty1_"
