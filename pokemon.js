// Indexes:				  0				1				2				3				4
const pokeBeat = [[1, 4], [3, 4], [0, 1], [0, 2], [2, 3]];
const pokeNames = ["Vulpix", "Glaceon", "Geodude", "Cubone", "Turtwig"];
const pokeImages = [
	`<img src="img/vulpix.png" />`,
	`<img src="img/glaceon.png"/>`,
	`<img src="img/geodude.png"/>`,
	`<img src="img/cubone.png" />`,
	`<img src="img/turtwig.png"/>`
];

var playerChoiceIndex;
var aiChoiceIndex;

var textBoxContent;
var textBoxVar;

var playerChoiceDivContent;
var playerChoiceAnimClass;
var aiChoiceDivContent;
var aiChoiceAnimClass;

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
		
		setTimeout(textBox, 0, `You chose ${pokeNames[playerChoiceIndex]}!`, 2900)
		setTimeout(showPlayerChoice, 3000);

		setTimeout(textBox, 5000, `Your opponent chose ${pokeNames[aiChoiceIndex]}!`, 2900)
		setTimeout(showAiChoice, 8000);
		
		setTimeout( findWinner, 10000);
		
		setTimeout(function(){canPlayerChoose = true; showChoices();}, 14000)

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
	playerChoiceAnimClass = "playPlayerEnter";
  playerChoiceDivContent = pokeImages[playerChoiceIndex];
  updateView(0);
}


function showAiChoice() {
  // show textbox "Your opponent chose X pokemon"
	aiChoiceAnimClass = "playAiEnter";
  aiChoiceDivContent = pokeImages[aiChoiceIndex];
  updateView(1);
}

function textBox(text = "", delay = 1000) {
    textBoxVar = "textBoxDiv";
    //textBoxContent = `<div class="${textBoxVar}">${text}</div>`;
		textScroll(text);
		updateView();
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

function showChoices() {
	textBoxVar = "textBoxDiv";
	textBoxContent = `
					<div class="${textBoxVar}">
						<div class="pokemonSelectTitle">Choose your Pökèmon:</div>
						<div class="pokemonSelect">
							<div class="pokemonSelectTile" onclick="playerChoice(0)">
								<img class="pokemonImg" src="img/vulpix.png"/>
							</div>
							<div class="pokemonSelectTile" onclick="playerChoice(1)">
								<img class="pokemonImg" src="img/glaceon.png"/>
							</div>
							<div class="pokemonSelectTile" onclick="playerChoice(2)">		
								<img class="pokemonImg" src="img/geodude.png"/>
							</div>
							<div class="pokemonSelectTile" onclick="playerChoice(3)">
								<img class="pokemonImg" src="img/cubone.png"/>
							</div>
							<div class="pokemonSelectTile" onclick="playerChoice(4)">
								<img class="pokemonImg" src="img/turtwig.png"/>
							</div>
							<div class="pokemonSelectTile" style="background: grey;">
								<img class="pokemonImg" src="img/missingno.png"/>
							</div>
						</div>
					</div>`;
	updateView();
}