//* String-Methods-TS-Level-1_8

const whereIsSam = "Sam is going to school";

const upper = whereIsSam.toUpperCase();
const lower = whereIsSam.toLowerCase();
const samSchool = lower.replace("sam", "SAM").replace("school", "SCHOOL");
const isGoingTo = upper.replace("SAM", "sam").replace("SCHOOL", "school");
const letter = whereIsSam.replace("is", "Is").replace("going", "Going").replace("to", "To").replace("school", "School");

const resultDiv = document.querySelector("div");

if (resultDiv){
resultDiv.innerHTML += `<p>${upper}</p>`;
resultDiv.innerHTML += `<p>${lower}</p>`;
resultDiv.innerHTML += `<p>${samSchool}</p>`;
resultDiv.innerHTML += `<p>${isGoingTo}</p>`;
resultDiv.innerHTML += `<p>${letter}</p>`;
}