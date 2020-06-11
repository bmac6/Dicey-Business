const getDice = document.getElementById("generate-dice");
const diceContainer = document.createElement("dice-container");
const rollDice = document.getElementById("sq-button");
let counter = 1;
let diceArray= []

document.body.appendChild(diceContainer);
getDice.addEventListener("click", () => new Die(genDieValue()));
rollDice.addEventListener("click",diceRoll);
function genDieValue() {
  return Math.floor(Math.random() * 6 + 1);
}
function diceRoll() {
  diceArray.forEach(die => die.roll());
}
class Die {
  constructor(value) {
    this.value = value;
    this.div = document.createElement("div");
    this.div.innerHTML = this.value;
    this.div.className = "dice";
    this.div.id = counter;

    diceContainer.appendChild(this.div);
    counter++;
    this.div.addEventListener("click", () => this.roll());
    diceArray.push(this)
    console.log(diceArray);
  }
  roll() {
    this.value = genDieValue();
    this.div.innerHTML = this.value;
  }
}
