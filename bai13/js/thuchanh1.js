// Bài thực hành 1

// let user  = {};
// username = "John";
// user.surname = 'School';
// username = "Pete";



let username = {
    email : 'suntechedu@gmail.com',
    addrees : {
        phone : '0142547921',
        name : 'Nguyễn văn H '
    },
    getAddrees :function () {
        return this.email
    }
}


document.write ('email của bạn là : ' + username.getAddrees())
document.write('</br>')
document.write('tên của bạn : ' + username.addrees.name)
document.write('</br>')
document.write('số điện thoại ' + username.addrees.phone)