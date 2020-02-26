let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    exppensesItem = document.getElementsByClassName('expenses-item'),
    div = document.getElementById('div'),
    expensesBtn = document.getElementsByTagName('button')[0],
    // expensesBtn1 = document.getElementsByTagName('button'),
    // expensesBtn2 = document.getElementsByTagName('button'),

    div2 = document.getElementById('div2'),
    optionalexpensesBtn = document.getElementsByTagName('button')[3],
    // optionalexpensesBtn1 = document.getElementsByTagName('button'),
    // optionalexpensesBtn2 = document.getElementsByTagName('button'),

    countBtn = document.getElementsByTagName('button')[6],
    optionalexpensesItem = document.getElementsByClassName('optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),

    expensesItem1 = document.querySelectorAll('.expenses-item'),
    input = document.querySelectorAll('input');


var money, time;


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false



};

function budget() {
    budgetValue.textContent = appData.budget - parseInt(expensesValue.textContent) -
        parseInt(optionalexpensesValue.textContent) + parseInt(incomeValue.textContent);
    daybudgetValue.textContent = parseInt(budgetValue.textContent / 30);
    if (daybudgetValue.textContent < 500) {
        levelValue.textContent = 'Минимальный уровень достатка!';
    } else if (daybudgetValue.textContent > 500 && daybudgetValue.textContent < 2000) {
        levelValue.textContent = 'Средний уровень достатка!';
    } else if (daybudgetValue.textContent > 2000) {
        levelValue.textContent = 'Высокий уровень достатка!';
    }


}

// countBtn.disabled = true;
expensesBtn.disabled = true;
optionalexpensesBtn.disabled = true;
incomeItem.disabled = true;

startBtn.addEventListener('click', function () {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');

    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;


});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (var i = 0; i < exppensesItem.length; i++) {
        var a = exppensesItem[i].value,
            b = exppensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;

        } else {


            alert('Вы ввели недопустимые значения! Повторите ввод.');

            return false;

        }


    }
    expensesValue.textContent = sum;
    expensesBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    incomeItem.disabled = false;

    budget();




});



optionalexpensesBtn.addEventListener('click', function () {


    let sum = 0;

    for (var i = 0; i < optionalexpensesItem.length; i++) {
        var a = optionalexpensesItem[i].value,
            b = optionalexpensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            appData.optionalExpenses[a] = b;
            sum += +b;

        } else {


            alert('Вы ввели недопустимые значения! Повторите ввод.');

            return false;

        }

    }
    optionalexpensesValue.textContent = sum;

    budget();



});




function aa() {
    let input = document.createElement('input'),
        input1 = document.createElement('input');

    input.classList.add('expenses-item');
    input.placeholder = 'Наименование';
    input.style.marginRight = '4px';
    input1.classList.add('expenses-item');
    input1.placeholder = 'Цена';

    div.appendChild(input);
    div.appendChild(input1);

}

function bb() {

    let lastNode = div.lastChild;
    lastNode.parentNode.removeChild(lastNode);

    setTimeout(function log() {
        var lastNode = div.lastChild;
        lastNode.parentNode.removeChild(lastNode);
        clearTimeout();
    });

}

function cc() {
    let input = document.createElement('input'),
        input1 = document.createElement('input');

    input.classList.add('optionalexpenses-item');
    input.placeholder = 'Наименование';
    input.style.marginRight = '4px';
    input1.classList.add('optionalexpenses-item');
    input1.placeholder = 'Цена';

    div2.appendChild(input);
    div2.appendChild(input1);
}

function dd() {

    let lastNode = div2.lastChild;
    lastNode.parentNode.removeChild(lastNode);

    setTimeout(function log() {
        var lastNode = div2.lastChild;
        lastNode.parentNode.removeChild(lastNode);
        clearTimeout();


    });

}


document.body.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('aa')) {
        aa();
    } else if (event.target && event.target.classList.contains('bb')) {
        bb();

    } else if (event.target && event.target.classList.contains('cc')) {
        cc();

    } else if (event.target && event.target.classList.contains('dd')) {
        dd();
    }

});

aa();
cc();

// countBtn.onclick = function () {

//     if (appData.budget != undefined || expensesValue.textContent != '') {

//         appData.moneyPerDay = ((appData.budget - parseInt(expensesValue.textContent) -
//             parseInt(optionalexpensesValue.textContent) + parseInt(incomeValue.textContent)) / 30).toFixed();
//         daybudgetValue.textContent = appData.moneyPerDay;




//         optionalexpensesBtn.disabled = false;

//         if (appData.moneyPerDay < 500) {
//             levelValue.textContent = 'Минимальный уровень достатка!';
//         } else if (appData.moneyPerDay > 500 && appData.moneyPerDay < 2000) {
//             levelValue.textContent = 'Средний уровень достатка!';
//         } else if (appData.moneyPerDay > 2000) {
//             levelValue.textContent = 'Высокий уровень достатка!';
//         } else {
//             levelValue.textContent = 'Ошибка!';
//         }

//     } else {
//         levelValue.textContent = '';
//         alert('Нажмите на кнопку, <Начать расчет>');

//     }




// };

// incomeItem.addEventListener('input', function () {

//     let items = incomeItem.value;

//     appData.income = items.split(/\+\s?/).map(function (items) {
//         return parseInt(items);
//     });

//     var n = eval(appData.income.join('+'));
//     incomeValue.textContent = n;
//     daybudgetValue.textContent = +appData.moneyPerDay + n;

// });

incomeItem.onkeypress = function (event) {
    if (event.keyCode === 13) {
        let items = incomeItem.value;

        appData.income = items.split(/\+\s?/).map(function (items) {
            return parseInt(items);
        });

        let n = eval(appData.income.join('+'));
        console.log(n);
        if (isNaN(n)) {
            alert('Ошибка!');
        } else {
            incomeValue.textContent = n;

            budget();
        }
    }
}

checkSavings.addEventListener('click', function () {

    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

    }

});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {

        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);


    }

});




























// input[2].addEventListener('click', {
//     handleEvent(event) {
//         event.target.placeholder = 'Нужный текст';


//     }
// });


// );

// expensesItem1.forEach(function(item){
// 	item.addEventListener('click', function(){
// 		console.log('Произошло событие: ' + ' эта кнопка №'+item.textContent);
//         console.log(item.style);
//         item.placeholder = 'Нужный текст';


// 	});
// });