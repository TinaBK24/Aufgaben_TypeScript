//* Clean-Code-TS-Level-3_1_Nachher

console.log("%c Nachher ", "background-color: gold;");

enum TaskType {
    Urgent = 4,
    NotUrgent = 2,
    Info = 1
}

type Task = { name: string, type: TaskType };

let usersName: string[] = ['Khrystyna', 'Minyeong', 'Andre'];
let taskListArr: string[] = [];
let taskObjectsArr: Task[] = [];

function addTask(taskName: string | null, userName: string){
    const task: string = taskName || '';

    if(task){
        taskListArr.push(task);
        taskObjectsArr.push({name: task, type: TaskType.NotUrgent});
        console.log(`Aufgabe erstellt ${task} von ${userName}`);
    }
}

const task1 = prompt('Bitte geben Sie eine Aufgabe ein:');
addTask(task1, usersName[0]);

const task2 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
addTask(task2, usersName[1]);

const task3 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
addTask(task3, usersName[2]);

taskListArr.forEach((task, index) => {
    if(task === ''){
        taskListArr.splice(index, 1);
    }
});

function sortTasks(tasks: string[], order: string): string {
    const sortedTasks = [...tasks];
    if (order === 'rev') {
        sortedTasks.reverse();
    } else if (order === 'asc') {
        sortedTasks.sort((a, b) => a.localeCompare(b));
    }
    return sortedTasks.toString();
}

function sortTaskObjects(tasks: Task[], order: string): Task[] {
    const sortedTasks = [...tasks];
    if (order === 'rev') {
        sortedTasks.reverse();
    } else if (order === 'asc') {
        sortedTasks.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sortedTasks;
}

if(taskListArr.length === 0){
    taskObjectsArr.length = 0;
} else {
    taskListArr = sortTasks(taskListArr, 'asc').split(',');
    taskObjectsArr = sortTaskObjects(taskObjectsArr, 'asc');
}

let resultOutside = 0;

function calculateTasks(): void {
    let result = 0;
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            for (let k = 0; k < 100; k++) {
                result += i + j + k;
            }
        }
    }
    console.log('Die maximale Anzahl der Aufgaben ist: ' + result);
    resultOutside = result;
}

calculateTasks();

if (taskListArr.length > 0 && taskListArr.length <= 3) {
    console.log('Die Anzahl der Aufgaben liegt zwischen 1 und 3.');
} else if (taskListArr.length > resultOutside) {
    console.log('Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs.');
}

function processTasks(): void {
    console.log('implement later');
}

processTasks();