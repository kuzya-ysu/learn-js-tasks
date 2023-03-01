function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let expression = str.split(' ');
    a = +expression[0];
    op = expression[1];
    b = +expression[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}