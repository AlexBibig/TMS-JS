let phrase = prompt('Enter your phrase', 'anna');
let value = phrase.toLowerCase();
let reverseValue = value;
function isPalindrome() {
  return reverseValue.split('').reverse('').join('');
}
reverseValue = isPalindrome();
if (reverseValue === value) {
  console.log('Your phrase is a Palindrome');
} else {
  console.log('Your phrase is not a Palindrome');
}
