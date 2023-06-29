function isPalindrome(string) {

    // Write your algorithm here
    const stringToArray = string.split('')
  
    const reverseArray = stringToArray.reverse()
  
    const joinToString = reverseArray.join('') 
  
    if (joinToString == string){
      return true;
    }else {
      return false;
    }
  
  }


/* 
  Add your pseudocode here
  initialize your function with an argument
assign it a string value
use split method to convert the string to an array. 
use the reverse method to reverse the string turned to an array characters.
use the join method to join the reversed characters
Use if statements to determine if the joined statement is a palindrome to the entered string. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
