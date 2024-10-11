//* Array-TS-Level-3_3 (mit innerHTML)

const inputMeal = document.querySelector('#inputMeal') as HTMLInputElement;
const addMealBtn = document.querySelector('#addMealBtn') as HTMLInputElement;
const selectedWeek = document.querySelector('#selectedWeek') as HTMLSelectElement;
const showRightWeek = document.querySelector('#showRightWeek') as HTMLElement;
const outputMeals = document.querySelector('#outputMeals') as HTMLElement;

const week1: string[] = [];
const week2: string[] = [];
const week3: string[] = [];
const week4: string[] = [];

const renderMeals = (array: string[], weekString: string) => {
  outputMeals.innerHTML = "";
  showRightWeek.textContent = weekString;

  array.forEach((meal) => {
    outputMeals.innerHTML += `<li>${meal}</li>`;
  })
}

addMealBtn?.addEventListener('click', () => {
  const mealValue = inputMeal?.value;

  if (mealValue && selectedWeek.value) {
    switch (selectedWeek?.value) {
      case "week1":
        week1.push(mealValue);
        renderMeals(week1, "Week 1");
        // console.log({ week1 });
        break;
      case "week2":
        week2.push(mealValue);
        renderMeals(week2, "Week 2");
        // console.log({ week2 });
        break;
      case "week3":
        week3.push(mealValue);
        renderMeals(week3, "Week 3");
        // console.log({ week3 });
        break;
      case "week4":
        week4.push(mealValue);
        renderMeals(week4, "Week 4");
        // console.log({ week4 });
        break;
    }
  } else {
    console.log("Gib ein Meal ein oder wähle eine Woche aus!");
  }
  inputMeal.value = "";
});

selectedWeek?.addEventListener("change", () => {
  switch (selectedWeek?.value) {
    case "week1":
      renderMeals(week1, "Week 1");
      break;
    case "week2":
      renderMeals(week2, "Week 2");
      break;
    case "week3":
      renderMeals(week3, "Week 3");
      break;
    case "week4":
      renderMeals(week4, "Week 4");
      break;
  }
});