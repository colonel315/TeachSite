GreatestCommonFactor = function(Factor1, Factor2) {
	var greatestCommonFactor = 1;

	if(Factor1 < Factor2) {
		temp = Factor1;
		Factor1 = Factor2;
		Factor2 = temp;
	}

	for(var i = 2; i <= Factor1; i++) {
		if(Factor1%i === 0 && Factor2%i === 0) {
			greatestCommonFactor = i;
		}
	}

	return greatestCommonFactor;
};
BetterDeal = function(Item1Value, Weight1, Measurement1, ItemName1, Item2Value, Weight2, Measurement2, ItemName2, Equal) {
	var Price1 = 0;
	var Price2 = 0;

	if(Measurement1 === "pound" && Measurement2 === "ounce") {
		Weight1*=16;
	}
	else if(Measurement1 === "kilogram" && Measurement2 === "ounce") {
		Weight1*=35.27396195;
	}
	else if(Measurement1 === "pound" && Measurement2 === "gram") {
		Weight1*=453.59237;
	}
	else if(Measurement1 === "gram" && Measurement2 === "kilogram") {
		Weight2*=1000;
	}
	else if(Measurement1 === "gram" && Measurement2 === "ounce") {
		Weight2*=28.34952313;
	}

	Price1 = Weight1*Item1Value;
	Price2 = Weight2*Item2Value;

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
var HighestDivide = function(divisor, dividend) {
	var Quotient = 0;

	var tempDividend = "";

	var Dividend = dividend.toString();

	for(var i = 2; i <= Dividend.length; i++) {
		tempDividend = Dividend.substring(0, i);
		parseInt(tempDividend);
		for(var j = divisor; j <= tempDividend; j += divisor) {
			Quotient++;
		}
		if(Quotient > 0) {
			break;
		}
	}

	return Quotient.toString();
};
var SubtractDividend = function(dividend, subtractor) {
	Difference = "";

	console.log("parseInt(dividend.toString().substring(0, 2)) - subtractor = ", parseInt(dividend.toString().substring(0, 2)) - subtractor);
	return SubtractDividend = parseInt(dividend.toString().substring(0, 2)) - subtractor;
};