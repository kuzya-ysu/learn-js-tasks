let age = prompt('Ваш возраст?', 1);

if (!(age >= 14 && age <= 90)) {
    console.log('Хорошо!');
}

if (age < 14 || age > 90) {
    console.log('Хорошо!');
}