//This function splits the given arguement's letters and each letter has it's own quotes "".
//Then it reverses the letters in between the quotes.
//Then it joins all the letters so they are a single string with a single pair of quotes.

function FirstReverse(str) {
	console.log(str.split("").reverse().join(""));
}
FirstReverse("hello world");
