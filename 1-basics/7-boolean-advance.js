let isAccountLocked = false;
let userRole = 'user';

// if (isAccountLocked) {
//     console.log('Is account locked !');
// } else {
//     console.log('Welcome')
// }

if (isAccountLocked) {
    console.log('Is account locked !');
} else if (userRole === 'admin') {
    console.log('Welcome Admin');
} else {
    console.log('Welcome');
};


let temp = 0;

if (temp <= 32) {
    console.log(`'It's cold outside !`)
} else if (temp >= 110) {
    console.log(`It's too warm outside !`)
} else {
    console.log(`Go out, it's nice weather !`)
}