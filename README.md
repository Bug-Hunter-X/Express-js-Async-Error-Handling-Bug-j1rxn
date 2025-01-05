# Node.js Express.js Async Error Handling Bug

This repository demonstrates a common error in asynchronous Node.js applications using Express.js: unhandled errors that occur after the response has already been sent to the client.

## Bug Description
The bug occurs in `bug.js`.  The server simulates an asynchronous operation that might fail. If the random number is greater than 0.5, an error is thrown. However, this error is not handled properly because it's thrown *after* the response cycle has started and the response to the client has already been sent.  The result is that the application doesn't crash or produce a proper error response, making debugging difficult.

## Solution
The `bugSolution.js` file contains a solution to this problem using error handling and domains for capturing and handling the asynchronous error effectively, even after the response has started.