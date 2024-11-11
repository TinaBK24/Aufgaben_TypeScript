//* String-Methods-TS-Level-1_7

const samsStatus = "Sam is good at codingschool";

const samsStatusBad = samsStatus.replace("good", "bad").replace("codingschool", "school");
const susisStatus = samsStatus.replace("Sam", "Susi").replace("codingschool", "school");
const samsTennisStatus = samsStatus.replace("codingschool", "tennis");

const resultDiv = document.querySelector("div");

if (resultDiv){
resultDiv.innerHTML = `<p>${samsStatusBad}</p>`;
resultDiv.innerHTML += `<p>${susisStatus}</p>`;
resultDiv.innerHTML += `<p>${samsTennisStatus}</p>`;
}

//document.write(samsStatusBad + "");
//document.write(susisStatus + "");
//document.write(samsTennisStatus + "");