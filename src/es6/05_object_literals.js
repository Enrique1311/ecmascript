// enahced object literals
function newUser(user, age, country, usedId) {
	return {
		// se asignan los valores automáticamente
		user,
		age,
		country,
		id: usedId, // si hay un valor no asignado previamente, se lo puede asignar de la manera clásica
	};
}
console.log(newUser("Enrique", 46, "Arg", 1));
