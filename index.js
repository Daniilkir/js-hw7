// 1
const coffee = document.querySelector("#coffee").textContent;
const tea = document.querySelector("#tea").textContent;
const juice = document.querySelector("#juice").textContent;
const drinkSelect = document.querySelector("#drinkSelect");
const favDrink = document.querySelector("#favDrink");

drinkSelect.addEventListener("blur", () => {
    switch (drinkSelect.value) {
        case "Кава":
            favDrink.textContent = `Ваш напій: ${coffee}`;
            break;
        case "Чай":
            favDrink.textContent = `Ваш напій: ${tea}`;
            break;
        case "Сік":
            favDrink.textContent = `Ваш напій: ${juice}`;
            break;
    }
});

// 2
const inputDay = document.querySelector("#inputDay");
const checkbtn = document.querySelector("#checkbtn");
const answer = document.querySelector("#answer");

checkbtn.addEventListener("click", () => {
    switch (inputDay.value) {
        case "Понеділок":
        case "Вівторок":
        case "Середа":
        case "Четвер":
        case "Пятниця":
            answer.textContent = 'Сьогодні робочий день';
            break;
        case "Субота":
        case "Неділя":
            answer.textContent = 'Сьогодні вихідний день';
            break;
        default:
            answer.textContent = 'Будь ласка, введіть день тижня коректно';
            break;
    }
});
// 3
const inputmonth = document.querySelector("#inputmonth");
const checkbtn2 = document.querySelector("#checkbtn2");
const answer2 = document.querySelector("#answer2");

checkbtn2.addEventListener("click", () => {
    switch (inputmonth.value) {
        case '1':
        case '2':
        case "12":
            answer2.textContent = 'Зима';
            break
        case '3':
        case '4':
        case '5':
            answer2.textContent = 'Весна';
            break;
        case "6":
        case "7":
        case '8':
            answer2.textContent = 'Літо';
            break;
        case'9':
        case'10':
        case'11':
        answer2.textContent = 'Осінь';
        break;
        default:
            answer2.textContent = 'Будь ласка, введіть цифру коректно';
            break;
    }
});
// 4 
const inputmonth2 = document.querySelector("#inputmonth2");
const checkbtn3 = document.querySelector("#checkbtn3");
const answer3 = document.querySelector("#answer3");

checkbtn3.addEventListener("click", () => {
    switch (inputmonth2.value) {
      case "Квітень":
      case "Червень":  
      case "Листопад":
      case "Вересень":
        answer3.textContent = "В цьому місяці 30 днів"
        break
      case "Січень":
      case "Березень":
      case "Травень":
      case "Липень":
      case "Серпень":
      case "Жовтень":
      case "Грудень":
        answer3.textContent = "В цьому місяці 31 день"
        break
      case "Лютий":
      answer3.textContent = "В цьому місяці 28 днів або 29 в високосний рік"
        break
        default:
            answer3.textContent = 'Будь ласка, введіть назву місяця коректно';
            break;
    }
});
// 5
const inputcolor = document.querySelector("#inputcolor");
const checkbtn4 = document.querySelector("#checkbtn4");
const answer4 = document.querySelector("#answer4");

checkbtn4.addEventListener("click", () => {
    switch (inputcolor.value) {
    case "Зелений":
        answer4.textContent = 'Йти'
        break
    case "Червоний":
        answer4.textContent = "Стоп"
        break
    case"Жовтий":
        answer4.textContent = "Зачекай"
        break
        default:
            answer4.textContent = 'Будь ласка, введіть назву кольору правильно';
            break;
    }
});

// 6

const inputnumber = document.querySelector("#inputnumber");
const inputnumber2 = document.querySelector("#inputnumber2");
const operator = document.querySelector("#operator");
const answer5 = document.querySelector("#answer5");
const btn5 = document.querySelector("#btn5");

btn5.addEventListener("click", () => {
    switch (operator.value) {
        case "+":
            answer5.textContent = Number.parseInt(inputnumber.value) + Number.parseInt(inputnumber2.value);
            break;
        case "-":
            answer5.textContent = Number.parseInt(inputnumber.value) - Number.parseInt(inputnumber2.value);
            break;
        case "*":
            answer5.textContent = Number.parseInt(inputnumber.value) * Number.parseInt(inputnumber2.value);
            break;
        case "/":
            const num2 = Number.parseInt(inputnumber2.value);
            if (num2 !== 0) {
                answer5.textContent = Number.parseInt(inputnumber.value) / num2;
            } else {
                answer5.textContent = "На нуль ділити не можна";
            }
            break;
    }
});