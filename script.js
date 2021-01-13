/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const fizzBuzz = (arr) => {
	arr.forEach((num) => {
		if (num % 3 == 0 && num % 5 == 0) {
			num = 'FizzBuzz';
			console.log(num);
		} else if (num % 3 == 0) {
			num = 'Fizz';
			console.log(num);
		} else if (num % 5 == 0) {
			num = 'Buzz';
			console.log(num);
		} else {
			console.log(num);
		}
	});
};

fizzBuzz(arrNumber);
