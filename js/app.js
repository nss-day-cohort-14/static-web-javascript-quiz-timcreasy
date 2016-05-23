// ==================== HTML ELEMENTS TO MANIPULATE =======================

// Get user input for height
var heightInput = document.getElementById("heightInput");
// Get user input for char
var charInput = document.getElementById("charToUse");
// Button element
var button = document.getElementById("inputButton");

var numberOfChars = 1;
var charString = "";

// Pine tree object
var pineTree = {
  height: null,
  charToUse: null
};


// ================================= FUNCTIONS =================================

// Function to build tree
function buildTree() {
  numberOfChars = 1;  
  var numberOfSpaces = pineTree.height - 1;
  for(var i = 0; i < pineTree.height; i++) {
    addBlanks(numberOfSpaces);
    buildCharString();
    printCharString();
    numberOfSpaces--;
  }
  charString = "";
}

// Get input from user for height and char, alert if not entered
function getInput() {
  if(charInput.value === "" || heightInput.value === "") {
    alert("Please enter both values to continue");
  } else {
    pineTree.height = heightInput.value;
    pineTree.charToUse = charInput.value;
    buildTree();
  }
}

// Add blanks to offset string
function addBlanks(x) {
  for (; x > 0; x--) {
    charString += " ";
  }
}

// Add characters to properly offset string
function buildCharString() {
  for (var i = 1; i <= numberOfChars; i++) {
    charString += pineTree.charToUse;
  }
  numberOfChars += 2;
}

// Print built string
function printCharString() {
  console.log(charString + "\n");
  charString = "";
}

// Function to deterine if enter pressed
function enterPressed(event) {
  var key = event.which || event.keyCode;
    if (key === 13) {
      getInput();
    }
}

// ================================= EVENT LISTENERS =================================

// Event listeners
button.addEventListener("click", getInput);
heightInput.addEventListener("keypress", enterPressed);
charInput.addEventListener("keypress", enterPressed);