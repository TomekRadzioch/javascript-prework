<<<<<<< HEAD
const buttonTest;
{
=======
let buttonTest;
>>>>>>> ed80eca4b85a8602ff3b4c4987d812cec2fcc4ac
  buttonTest = document.getElementById('button-test');
  buttonRock = document.getElementById('button-rock');
  buttonRock.addEventListener('click', function () { buttonClicked('kamień'); });
  buttonPaper = document.getElementById('button-paper');
  buttonPaper.addEventListener('click', function () { buttonClicked('papier'); });
  buttonScissors = document.getElementById('button-scissors');
  buttonScissors.addEventListener('click', function () { buttonClicked('nożyce'); });
<<<<<<< HEAD
}
=======

>>>>>>> ed80eca4b85a8602ff3b4c4987d812cec2fcc4ac
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

let argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;
function getMoveName(argMoveId) 
  {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }


function displayResult(argPlayerMove, argComputerMove) 
  {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == computerMove) {
      printMessage('Mamy ramis:)');
    } else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }

  console.log('wybór ruchu gracza to: ' + playerInput);
  playerMove = argButtonName;
<<<<<<< HEAD
=======
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);

  buttonTest.addEventListener('click', function () 
  {
    buttonClicked('Test button')
  });
  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerInput);
  playerMove = argButtonName;
>>>>>>> ed80eca4b85a8602ff3b4c4987d812cec2fcc4ac
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
<<<<<<< HEAD

  buttonTest.addEventListener('click', function () 
  {
    buttonClicked('Test button')
  });
  playerMove = argButtonName;
  console.log('wybór ruchu gracza to: ' + playerInput);
  playerMove = argButtonName;
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}
=======
}
>>>>>>> ed80eca4b85a8602ff3b4c4987d812cec2fcc4ac
