
// let numberOne = parseInt(prompt('Nhập vào số thứ nhất: '))
// let numberTwo = parseInt(prompt('Nhập vào số thứ hai: '))


//     if (numberOne < numberTwo) {
//         alert('số thứ nhất không được nhỏ hơn số thứ 2')
//     } else {
//         for (let i = numberOne; i >= numberTwo; i--) {
//             document.write(i + '<br>')

//     }}
    

    

let numberOne = parseInt(prompt('nhap vao số thứ nhất'))
let numberTwo = parseInt(prompt('nhap vào giá trị thứ hai'))

if (numberOne <= numberTwo) {
	alert('số thứ nhất không được nhỏ hơn số thứ hai')
} else {
	for (let i = numberOne; i >= numberTwo; i--) {
		document.write(i + '</br>')
	
}}
