let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof(obj[key]) == "number") {
            obj[key] *= 2;
        }
    }
}