let login = prompt('Введите логин');

if (login == '' || login == null) {
    console.log('Отменено');
}
else if (login == 'Админ') {

    let password = prompt('Введите пароль');

    if (password == '' || password == null) {
        console.log('Отменено');
    }
    else if (password == 'Я главный') {
            console.log('Здравствуйте!');
        }
        else {
            console.log('Неверный пароль');
        }
}
else {
    console.log('Я вас не знаю');
}
