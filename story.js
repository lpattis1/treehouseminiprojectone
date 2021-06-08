// Declare variables and capture input
const adjectiveOne = prompt("Please provide an adjective.");
const adjectiveTwo = prompt("Please provide another adjective.");
const nounOne = prompt("Please provide a noun.");
const nounTwo = prompt("Please provide another noun.");
const verb = prompt("Please provide a verb.");

const story = `<p>There once was a <h4>${nounOne.toUpperCase()}</h4> Who was quite <h4>${adjectiveOne.toUpperCase()}</h4> But then <h4>${nounOne.toUpperCase()}</h4> Through the act of <h4>${verb.toUpperCase()}</h4> Became quite <h4>${adjectiveTwo.toUpperCase()}</h4> And felt so ashamed that they left <h4>${nounTwo.toUpperCase()}</h4> And were never heard from again.</p>`;

const displayStory = document.querySelector("main");
displayStory.innerHTML = story;
