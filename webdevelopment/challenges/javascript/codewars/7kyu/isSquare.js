//! 16-04-2022

// Exponentiation **

const isSquare = (n) => {
	return n ** 0.5 % 1 == 0 ? true : false;
};

console.log(`n = -1 | ${isSquare(-1)}`); // false
console.log(`n = 0 | ${isSquare(0)}`); // true
console.log(`n = 3 | ${isSquare(3)}`); // false
console.log(`n = 4 | ${isSquare(4)}`); // true
console.log(`n = 25 | ${isSquare(25)}`); // true
