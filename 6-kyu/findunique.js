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
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// The above code is correct but not applicable for bigin and infinity.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function findUniq(arr) {
    // Sort the array to ensure that the unique number is at the beginning or end
    arr.sort((a, b) => a - b);      //expalination is given below,
    console.log(arr);

    // Compare the first two elements to determine which one is unique
    if (arr[0] !== arr[1]) {
        return arr[0];
    } else {
        return arr[arr.length - 1];
    }
}

/*
 arr.sort((a, b) => a - b);
    console.log(arr); explain this in details
ChatGPT
Certainly! The line arr.sort((a, b) => a - b); is sorting the elements in the array arr.
Let's break down this code step by step:

arr is an array containing numeric values.

The sort() method is called on the array arr. This method is used to sort the elements of an 
array in place, which means it modifies the original array.

Inside the sort() method, there is a comparison function passed as an argument: (a, b) => a - b. 
This function is used to determine the order in which elements should be sorted.

a and b are two elements from the array that are being compared.
The expression a - b is used as the comparison criterion.
The comparison function (a, b) => a - b subtracts b from a. The result of this subtraction can 
be positive, negative, or zero, depending on the relationship between a and b:

If a is greater than b, the result will be a positive number.
If a is less than b, the result will be a negative number.
If a is equal to b, the result will be zero.
Based on the comparison results, the sort() method rearranges the elements in ascending order.
Elements that result in a negative value when compared will come before those that result in 
a positive value. Elements that result in zero when compared are considered equal and maintain
their relative order.

After sorting is complete, the array arr is modified in place, and its elements are now sorted 
in ascending order.                                                                             */

