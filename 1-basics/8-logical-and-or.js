let temp = 55;

if (temp >= 60 && temp <= 90) {
    console.log(`It's pretty nice outside`)
} else if (temp <= 0 || temp >= 120) {
    console.log(`Don't go outside`)
} else {
    console.log('Eh, do what you want !')
}


let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer vegan menus')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer two menus')    
} else {
    console.log('Offer all menu !')
}