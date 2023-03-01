let calculator = {
    read() {
        this.x = prompt('Введите x:', 0);
        this.y = prompt('Введите y:', 0);
    },
    sum() {
        return this.x + this.y;
    },
    mul() {
        return this.x * this.y;
    },
};