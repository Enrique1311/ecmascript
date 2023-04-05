function newUser(name, age, country) {
	var name = name || "Enrique";
	var age = age || 46;
	var country = country || "Argentina";
	console.log(name, age, country);
}
newUser();
newUser("Carolina", 42, "Arg");

function newAdmin(name = "Martina", age = "14", country = "Argentina") {
	console.log(name, age, country);
}
newAdmin();
newAdmin("Santiago", 6, "Arg");
