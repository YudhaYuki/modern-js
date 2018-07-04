
// Unix Epoch - January 1st 1970 00:00:00

const now = new Date();
const timestamp = now.getTime();

const myDate = new Date(timestamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minute: ${now.getMinutes()}`);
// console.log(`Second: ${now.getSeconds()}`);


// 1. Create two dates in the past (use string for Date)
// 2. Get timestamps for both
// 3. Figure out which is first and print its time (use toString)

const dateOne = new Date('March 1 2018 12:00:00');
const dateTwo = new Date();
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();

if (dateOneTimestamp < dateTwoTimestamp) {
    console.log(dateOne.toString());
} else if (dateTwoTimestamp < dateOneTimestamp) {
    console.log(dateTwo.toString());
}