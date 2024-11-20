//* Promise-TS-Level-1_3

const exercise1: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 1 done."), 20000)
})

const exercise2: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 2 done."), 30000)
})

const exercise3: Promise<string> = new Promise((resolve) => {
    setTimeout(() => resolve("Exercise 3 done."), 40000)
})

const paragraphElement = document.getElementById("homework-status") as HTMLParagraphElement

exercise1.then((message) => {
    paragraphElement.textContent = message
})

exercise2.then((message) => {
    paragraphElement.textContent += " " + message
})

exercise3.then((message) => {
    paragraphElement.textContent += " " + message
})