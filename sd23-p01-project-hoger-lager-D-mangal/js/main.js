let GenerateNumber1 = Math.random() * 6;
let RandomNumber1 = Math.ceil(GenerateNumber1);
let GenerateNumber2 = Math.random() * 6;
let RandomNumber2 = Math.ceil(GenerateNumber2);
const begin = document.querySelector(".start");
const higher = document.querySelector(".higher");
const lower = document.querySelector(".lower");
const restart = document.querySelector(".reset");
let speler1 = "Speler 1";
const nameChange = document.querySelector(".verander-naam");

let CorrectGuess = 1
let WrongGuess = 1


higher.disabled = true;
lower.disabled = true;
restart.disabled = true;
nameChange.disabled = false;

console.log(RandomNumber1);
console.log(RandomNumber2);

// Go knop
begin.addEventListener("click", function () {
  document.querySelector(".number").innerHTML = RandomNumber1;
  begin.disabled = true;
  higher.disabled = false;
  lower.disabled = false;
  restart.disabled = true;
});

// Higher knop
higher.addEventListener("click", function () {
  if (RandomNumber1 <= RandomNumber2) {
    CorrectGuess
    document.querySelector(".textfield").innerHTML = "You win";
    document.querySelector(".win-scoreboard").innerHTML = "Je hebt" + " " + CorrectGuess++ + " " + "keer gewonnen";
    document.querySelector(".number2").innerHTML = RandomNumber2;
    lower.disabled = true;
    higher.disabled = true;
    restart.disabled = false;
  } else {
    WrongGuess
    document.querySelector(".textfield").innerHTML = "You lose";
    document.querySelector(".lose-scoreboard").innerHTML = "Computer heeft" + " " + WrongGuess++ + " " + "keer verloren";
    document.querySelector(".number2").innerHTML = RandomNumber2;
    lower.disabled = true;
    higher.disabled = true;
    restart.disabled = false;
  }
});

// Lower knop
lower.addEventListener("click", function () {
  if (RandomNumber1 >= RandomNumber2) {
    CorrectGuess
    document.querySelector(".textfield").innerHTML = "You win";
    document.querySelector(".win-scoreboard").innerHTML = "Je hebt"+ " " + CorrectGuess++ + " " + "keer gewonnen";
    document.querySelector(".number2").innerHTML = RandomNumber2;
    lower.disabled = true;
    higher.disabled = true;
    restart.disabled = false;
  } else {
    WrongGuess
    document.querySelector(".textfield").innerHTML = "You lose";
    document.querySelector(".lose-scoreboard").innerHTML = "Computer heeft" + " " + WrongGuess++ + " " + "keer verloren";
    document.querySelector(".number2").innerHTML = RandomNumber2;
    lower.disabled = true;
    higher.disabled = true;
    restart.disabled = false;
  }
});

// Reset knop
restart.addEventListener("click", function () {
  GenerateNumber1 = Math.random() * 6;
  RandomNumber1 = Math.ceil(GenerateNumber1);
  GenerateNumber2 = Math.random() * 6;
  RandomNumber2 = Math.ceil(GenerateNumber2);
  console.log(RandomNumber1);
  console.log(RandomNumber2);
  document.querySelector(".textfield").innerHTML = "Test your luck";
  document.querySelector(".number").innerHTML = RandomNumber1;
  document.querySelector(".number2").innerHTML = "Het volgende getal";
  lower.disabled = false;
  higher.disabled = false;
  restart.disabled = true;
});

// Naam veranderen
nameChange.addEventListener("click", function () {
  speler1 = prompt("Wat is spelers 1 zijn naam?");
  document.querySelector("h1.speler1").innerHTML = speler1;
  nameChange.disabled = true;
});
