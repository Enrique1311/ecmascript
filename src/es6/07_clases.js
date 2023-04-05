// Declaración de una clase
// class User {}

// Innstancia de una clase
//const newUser = new User()

class User2 {
	// Métodos
	greeting() {
		return "Hello";
	}
}

const enrique1311 = new User2();
console.log(enrique1311.greeting());

const dev = new User2();
console.log(dev.greeting());

// Constructor
class User2 {
	constructor() {
		console.log("New user");
	}
	greeting() {
		return "Hello";
	}
}
const javier = new User2();
