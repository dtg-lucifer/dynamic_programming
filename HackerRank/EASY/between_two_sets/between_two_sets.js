const GCD = (a, b) => {
	if (b === 0) return a;
	return GCD(b, a % b);
}

const getLCM = (arr) => {
	let ans = arr[0];
	for (let i = 0; i < arr.length; i++) {
		ans = (arr[i] * ans) / (GCD(arr[i], ans));
	}
	return ans;
}

const getGCD = (arr) => {
	let ans = arr[0];
	for (let i = 0; i < arr.length; i++) {
		ans = GCD(ans, arr[i]);
		if (ans === 1) return 1;
	}
	return ans;
}

function getTotalX(a, b) {
	let result = 0;
	let multiple = 0;

	const lcm = getLCM(a);
	const gcd = getGCD(b);

	while (multiple <= gcd) {
		multiple += lcm;
		gcd % multiple === 0 && result++;
	}

	return result;
}

console.log(getTotalX([2, 4], [16, 32, 96]));