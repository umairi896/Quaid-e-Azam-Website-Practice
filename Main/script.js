//In the Name of Allah, the Most Gracious and the Most Merciful

/*-----------------------------------------------------------------------
 * The following code segment was used for getting the current date, day,
 * month and year.
 *-----------------------------------------------------------------------
 */
var topDate = document.getElementsByClassName("left-top-most")[0];

var d = new Date();
var date = d.getDate();
var month = d.getMonth();
var year = d.getFullYear();
var day = d.getDay();
var day_real = "";
var month_real = "";
if (month == 0) {
	month_real = "January";
}
else if (month == 1){
	month_real = "Feburary";
}
else if (month == 2){
	month_real = "March";
}
else if (month == 3){
	month_real = "April";
}
else if (month == 4){
	month_real = "May";
}
else if (month == 5){
	month_real = "June";
}
else if (month == 6){
	month_real = "July";
}
else if (month = 7){
	month_real = "August";
}
else if (month = 8){
	month_real = "September";
}
else if (month = 9){
	month_real = "October";
}
else if (month = 10){
	month_real = "November";
}
else {
	month_real = "December";
}
if (day == 1) {
	day_real = "Monday";
}
else if (day == 2) {
	day_real = "Tuesday";
}
else if (day == 3) {
	day_real = "Wednesday";
}
else if (day == 4) {
	day_real = "Thursday";
}
else if (day == 5) {
	day_real = "Friday";
}
else if (day == 6) {
	day_real = "Saturday";
}
else {
	day_real = "Sunday";
}
topDate.innerHTML = day_real + "   |   " + month_real + " " + date + ", " + year;
/*-------------------------------------------------------------------------
 *
 * ------------------------------------------------------------------------
 */
var stack_head_1 = document.getElementsByClassName("stack-head1")[0];
var stack_head_2 = document.getElementsByClassName("stack-head2")[0];
var stack_head_3 = document.getElementsByClassName("stack-head3")[0];
var stack_head_4 = document.getElementsByClassName("stack-head4")[0];

stack_head_1.addEventListener("click", function() {dynamic_columns(stack_head_1.className)});
stack_head_2.addEventListener("click", function() {dynamic_columns(stack_head_2.className)});
stack_head_3.addEventListener("click", function() {dynamic_columns(stack_head_3.className)});
stack_head_4.addEventListener("click", function() {dynamic_columns(stack_head_4.className)});

/*-------------------------------------------------------------------------
 * The following code was used to find the overflowing element in the HTML document
 * ------------------------------------------------------------------------
 
function overflowDetect(){
	var eq = document.querySelectorAll('*');
	function overflower(el) {
		console.log(el);
		console.log(document.documentElement);
		console.log(el.offsetWidth);
		console.log(document.documentElement.offsetWidth);
		if (el.offsetWidth > document.documentElement.offsetWidth) {
			console.log('This is the element : ', el);
			//https://stackoverflow.com/questions/9780443/how-to-select-all-children-of-an-element-with-javascript-and-change-css-property
			/*The following section deals with selecting all the child elements of class lower-body
			

			var lowerBody = document.getElementsByClassName("lower-body")[0];
			var qauMap = document.getElementsByClassName("qau-map")[0];
			lowerBody.style.display = "flex";
			lowerBody.style.flexDirection = "column";
			lowerBody.style.justifyContent="space-between";
			qauMap.style.position="relative";
			qauMap.style.marginTop="100px";
			var children = document.getElementsByClassName("lower-body")[0].querySelectorAll("*");
			for (var i = 0; i < children.length; i++) {
				if (children[i].nodeName.toLowerCase() == "div") {
					if (children[i]==document.getElementsByClassName("stack-heads-container")[0] || children[i]==document.getElementsByClassName("stack-head1") || children[i]==document.getElementsByClassName("stack-head2") || children[i]==document.getElementsByClassName("stack-heads3")||children[i]==document.getElementsByClassName("stack-heads4")) {
						console.log("true");
						continue;
					}
					children[i].style.width = "100%";
					children[i].style.height = "auto";
					children[i].style.display = "block";
					children[i].style.position = "static";
					children[i].style.height = "auto";
					children[i].style.top="auto";
					children[i].style.bottom="auto";
					children[i].style.right="auto";
					children[i].style.left="auto";
					children[i].style.marginBottom="40px";
					children[i].style.marginLeft="auto";
					children[i].style.wordWrap="break-word !important";
				}
			}
			
			//-------------------------------------------------------------------------

		}

	}
	/*
	for (let i = 0; i < eq.length; i++) {
		overflower(eq[i]);
	}
	
	overflower(document.getElementsByClassName("lower-body")[0]);
}
overflowDetect();

/*
function overflowDetect(){
	var eq = document.querySelectorAll('*');
	function overflower(el) {
		if (el.offsetHeight > document.documentElement.offsetHeight) {
		//	console.log('This is the element : ', el);
			//https://stackoverflow.com/questions/9780443/how-to-select-all-children-of-an-element-with-javascript-and-change-css-property
			/*The following section deals with selecting all the child elements of class lower-body
			*/
