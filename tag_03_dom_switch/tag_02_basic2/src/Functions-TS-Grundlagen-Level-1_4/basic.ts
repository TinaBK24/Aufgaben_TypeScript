//* Functions-TS-Grundlagen-Level-1_4

function showHero(heroName: string, heroPower: string, heroEnemy: string){
    let nameOutput = `Mein:e Lieblingsheld:in ist: ${heroName}.`;
    let powerOutput = `Er/sie hat die Fähigkeit: ${heroPower}.`;
    let enemyOutput = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}. `;
    console.log(nameOutput, powerOutput, enemyOutput);
}

showHero("Harry Potter", "Seine Entschlossenheit und Standhaftigkeit, besonders in schwierigen Situationen, ermöglichen es ihm, sich den dunklen Mächten zu widersetzen", "Voldemort");