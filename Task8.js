let digits = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
let ens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Ninteen'];
let tys = ['Ten', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
let htmbt = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion'];

let num = prompt('Enter a number')
let executeLoop = true
document.write("Number is: " + num + '<br>')
if (parseInt(num) === 0 || isNaN(parseInt(num))) {      //number must not be zero or large value
    document.write("Zero")
    executeLoop = false
}
num = num.toString()
let temp = num.split("");
let num_break = []
if (temp.length > 11) {
    executeLoop = false
    document.write("Number is to big")
}

while (temp.length != 0 && executeLoop) {       //convert string to integer
    num_break.unshift(parseInt(temp.pop()))
}

while (num_break.length != 0 && executeLoop) {
    x = num_break.shift();
    if (x != 0) {
        num_break.unshift(x);
        switch (num_break.length) {
            case 11: {       //double trillion
                numberPrintDouble()
                document.write(htmbt[4] + " ")
                break;
            }
            case 10: {       //single trillion
                document.write(digits[num_break.shift()] + " ");
                document.write(htmbt[4] + " ")
                break;
            }
            case 9: {        //double billion
                numberPrintDouble()
                document.write(htmbt[3] + " ")
                break;
            }
            case 8: {        //single billion
                document.write(digits[num_break.shift()] + " ");
                document.write(htmbt[3] + " ")
                break;
            }
            case 7: {        //double million
                numberPrintDouble()
                document.write(htmbt[2] + " ")
                break;
            }
            case 6: {        //single million
                document.write(digits[num_break.shift()] + " ");
                document.write(htmbt[2] + " ")
                break;
            }
            case 5: {        //double thousand
                numberPrintDouble()
                document.write(htmbt[1] + " ")
                break;
            }
            case 4: {        //single thousand
                document.write(digits[num_break.shift()] + " ");
                document.write(htmbt[1] + " ")
                break;
            }
            case 3: {        //hundred
                document.write(digits[num_break.shift()] + " ");
                document.write(htmbt[0] + " ")
                break;
            }
            case 2: {        //double unit
                document.write("and ")
                numberPrintDouble()
                break;
            }
            case 1: {        //single unit
                document.write("and ")
                document.write(digits[num_break.shift()] + " ");
                break;
            }
        }
    }
}

function numberPrintDouble() {
    x = num_break.shift()
    switch (x) {      //ens or tys
        case 1: {        // ens
            num = num_break.shift()
            document.write(ens[num] + " ");
            break;
        }
        default: {  //tys
            document.write(tys[x - 1] + " ");
            x = num_break.shift();
            if (x != 0) {
                document.write(digits[x] + " ");
            }
        }
    }
}

function numberPrintSingle() {
    document.write(digits[num_break.shift()] + " ");
}