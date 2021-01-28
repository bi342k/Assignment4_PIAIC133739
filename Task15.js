let age = Number(prompt('Enter your agen in years'));
let curDate = new Date();
document.write('<h2>Your age is '+age+'</h2>')
let birthYear = curDate.getFullYear()-age;
document.write('<h2>Your birth years is '+birthYear+'</h2>')
