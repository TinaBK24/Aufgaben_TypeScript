import './style.css'
import Animal from './classes/Animal';
import Reptile, {Krokodil, Turtle, Lizard} from './classes/Reptile';
import Bird, {Parrot, Swan, Eagle} from './classes/Bird';
import Fish, {Pufferfish, Shark, Clownfish} from './classes/Fish';
import Mammal, {Bear, Monkey, Lion} from './classes/Mammal';

const animalsType = document.getElementById('animalsType') as HTMLSelectElement;
const animalName = document.getElementById('animalName') as HTMLInputElement;
const animalYear = document.getElementById('animalYear') as HTMLInputElement;
const animalContinents = document.getElementById('animalContinents') as HTMLInputElement;
const animalSpecialNeeds = document.getElementById('animalSpecialNeeds') as HTMLInputElement;
const inputBtn = document.getElementById('inputBtn') as HTMLInputElement;
const outputReptile = document.getElementById('outputReptile') as HTMLDivElement;
const outputBird = document.getElementById('outputBird') as HTMLDivElement;
const outputFish = document.getElementById('outputFish') as HTMLDivElement;
const outputMammal = document.getElementById('outputMammal') as HTMLDivElement;

const animals: Animal[] = [
  new Krokodil("Bob", 2020, ["Africa", "Australia"]),
  new Turtle("Mersi", 2022, ["Africa", "Asia"]),
  new Lizard("Harry", 2019, ["Africa", "America"]),
  new Parrot("Zevs", 2021, ["South America"]),
  new Swan("Germi", 2010, ["Europe"]),
  new Eagle("Ron", 2015, ["North America", "Europe"]),
  new Pufferfish("Ginny", 2020, ["Pacific Ocean"]),
  new Shark("Mega", 2005, ["Atlantic Ocean"]),
  new Clownfish("Nemo", 2009, ["Indian Ocean"]),
  new Bear("Baloo", 2012, ["North America", "Europe"]),
  new Monkey("George", 2018, ["Africa", "Asia"]),
  new Lion("Simba", 2016, ["Africa"]),
]

console.log(animals);

function displayAnimals(){
  outputReptile.innerHTML = '';
  outputBird.innerHTML = '';
  outputFish.innerHTML = '';
  outputMammal.innerHTML = '';

  animals.forEach((animal) => {
    const animalInfo = document.createElement('p');
    animalInfo.textContent += `${animal._emoji} ${animal._name}, Age: ${animal.age}, Continents: ${animal._continents.join(', ')}`;
    
    if (animal instanceof Reptile) outputReptile.appendChild(animalInfo);
    else if (animal instanceof Bird) outputBird.appendChild(animalInfo);
    else if (animal instanceof Fish) outputFish.appendChild(animalInfo);
    else if (animal instanceof Mammal) outputMammal.appendChild(animalInfo);
  });
}
displayAnimals();

const animalClassMap: any = {
  lion: Lion,
  bear: Bear,
  monkey: Monkey,
  krokodil: Krokodil,
  turtle: Turtle,
  lizard: Lizard,
  parrot: Parrot,
  swan: Swan,
  eagle: Eagle,
  pufferfish: Pufferfish,
  shark: Shark,
  clownfish: Clownfish
};

inputBtn?.addEventListener('click', () => {
  const animalsTypeValue = animalsType.value;
  const animalNameValue = animalName.value || "";
  const animalYearValue = parseInt(animalYear.value);
  const animalContinentsValue = animalContinents.value.split(',');
  const animalSpecialNeedsValue = animalSpecialNeeds.value || undefined;
  
const AnimalClass = animalClassMap[animalsTypeValue];
  
let newAnimal: Animal | undefined;

if (AnimalClass) {
  newAnimal = new AnimalClass(animalNameValue, animalYearValue, animalContinentsValue, animalSpecialNeedsValue);
} 

  if (newAnimal) {
    animals.push(newAnimal);
    displayAnimals();
  }
});