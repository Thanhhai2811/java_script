let a  = parseInt(prompt('nhập số thứ nhất: '));
let b  = parseInt(prompt('nhập số thứ hai: '));
let c  = parseInt(prompt('nhập số thứ ba: '));

let max = a
if (b > max) {
    max = b
}
if (c > max) {
     max = c
}

document.write('số lớn nhất là:' + max)


