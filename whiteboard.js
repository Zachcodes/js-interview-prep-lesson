// 1. Recreate the map method on the Array prototype
let nums = [1, 2, 3, 4, 5, 6];

function map(arr, cb) {
  let newArr = [];
  for (let i of arr) {
    newArr.push(cb(i));
  }
  return newArr;
}

function double(num) {
  return num * 2;
}

map(nums, double);

// 2. Write a function to check if a string is a palindrome (same word spelled backwards)
function checkPal(str) {
  let newStr = str.toLowerCase();
  return (
    newStr
      .split('')
      .reverse()
      .join('') === str.toLowerCase()
  );
}

checkPal('racecar');
checkPal('zach');

//3. Write a function to check if two words are anagrams (use the same combination of letters in different order)
function anagram(str1, str2) {
  let isAnagram = true;
  let dict1 = {};
  let dict2 = {};
  for (let i of str1) {
    if (dict1[i.toLowerCase()]) dict1[i.toLowerCase()] += 1;
    else dict1[i.toLowerCase()] = 1;
  }
  for (let i of str2) {
    if (dict2[i.toLowerCase()]) dict2[i.toLowerCase()] += 1;
    else dict2[i.toLowerCase()] = 1;
  }
  if (Object.keys(dict1).length !== Object.keys(dict2).length) return false;
  for (let key in dict1) {
    if (dict1[key] !== dict2[key]) isAnagram = false;
  }
  return isAnagram;
}

anagram('the', 'eht');

// 4. Write a function that will loop through a list of integers and print the index of each element after a 3 second delay.
let nums2 = [1, 2, 3, 4];

function looper(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => console.log(i), 3000);
  }
}

function looper(arr) {
  for (let i = 0; i < arr.length; i++) {
    (function(index) {
      setTimeout(() => console.log(index), 3000);
    })(i);
  }
}

looper(nums2);

//5. What will the following code snippet output?

var a = Person('a');
var b = new Person('b');
var c = Person;

function Person(name) {
  this.firstName = name;
}

// breaks javascript. a is undefined, so you cant read a property on undefined. since not invoked with new, function returns undefined
console.log(a.firstName);
// this will output b. this is because function was invoked with new creating a new object and returning it, it also assigned first_name
console.log(b.firstName);
// this will output undefined as you are essentially asking for the property on the Person function
console.log(c.firstName);
