//* Functions-TS-Level-1_6

type TMonster = {
    name: string,
    type: string,
    health: number,
    strength: number,
    speed: number,
}

const monster: TMonster[] = [
    {
        name: "Voldemort",
        type: "Lord",
        health: 100,
        strength: 50,
        speed: 25,
    },
    {
        name: "Basilisk",
        type: "Magical Serpent",
        health: 150,
        strength: 80,
        speed: 60
    },
    {
        name: "Acromantula",
        type: "Giant Spider",
        health: 120,
        strength: 70,
        speed: 50
    },
    {
        name: "Dementor",
        type: "Dark Creature",
        health: 100,
        strength: 40,
        speed: 45
    },
    {
        name: "Troll",
        type: "Large Creature",
        health: 180,
        strength: 65,
        speed: 30
    }
]

function createMonster(monsters: TMonster[]){
    monsters.forEach(monster => {
        console.log(`Name: ${monster.name}`);
        console.log(`Type: ${monster.type}`);
        console.log(`Health: ${monster.health}`);
        console.log(`Strength: ${monster.strength}`);
        console.log(`Speed: ${monster.speed}`);
    });
}

createMonster(monster);
