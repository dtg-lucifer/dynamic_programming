function breakingRecords(scores) {
	let [min, max] = [0, 0];
	let minCount = 0;
	let maxCount = 0;

	for (let i = 0; i < scores.length; i++) {
		if (scores[i] === 0) {
			min = 0
			continue
		}

		if (i === 0) {
			min = scores[0]
			max = scores[i]
		} else {
			if (scores[i] > max) {
				max = scores[i]
				maxCount++
			}
			if(scores[i] < min) {
				min = scores[i]
				minCount++
			}
		}
	}

	return [maxCount, minCount]
}

console.log(breakingRecords([0, 9, 3, 10, 2, 20])); // [3, 0]