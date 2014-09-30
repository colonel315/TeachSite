$(document).ready(function() {
	paper = Raphael("ratios");

	paper.text(200, 200, "6")
		.animate({
			"font-size": 100,
			fill: "45-#00f011-#006ef0"
		});
	paper.circle(245, 175, 10)
		.animate({
			fill: "45-#00f011-#006ef0"
		});
	paper.circle(245, 210, 10)
		.animate({
			fill: "45-#00f011-#006ef0"
		});
	paper.text(310, 200, "10")
		.animate({
			"font-size": 100,
			fill: "45-#00f011-#006ef0"
		});
});