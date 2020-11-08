function playGame (playerInput) {

	clearMessages();

	function getMoveName (moveID) {
		if (moveID == 1) {
			return 'kamień';
		} else if (moveID == 2) {
			return 'papier';
		} else if (moveID == 3) {
			return 'nożyce';
		} else {
			printMessage ('Nie znam ruchu o ID równym ' + moveID + '.');
			return 'nieznany ruch';
		}
	}

	function displayResult (computerMove, playerMove) {
		if (computerMove == 'kamień' && playerMove == 'kamień') {
			return 'Remis!';
		} else if (computerMove == 'kamień' && playerMove == 'papier') {
			return 'Ty wygrywasz!';
		} else if (computerMove == 'kamień' && playerMove == 'nożyce') {
			return 'Ja wygrywam!';
		} else if (computerMove == 'papier' && playerMove == 'kamień') {
			return 'Ja wygrywam!';
		} else if (computerMove == 'papier' && playerMove == 'papier') {
			return 'Remis!';
		} else if (computerMove == 'papier' && playerMove == 'nożyce') {
			return 'Ty wygrywasz!';
		} else if (computerMove == 'nożyce' && playerMove == 'kamień') {
			return 'Ty wygrywasz!';
		} else if (computerMove == 'nożyce' && playerMove == 'papier') {
			return 'Ja wygrywam!';
		} else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
			return 'Remis!';
		} else {
			return 'Następnym razem postaraj się bardziej! :)';
		}
	}

	let randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to ' + randomNumber);

	let computerMove = getMoveName(randomNumber);
	printMessage('Mój ruch to ' + computerMove + '.');

	//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	console.log('Gracz wpisał ' + playerInput);

	let playerMove = getMoveName(playerInput);
	printMessage('Twój ruch to ' + playerMove + '.');

	printMessage(displayResult(computerMove, playerMove));

	if (displayResult(computerMove, playerMove) == 'Ty wygrywasz!') {
		playerResult = playerResult + 1;
	} else if (displayResult(computerMove, playerMove) == 'Ja wygrywam!') {
		computerResult = computerResult + 1;
	}

	printMessage(computerResult + ' - ' + playerResult);

}

let computerResult = 0;
let playerResult = 0;

document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});
