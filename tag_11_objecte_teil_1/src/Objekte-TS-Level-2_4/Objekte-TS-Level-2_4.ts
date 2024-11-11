//* Objekte-TS-Level-2_4

type PeriodActiveOne = {
    start: number;
    end: number | string;
    extra?: number;
};

type SingerOne = {
    name: string;
    country: string;
    period_active: PeriodActiveOne;
    genre: string;
};

const singersNew: SingerOne[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: 'Rock / Pop' },
    {
    name: 'Elvis Presley',
    country: 'United States',
    period_active: { start: 1954, end: 1977 },
    genre: 'Rock and roll'
    },
    {
    name: 'Michael Jackson',
    country: 'United States',
    period_active: { start: 1964, end: 2009 },
    genre: 'Pop / Rock / Dance / Soul / R&B'
    },
    {
    name: 'Elton John',
    country: 'United Kingdom',
    period_active: { start: 1964, end: 'present' },
    genre: 'Pop / Rock'
    },
    {
    name: 'Madonna',
    country: 'United States',
    period_active: { start: 1979, end: 'present' },
    genre: 'Pop / Dance / Electronica'
    },
    {
    name: 'Led Zeppelin',
    country: 'United Kingdom',
    period_active: { start: 1968, end: 1980 },
    genre: 'Hard rock / Blues rock / Folk rock'
    },
    {
    name: 'Rihanna',
    country: 'United States',
    period_active: { start: 2005, end: 'present' },
    genre: 'R&B / Pop / Dance / Hip-hop'
    },
    {
    name: 'Pink Floyd',
    country: 'United Kingdom',
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: 'Progressive rock / Psychedelic rock'
    }
];

const tableContainer = document.querySelector('#table-container') as HTMLElement;

function renderTable(data: SingerOne[]): void {
    let tableHTML = `
        <table>
            <tr>
                <th>Name</th>
                <th>Country</th>
                <th>PeriodActive</th>
                <th>Genre</th>
            </tr>
        `;
        data.forEach((item) => {
        tableHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.country}</td>
                <td>${item.period_active.start} - ${item.period_active.end}</td>
                <td>${item.genre}</td>
            </tr>
        `;
    });
    tableHTML += `</table>`;
    tableHTML += `
        <button id="sort-name">Sort by Name</button>
        <button id="sort-country">Sort by Country</button>
        <button id="sort-genre">Sort by Genre</button>
    `;
    tableContainer.innerHTML = tableHTML;

    document.querySelector('#sort-name')?.addEventListener('click', () => {
        const sortedByName = singersNew.slice().sort((a, b) => a.name.localeCompare(b.name));
        renderTable(sortedByName);
    });
    
    document.querySelector('#sort-country')?.addEventListener('click', () => {
        const sortedByCountry = singersNew.slice().sort((a, b) => a.country.localeCompare(b.country));
        renderTable(sortedByCountry);
    });
    
    document.querySelector('#sort-genre')?.addEventListener('click', () => {
        const sortedByGenre = singersNew.slice().sort((a, b) => a.genre.localeCompare(b.genre));
        renderTable(sortedByGenre);
    });
}

renderTable(singersNew);