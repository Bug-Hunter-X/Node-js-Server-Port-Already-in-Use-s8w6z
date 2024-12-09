# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js where a server fails to start because the specified port is already in use by another process.  The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution to gracefully handle this situation.

## Problem

Attempting to start a Node.js server on a port that's already occupied results in an error. The server won't start, and your application will fail.  This is often due to another instance of the application or a different process listening on the same port.

## Solution

The solution involves using the `'error'` event listener on the `http.Server` object. This listener allows you to catch the error specifically related to the port being in use and handle it appropriately (e.g., logging an error message, exiting the process gracefully, or trying a different port).