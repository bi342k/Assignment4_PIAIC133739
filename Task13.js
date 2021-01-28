let currentDate=new Date();
let timeMili = currentDate.getTime();
let minute = (timeMili/60000).toFixed(0);
document.write('<h2>Current Date : '+currentDate+'</h2>');
document.write('<h2>Elapsed miliseconds since January 1, 1970 : '+timeMili+'</h2>');
document.write('<h2>Elapsed minute since January 1, 1970 : '+minute+'</h2>');