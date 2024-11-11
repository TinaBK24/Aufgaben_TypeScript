//* Bom-TS-Level-2_1

const countElement = document.getElementById("count") as HTMLElement;
const messageElement = document.querySelector(".message") as HTMLElement;

function countdown(): void {
    let count = 10;

    const intervalId = setInterval(() => {
        if (count > 0) {
            count--;
            countElement.textContent = count.toString();
        } else {
            clearInterval(intervalId);
            messageElement.style.display = "none";
        }
    }, 1000);
}

window.addEventListener("load", countdown);