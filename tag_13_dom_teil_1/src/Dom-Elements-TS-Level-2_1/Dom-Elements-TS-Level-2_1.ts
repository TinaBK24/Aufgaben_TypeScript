//* Dom-Elements-TS-Level-2_1

import './style.css'

const navHome = document.getElementById('navHome') as HTMLAnchorElement;
const navChangeBtn = document.getElementById('navChange') as HTMLAnchorElement;

navChangeBtn?.addEventListener('click', () => {
    const currentText = navHome.textContent;

    if(currentText){
        const reversedText = currentText.split("").reverse().join("");

        navHome.textContent = reversedText;
    }
});