// 1: Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.

function areAnagrams(str1, str2) {
      let n = str1.length;
      let m = str2.length;
    
      if (n !== m) {
        return false;
      }
    
      let str1Arr = str1.split('').sort();
      let str2Arr = str2.split('').sort();
      return str1Arr.join('') === str2Arr.join('');  
}
console.log(areAnagrams('listen', 'silent'));

//___________________________________________________________________________________________________________________________

// 2: Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
// and returns a list of objects where each object is unique category-wise and has total price spent as its value.
function calculateTotalSpentByCategory(transactions) {  
      const totals = {};
  
      transactions.forEach(transaction => { // loop through each transaction
          const category = transaction.category;
          const price = transaction.price;
  
          if (totals[category]) {   // if category already exists in totals, add the price to it
              totals[category] += price;
          } else {                  // if category does not exist in totals, create a new category and add the price to it
              totals[category] = price;
          }
      });
  
      return Object.keys(totals).map(category => ({ // return an array of objects, each object contains category and totalSpent
          category: category,
          totalSpent: totals[category]
      }));
  }
  
  // Example usage:
  const transactions = [
      { itemName: 'item1', category: 'food', price: 10 },
      { itemName: 'item2', category: 'electronics', price: 200 },
      { itemName: 'item3', category: 'food', price: 20 },

  ];
  
  console.log(calculateTotalSpentByCategory(transactions));
  
//___________________________________________________________________________________________________________________________

// 3: Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
function findLargestElement(numbers) {
    let max = numbers[0];

    for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    console.log(max);
}
console.log(findLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//___________________________________________________________________________________________________________________________

// 4: Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
function isPalindrome(str) {
      let n = str.length;
      let m = 0;

      while( m < n-1){
              if(str[m] !== str[n-1]){
                    return false;
              }
              m++;
              n--;
        }
      return true;
}
console.log(isPalindrome('madam'));

//___________________________________________________________________________________________________________________________

// 5: Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
function calculateTime(n) {
      let start_time = new Date().getTime();

      let sum = 0;

      for(let i=1;i<=n;i++){
          sum += i;
      }

      let end_time = new Date().getTime();

      return end_time - start_time;
}
console.log(calculateTime(1000000));

//___________________________________________________________________________________________________________________________
    
// 6: Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
function countVowels(str) {
      let n = str.length;
      let cnt = 0;

      for(let i = 0;i < n; i++){
            if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
                cnt++;
            }
      }
      return cnt;
}
console.log(countVowels('hello'));

//___________________________________________________________________________________________________________________________

// 7: Write a function `sumArray` that takes an array of numbers as input and returns the sum of all the numbers.
function sumArray(numbers) {
      let n = numbers.length;

      let sum = 0;

      for(let i = 0;i < n; i++){
          sum += numbers[i];
      }
      return sum;
}
console.log(sumArray([1, 2, 3, 4, 5]));

//___________________________________________________________________________________________________________________________

// 8: Implement a function `filterEvenNumbers` that takes an array of numbers and returns a new array containing only the even numbers.
function filterEvenNumbers(numbers) {
      let n = numbers.length;
      let even_numbers = [];

      for(let i = 0;i < n; i++){
              if(numbers[i] % 2 === 0){
                    even_numbers.push(numbers[i]);
              }
        }
      return even_numbers;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//___________________________________________________________________________________________________________________________

// 9: Write a function `findSmallestElement` that takes an array of numbers and returns the smallest element.
function findSmallestElement(numbers) {
      let n = numbers.length;

      let smallest_num = numbers[0];

      for(let i = 0;i < n; i++){ 
              if(numbers[i] < smallest_num){
                    smallest_num = numbers[i];
              }
      }
      return smallest_num;
}
console.log(findSmallestElement([1, -2, -3, 4, 5, 6, 7, 8, 9, 10]));

//___________________________________________________________________________________________________________________________
    
// 10: Create a function `reverseString` that takes a string and returns the string reversed.
function reverseString(str) {
      let n = str.length - 1;

      let reversed_str = '';
      while(n >= 0){
            reversed_str += str[n];
            n--;
      }
      return reversed_str;
}
console.log(reverseString('hello'));

//___________________________________________________________________________________________________________________________
    
// 11: Write a function `fibonacci` that takes a number `n` and returns the `n`th number in the Fibonacci sequence.
function fibonacci(n) {
      if(n === 0){
          return 0;
      }
      if(n === 1){
          return 1;
      }
      return fibonacci(n-1) + fibonacci(n-2);      
}
console.log(fibonacci(5));

//___________________________________________________________________________________________________________________________

// 12: Implement a function `removeDuplicates` that takes an array and returns a new array with duplicate values removed.
function removeDuplicates(arr) {
      let n = arr.length;
      let unique_arr = [];

      for(let i = 0;i < n; i++){
            if(unique_arr.indexOf(arr[i]) === -1){
                unique_arr.push(arr[i]);
            }
      }
      return unique_arr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]));
    
// 13: Write a function `countOccurrences` that takes a string and a character and returns the number of times the character appears in the string.
function countOccurrences(str, char) {
      let n = str.length;
      let cnt = 0;
      
      for(let i = 0;i < n; i++){
            if(str[i] === char){
                cnt++;
            }
      }     

      return cnt;
}
console.log(countOccurrences('hello', 'l'));

// 14: Create a function `findCommonElements` that takes two arrays and returns a new array containing the elements that are present in both arrays.
function findCommonElements(arr1, arr2) {
      let n = arr1.length;
      let m = arr2.length;
      let common_elements = [];

      for(let i = 0;i < n; i++){
            for(let j = 0;j < m; j++){
                if(arr1[i] === arr2[j]){
                    common_elements.push(arr1[i]);
                }
            }
      }
      return common_elements;
    }
console.log(findCommonElements([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

    // 15: Implement a function `sortStrings` that takes an array of strings and returns the array sorted in alphabetical order.
function sortStrings(arr) {  // Your code here }
      let n = arr.length;
      arr.sort();
      return arr;
}     
    
console.log(sortStrings(["mnb,vcx", "abc", "xyz", "def"]));
    


    

