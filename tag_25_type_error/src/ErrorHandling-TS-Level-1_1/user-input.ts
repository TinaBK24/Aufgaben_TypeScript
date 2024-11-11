//* ErrorHandling-TS-Level-1_1

function greetUser(){
    try{
        const name = window.prompt("Geben Sie, bitte, Ihren Name ein:");
        
        if(!name){
            throw new Error("Kein Name eingegeben!");
        }

        console.log(`Hallo, ${name}! Schön, Sie zu sehen!`);
        
    } catch(err){
        console.log("Willkommen!");
    }
}
greetUser()

