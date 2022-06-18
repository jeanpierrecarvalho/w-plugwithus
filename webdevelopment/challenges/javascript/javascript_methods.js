// The reduce() method executes a user-supplied "reducer" callback function on each element
// of the array, in order, passing in the return value from the calculation on the preceding element.
// The final result of running the reducer across all elements of the array is a single value.

const reduceMethod = (n) => {
	const initialValue = 0;
	return n.reduce(
		(previousValue, currentValue) => previousValue + currentValue,
		initialValue
	);
};

console.log(
	`Array Used: ${[1, 2, 3, 4]} | Reduce Method: ${reduceMethod([1, 2, 3, 4])}`
);

// The map() method creates a new array populated with the results of calling
// a provided function on every element in the calling array.

const mapMethod = (n) => {
	return n.map((x) => x * 2);
};

console.log(
	`Array Used: ${[1, 2, 3, 4]} | Map Method: ${mapMethod([1, 2, 3, 4])}`
);

// The flat() method creates a new array with all sub-array elements concatenated
// into it recursively up to the specified depth.

const flatMethod = (n) => {
	return n.flat();
};

console.log(
	`Array Used: [1, [2, [1, 2]], 3, 4] | Flat Method: ${flatMethod([
		1,
		[2, [1, 2]],
		3,
		4,
	])}`
);

// The filter() method creates a new array with all elements that pass the test implemented
// by the provided function.
const filterMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

console.log(
	`Array Used: ${[
		'spray',
		'limit',
		'elite',
		'exuberant',
		'destruction',
		'present',
	]} | Filter Method: ${filterMethod([
		'spray',
		'limit',
		'elite',
		'exuberant',
		'destruction',
		'present',
	])}`
);

// The forEach() method executes a provided function once for each array element.
const forEachMethod = (n) => {
	return n.forEach((element) => console.log(element));
};

forEachMethod([1, 2, 3, 4]);

// The findIndex() method returns the index of the first element in the array that
// satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
const findIndexMethod = (n) => {
	const isLargeNumber = (element) => element > 13;
	return n.findIndex(isLargeNumber);
};

console.log(
	`Array Used: ${[5, 12, 8, 130, 44]} | Find Index Method: ${findIndexMethod([
		5, 12, 8, 130, 44,
	])}`
);

const findMethod = (n) => {
	return n.find((element) => element < 9);
};

console.log(
	`Array Used: ${[5, 12, 8, 130, 44]} | Find Method: ${findMethod([
		5, 12, 8, 130, 44,
	])}`
);

const sortMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const concatMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const fillMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const includesMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const reverseMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const someMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const everyMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const sliceMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const indexOfMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const splitMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const assignMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const replaceMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const searchMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const matchMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const valueOfMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const lastIndexOfMethod = (n) => {
	return n.filter((word) => word.length > 6);
};

const flatMapMethod = (n) => {
	return n.filter((word) => word.length > 6);
};
