function isPowerOf(num, degree) {
    if (degree === 0) {
        return 1;
    }
    else {
        return num * isPowerOf(num, degree - 1);
    }
};

let resultPower = isPowerOf(2, 10);
console.log(resultPower); 