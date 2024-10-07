//* Array-TS-Level-3_1 (find, split, trim)

const artworks: string[] =["Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Die Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"];

const artworkDates: string[] = ["Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Die Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"];

// приймає один параметр artworkName, який є рядком і представляє назву картини, яку я хочу знайти
function findArtwork(artworkName: string){
    const tlcArtworkName = artworkName.toLowerCase();

    // шукати картину в масиві artworks, де є назва яку я ввела (artworkName)
    const artwork = artworks.find(art => art.toLowerCase().includes(tlcArtworkName));
    // аналогічно попередньому в масиві artworkDates
    const artworkDate = artworkDates.find(date => date.toLowerCase().includes(tlcArtworkName));

    // Якщо жодна з змінних artwork або artworkDate не містить значення (тобто, якщо картину не знайдено)
    // на консолі виводиться повідомлення про те, що картина не знайдена, і функція завершує виконання (return)
    if(!artwork || !artworkDate){
        console.log(`Artwork "${artworkName}" not found`);
        return;
    }

    // розбивається рядок artwork на частини за допомогою split("-"), і береться перша частина (назва картини) [0]
    // видаляється зайві пробіли (trim())
    const normArtworkName = artwork.split("-")[0].trim();

    const artist = artwork.split("-")[1].trim();
    const year = artworkDate.split("-")[1].trim();

    console.log(`"${normArtworkName}" wurde von ${artist} im Jahre ${year} gemalt`);
}

findArtwork("guernica");
findArtwork("DIE Geburt der Venus");
findArtwork("Die Nachtwache");
findArtwork("die mona lisa");
findArtwork("Die Kartoffelesser");
findArtwork("DIE SCHREI");
findArtwork("Das letzte Abendmahl");
findArtwork("Die freudige Botschaft");
findArtwork("Der Garten der Lüste");