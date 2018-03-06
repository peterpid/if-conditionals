/*
  8.6 conditionals
*/

var a = 5, b = 8.5;
var value = (a * a) - (2 * a * b) - (b * b);
console.log('result: ' + value);

if (value > 0) {
	console.log('result is positive');
} else if (value < 0) {
	console.log('result is negative');
} else {
	console.log('result is zero');
}