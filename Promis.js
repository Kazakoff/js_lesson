function delay(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, ms); // (A)
    });
}

// Using delay():
console.log('Start!');
delay(5000).then(function () { // (B)
    console.log('5 seconds have passed!')
});
console.log('Start!');