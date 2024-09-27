//* String-Methods-TS-Level-1_9

const infoAboutSam = "Sam is going to codingschool";
const susi = "Susi";
const and = "and";

const erste = infoAboutSam.replace("codingschool", "school") + " " + and + " to the movie theater";
const zweite = infoAboutSam.slice(infoAboutSam.indexOf("Sam"), infoAboutSam.indexOf("to")) + "to the movie theater";
const dritte = susi + " " + and + " " + infoAboutSam.replace("is", "are").replace("codingschool", "school");
const vierte = susi + " " + and + " " + infoAboutSam.replace("is", "are").replace("codingschool", "gym") + " " + and + " to the movie theater";
const fuenfte = infoAboutSam.replace("Sam", "Susi").replace("codingschool", "school") + " " + and + " to the movie theater"

const resultDiv = document.querySelector("div");

if (resultDiv){
resultDiv.innerHTML += `<p>${erste}</p>`;
resultDiv.innerHTML += `<p>${zweite}</p>`;
resultDiv.innerHTML += `<p>${dritte}</p>`;
resultDiv.innerHTML += `<p>${vierte}</p>`;
resultDiv.innerHTML += `<p>${fuenfte}</p>`;
}