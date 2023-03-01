function sumInput() {
    let nums = [];
    while (true) {
        let input = prompt('Введите число');

        if (input === '' || input === null || !isFinite(input)) {
            break;
        }

        nums.push(+input);
    }

    let sum = 0;

    for (let num of nums) {
        sum += num;
    }

    return sum;
}