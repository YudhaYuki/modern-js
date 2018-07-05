// const myAge = 7;
// let message = myAge >= 18 ? 'You can vote' : 'You cannot vote';
// message = myAge >= 18 ? 'You can vote' : 'You cannot vote';

// console.log(message);


const myAge = 7;
// const showPage = () => {
//     console.log('Showing the page');
// };

const showPage = () => {
    return 'Showing the page';
};

// const showErrorPage = () => {
//     console.log('Showing the error page')
// };

const showErrorPage = () => {
    return 'Showing the error page';
};

const message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);


const team = ['tyler', 'porter', 'Yudha'];

// 1. print "Team size: 3" if less than or equal to 4;
// 2. Print "Too mnay people on your team" otherwise;

console.log(team.length <= 4 ? `Team size is ${team.length}` : `Too many people in your team`);

