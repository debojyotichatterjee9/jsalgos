let sampleArray =
    [90, 2, 100, 9, 39, 62, 75, 14, 93, 80,
        // 48, 99, 61, 32, 4, 89, 30, 16, 10, 46,
        // 96, 59, 76, 7, 50, 74, 86, 57, 71, 36,
        // 55, 3, 15, 31, 53, 79, 28, 47, 84, 24,
        // 27, 41, 26, 18, 63, 56, 5, 1, 54, 43,
        // 13, 11, 91, 44, 58, 88, 97, 25, 81, 64,
        // 6, 94, 34, 51, 12, 78, 66, 72, 35, 87,
        // 82, 20, 73, 98, 21, 65, 40, 60, 67, 29,
        // 45, 19, 37, 23, 42, 83, 92, 77, 95, 85,
        69, 52, 8, 38, 68, 49, 17, 70, 33, 22];

let operations = 0;
/*==============================================================FOR LOOP METHOD==============================================================*/
console.log(`\n==For-Loop Method==`);
console.time(`Execution Time`);
let forLoopMethod = (sampleArray) => {
    operations = 0;
    let len = sampleArray.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (sampleArray[j] > sampleArray[j + 1]) {
                let tmp = sampleArray[j];
                sampleArray[j] = sampleArray[j + 1];
                sampleArray[j + 1] = tmp;
            }
            operations++;
        }
    }
    return sampleArray;
};
console.log(forLoopMethod(sampleArray));
console.log(`Operations: ${operations}`);
console.timeEnd(`Execution Time`);


/*==============================================================DO-WHILE LOOP METHOD==============================================================*/
console.log(`\n==Do-While-Loop Method==`);
console.time(`Execution Time`);
let doWhileLoopMethod = (inputArr) => {
    operations = 0;
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
            operations++;
        }
    } while (swapped);
    return inputArr;
};
console.log(doWhileLoopMethod(sampleArray));
console.log(`Operations: ${operations}`);
console.timeEnd(`Execution Time`);


/*==============================================================FOR EACH METHOD==============================================================*/
console.log(`\n==For-Each Method==`);
console.time(`Execution Time`);
let forEachMethod = (sampleArray) => {
    operations = 0;
    let len = sampleArray.length;
    sampleArray.forEach(item => {
        sampleArray.forEach((elem, index) => {
            // [elem, index] = [elem, index]
            if (sampleArray[index] > sampleArray[index + 1]) {
                [sampleArray[index], sampleArray[index + 1]] = [sampleArray[index + 1], sampleArray[index]];
            }
            operations++;
        })
    })
    return sampleArray;
};
console.log(forEachMethod(sampleArray));
console.log(`Operations: ${operations}`);
console.timeEnd(`Execution Time`);


/*==============================================================ARRAY.MAP METHOD==============================================================*/
console.log(`\n==Array.Prototype.map() Method==`);
console.time(`Execution Time`)
let arrayMapMethod = (sampleArray) => {
    operations = 0;
    let len = sampleArray.length;
    sampleArray.map(item => {
        sampleArray.map((elem, index) => {
            // [elem, index] = [elem, index]
            if (sampleArray[index] > sampleArray[index + 1]) {
                [sampleArray[index], sampleArray[index + 1]] = [sampleArray[index + 1], sampleArray[index]];
            }
            operations++;
        })
    })
    return sampleArray;
};
console.log(arrayMapMethod(sampleArray));
console.log(`Operations: ${operations}`);
console.timeEnd(`Execution Time`);
