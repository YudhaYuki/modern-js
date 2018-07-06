const getTip = (amount) => {
    if (typeof amount === 'number') {
        return amount * .25;        
    } else {
        throw Error('Argumnet must be a number');
    };
};

// const result = getTip('test');
// console.log(result);

try {
    const result = getTip(10);
    console.log(result);
} catch (e) {
    console.log('catch block is running!')
}