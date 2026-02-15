function isPalindrome(str) {
    
    const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  
   
    const reversedStr = cleanStr.split('').reverse().join('');
  
   
    return cleanStr === reversedStr;
  }
  
  
  const testString1 = "racecar";
  const testString2 = "hello";
  
  console.log(isPalindrome(testString1)); 
  console.log(isPalindrome(testString2)); 
  