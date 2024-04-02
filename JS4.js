
function checkNumber(num) {
    if (num === 0) {
        return "Number is zero";
    } else if (num > 0) {
        return "Number is positive";
    } else {
        return "Number is negative";
    }
}

    let number = -5;
    alert(checkNumber(number));
