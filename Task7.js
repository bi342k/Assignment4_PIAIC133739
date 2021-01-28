let myText = 'The quick brown fox jumps over the lazy dog';
document.write('<h2>Text : '+myText+'</h2>');
let txtOccurrence = myText.match(/the/gi).length;
alert(txtOccurrence);
document.write('<h2>There are '+txtOccurrence+' occurrence(s) of the word \'the\'</h2>');
