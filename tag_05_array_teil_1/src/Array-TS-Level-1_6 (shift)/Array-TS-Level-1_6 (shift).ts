//* Array-TS-Level-1_6 (shift)

const bucketList: string[] = ["Buenos Aires", "Iceland", "Amsterdam"];
console.log([...bucketList]);
bucketList.shift();
console.log(bucketList);

const luckyNumbers: number[] = [21, 77, 111];
console.log([...luckyNumbers]);
luckyNumbers.shift();
console.log(luckyNumbers);

const favoritePeople: string[] = ["Suzy", "Lucy", "Macy"];
favoritePeople.shift();
console.log(favoritePeople);
