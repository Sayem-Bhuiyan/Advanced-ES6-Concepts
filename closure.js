const outerFunction = () => {

    let counter = 0;

    return () => {
        counter++;
        console.log('Count: ',counter)
    }
}

const x1 = outerFunction();
const x2 = outerFunction();
x1()
x1()
x2()
x1();
x2();
const x3 = outerFunction();
x3()
x3()
x3()
x3()