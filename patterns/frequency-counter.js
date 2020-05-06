'use strict';

let same = function(arr1, arr2) {

// Check to see if both inputs are the same length. If they are not, immediately return false.
  if (arr1.length !== arr2.length) {
    return false;
  }

// Create two empty objects that will store sets of the arrays.
  let obj1 = {};
  let obj2 = {};

// Loop through the first array, assigning the value of each index (of the array) to a key in the object, and increment the value of that key by 1. 
  for (let val of arr1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

// Do the same loop for the second array. By the end, you will have two objects with one key for each integer in the array, and a value that is equal to the amount of times that key is seen in the original array.
  for (let val of arr2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

// Loop over the first object by its keys, and if there is no key in the second object equal to the key squared from the first object, return false.
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) {
      return false
    }

// If the value of the corresponding keys in both objects are not equal to each other, return false.
    if (obj2[key ** 2] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

// same([5,1,4], [16,1,25])


// Anagram challenge using frequency pattern
  // Given two strings, return true if the second string is a valid anagram of the first string.

let validAnagram = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  let splitString1 = str1.split("");
  let splitString2 = str2.split("");

  for (let val of splitString1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  for (let val of splitString2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false;
    }

    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }

  return true;
}

validAnagram('texttwisttime', 'timetwisttext');