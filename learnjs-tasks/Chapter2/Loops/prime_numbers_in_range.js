let n = prompt('Введите n', 3);

outer: for (let i = 2; i<=n; i++) {
    for (let j = 2; j <= i/2; j++) {
        if (i % j == 0) {
            continue outer;
        }
    }
    console.log(i);
}