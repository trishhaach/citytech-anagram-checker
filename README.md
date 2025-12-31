# Anagram Checker

This project checks whether two strings entered by the user are anagrams of each other using a character frequency counting approach.


## Problem Statement

Given two strings, determine whether one string can be formed by rearranging the characters of the other string using all characters exactly once.


## Approach / Steps Used

1. Take two strings as input from the user through the terminal.
2. Convert both strings to lowercase to handle uppercase characters.
3. Check if both strings have the same length. If not, they are not anagrams.
4. Count the frequency of each character in the first string.
5. Reduce the frequency using characters from the second string.
6. If all character counts are zero, the strings are anagrams.


## How to Run the Code (Terminal)

### Prerequisites
- Node.js installed (`node -v` to verify)

### Steps
1. Clone or the repository.
2. Open the terminal and navigate to the project directory.
3. Run the following command and provide input strings

### Command
node anagram.js 
