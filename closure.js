A closure is an inner function that has access to the variables in the outer (enclosing) function’s scope chain. 
The closure has access to variables in three scopes; specifically: 
(1) variable in its own scope, 
(2) variables in the enclosing function’s scope, and 
(3) global variables.

//Example
var globalVar = "xyz";

(function outerFunc(outerArg) {
	var outerVar = a;
	(function innerFunc(innerArg) {
		var innerVar = b;
		console.log("globalVar is", globalVar); //returns "globalVar is xyz"
		console.log("outerArg is", outerArg); //returns "outerArg is 123"
		console.log("innerArg is", innerArg); //returns "innerArg is 456"
		console.log("outerVar is", outerVar); //returns "outerVar is a"
		console.log("innerVar is", innerVar); //returns "innerVar is b"
	})(456)
})(123)