# Collage-assignment

## How to Run the Code

1.Save assignment.js and run in Node.js environment to run the functions.

## Function Descriptions

1. `isAnagram(str1, str2)`: Checks if `str1` and `str2` are anagrams.
2. `calculateTotalSpentByCategory(transactions)`: Returns total spending by category.
3. `findLargestElement(numbers)`: Returns the largest number in an array.
4. `isPalindrome(str)`: Checks if `str` is a palindrome.
5. `calculateTime(n)`: Calculates time to sum from 1 to `n`.
6. `countVowels(str)`: Counts vowels in `str`.
7. `sumArray(numbers)`: Sums all numbers in an array.
8. `filterEvenNumbers(numbers)`: Filters even numbers from an array.
9. `findSmallestElement(numbers)`: Finds the smallest number in an array.
10. `reverseString(str)`: Reverses the string `str`.
11. `fibonacci(n)`: Returns the nth Fibonacci number.
12. `removeDuplicates(arr)`: Removes duplicates from `arr`.
13. `countOccurrences(str, char)`: Counts occurrences of `char` in `str`.
14. `findCommonElements(arr1, arr2)`: Finds common elements in two arrays.
15. `sortStrings(arr)`: Sorts an array of strings alphabetically.


# JavaScript Functions: Sample Inputs and Expected Outputs

## 1. `isAnagram`

**Function**: `isAnagram(str1, str2)`

**Description**: Checks if two strings are anagrams.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
isAnagram("listen", "silent");
// Output
true
```

---

## 2. `calculateTotalSpentByCategory`

**Function**: `calculateTotalSpentByCategory(transactions)`

**Description**: Returns total spending by category.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
  const transactions = [
      { itemName: 'item1', category: 'food', price: 10 },
      { itemName: 'item2', category: 'electronics', price: 200 },
      { itemName: 'item3', category: 'food', price: 20 },

  ];
calculateTotalSpentByCategory(transactions);
// Output
[
  { category: 'food', totalSpent: 30 },
  { category: 'electronics', totalSpent: 200 }
]
```

---

## 3. `findLargestElement`

**Function**: `findLargestElement(numbers)`

**Description**: Returns the largest number in an array.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
findLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// Output
10
```

---

## 4. `isPalindrome`

**Function**: `isPalindrome(str)`

**Description**: Checks if `str` is a palindrome.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
isPalindrome("madam");
// Output
true
```

---

## 5. `calculateTime`

**Function**: `calculateTime(n)`

**Description**: Calculates time to sum from 1 to `n`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
calculateTime(1000000);
// Output
3.600000023841858
```

---

## 6. `countVowels`

**Function**: `countVowels(str)`

**Description**: Counts vowels in `str`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
countVowels("Hello");
// Output
2
```

---

## 7. `sumArray`

**Function**: `sumArray(numbers)`

**Description**: Sums all numbers in an array.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
sumArray([1, 2, 3, 4, 5]);
// Output
15
```

---

## 8. `filterEvenNumbers`

**Function**: `filterEvenNumbers(numbers)`

**Description**: Filters even numbers from an array.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
filterEvenNumbers([1, 2, 3, 4, 5]);
// Output
[2, 4]
```

---

## 9. `findSmallestElement`

**Function**: `findSmallestElement(numbers)`

**Description**: Finds the smallest number in an array.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
findSmallestElement([3, 5, 7, 2, 8]);
// Output
2
```

---

## 10. `reverseString`

**Function**: `reverseString(str)`

**Description**: Reverses the string `str`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
reverseString("Hello");
// Output
"olleH"
```

---

## 11. `fibonacci`

**Function**: `fibonacci(n)`

**Description**: Returns the nth Fibonacci number.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
fibonacci(5);
// Output
5
```

---

## 12. `removeDuplicates`

**Function**: `removeDuplicates(arr)`

**Description**: Removes duplicates from `arr`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// Output
[1, 2, 3, 4, 5]
```

---

## 13. `countOccurrences`

**Function**: `countOccurrences(str, char)`

**Description**: Counts occurrences of `char` in `str`.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
countOccurrences("hello", 'l');
// Output
2

```

---

## 14. `findCommonElements`

**Function**: `findCommonElements(arr1, arr2)`

**Description**: Finds common elements in two arrays.

**Sample Inputs and Expected Outputs**:

```javascript
// Input
findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]);
// Output
[3, 4]
```

---

## 15. `sortStrings`

**Function**: `sortStrings(arr)`

**Description**: Sorts an array of strings alphabetically.

**Sample Inputs and Expected Outputs**:

```javascript
//input
sortStrings(["mnb,vcx", "abc", "xyz", "def"])
//output
[ 'abc', 'def', 'mnb,vcx', 'xyz' ]

```
---

## Submission Details

- **Submitting Date**: 2/08/2024

- **Everything is followed as per steps**: Yes

- **Assignment Level**: Easy

- **Code Quality Is Maintained?**: Yes
