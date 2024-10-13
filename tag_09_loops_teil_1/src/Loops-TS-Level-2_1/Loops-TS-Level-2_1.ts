//* Loops-TS-Level-2_1

// function createImageNumbers(): string[] {
//     let returnArr: string[] = [];

//     for (let i: number = 1; i <= 100; i++){
//         let bilder: string = 'image_' + i.toString().padStart(3, '0') + '.jpg';

//         returnArr.push(bilder);
//     }

//     return returnArr;
// }

// console.log(createImageNumbers());

//? oder

const createImageNumbers = (): string[] => {
    let returnArr: string[] = [];

    for (let i: number = 1; i <= 100; i++){
        let bilder: string = 'image_' + i.toString().padStart(3, '0') + '.jpg';
        returnArr.push(bilder);
    }
    return returnArr;
}

console.log(createImageNumbers());
