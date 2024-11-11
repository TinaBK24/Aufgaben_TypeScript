//* Bom-TS-Level-1_3

function holeBrowserDaten(): void {
    const datenContainer = document.createElement("div");

    datenContainer.innerHTML = `
        <p>Browsername: ${navigator.appName}</p>
        <p>Betriebssystem-Architektur: ${navigator.platform}</p>
        <p>Browser-Version: ${navigator.userAgent}</p>
        <p>Innere Breite des Dokuments: ${window.innerWidth}</p>
        <p>Dokument Innenhöhe: ${window.innerHeight}</p>
        <p>Color Depth: ${screen.colorDepth}</p>
        <p>Pixel Depth: ${screen.pixelDepth}</p>
    `;
    document.body.appendChild(datenContainer);
}

const button = document.createElement("button");
button.textContent = "Hol Daten";
button.addEventListener("click", holeBrowserDaten);
document.body.appendChild(button);