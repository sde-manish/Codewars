// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// function findUniq(arr) {
//     let sortedArr = arr.sort();
//     let unique;
//     for(let i=0; i < sortedArr.length; i++)
//         if (sortedArr[i] != sortedArr[i+1]) {
//             unique = sortedArr[i];
//         }
//         console.log(unique);
//     return unique;
//   }

// findUniq([5, 1, 2, 1, 2, 3, 4, 3, 4]);
function findUniq(arr) {
    // Sort the array to ensure that the unique number is at the beginning or end
    arr.sort((a, b) => a - b);
    console.log(arr);

    // Compare the first two elements to determine which one is unique
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}

// Test cases
console.log(findUniq([5, 1, 2, 1, 2, 3, 4, 5, 4])); // Should return 2
console.log(findUniq([0, 0, 0.55, 0, 0])); // Should return 0.55
