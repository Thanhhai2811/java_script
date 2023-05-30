// const x = parseInt(prompt('nhập chiều cao vào đây : '))
// for (let i = x; i >= 1; i--)
// {
//    for (let j = x ;j >= 1 ; j--){
//         document.write("*");

//    }


//      document.write ("<br/>");
// } 



const H = 3;
let n = 3
for (i = n ; i > 0; i--) {

    for(k = i; k <= 2 * i - 1; k++) {
        document.write('*')
    }

    document.write('</br>')
}