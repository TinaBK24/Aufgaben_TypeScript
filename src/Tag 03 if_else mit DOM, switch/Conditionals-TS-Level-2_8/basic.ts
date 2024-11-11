//* Conditionals-TS-Level-2_8

const schoolGrade: number = Math.ceil(Math.random() * 10);
console.log(schoolGrade);

switch(schoolGrade){
    case 1:
        console.log("sehr gut");
        break;
    case 2:
        console.log("gut");
        break;
    case 3:
        console.log("befriedigend");
        break;
    case 4:
        console.log("ausreichend");
        break;
    case 5:
        console.log("mangelhaft");
        break;
    case 6:
        console.log("ungenügend");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Das ist keine gültige Schulnote.");
        break;
}