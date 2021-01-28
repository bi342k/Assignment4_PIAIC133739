let number=prompt('Enter a Number');
if (isNaN(Number(number))){
    document.write('<h1>Please enter a valid number</h1>')
}
else{
    let numArray=number.split("");
    let sumNum=0
    for (let i = 0; i < numArray.length; i++){
        sumNum +=Number(numArray[i]);
    }
    document.write('<h1>Input number : '+number+'</h1>');
    document.write('<h1>Output Mean : '+(sumNum/numArray.length).toFixed(0)+' </h1>');
}