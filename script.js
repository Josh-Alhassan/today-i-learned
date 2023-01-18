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
  else return "Impossible year!";
}

const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(1990));
console.log(calcFactAge(2031));

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

alert(message);
