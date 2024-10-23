//* This-TS-Level-1_2

let person = {
    vorname: 'Anton',
    nachname: 'Fish',
    alter: 34,
    familienstand: 'ledig',
    groesse: 1.78,
    zeigeProfil: function () {
        const profil = `
            <p>Name: ${this.vorname} ${this.nachname}</p>
            <p>Alter: ${this.alter} Jahre</p>
            <p>Körpergröße: ${this.groesse * 100}cm</p>
            <p>Familienstand: ${this.familienstand}</p>
        `;
        return profil;
    }
};

const personElement = document.getElementById("person");

if (personElement) {
    personElement.innerHTML = person.zeigeProfil();
}


let person2 = {
    vorname: 'Hermione',
    nachname: 'Granger',
    alter: 29,
    familienstand: 'verheiratet',
    groesse: 1.65,
    zeigeProfil: () => {
        const profil = `
            <p>Name: Hermione Granger</p>
            <p>Alter: 29 Jahre</p>
            <p>Körpergröße: 165cm</p>
            <p>Familienstand: verheiratet</p>
        `;
        return profil;
    }
};

const personElement2 = document.getElementById("person2");

if (personElement2) {
    personElement2.innerHTML += person2.zeigeProfil();
}