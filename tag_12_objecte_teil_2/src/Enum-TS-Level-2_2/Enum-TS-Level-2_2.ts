//* Enum-TS-Level-2_2

enum ClothingColor {
    Gelb = '#FFFF00',
    Orange = '#FFA500',
    Pink = '#FFC0CB',
    Blau = '#0000FF',
    Lila = '#800080',
    Grau = '#808080'
}

const allColors: ClothingColor[] = [
    ClothingColor.Gelb,
    ClothingColor.Orange,
    ClothingColor.Pink,
    ClothingColor.Blau,
    ClothingColor.Lila,
    ClothingColor.Grau
];

function createColorButtons() {
    const colorBtn = document.querySelector('#color-buttons');

    if (colorBtn) {

        allColors.forEach(color => {
            const button = document.createElement('button');
            button.style.backgroundColor = color;
            button.textContent = color;
            button.style.margin = '5px';
            button.style.border = 'none';
            button.style.padding = '10px';
            button.style.cursor = 'pointer';
            button.onclick = () => {
                console.log(`Farbe ausgewählt: ${color}`);
            }
            colorBtn.appendChild(button);
        });
    }
}

createColorButtons();