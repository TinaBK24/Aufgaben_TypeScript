//* Enum-TS-Level-2_1

enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

function showHtmlError() {
    const zufallsZahl = Math.floor(Math.random() * 6);

    switch (zufallsZahl) {
        case 0:
        case 1:
        case 2:
            console.log(`Fehler: ${HtmlError.OK} - OK`);
            break;
        case 3:
            console.log(`Fehler: ${HtmlError.Redirect} - Redirect`);
            break;
        case 4:
            console.log(`Fehler: ${HtmlError.BadRequest} - BadRequest`);
            break;
        case 5:
            console.log(`Fehler: ${HtmlError.InternalServerError} - InternalServerError`);
            break;
        default:
            console.log("Unbekannter Fehler");
            break;
    }
}

showHtmlError();