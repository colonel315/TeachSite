/**
 * This function finds the greatest common factor between any two numbers.
 *
 * @param Factor1
 * @param Factor2
 * @returns {number}
 * @constructor
 */
var GreatestCommonFactor = function(Factor1, Factor2) {
	var  GreatestCommonFactor = 1;

	if(Factor1 < Factor2) {
		var temp = Factor1;
		Factor1 = Factor2;
		Factor2 = temp;
	}

	for(var i = Factor1; i >= 2; i--) {
		if(Factor1 % i === 0 && Factor2 % i === 0) {
			return i;
		}
	}

	return GreatestCommonFactor;
};

/**
 * Finds the least common multiple between two numbers
 * @param Product1
 * @param Product2
 * @returns {*}
 * @constructor
 */
var LeastCommonMultiple = function(Product1, Product2) {
	if(Product1 > Product2) {
		var temp = Product1;
		Product1 = Product2;
		Product2 = temp;
	}

	for(var i = Product1; i <= Product1*Product2; i+=Product1) {
		console.log("i = ", i);
		for(var j = Product2; j <= i; j+=Product2) {
			if(i%j === 0) {
				return i;
			}
		}
	}
};
/**
 * This function will find a better deal based off of the value of the item, the weight and the type of measurement then returns the
 * product that is the better deal.
 *
 * @param Item1Value
 * @param Weight1
 * @param Measurement1
 * @param ItemName1
 * @param Item2Value
 * @param Weight2
 * @param Measurement2
 * @param ItemName2
 * @param Equal
 * @returns {*}
 * @constructor
 */
var BetterDeal = function(Item1Value, Weight1, Measurement1, ItemName1, Item2Value, Weight2, Measurement2, ItemName2, Equal) {
	if(Measurement1 === "pound" && Measurement2 === "ounce") {
		Weight1 *= 16;
	}
	else if(Measurement1 === "kilogram" && Measurement2 === "ounce") {
		Weight1 *= 35.27396195;
	}
	else if(Measurement1 === "pound" && Measurement2 === "gram") {
		Weight1 *= 453.59237;
	}
	else if(Measurement1 === "gram" && Measurement2 === "kilogram") {
		Weight2 *= 1000;
	}
	else if(Measurement1 === "gram" && Measurement2 === "ounce") {
		Weight2 *= 28.34952313;
	}

	var Price1 = Weight1 * Item1Value;
	var Price2 = Weight2 * Item2Value;

	if(Price1 > Price2) {
		return ItemName1;
	}
	else if(Price1 < Price2) {
		return ItemName2;
	}
	else {
		return Equal;
	}
};

/**
 * Takes in two numbers and finds the greatest number that it can divide into evenly for standard division algorithm.
 * Starts at the first number and expands the substring until it gets to the length of the dividend.
 * If quotient ever becomes greater than 0 then it will break out of loop and return the quotient.
 *
 * @param divisor
 * @param dividend
 * @returns {string}
 * @constructor
 */
var HighestDivide = function(divisor, dividend) {
	var Quotient = 0;

	var tempDividend = "";

	var Dividend = dividend.toString();

	for(var i = 1; i <= Dividend.length; i++) {
		tempDividend = Dividend.substring(0, i);
		parseInt(tempDividend);
		for(var j = divisor; j <= tempDividend; j += divisor) {
			Quotient++;
		}
		if(Quotient > 0) {
			return Quotient.toString();
		}
	}
};

/**
 * Another step for the standard algorithm for division. This takes in two values and subtracts them to return that value.
 *
 * @param dividend
 * @param subtractor
 * @returns {number}
 * @constructor
 */
var SubtractDividend = function(dividend, subtractor) {
	if(parseInt(dividend.toString().substring(0, 2)) >= subtractor) {
		return parseInt(dividend.toString().substring(0, 2)) - subtractor;
	}
	else if(parseInt(dividend.toString().substring(0, 3)) >= subtractor) {
		return parseInt(dividend.toString().substring(0, 3)) - subtractor;
	}
	else {
		return dividend - subtractor;
	}
};

/**
 * This function will take in a number and find the wanted amount of last characters of that value.
 * @param dividend
 * @param amountOfCharacters
 * @returns {Number}
 */
var grabLastDividend = function(dividend, amountOfCharacters) {
	var lastDividend = dividend.toString();
	lastDividend = lastDividend.substring(lastDividend.length - amountOfCharacters, lastDividend.length);
	return parseInt(lastDividend);
};

/**
 * Finds a factor
 * @param product
 * @param factor
 * @returns {boolean}
 */
var isFactor = function(product, factor) {
	return product % factor === 0;
};

/**
 * Creates an HTML element
 * @param Element
 * @param leftPosition
 * @param topPosition
 * @param className
 * @param idName
 * @param textVal
 * @param inputType
 */
var createHTMLElement = function(Element, leftPosition, topPosition, className, idName, textVal, inputType) {
	$(Element, {
		css: {
			position: 'absolute',
			left: leftPosition,
			top: topPosition
		},
		class: className,
		id: idName,
		text: textVal,

		type: inputType
	})
		.appendTo('body');
};

var findFactors = function(product) {
	var Factors = [];
	var index = 0;
	for(var i = 1; i <= Math.sqrt(product); i++) {
		if(isFactor(product, i)) {
			Factors[index] = i;
			Factors[index + 1] = product / i;
			index += 2;
		}
	}

	if(product%Math.sqrt(product) === 0) {
		Factors = $.grep(Factors, function(Element) {
			return Element != Math.sqrt(product);
		});
		Factors[Factors.length] = Math.sqrt(product);
	}
	return Factors;
};