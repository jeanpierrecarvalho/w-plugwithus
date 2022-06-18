//! 16-04-2022

const digital_root = (n) => {
	let aux = Array.from(String(n), (num) => Number(num)).reduce(
		(prev, curr) => prev + curr,
		0
	);
	return aux > 9 ? digital_root(aux) : aux;
};

const digital_root_v2 = (n) => {
	return ((n - 1) % 9) + 1;
};

const digital_root_v3 = (n) => {
	return (--n % 9) + 1;
};

console.log(`n = 16 | ${digital_root(16)}`);
console.log(`n = 456 | ${digital_root(456)}`);
console.log(`n = 132189 | ${digital_root(132189)}`);
console.log(`n = 493193 | ${digital_root(493193)}`);
console.log(`n = 999999999999999 | ${digital_root(999999999999999)}`);
console.log(`n = 16 | ${digital_root_v2(16)}`);
console.log(`n = 456 | ${digital_root_v2(456)}`);
console.log(`n = 16 | ${digital_root_v3(16)}`);
console.log(`n = 456 | ${digital_root_v3(456)}`);
