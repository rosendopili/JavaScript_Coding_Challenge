/*Create a function that takes any non-negative integer as an argument and return it with its digits in descending order.
Examples:
Input: 21445 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321*/


function numSort(num){
  return num.toString()//converts the passed number into a string
            .split('')//splits string into an array of strings
            .sort(function(a, b){
              return b - a})//comparison function sorts array from greatest to least value
            .join(''); //joins the sorted array back into a single string
}

console.log(numSort(21445));
console.log(numSort(145263));
console.log(numSort(123456789));

/*Given a string of words, return the length of the shortest word(s). The given data will always be a string and will never be empty.
Examples:
Input: 'Test, this is a test' Output: 1
Input: 'The dog’s mother was happy' Output: 3
Input: 'Extraordinarily appetizing pineapple!': Output: 9 */

function shortestLength(sentence) {

    let sortedSentence =
      sentence.replace(/[!-@]/, '') //replaces all chars falling                             between !-@ with an empty space
              .split(" ") //splits string into array of strings
              .sort(function(a, b){
                return a.length - b.length}); //sort comparison function- sorts array of strings from shortest to longest length

    return sortedSentence[0].length;
    //returns length of the first index value of new sorted array
}

console.log(shortestLength('Test, this is a test'));
console.log(shortestLength('The dog\'s mother was happy'));
console.log(shortestLength('Extraordinarily appetizing pineapple!'));

// last test case returning 10. \! is being counted as part of word length

/*Given a number return the sum of all the multiples of 3 or 5 below the given number.
Examples:
Input: 10 Output: 23
Input: 20 Output: 78 */

function sumOf(num) {
  let sum = 0; //declaring a storage variable for all summed values that meet conditional statement criteria.
  for (let i = 1; i < num; i++) {
    if (i % 3 == 0 || i % 5 == 0){
      //multiples of 3 and 5 are added to sum
      sum += i;
    }
  }
  return sum;
}

console.log(sumOf(10));
console.log(sumOf(20));

/*Write a function that takes in an array as an argument. The function moves all of the zeros to the end of the array while ensuring the order of the other elements are unchanged.
Example:
Input: ['Hello','World’,3,1,0,9,0,1,3,9,true]: Output: ['Hello','World’,3,1,9,1,3,9,true,0,0,] */

function filterZero(arr) {
  let zero = arr.filter(val =>{
    return val === 0;
  });
  //zero variable creates a new array containing only 0s from original array
  let noZero = arr.filter(val => {
    return val !== 0;
  });
  //noZero variable creates a new array containing all elements not equal to 0 from the original array
  return noZero.concat(zero);
  //concat both arrays to return the desired output
}

console.log(filterZero(['Hello', 'World', 3, 1, 0, 0, true, 0, 9]));
