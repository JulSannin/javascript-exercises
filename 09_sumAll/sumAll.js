const sumAll = function (numMin, numMax) {
    let total = 0;
    let start = numMin;
    let end = numMax
    if (typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR";
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (numMin > numMax) {
        temp = start;
        start = end;
        end = temp;
    }
    for (let i = start; i <= end; i++) {
        console.log(i);
        total += i;
    }
    return total;
}

// Do not edit below this line
module.exports = sumAll;
