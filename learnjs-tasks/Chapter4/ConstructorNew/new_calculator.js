function Calculator() {
    this.read() = function() {
        this.x = +prompt('Введите x:', 0);
        this.y = +prompt('Введите y:', 0);
    };
    this.sum = function() {
        return this.x + this.y;
    };
    this.mul = function() {
        return this.x * this.y;
    };
}