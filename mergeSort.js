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

/*==============================================================MERGE SORT METHOD==============================================================*/
console.log(`\n==Merge Sort Method==`);
console.time(`Execution Time`);
let mergeSort = (sampleArray) => {
        // Returning the array if it has one or less than one element
        if (sampleArray.length <= 1) {
          return sampleArray;
        }
        // Calculating the middle of the array
        const middle = Math.floor(sampleArray.length / 2);
      
        // Dividing the array into left and right
        const left = sampleArray.slice(0, middle);
        const right = sampleArray.slice(middle);
      
        // Using recursion to combine the left and right parts
        return merge(
          mergeSort(left), mergeSort(right)
        );
};

// Merging the two arrays: left and right
let merge = (left, right) => {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // moving left array cursor
        operations++; //calculating number of operations
      } else {
        resultArray.push(right[rightIndex]);
              rightIndex++; // moving right array cursor
              operations++; //calculating number of operations
      }
    }
  
    // Concatenating the resultArray because there will be one element left over after the while loop
    return resultArray
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }

console.log(mergeSort(sampleArray));
console.log(`Operations: ${operations}`);
console.timeEnd(`Execution Time`);