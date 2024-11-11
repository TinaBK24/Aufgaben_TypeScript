//* OOP-TypeCast-Level-1_1

import IStudent from './interfaces/IStudent';

function processStudent(student: IStudent){
    console.log(`Processing ${student.name} ...`);
}

let student1 = {name: "Sofiia", age: 20} as IStudent;
processStudent(student1);

let student2 = { age: 22 } as IStudent;
processStudent(student2);

// Im zweiten Fall wird "undefined" für den Namen angezeigt,
// da die Eigenschaft name im Objekt student2 fehlt