
function phase_day() {
    let body = document.querySelector('.body')
    let msg = document.getElementById('greetings-text')
    let date = new Date()
    let hour = date.getHours()

    if (hour >= 0 && hour < 12) {
        body.style.background = "linear-gradient(to bottom," + '#3f51fb' + "," + '#41d6ff' + ")"
        msg.innerHTML = `Good morning! Now it is ${hour} o'clock and it's time to:`

    } else if (hour >=12 && hour < 18) {
        body.style.background = "linear-gradient(to bottom," + '#4f52cf' + "," + '#fdceaf' + ")"
        msg.innerHTML = `Good afternoon! Now it is ${hour} o'clock and it's time to:`

    } else {
        body.style.background = "linear-gradient(to bottom," + '#050928' + "," + '#37277e' + ")"
        msg.innerHTML = `Good evening! Now it is ${hour} o'clock and it's time to:`
    }
}


function calculate() {
    let feline_age = document.getElementById('select_feline_age')
    let result = document.getElementById('result')
    age = ''
    switch(feline_age.value) {
        case "0-1m":
            age = '0 - 1'
            break;
        case "2-3m":
            age = '2 - 4'
            break;
        case "4m":
            age = '6 - 8'
            break;
        case "6m":
            age = '10'
            break;
        case "7m":
            age = '12'
            break;
        case "12m":
            age = '15'
            break;
        case "18m":
            age = '21'
            break;
        case "2y":
            age = '24'
            break;
        case "3y":
            age = '28'
            break;
        case "4y":
            age = '32'
            break;
        case "5y":
            age = '36'
            break;
        case "6y":
            age = '40'
            break;
        case "7y":
            age = '44'
            break;
        case "8y":
            age = '48'
            break;
        case "9y":
            age = '52'
            break;
        case "10y":
            age = '56'
            break;
        case "11y":
            age = '60'
            break;
        case "12y":
            age = '64'
            break;
        case "13y":
            age = '68'
            break;
        case "14y":
            age = '72'
            break;
        case "15y":
            age = '76'
            break;
        case "16y":
            age = '80'
            break;
        case "17y":
            age = '84'
            break;
        case "18y":
            age = '88'
            break;
        case "19y":
            age = '92'
            break;
        case "20y":
            age = '96'
            break;
        case "21":
            age = '100'
            break;
        case "22":
            age = '104'
            break;
        case "23":
            age = '108'
            break;
        case "24":
            age = '112'
            break;
        case "25":
            age = '116'
            break;
    }
    result.innerHTML = `Your cat is ${age} years old!`
        }

