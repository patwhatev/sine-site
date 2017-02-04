// image paths
var images = 
	[
	 "assets/62750004.JPG",
	 "assets/62750005.JPG",
	 "assets/62750006.JPG",
	 "assets/62750008.JPG",
	 "assets/62750010.JPG",
	 "assets/62750011.JPG",
	 "assets/62750012.JPG",
	 "assets/62750013.JPG",
	 "assets/62750017.JPG",
	 "assets/62750018.JPG",
	 "assets/62750019.JPG",
	 "assets/62750020.JPG",
	 "assets/62750021.JPG",
	 "assets/62750022.JPG",
	 "assets/62750024.JPG",
	 "assets/62750026.JPG",
	 "assets/62760002.JPG",
	 "assets/62760003.JPG",
	 "assets/62760005.JPG",
	 "assets/62760008.JPG",
	 "assets/62760010.JPG",
	 "assets/62760011.JPG",
	 "assets/62760012.JPG",
	 "assets/62770001.JPG",
	 "assets/62770008.JPG",
	 "assets/62770014.JPG",
	 "assets/62770015.JPG",
	 "assets/62770019.JPG",
	 "assets/62770020.JPG",
	 "assets/62770021.JPG",
	 "assets/IMG_0101.JPG",
	 "assets/IMG_0352.JPG",
	 "assets/IMG_0415.PNG",
	 "assets/IMG_0498.JPG",
	 "assets/IMG_0577.PNG",
	 "assets/IMG_0618.PNG",
	 "assets/IMG_0725.JPG",
	 "assets/IMG_0741.PNG",
	 "assets/IMG_0767.JPG",
	 "assets/IMG_0768.JPG",
	 "assets/IMG_0790.PNG",
	 "assets/IMG_0804.JPG",
	 "assets/IMG_0813.JPG",
	 "assets/IMG_0883.PNG",
	 "assets/IMG_0950.JPG",
	 "assets/IMG_0961.JPG",
	 "assets/IMG_0970.JPG",
	 "assets/IMG_0975.JPG",
	 "assets/IMG_0997.PNG",
	 "assets/IMG_1005.PNG",
	 "assets/IMG_1123.JPG",
	 "assets/IMG_1125.PNG",
	 "assets/IMG_1129.JPG",
	 "assets/IMG_1305.JPG",
	 "assets/IMG_1352.JPG",
	 "assets/IMG_1358.PNG",
	 "assets/IMG_1365.JPG",
	 "assets/IMG_1373.JPG",
	 "assets/IMG_1382.JPG",
	 "assets/IMG_1383.JPG",
	 "assets/IMG_1409.JPG",
	 "assets/IMG_1411.PNG",
	 "assets/IMG_1412.PNG",
	 "assets/IMG_1414.JPG",
	 "assets/IMG_1414.PNG",
	 "assets/IMG_1426.JPG",
	 "assets/image1 (2).JPG",
	 "assets/image11.PNG",
	 "assets/image2 (2).JPG",
	 "assets/image5.JPG",
	 "assets/image7.JPG",
	 "assets/image8.JPG",
	 "assets/image9.JPG"
	]

$( document ).ready(function() {
	// append images into the DOM
	for(img in images) {
		// create cell
		var div = document.createElement("div");
		// assign class
		div.setAttribute("class", "cell");
		div.style.backgroundImage = `url(${images[img]})`;
		var canvas = document.getElementById("defaultCanvas0");
		var cell = document.getElementById("inner");
		// if(canvas !== null) {
			cell.appendChild(div);
		// };
	}
});