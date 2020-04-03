/*Objects for day in the month*/
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var daysOfTheMonth = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31
};


//Obeject for number of cows in the shed
var numberOfCows = {
    shedA: 34,
    shedB: 11,
    shedC: 27,
    shedD: 52
};

//Object for number of liters produced per cow shed
var productionInLiters = {
    shedA: 15,
    shedB: 28,
    shedC: 18,
    shedD: 11,
};

//variable declaration
var totalShedA;
var totalShedB;
var totalShedC;
var totalShedD;
var totalMilkLiters;
var selling_price = 45;

//function to calculte amount of milk produced per shed
function milkPerShed() {
    totalShedA = (numberOfCows.shedA * productionInLiters.shedA);
    totalShedB = (numberOfCows.shedB * productionInLiters.shedB);
    totalShedC = (numberOfCows.shedC * productionInLiters.shedC);
    totalShedD = (numberOfCows.shedD * productionInLiters.shedD);

    console.log("The total milk produced in shed A is: " + totalShedA);
    console.log("The total milk produced in shed B is: " + totalShedB);
    console.log("The total milk produced in shed C is: " + totalShedC);
    console.log("The total milk produced in shed D is: " + totalShedD);
}

//Function to calculate the total amount of milk produced in every shed
function totalMilkProduced() {
    totalMilkLiters = totalShedA + totalShedB + totalShedC + totalShedD;
    console.log("The total amount of milk produced is: " + totalMilkLiters);
}

//Function to calculate income over a period of time
function incomeOverTime(selling_price, time) {
    var totalSales;
    var daysWeek = 7;
    var daysYear = 365;
    /*
    totalSales = selling_price * totalMilkLiters * time;

    if (time === 7) {
        console.log("Your weekly income will be Ksh " + totalSales);
    }

    else if (time === 365) {
       console.log("Your yearly income will be Ksh " + totalSales); 
    }

    else {
        console.log("Your income in " + time + " days will be Ksh " + totalSales);
    }
    */
    var weeklyIncome = totalMilkLiters * daysWeek * selling_price;
    var yearlyIncome = totalMilkLiters * daysYear * selling_price;

    console.log("Your weekly income will be Ksh " + (totalMilkLiters * daysWeek * selling_price));
    console.log("Your yearly income will be Ksh " + (totalMilkLiters * daysYear * selling_price));

    return [weeklyIncome, yearlyIncome];
}

//Function to produce yearly reports
function yearReport() {
    for (let i = 0; i < months.length; i++) {

        numberOfDays = daysOfTheMonth[months[i]];
        var monthlyIncome = numberOfDays * totalMilkLiters * selling_price;

        console.log("Your income for " + months[i] + " is " + monthlyIncome);
    }
}


//Function to produce reports for the specific month
function monthReport(month) {
    var monthlyIncome = daysOfTheMonth[month] * selling_price * totalMilkLiters;
    console.log("Your income for the month of " + month + " is " + monthlyIncome);
}

//Function to compare income if the selling price changes.
function incomeComparison(change) {
    var newPrice = selling_price + change;


    for (let i = 0; i < months.length; i++) {

        var monthlyIncome = numberOfDays * totalMilkLiters * selling_price;
        var newMonthlyIncome = numberOfDays * totalMilkLiters * newPrice;

        console.log("For " + months[i] + ", if the selling price is Ksh." + selling_price + ", your total income will be Ksh." +
            monthlyIncome + "/= . But if the selling price is Ksh." + newPrice + ", your total income will be Ksh." +
            newMonthlyIncome + "/=, a difference of Ksh." + (newMonthlyIncome - monthlyIncome) + "/=.");
        console.log(" ");


    }
}

//Function calls to display output

//function to display milk production
function totalProduction() {
    return [milkPerShed(), totalMilkProduced()];
}

//Other calls
console.log("Total Production")
totalProduction();
console.log(" ");
console.log("Income overview");
incomeOverTime(selling_price, 12);
console.log(" ");
console.log("Year report");
yearReport();
console.log(" ");
console.log("Income Comparison");
/*
  function call for monthly report
monthReport("January");
console.log(" ");
*/
incomeComparison(4.60);
