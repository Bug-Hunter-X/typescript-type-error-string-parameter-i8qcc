# TypeScript Type Error Bug

This repository demonstrates a common type error in TypeScript and its solution.

The `bug.ts` file contains code that attempts to pass a string array to a function expecting a single string. This results in a type error.

The `bugSolution.ts` file provides a corrected version of the code, demonstrating how to handle the array appropriately and avoid the error.

## Bug Description
The bug arises from a type mismatch between the function's expected argument type and the actual argument type passed.  The function `greeter` expects a string, but an array of strings is provided.