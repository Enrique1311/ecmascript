// Arrays destructuring
let fruits = ["Apple", "Orange"];
let [a, b] = fruits;
console.log(a, b);

// Object destructuring
let user = {
	username: "Enrique",
	age: 46,
	country: "Argentina",
};
let { username, age } = user;
console.log(username, age);

// spread operator
let person = { name: "Javier", age: 46 };
let country = "Argentina";
let data = { id: 1, ...person, country };
console.log(data);

//******************** */
const object1 = {
	name1: "Javier",
	lastName1: "Spinellli",
};
const object2 = {
	age1: 46,
	country1: "Argentina",
};
const object3 = { ...object1, ...object2 };
console.log(object3);

// rest parameters
function sum(number, ...values) {
	console.log(values);
	console.log(number, values[0]);
	return number + values[0];
}
sum(1, 2, 3, 4);
