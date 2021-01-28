let number=prompt('Enter a Number');
let decimal=prompt('Eter decimal ');

number = parseFloat(number);
decimal = parseInt(decimal);

if (isNaN(number) || isNaN(decimal)){
    document.write('<h1>Please enter a valid number or decimal</h1>')
}
else{
    document.write('<h1>Input number : '+number+', '+decimal+' </h1>');
    document.write('<h1>Output number : '+number.toFixed(decimal)+' </h1>');
}