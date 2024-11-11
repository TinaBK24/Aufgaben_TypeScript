//* Array-TS-Iteration-Level-1_6 (map oder forEach)

let album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

const updatedAlbum: string[] = album.map((fileName: string) => {
    const lowerCaseFileName = fileName.toLowerCase();

    const parts = lowerCaseFileName.split(".");
    console.log(parts);
    console.log(parts[0]);
    console.log(parts[1]);
    
    if (parts.length > 1) {
        return parts.slice(0, 1).join("");
    } else {
        return "invalid";
    }
});
console.log(updatedAlbum);
