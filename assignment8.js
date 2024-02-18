
// Function to simulate an asynchronous operation
function simulateAsyncOperation(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Success: Operation completed successfully.");
      } else {
        reject("Error: Operation failed.");
      }
    }, 1000); // Simulating delay with setTimeout
  });
}

// Function to simulate fetching data
function fetchData() {
  return simulateAsyncOperation(true); // Simulating successful data fetching
}

// Function to simulate processing fetched data
function processData() {
  return simulateAsyncOperation(true); // Simulating successful data processing
}

// Chaining promises to fetch and process data in sequence
fetchData()
  .then((data) => {
    console.log(data);
    return processData();
  })
  .then((processedData) => {
    console.log(processedData);
    console.log("Data fetched and processed successfully.");
  })
  .catch((error) => {
    console.error(error);
  });

