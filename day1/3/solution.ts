const name = "sAaD fArHaN";

// lowercase
console.log(name.toLowerCase());

// uppercase
console.log(name.toUpperCase());

// titlecase
let result = "";
name.split(" ").map((word, index) => {
	if (index === 0) {
		result += word[0].toUpperCase() + word.slice(1).toLowerCase();
	} else {
		result += ` ${word[0].toUpperCase() + word.slice(1).toLowerCase()}`;
	}
});

console.log(result);

export { };