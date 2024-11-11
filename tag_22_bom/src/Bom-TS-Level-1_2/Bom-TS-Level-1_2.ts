//* Bom-TS-Level-1_2

const zeitElement = document.querySelector(".zeit") as HTMLElement;
let zaehler = 100;
let interval: number;

document.getElementById('btn')?.addEventListener('click', () => {

    if(interval){
        clearInterval(interval)
    }

    zaehler = 100;
    zeitElement.textContent = `${zaehler}%`;

    interval = setInterval(() => {
        if (zaehler > 0) {
            zaehler--;
            zeitElement.textContent = `${zaehler}%`;
        } else {
            clearInterval(interval);
            zeitElement.textContent = "0%";
        }
    }, 100);
});