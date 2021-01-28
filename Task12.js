let myDate = new Date(prompt('Enter Start Date (yyyy-mm-dd)'));
let myDays = myDate.getDate();

if (!isNaN(myDate.getTime())) {
    if (myDays <= 15) {
        document.write('<h1>First Fifteen days of the month</h1>');
    }
    else {
        document.write('<h1>Last days of the month</h1>');
    }
} else {
    document.write('<h1>Date is not valid</h1>');
}