/*
			var lowerBody = document.getElementsByClassName("lower-body")[0];
			var qauMap = document.getElementsByClassName("qau-map")[0];
			lowerBody.style.display = "flex";
			lowerBody.style.flexDirection = "column";
			lowerBody.style.justifyContent="space-between";
			qauMap.style.position="relative";
			qauMap.style.marginTop="100px";
			var children = document.getElementsByClassName("lower-body")[0].querySelectorAll("*");
			for (var i = 0; i < children.length; i++) {
				if (children[i].nodeName.toLowerCase() == "div") {
					if (children[i]==document.getElementsByClassName("stack-heads-container")[0] || children[i]==document.getElementsByClassName("stack-head1") || children[i]==document.getElementsByClassName("stack-head2") || children[i]==document.getElementsByClassName("stack-heads3")||children[i]==document.getElementsByClassName("stack-heads4")) {
						console.log("true");
						continue;
					}
					children[i].style.width = "100%";
					children[i].style.height = "auto";
					children[i].style.display = "block";
					children[i].style.position = "static";
					children[i].style.height = "auto";
					children[i].style.top="auto";
					children[i].style.bottom="auto";
					children[i].style.right="auto";
					children[i].style.left="auto";
					children[i].style.marginBottom="40px";
					children[i].style.marginLeft="auto";
					children[i].style.wordWrap="break-word !important";
				}
			}
			
			//-------------------------------------------------------------------------

		}

	}
	for (let i = 0; i < eq.length; i++) {
		overflower(eq[i]);
	}
}
overflowDetect();
*/
/* The following function written, performs the function of opening the navigation bar in devices with lower resolutions
 * -----------------------------------------------------------------------
 */
function showNav() {
	var navButton = document.getElementsByClassName("nav-bar-icon");
	var navImg = navButton[0].getElementsByTagName("img")[0];
	var navBar = document.getElementsByClassName("nav-bar-container");
	var newNav = document.getElementsByClassName("new-nav");
	var newNavA = [];
	for (var i = 0; i < newNav.length; i++){
		newNavA[i] = newNav[i].querySelectorAll("a");
	}
	console.log(newNavA[0]);
	if (navBar[0].style.display != "flex") {
		navBar[0].style.display="flex";
		navBar[0].style.flexDirection = "column";/*
		for (var i = 0; i < newNavA.length; i++) {
			for (var j = 0; j < newNavA[i].length; j++){
				newNavA[i][j].style.display = "block";
				console.log(newNavA.length);
				console.log(i);
			}
		}
		*/
		/*navBar[0].style.display = "block";
		*/navImg.src = "../Images/HomePage/close.png";

	}
	else {
		navBar[0].style.display = "none";
		navImg.src = "../Images/HomePage/nav-bar.png";
	}
	console.log(navBar[0].style.display);
}
//------------------------------------------------------------------------

function dynamic_columns(stack) {
	var stacksContainer = document.querySelectorAll(".stack-heads-container > div");
	console.log(stacksContainer.length);
	for (let i = 0; i <stacksContainer.length; i++) {
		if (stack == stacksContainer[i].className) {
			for(let j = 0; j < stacksContainer.length; j++) {
				if ((i == j) && (stacksContainer[j].style.height != "270px")) {
					stacksContainer[j].style.height = "270px";
					continue;
				}
				else if ((i==j) && (stacksContainer[j].style.height == "270px")){
					stacksContainer[j].style.height = "30px";
				}
				else {

					stacksContainer[j].style.height = "30px";
				}
			}
			break;
		}
	}
	console.log(stacksContainer[1].style.height);
	// Just a random comment
}
