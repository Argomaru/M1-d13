// 1. sum of positives and negatives
// Input: sebuah array of numbers
// Output: sebuah array -> [<sum_of_protectives>, <sum_of_negatives>]
// Example Input: [1,3,-4,2,-13,-7]
// Example Output: [6,-24]

// var input = [1, 2, 3, -1, -2, -3];
// var positif = 0;
// var negatif = 0;
// input.forEach((val) => {
//   if (val > 0) {
//     positif += val;
//   } else {
//     negatif += val;
//   }
// });
// var output = [positif, negatif];
// console.log(output);

//v2
function sumor(arr = []) {
  var positif = 0;
  var negatif = 0;
  arr.forEach((val) => {
    if (val > 0) {
      positif += val;
    } else {
      negatif += val;
    }
  });
  return [positif, negatif];
}
console.log(sumor((arr = [1, 2, 3, -1, -2, -3])));

// 2. square all;
// Input: sebuah array of numbers
// Ouput:array of numbers yang sama, tapid sudah dipangkat 2
// Example Input: [1,2,3,4,5,9]
// Example Output: [1,4,9,16,25,81]

// function pangkatarr(isi = []) {
//   let temp = 0;
//   let hasil = [];

//   isi.forEach((val) => {
//     if (isi.includes(val)) {
//       hasil.push((temp = Math.pow(val, 2)));
//     }
//   });
//   return hasil;
// }
// console.log(pangkatarr((isi = [1, 2, 3, 4])));

//map
arra = [1, 2, 3, 4];
function square(arra = []) {
  let resultsq = arra.map((val) => {
    return Math.pow(val, 2);
  });

  return resultsq;
}
console.log(square(arra));

// 3. Plus Minus;
// Input: sebuah array of numbers
//Ouput:
// Example Input: [1,2,3,4,5,9]
// Example Output: [-6]]
//v1
let temp = 0;
let input1 = [1, 2, 3, 4, 5, 9];
input1.forEach((val, idx) => {
  hitungan = idx + 1;
  if (hitungan % 2 == 0) {
    temp -= val;
  } else {
    temp += val;
  }
});
console.log(temp);

//v2
arr = [1, 2, 3, 4, 5, 9];
function plusminus(berisi = []) {
  let result = 0;
  let operator = "plus";

  berisi.forEach((val) => {
    if (operator == "plus") {
      result += val;
      operator = "minus";
    } else if (operator == "minus") {
      result -= val;
      operator = "plus";
    }
  });
  return result;
}
console.log(plusminus(arr));
