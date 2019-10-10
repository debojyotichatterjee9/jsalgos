let samplesampleArrayay =
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

/*==============================================================SELECTION SORT METHOD==============================================================*/
console.log(`\n==Selection Sort Method==`);
console.time(`Execution Time`);
let selectionSort = (sampleArray) => {
    var minIdx, temp,
        len = sampleArray.length;
    sampleArray.forEach((element, index) => {
        minIdx = index;
        for (var j = index + 1; j < len; j++) {
            sampleArray[j] < sampleArray[minIdx] ? (() => { minIdx = j; operations++; })() : '';
        }
        [sampleArray[index], sampleArray[minIdx]] = [sampleArray[minIdx], sampleArray[index]];
    });
    return sampleArray;
};
console.log(selectionSort(samplesampleArrayay));
console.log(`Operations: ${operations}`);
console.timeEnd(`Execution Time`);