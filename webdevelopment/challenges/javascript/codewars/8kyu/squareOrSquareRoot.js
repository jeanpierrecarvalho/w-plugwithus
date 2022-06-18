//! 16-04-2022

const squareOrSquareRoot = (arr) => {
	return arr.map((x) =>
		Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x
	);
};

const squareOrSquareRoot_v2 = (arr) => {
	return arr.map((x) => (Math.sqrt(x) % 1 == 0 ? Math.sqrt(x) : x * x));
};

const squareOrSquareRoot_v3 = (arr) => {
	return arr.map((x) => (x ** 0.5 % 1 == 0 ? x ** 0.5 : x * x));
};

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
console.log(squareOrSquareRoot_v2([4, 3, 9, 7, 2, 1]));
console.log(squareOrSquareRoot_v3([4, 3, 9, 7, 2, 1]));
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]));
