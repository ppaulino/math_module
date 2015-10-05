module.exports = function(a, b) {
	return {
		add: function(a, b) {
			console.log("the sum is:", a + b);
		},
		multiply: function(a, b) {
			console.log("the product is:", a * b);
		},
		square: function(a) {
			console.log("the square of" + a + " is:", a * a);
		},
		random: function(a, b) {
			console.log("the random number is:", Math.floor(Math.random() * b) + 1);
		}
	};
}