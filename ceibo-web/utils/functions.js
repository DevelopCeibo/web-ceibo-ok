export const getRandomValues = (array, numberOfValues) => {
	const arrayCopy = [...array]
	const shuffled = arrayCopy.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, numberOfValues);
};
