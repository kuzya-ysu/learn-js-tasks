function pow(x, n) {
    return x**n;
}

let x = +prompt('Введите x', 0);
let n = +prompt('Введите n >= 1', 1);

(n >= 1) ? console.log(pow(x, n)) : console.log('n должно быть >= 1');

