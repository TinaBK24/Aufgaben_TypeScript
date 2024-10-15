//* Objekte-TS-Level-2_5

type PeriodActiveTwo = {
    start: number;
    end: number | string;
    extra?: number;
};

type SingerTwo = {
    name: string;
    country: string;
    period_active: PeriodActiveTwo;
    genre: string;
};

const singersTwo: SingerTwo[] = [
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
const searchInput = document.querySelector('#searchInput') as HTMLInputElement;
const searchBtn = document.querySelector('#search-button') as HTMLInputElement;

function renderTable(data: SingerTwo[]): void {
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
    tableContainer.innerHTML = tableHTML;
}
renderTable(singersTwo);

searchBtn?.addEventListener('click', () => {
    const inputValue: string = searchInput.value.toLowerCase();
    const filterSinger = singersTwo.filter((singer) => {
        return singer.name.toLowerCase().includes(inputValue);
    });
    renderTable(filterSinger);
});