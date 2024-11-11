//* Objekte-TS-Level-1_7

type Music = {
    artist: string;
    title: string;
    release_year: number;
    medium: string[];
    gold: boolean;
};

let myTopFour: Music[] = [
    {
    artist: 'The Beatles',
    title: 'Abbey Road',
    release_year: 1969,
    medium: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    },
    {
    artist: 'Pink Floyd',
    title: 'Dark Side of the Moon',
    release_year: 1978,
    medium: ['CS', 'CD', 'LP', 'Download'],
    gold: true
    },
    {
    artist: 'Led Zeppelin',
    title: 'Led Zeppelin IV',
    release_year: 1971,
    medium: ['CS', 'LP', 'Download'],
    gold: true
    },
    {
    artist: 'Metallica',
    title: 'Kill ’Em All und Ride the Lightning',
    release_year: 1983,
    medium: ['LP', 'CD', 'MC', 'Download'],
    gold: true
    }
];

const output = document.querySelector('#output') as HTMLElement;

myTopFour.forEach((music: Music) => {
        if (output) {
            output.innerHTML += `
                <p>${music.artist}</p>
                <p>${music.title}</p>
                <p>${music.medium.join(', ')}</p>
                <br>
            `;
        }
});

output.innerHTML += `<h3>Bonus</h3>`;

myTopFour.forEach((music: Music) => {
    if (music.release_year < 1975) {
        if (output) {
            output.innerHTML += `
                <p>${music.artist}</p>
                <p>${music.title}</p>
                <p>${music.medium.join(', ')}</p>
                <br>
            `;
        }
    }
});