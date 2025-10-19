const removeFromArray = function(arr, ...args) {
    let newArr = [];

    arr.forEach(elem => {
        if (!args.includes(elem)) {
            newArr.push(elem);
        }
    });

    return newArr;

    // return arr.filter(elem => !args.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
