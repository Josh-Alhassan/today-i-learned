const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  console.log("CLICKED");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "share a fact";
  }
});

/*
let votesInteresting = 23;
let votesMindBlowing = 5;
const text = "Lisbon is the capital of Portugal";

votesInteresting = votesInteresting + 1;
votesInteresting++;
console.log(votesInteresting);

let totalUpvotes = votesInteresting + votesMindBlowing;
console.log("Upvotes:", totalUpvotes);

let votesFalse = 4;
const isCorrect = votesFalse < totalUpvotes;
console.log(isCorrect);
*/

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible year. Year needs to be less or equal ${currentYear}`;
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}.`;

console.log(calcFactAge2(2015));
console.log(calcFactAge2(2037));

/*
let votesInteresting = 20;
let votesMindBlowing = 0;

if (votesInteresting === votesMindBlowing) {
  alert("This fact is equally interesting and mind blowing");
} else if (votesInteresting > votesMindBlowing) {
  console.log("Interesting fact!");
} else if (votesInteresting < votesMindBlowing) {
  console.log("Mindblowing fact!!");
}

if (votesMindBlowing) {
  console.log("MINDBLOWING FACT!!!");
} else {
  console.log("Not so interesting");
}

let votesFalse = 77;
const totalUpvotes = votesInteresting + votesMindBlowing;

const message =
  totalUpvotes > votesFalse
    ? "The fact is true"
    : "Might be false, Check more sources...";

// alert(message);

const text = "Lisbon is the capital of Portugal";
const upperText = text.toUpperCase();
console.log(upperText);

const str = `"The current fact is "${text}". It is ${calcFactAge(
  2015
)} years old. It is probably ${
  totalUpvotes > votesFalse ? "correct" : "not true"
}.`;
console.log(str);

*/

const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact);
console.log(fact[2]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

// Desctructuring
const [text, createdIn] = fact;
console.log(text, createdIn);

// Spreading
const newFact = [...fact, "society"];
console.log(newFact);
