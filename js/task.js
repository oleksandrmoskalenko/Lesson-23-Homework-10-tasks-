"use strict"

let $btn1 = document.createElement('button'),
    $btn2 = document.createElement('button'),
    $btn3 = document.createElement('button'),
    $btn4 = document.createElement('button'),
    $btn5 = document.createElement('button'),
    $btn6 = document.createElement('button'),
    $btn7 = document.createElement('button'),
    $btn8 = document.createElement('button'),
    $btn9 = document.createElement('button'),
    $btn10 = document.createElement('button')
$btn1.innerText = 'Task 1', $btn2.innerText = 'Task 2', $btn3.innerText = 'Task 3', $btn4.innerText = 'Task 4', $btn5.innerText = 'Task 5', $btn6.innerText = 'Task 6', $btn7.innerText = 'Task 7', $btn8.innerText = 'Task 8', $btn9.innerText = 'Task 9', $btn10.innerText = 'Task 10'
$btn1.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn2.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn3.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn4.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn5.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn6.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn7.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn8.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn9.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
$btn10.style = "width: 120px; height: 40px; font-size: 16px; text-transform: uppercase; margin: 15px;"
document.body.append($btn1, $btn2, $btn3, $btn4, $btn5, $btn6, $btn7, $btn8, $btn9, $btn10)

//Task 1
$btn1.addEventListener('click', () => {
    let yourAge = prompt('How old are you?', '')
    if (yourAge >= 0 && yourAge < 12) alert("You're a child!")
    else if (yourAge >= 12 && yourAge < 18) alert("You're a teenager!")
    else if (yourAge >= 18 && yourAge < 60) alert("You're an adult!")
    else if (yourAge >= 60) alert("You're a retiree!")
    else alert('Error!')
})

//Task 2
$btn2.addEventListener('click', () => {
    let symbol = prompt('Write a number from 0 to 9', '')
    if (symbol == 0) alert(')')
    else if (symbol == 1) alert('!')
    else if (symbol == 2) alert('@')
    else if (symbol == 3) alert('#')
    else if (symbol == 4) alert('$')
    else if (symbol == 5) alert('%')
    else if (symbol == 6) alert('^')
    else if (symbol == 7) alert('&')
    else if (symbol == 8) alert('*')
    else if (symbol == 9) alert('(')
})

//Task 3
$btn3.addEventListener('click', () => {
    let num = prompt('Write the three-digit number!', '')
    if ((num - num % 1000) > 0) alert('Error!')
    else {
        let a = (num - num % 100) / 100,
            b = (num - 100 * a);
        b = (b - b % 10) / 10;
        let c = num - 100 * a - 10 * b;
        if (a == b || b == c || c == a) alert("Yes, there are!")
        else alert("No, there aren't")
    }
})

//Task 4
$btn4.addEventListener('click', () => {
    let year = prompt('Write the year!', '')
    if (leapYear(year)) alert("Leap year!")
    else alert("Not a leap year!")
})

//Task 5
$btn5.addEventListener('click', () => {
    let number = prompt('Write the five-digit number!', ''), num = number
    length = number.length
    let arr = [],
        i = length - 1,
        tmp = 0
    do {
        arr[i] = (number - number % (10 ** i)) / (10 ** i)
        tmp += arr[i] * (10 ** (length - 1 - i))
        number = number % (10 ** i)
        i--
    } while (i >= 0)
    if (num == tmp) alert('The number is palindrome!')
    else alert('Definitely not a palindrome!')
})

//Task 6
$btn6.addEventListener('click', () => {
    let yourMoney = prompt('Write the amount of your money in USD!', '')
    let currency = prompt('Write the currency! (EUR, UAN or AZN)')
    if (currency == "EUR") alert("Your amount of money in EUR is " + yourMoney * 0.92)
    else if (currency == "UAH") alert("Your amount of money in UAH is " + yourMoney * 27.14)
    else if (currency == "AZN") alert("Your amount of money in AZN is " + yourMoney * 1.7)
    else alert('Error!')
})

