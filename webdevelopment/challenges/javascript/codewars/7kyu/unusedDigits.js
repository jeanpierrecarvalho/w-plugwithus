//! 15-04-2022

const unusedDigits = (...args) => {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		.filter(
			(x) =>
				!args
					.map((numb) => Array.from(String(numb), (num) => Number(num)))
					.flat()
					.sort()
					.includes(x)
		)
		.join('');
};

console.log(unusedDigits(12, 34, 56, 78));
console.log(unusedDigits(2015, 8, 26));

const unusedDigits_solution_1 = (...arr) => {
	var digits = arr.join();

	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
		.filter((x) => !digits.includes(x))
		.join('');
};

console.log(unusedDigits_solution_1(12, 34, 56, 78));
console.log(unusedDigits_solution_1(2015, 8, 26));

const unusedDigits_solution_3 = (...arr) => {
	return `0123456789`
		.split('')
		.filter((b) => `${arr}`.split('').indexOf(b) == -1)
		.join('');
};

console.log(unusedDigits_solution_3(12, 34, 56, 78));
console.log(unusedDigits_solution_3(2015, 8, 26));
