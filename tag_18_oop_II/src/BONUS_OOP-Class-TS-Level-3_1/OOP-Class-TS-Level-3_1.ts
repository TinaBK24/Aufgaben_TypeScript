//* OOP-Class-TS-Level-3_1

import Actor from "./classes/Actor";
import Episode from "./classes/Episode";
import Series from "./classes/Series";

const actor_1_1 = new Actor(
    "Daniel", 
    "Radcliffe", 
    "1989-07-23", 
    "Male"
);
const actor_1_2 = new Actor(
    "Emma", 
    "Watson", 
    "1990-04-15", 
    "Female"
);
const actor_1_3 = new Actor(
    "Rupert", 
    "Grint", 
    "1988-08-24", 
    "Male"
);

const actor_2_1 = new Actor(
    "Imelda", 
    "Staunton", 
    "1956-01-09", 
    "Female"
);
const actor_2_2 = new Actor(
    "Evanna", 
    "Lynch", 
    "1991-08-16", 
    "Female"
);
const actor_2_3 = new Actor(
    "Matthew", 
    "Lewis", 
    "1989-06-27", 
    "Male"
);

const actor_3_1 = new Actor(
    "Gary", 
    "Oldman", 
    "1958-03-21", 
    "Male"
);
const actor_3_2 = new Actor(
    "Helena", 
    "Bonham Carter", 
    "1966-05-26", 
    "Female"
);
const actor_3_3 = new Actor(
    "Jason", 
    "Isaacs", 
    "1973-06-01", 
    "Male"
);

const episode_1 = new Episode(
    "The Return to Hogwarts", 
    45, 
    "Harry returns to Hogwarts and struggles against the oppressive regime of Dolores Umbridge while facing the return of Voldemort.", 
    [actor_1_1, actor_1_2, actor_1_3]
);
const episode_2 = new Episode(
    "Dumbledore's Army", 
    45, 
    "Harry forms Dumbledore's Army to teach his friends defense against dark magic while facing challenges from Umbridge.", 
    [actor_2_1, actor_2_2, actor_2_3]
);
const episode_3 = new Episode(
    "The Battle of the Department of Mysteries", 
    48, 
    "The battle at the Department of Mysteries reveals dark secrets about Voldemort's plans and the importance of the prophecy.", 
    [actor_3_1, actor_3_2, actor_3_3]
);

const series_1 = new Series(
    "Harry Potter and the Order of the Phoenix", 
    "In the fifth installment of the Harry Potter series, Harry returns to Hogwarts for his fifth year, where he faces an oppressive regime led by the Ministry of Magic and its new Defense Against the Dark Arts teacher, Dolores Umbridge. As Voldemort's return becomes increasingly undeniable, Harry forms a secret group called Dumbledore's Army to teach his peers how to defend themselves against dark forces. Together, they prepare for the looming battles ahead, uncover the truth about a prophecy that connects Harry to Voldemort, and confront the darkness that threatens their world.", 
    2007, 
    2007, 
    [episode_1, episode_2, episode_3]
);

console.log(series_1);
