// myasync.js
// This file demonstrates the use of async/await in Node.js
async function getData(){
    console.log('Starting...');
    const result = await SomeAsyncOperation();
    console.log('Return: ${result}');
    return result;
}

// Simulate an asynchronous operatiion that returns a promise
function SomeAsyncOperation() {
    return new Promise(resolve =>{
        setTimeout(() => resolve('Operation Completed'), 100);
    });
}

// Call the async function 
getData().then(data => console.log('Final data:', data));