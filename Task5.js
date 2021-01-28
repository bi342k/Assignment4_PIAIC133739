let myNum = parseFloat(prompt("Enter a positive number"));

if(!isNaN(myNum) && myNum>=0){
    document.write('<h1>Number: '+myNum+'</h1>');
    document.write('<h1>round off value: '+Math.round(myNum)+'</h1>');
    document.write('<h1>floor value: '+Math.floor(myNum)+'</h1>');
    document.write('<h1>ceil value: '+Math.ceil(myNum)+'</h1>');
} else {
    document.write('<h1>Please enter a valid number</h1>');
}