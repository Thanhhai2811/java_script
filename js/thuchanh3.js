let number = 100;
while(number >= 1) {
    if (number % 2 == 0) {
        document.write(`<font color = "red"> ${number}</br></font>`)
    } if (number % 2 != 0) {
        document.write(`<font color = "green" ${number} </br></font>`)  
    } 
    start--;
}