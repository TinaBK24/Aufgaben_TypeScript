//* String-Methods-TS-Level-1_5

const whereIsSusi: string = "Susi is back from codingschool";

const susi: string = whereIsSusi.substring(0, 4);
const is: string = whereIsSusi.substring(5, 7);
const school: string = whereIsSusi.substring(24);

//document.write(susi + "");
//document.write(is + "");
//document.write(school + "");
//document.write(susi + "" + is + "" + school + "");

// Der Grund, warum document.write() nicht funktioniert, 
// liegt darin, dass moderne Browser es blockieren, wenn es 
// in asynchron geladenen Skripten verwendet wird. Da 
// TypeScript-Module in Vite asynchron geladen werden, 
// sollte man stattdessen Methoden wie innerHTML oder 
// textContent verwenden, um Inhalte in das DOM einzufügen.

const resultDiv = document.createElement("div");
document.body.appendChild(resultDiv);

resultDiv.innerHTML += `<p>${susi}</p>`;
resultDiv.innerHTML += `<p>${is}</p>`;
resultDiv.innerHTML += `<p>${school}</p>`;
resultDiv.innerHTML += `<p>${susi} ${is} ${school}</p>`;