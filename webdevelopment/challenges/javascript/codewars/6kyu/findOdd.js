//! 16-04-2022

const findOdd = (n) => {
	let aCount = new Map(
		[...new Set(n)].map((x) => [x, n.filter((y) => y === x).length])
	);

	let map1 = new Map([...aCount].filter(([k, v]) => v % 2 != 0));

	const [firstKey] = map1.keys();

	return firstKey;
};

console.log(
	`Result = 5 | ${findOdd([
		20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
	])}`
);

console.log(`Result = -1 | ${findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])}`);

console.log(
	`Result = 5 | ${findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])}`
);

const findOdd_v2 = (arr) => {
	return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
};

console.log(
	`Result = 5 | ${findOdd_v2([
		20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
	])}`
);

console.log(
	`Result = -1 | ${findOdd_v2([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])}`
);

console.log(
	`Result = 5 | ${findOdd_v2([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])}`
);

const findOdd_v3 = (arr) => {
	return arr.reduce(function (c, v) {
		return c ^ v;
	}, 0);
};

console.log(
	`Result = 5 | ${findOdd_v3([
		20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5,
	])}`
);

console.log(
	`Result = -1 | ${findOdd_v3([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])}`
);

console.log(
	`Result = 5 | ${findOdd_v3([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])}`
);