//Task 7
$btn7.addEventListener('click', () => {
    let purchaseSum = prompt('Write the purchase sum!', '')
    if (purchaseSum >= 200 && purchaseSum < 300) alert('Your final sum is ' + purchaseSum * 0.97)
    else if (purchaseSum >= 300 && purchaseSum < 500) alert('Your final sum is ' + purchaseSum * 0.95)
    else if (purchaseSum >= 500) alert('Your final sum is ' + purchaseSum * 0.93)
    else alert('Your final sum is ' + purchaseSum)
})

//Task 8
$btn8.addEventListener('click', () => {
    let length = prompt('Write the length of a circle (circumference)', '')
    let perimeter = prompt('Write the perimeter of a square', '')
    if (length <= Math.PI * perimeter / 4) alert('The circle could fit in square')
    else alert('It is impossible')
})

//Task 9
$btn9.addEventListener('click', () => {
    let $h2 = document.createElement('h2'),
        result = 0
    $h2.style = "margin-top: 100px; text-align: center"
    $h2.innerText = 'What is the name of president Lincoln?'
    document.body.append($h2)
    let $ul = document.createElement('ul'),
        $li1 = document.createElement('li'),
        $li2 = document.createElement('li'),
        $li3 = document.createElement('li'),
        $buttonNext = document.createElement('button')
    $li1.innerHTML = `<input type="radio" id="option11">
    <label for="option11">John</label>`
    $li2.innerHTML = `<input type="radio" id="option12">
    <label for="option12">Franklin</label>`
    $li3.innerHTML = `<input type="radio" id="option13">
    <label for="option13">Abraham</label>`
    document.body.append($ul)
    $ul.append($li1, $li2, $li3, $buttonNext)
    $buttonNext.innerText = 'Next question'
    $buttonNext.style = "width: 120px; height: 50px; font-size: 16px; text-transform: uppercase; margin: 15px;"
    $buttonNext.addEventListener('click', () => {
        if (document.getElementById("option13").checked) result += 2;
        $h2.innerText = "Choose the year when Lincoln was killed:"
        $li1.innerHTML = `<input type="radio" id="option21">
    <label for="option21">1863</label>`
        $li2.innerHTML = `<input type="radio" id="option22">
    <label for="option22">1865</label>`
        $li3.innerHTML = `<input type="radio" id="option23">
    <label for="option23">1867</label>`
        $buttonNext.addEventListener('click', () => {
            if (document.getElementById("option22").checked) result += 2;
            $h2.innerText = "Who was the president of the US before Lincoln?"
            $li1.innerHTML = `<input type="radio" id="option31">
    <label for="option31">Thomas L. Harris</label>`
            $li2.innerHTML = `<input type="radio" id="option32">
    <label for="option32">John Henry</label>`
            $li3.innerHTML = `<input type="radio" id="option33">
    <label for="option33">Andrew Johnson</label>`
            $buttonNext.addEventListener('click', () => {
                if (document.getElementById("option32").checked) result += 2;
                $h2.innerText = ''
                $ul.innerHTML = ''
                alert('Your final score is ' + result + ' points');
            })
        })
    })

})


//Task 10
$btn10.addEventListener('click', () => {
    let yourDay = prompt('Write the day', '')
    let yourMonth = prompt('Write the month', '')
    let yourYear = prompt('Write the year', '')
    if (leapYear(yourYear) && yourMonth == 2 && yourDay == 28) yourDay++
    else if (leapYear(yourYear) && yourMonth == 2 && yourDay == 29) { yourMonth++; yourDay = 1 }

    else switch (yourMonth) {
        case "2":
            if (yourDay == 28) { yourMonth++; yourDay = 1 }
            else yourDay++
            break;
        case "4":
        case "6":
        case "9":
        case "11":
            if (yourDay == 30) { yourMonth++; yourDay = 1 }
            else yourDay++
            break;
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
            if (yourDay == 31) { yourMonth++; yourDay = 1 }
            else yourDay++
            break;
        case "12":
            if (yourDay == 31) { yourYear++; yourMonth = 1; yourDay = 1 }
            else yourDay++
            break;
    }

    alert(`The next date is ${yourDay}.${yourMonth}.${yourYear}`)
})


function leapYear(year0) {
    if (!(year0 % 400) || (!(year0 % 4) && (year0 % 100))) return 1
    else return 0
}
