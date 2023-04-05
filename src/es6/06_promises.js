// devuelve resolve
const aFunction = () => {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve("Ok!!!");
		} else {
			reject("Uppss!!!");
		}
	});
};
aFunction()
	.then((response) => console.log(response))
	.catch((error) => console.log(error));

// devuelve reject
const anotherFunction = () => {
	return new Promise((resolve, reject) => {
		if (false) {
			resolve("Ok!!!");
		} else {
			reject("Uppss!!!");
		}
	});
};
anotherFunction()
	.then((response) => console.log(response))
	.catch((error) => console.log(error));
