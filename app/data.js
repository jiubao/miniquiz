var quizzes = [{
	code:
"(function(){\n\
    return typeof arguments;\n\
})();",
	options: ["\"object\"", "\"array\"", "\"arguments\"", "\"undefined\""],
	index: 0
}, {
	code:
"var f = function g(){ return 23; };\n\
typeof g();",
	options: ["\"number\"", "\"undefined\"", "\"function\"", "Error"],
	index: 3
}, {
	code:
"(function(x){\n\
    delete x;\n\
    return x;\n\
})(1);",
	options: ["1", "null", "undefined", "Error"],
	index: 0
}, {
	code:
"var y = 1, x = y = typeof x;\n\
x;;",
	options: ["1", "\"number\"", "undefined", "\"undefined\""],
	index: 3
}, {
	code:
"(function f(f){\n\
    return typeof f();\n\
})(function(){ return 1; });",
	options: ["\"number\"", "\"undefined\"", "\"function\"", "Error"],
	index: 0

}];
