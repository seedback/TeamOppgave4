/*
const temp = [[1, 4], [3, 4], [0, 1], [0, 2], [2, 3]]

p-choice = 2

ai-choice = 0

p-beats = temp[2] = [0, 1]

ai-beats = temp[2] = [1, 4]

if (p-beats[0] == ai-choice || p-beats[1] == ai-choice){
	player wins!
}
else if(ai-beats[0] == p-choice || ai-beats[1] == p-choice){
	ai wins!
}
else{
	draw!
}
*/

// Indexes:				  0				1				2				3				4
const pokeBeat = [[1, 4], [3, 4], [0, 1], [0, 2], [2, 3]];
const pokeNames = ["Vulpix", "Glaceon", "Geodude", "Cubone", "Turtwig"];
const pokeImages = [
	`<img src="img/vulpix.png" width="200px" height="200px"/>`,
	`<img src="img/glaceon.png" width="200px" height="200px"/ >`,
	`<img src="img/geodude.png" width="200px" height="200px"/>`,
	`<img src="img/cubone.png" width="200px" height="200px"/ >`,
	`<img src="img/turtwig.png" width="200px" height="200px"/>`
]

var playerChoiceIndex;
var aiChoiceIndex;

var textBoxContent;

var playerChoiceDivContent;
var aiChoiceDivContent;


function playerChoice(choice) {
  playerChoiceIndex = choice;
  console.log("playerChoiceIndex:", playerChoiceIndex);
  aiChoice();
  showPlayerChoice();
  showAiChoice();
  findWinner();
}


function aiChoice() {
  aiChoiceIndex = Math.floor(Math.random() * 5);
  console.log("aiChoiceIndex", aiChoiceIndex);

}

pokeBeat[1] == [3, 4]

function findWinner() {
  if (pokeBeat[playerChoiceIndex][0] == aiChoiceIndex || pokeBeat[playerChoiceIndex][1] == aiChoiceIndex) {
    alert('Player wins!');
  } else if (pokeBeat[aiChoiceIndex][0] == playerChoiceIndex || pokeBeat[aiChoiceIndex][1] == playerChoiceIndex) {
    alert('Player lost.');
  } else {
    alert('Draw.');
  }
  pokeBeat[playerChoiceIndex]
}

function showPlayerChoice() {
  // show textbox "You chose X pokemon"
  playerChoiceDivContent = pokeNames[playerChoiceIndex] + pokeImages[playerChoiceIndex];
  updateView();
}


function showAiChoice() {
  // show textbox "Your opponent chose X pokemon"
  aiChoiceDivContent = pokeNames[aiChoiceIndex] + pokeImages[aiChoiceIndex];
  updateView();
}