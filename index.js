/////////////// 1 - masala ///////////////

// function countVowels(str) {
//   let arr = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
//   let result = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (arr.includes(str[i])) {
//       result++;
//     }
//   }
//   return result;
// }
// console.log(countVowels("Hello World"));

/////////////// 2 - masala ///////////////

// function longestCommonPrefix(arr) {
//   let result = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[0][i].includes(arr[i][i])) {
//       result += arr[i][i];
//     }
//   }
//   return result;
// }
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

/////////////// 3 - masala ///////////////

// function minPairSum(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length / 2; i++) {
//     arr2.push(arr[2 * i] + arr[2 * i + 1]);
//   }
//   let minSum = Math.min(...arr2);
//   let num = arr2.indexOf(minSum);
//   return [arr[2 * num], arr[2 * num + 1]];
// }
// console.log(minPairSum([1, 60, -10, 70, -80, 85, 0, -12]));

/////////////// 4 - masala ///////////////

// function sumDigitsInString(str) {
//   let arr = str.split("");
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!Number.isNaN(parseInt(arr[i]))) {
//       res += parseInt(arr[i]);
//     }
//   }
//   return res;
// }
// console.log(sumDigitsInString("a1b2c3d4"));

/////////////// 5 - masala ///////////////

// function allPalindromeSubstrings(str) {
//   let arr = str.split("");
//   let arr2 = str.split("").reverse();
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr2[i]) {
//       newArr.push(arr[i]);
//     }
//   }
//   for (let j = 0; j < arr.length - 2; j++) {
//     if (
//       arr[j] + arr[j + 1] + arr[j + 2] ===
//       arr2[j] + arr2[j + 1] + arr2[j + 2]
//     ) {
//       newArr.push(arr[j] + arr[j + 1] + arr[j + 2]);
//     }
//   }
//   return newArr;
// }
// console.log(allPalindromeSubstrings("ababa"));

/////////////// 6 - masala ///////////////

// function findPairs(arr, sum) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] + arr[j] == sum) {
//         let res = [arr[i], arr[j]];
//         newArr.push(res);
//       }
//     }
//   }
//   return newArr;
// }
// console.log(findPairs([0, 1, 2, 3, 4, 5], 5));

/////////////// 7 - masala ///////////////

// function findPalindromes(num1, num2) {
//   let arr = [];
//   for (let i = num1; i < num2; i++) {
//     a = i.toString().split("").reverse().join("");
//     if (i == parseInt(a)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(findPalindromes(100, 150));

/////////////// 8 - masala ///////////////

// let arr = [0, 1];
// for (let i = 0; i < 100; i++) {
//   let res = arr[i] + arr[i + 1];
//   arr.push(res);
// }

// function closestFibanacci(num) {
//   for (let j = 0; j < arr.length; j++) {
//     if (num > arr[j] && arr[j + 1] > num) {
//       return (result = [arr[j], arr[j + 1]]);
//     }
//   }
// }
// console.log(closestFibanacci(10));

/////////////// 9 - masala ///////////////

// function minMaxDifference(arr) {
//   let min = Math.min(...arr);
//   let max = Math.max(...arr);
//   let result = max - min;
//   return result;
// }
// console.log(minMaxDifference([3, 1, 4, 2, 5, 9, 13]));

/////////////// 10- masala ///////////////

// function spiralOrder(arr) {
//   let a = arr[1][arr[1].length - 1];
//   let b = arr[2].reverse();
//   let c = arr[1].splice(0, arr[1].length - 1);
//   return [...arr[0], a, ...b, ...c];
// }
// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

///////////Qo'shimcha masalalar///////////

/////////////// 1 - masala ///////////////

// function myFunc(str) {
//   let obj = {};
//   let arr = [];
//   let arr2 = [];
//   for (let i = 0; i < str.length; i++) {
//     let res = str[i];
//     if (obj[res]) {
//       obj[res]++;
//     } else {
//       obj[res] = 1;
//     }
//   }
//   for (let key in obj) {
//     arr.push(key);
//     arr2.push(obj[key]);
//   }
//   let maxNum = Math.max(...arr2);
//   let num = arr2.indexOf(maxNum);
//   return arr[num];
// }
// console.log(myFunc("javascript"));

/////////////// 2 - masala ///////////////

// function fibonacciSequence(num) {
//   let arr = [0, 1];
//   for (let i = 0; i < num - 2; i++) {
//     let res = arr[i] + arr[i + 1];
//     arr.push(res);
//   }
//   return arr;
// }
// console.log(fibonacciSequence(10));

/////////////// 3 - masala ///////////////

// function removeVowels(str) {
//   let arr = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (arr.includes(str[i])) {
//       result += "";
//     } else {
//       result += str[i];
//     }
//   }
//   return result;
// }
// console.log(removeVowels("Hello World"));

/////////////// 4 - masala ///////////////

// function minSumPair(arr) {
//   let sortedArr = arr.sort((a, b) => a - b);
//   let sum = sortedArr[0] + sortedArr[1];
//   return sum;
// }
// console.log(minSumPair([3, 8, 5, 2, 7]));