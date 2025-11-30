const path = require("node:path");
function findKthPositive(arr, k) {
    let previous = 0; 
    for (let i = 0; i < arr.length; i++) {
        const missingInSegment = arr[i] - previous - 1; 

        if (k <= missingInSegment) {
                        return previous + k;
        }

        k -= missingInSegment;

        previous = arr[i];
    }

    return arr[arr.length - 1] + k;
}

const arr1 = [2, 3, 4, 7, 11];
const k1 = 5;
const result1 = findKthPositive(arr1, k1);

console.log(`\n--- Example 1 ---`);
console.log(`${result1}`); 

const arr2 = [1, 2, 3, 4];
const k2 = 2;
const result2 = findKthPositive(arr2, k2);

console.log(`\n--- Example 2 ---`);
console.log(`${result2}`); 
