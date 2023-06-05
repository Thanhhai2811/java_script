// for (let name = 200; name >=1; name--) {
//     console.log(name)
// }

// let number = 1;
// while(number <= 1000) {
//     console.log(number)
//     number++;
// }

// let student = {
//     name: 'nguyen van a',
//     email: 'example@gmail.com',
//     phone: 0545234561, 
// }
// for ( item in student)  {
//     console.log(item)
// }

// let student = {
//     name : 'nguyen van b',
//     email : 'sssss@gmail.com',
//     phone: '23126543054'
// }

// for ( item in student) {
//     console.log(item)
// }



// let start = 1; 
// while(start <= 50) {

//     if (start % 2 == 0) {
//         document.write(`<p class = red>   ${start} </br></p>`)
//     } else {
//         document.write(`<p class = blue >  ${start} </br></p>`)

//     }
//     start++;
// }

let start = 1;
while(start <= 50) {

    if (start % 2 == 0) {
        document.write(`<p class = blue> ${start} </br></p>`)
    } else {
        document.write(`<p class = red> ${start} </br></p>`)
    }

    start++;
}