const function1 = (callback) => {
    // console.log(typeof callback)
    callback()
}

const callback = () => {
    console.log('I am a callback function')
}

// function1(callback);

const num1 = 5;
const num2 = 10;
const add = (a, b) => {
    return a + b;
};

const sum = (add, x, y) => {
    // console.log(x, y)
    const addition = add(x, y);
    return addition;
}

const summation = sum(add, num1, num2);
console.log(summation);

// const addition = add(5, 10);
// console.log(addition);