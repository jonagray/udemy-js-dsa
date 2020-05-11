'use strict';

// Multiple pointers pattern 


// For a sorted array, start pointers at each end, and decrement/increment each pointer in a while loop to get to the first pair of numbers that when added together, will equal 0.

let nums = [-4, -3, -2, -1, 0, 1, 2, 5];

let sumZero = function (arr) {
  // Set left and right pointers
  let left = 0;
  let right = arr.length - 1;

  // Start loop where it will continue through the whole array (because this is an ascending sorted array)
  while (left < right) {
    // Set sum condition
    let sum = arr[left] + arr[right];
    // If the sum is 0, return an array with the left and right pointers
    if (sum === 0) {
      return [arr[left], arr[right]];
      // Else, if the sum is greater than 0, we know that the decrementing pointer's number is too high, and we have to continue decrementing it.
    } else if (sum > 0) {
      right--;
      // Else, if the sum is less that 0, we know that our incrementing pointer is too great, so we will increment it by 1. 
    } else {
      left++;
    }
  }
}

sumZero(nums);


// For a sorted array, create a function that counts the unique values in the array

let nums2 = [1,3];

let countUniqueValue = function(arr) {
  // Make sure you account for an empty array
  if (arr.length === 0) {
    return 0;
  }
// Instantiate a variable to be your pointer (the slower of the two)
  let pointer = 0;
// Instantiate a runner variable (one spot ahead of pointer 1) and a for loop where you continue through the length of the array.
  for (let runner = 1; runner < arr.length; runner++) {
    // If the pointer and runner are NOT the same value, increment the pointer by one, and replace that value with the value of the runner. 
    if (arr[pointer] !== arr[runner]) {
      pointer++;
      arr[pointer] = arr[runner];
    }
  }
  // Return the index of the pointer, plus one because indexes start at 0.
  return pointer + 1;
}

countUniqueValue(nums2);