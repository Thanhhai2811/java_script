// const phicodinh = 25000;
// let sophut = prompt('nhập số phút') 
// if(sophut > 200) {
//     document.write(`phí phải trả :${(sophut - 200)* 200 + 150 * 400 + 50 *600}`)
// } else if (sophut > 50 && sophut < 200) {
//     document.write(sophut * 400 + 50 * 600)
// }else if (sophut < 50 ) {
//     document(sophut * 600 )
// } else {
//     document.write(phicodinh)
// }






const phicodinh = 25000;

let sophut = prompt('nhập số phút')
if(sophut > 200) {
    document.write(`phí phải trả: ${(sophut - 200)* 200 + 150 * 400 + 50 * 600}`)

} else if (sophut > 50 && sophut < 200 ) {
    document.write(sophut * 400 + 50 * 600)
} else if (sophut < 50 ) {
    document.write(sophut * 600)
} else {
    document.write(phicodinh)
}
