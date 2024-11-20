//* Promise-TS-Level-2_1

const numberPromise: Promise<number[]> = new Promise((resolve, reject) => {
    const randomNumbers = [
        Math.floor(Math.random() * 130) + 1,
        Math.floor(Math.random() * 130) + 1,
        Math.floor(Math.random() * 130) + 1
    ]

    console.log("Generated numbers:", randomNumbers)

    if (randomNumbers.some(num => num > 100)) {
        reject("One of the values is greater than 100, promise rejected.")
    } else {
        resolve(randomNumbers)
    }
})

numberPromise
    .then((numbers) => {
        const result = numbers.map(num => num + 7)
        console.log("After adding 7:", result)
        return result
    })
    .then((numbers) => {
        const result = numbers.map(num => num * 2)
        console.log("After multiplying by 2:", result)
        return result
    })
    .then((numbers) => {
        const result = numbers.map(num => num - 1)
        console.log("After subtracting 1:", result)
        return result
    })
    .then((numbers) => {
        const result = numbers.map(num => num % 2)
        console.log("After modulo 2:", result)
        return result
    })
    .then((numbers) => {
        console.log("Final result:", numbers)
    })
    .catch((error) => {
        console.error("Error:", error)
    })
    .finally(() => {
        console.log("Finished")
    })