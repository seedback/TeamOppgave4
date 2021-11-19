// Indexes:				  0				1				2				3				4
const pokeBeat = [[1, 4], [3, 4], [0, 1], [0, 2], [2, 3]];
const pokeNames = ["Vulpix", "Glaceon", "Geodude", "Cubone", "Turtwig"];
const pokeImages = [
	`<img src="img/vulpix.png" />`,
	`<img src="img/glaceon.png"/>`,
	`<img src="img/geodude.png"/>`,
	`<img src="img/cubone.png" />`,
	`<img src="img/turtwig.png"/>`
]

var playerChoiceIndex;
var aiChoiceIndex;

var textBoxContent;
var textBoxVar;

var playerChoiceDivContent;
var aiChoiceDivContent;

var canPlayerChoose = true;

function playerChoice(choice) {
	if(canPlayerChoose){
		canPlayerChoose = false;
		playerChoiceDivContent = "";
		aiChoiceDivContent = "";

		playerChoiceIndex = choice;
		console.log("playerChoiceIndex:", playerChoiceIndex);
		aiChoice();
		// TODO: Chain function calls below instead of having them run asyncronously
		setTimeout( showPlayerChoice, 0);
		setTimeout(textBox, 0, `You chose ${pokeNames[playerChoiceIndex]}!`, 3000)

		setTimeout(showAiChoice, 5000);
		setTimeout(textBox, 5000, `Your opponent chose ${pokeNames[aiChoiceIndex]}!`, 3000)
		
		setTimeout( findWinner, 10000);
		
		setTimeout(function(){canPlayerChoose = true;}, 14000)
	}
}


function aiChoice() {
  aiChoiceIndex = Math.floor(Math.random() * 5);
  console.log("aiChoiceIndex", aiChoiceIndex);

}

function findWinner() {
  if (pokeBeat[playerChoiceIndex][0] == aiChoiceIndex || pokeBeat[playerChoiceIndex][1] == aiChoiceIndex) {
    textBox(`${pokeNames[aiChoiceIndex]} faints.`, 3000);
  } else if (pokeBeat[aiChoiceIndex][0] == playerChoiceIndex || pokeBeat[aiChoiceIndex][1] == playerChoiceIndex) {
		textBox(`${pokeNames[playerChoiceIndex]} faints.`, 3000);
  } else {
    textBox(`Both pokemon faint.`, 3000)
  }
  pokeBeat[playerChoiceIndex]
}

function showPlayerChoice() {
  // show textbox "You chose X pokemon"
  playerChoiceDivContent = pokeImages[playerChoiceIndex];
  updateView();
}


function showAiChoice() {
  // show textbox "Your opponent chose X pokemon"
  aiChoiceDivContent = pokeImages[aiChoiceIndex];
  updateView();
}

function textBox(text = "", delay = 1000) {
    textBoxVar = "textBoxDiv";
    //textBoxContent = `<div class="${textBoxVar}">${text}</div>`;
		textScroll(text);
		updateView();
		//sleep(2000);
    setTimeout(function(){
			textBoxVar = "hidden";
			textBoxContent = `<div class="${textBoxVar}"></div>`;
			updateView();
		}, delay);
    
}

function textScroll(text, curText = ''){
	curText += text[0];

	if(!text) return;

	textBoxContent = `<div class="${textBoxVar}">${curText}</div>`;
	updateView();
	setTimeout(textScroll, 50, text.slice(1), curText);
}