// Create a new Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an async operation (e.g., API Call, file read)
    setTimeout(() => {
        const success = Math.random() > 0.5;

        if (success) {
            resolve('Operation completed succesfully');
        }

        else {
            reject(new Error('Operation failed'));
        }
    }, 1000); //Simulate 1 second delay
});

// Using the promise
myPromise
    .then(result => console.log('Success:', result))
    .catch(error => console.error('Error', error.message));


