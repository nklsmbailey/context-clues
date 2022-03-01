// $(document).ready(function () {
var accusations = [];
var friends = ["Rachel", "Basil", "Alexander", "Linda", "Carla"];
var locations = [
  "the Purple Onion",
  "Taco Casa",
  "the Cathedral",
  "the University",
  "the High School",
  "the Library",
  "2nd & Charles",
  "the Preserve",
  "the Grocery Store",
  "the Thrift Store",
];
var weapons = [
  "sword",
  "war-hammer",
  "spear",
  "battle-axe",
  "mace",
  "pollaxe",
  "halberd",
  "dagger",
  "crossbow",
  "trebuchet",
  "pistol",
  "bayonet",
  "sabre",
  "cannon",
  "rifle",
  "machine-gun",
  "molotive cocktail",
  "grenade",
  "pipe bomb",
  "arsenic",
];

for (let i = 1; i < 101; i++) {
  var currentElement = document.createElement("h3");
  currentElement.innerText = "Accusation " + i + ".";

  currentElement.addEventListener("click", displayAccusation(i));
  document.body.appendChild(currentElement);
}

function displayAccusation(accusationNumber) {
  var friend = friends[accusationNumber % 5];
  var weapon = weapons[accusationNumber % 20];
  var location = locations[accusationNumber % 10];

  return function () {
    alert(
      "Accusation " +
        accusationNumber +
        ": I accuse " +
        friend +
        ", using the " +
        weapon +
        " while at " +
        location +
        "!"
    );
  };
}
