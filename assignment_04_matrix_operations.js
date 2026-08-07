// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------







// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

// ==========================================
// YOUR CODE BELOW - remove the // symbols from the scaffold and fill it in
// ==========================================

function readMatrix() {
    const rows = readlineSync.questionInt("Enter number of rows: ");
    const cols = readlineSync.questionInt("Enter number of columns: ");
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question("Enter row " + (i + 1) + ": ");
        const row = rowInput.split(' ').map(Number);
        matrix.push(row);
    }
    return matrix;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowStr = "";
        for (let j = 0; j < matrix[i].length; j++) {
            rowStr += matrix[i][j] + " ";
        }
        console.log(rowStr.trim());
    }
}

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];

    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        let newRow = [];
        for (let j = 0; j < cols; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(newRow);
    }
    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let rowsB = matrixB.length;
    let colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        console.log("Error: Number of columns in A must equal number of rows in B.");
        return null;
    }

    let result = [];
    for (let i = 0; i < rowsA; i++) {
        let newRow = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            newRow.push(sum);
        }
        result.push(newRow);
    }
    return result;
}

function main() {
    console.log("--- PART A: Transpose a Matrix ---");
    let matA = readMatrix();
    console.log("Original Matrix:");
    displayMatrix(matA);
    console.log("Transposed Matrix:");
    displayMatrix(transposeMatrix(matA));

    console.log("\n--- PART B: Add Two Matrices ---");
    console.log("Enter Matrix A:");
    let addA = readMatrix();
    console.log("Enter Matrix B (same dimensions):");
    let addB = readMatrix();
    if (addA.length === addB.length && addA[0].length === addB[0].length) {
        console.log("Sum Matrix:");
        displayMatrix(addMatrices(addA, addB));
    } else {
        console.log("Error: Matrices must have the exact same dimensions for addition.");
    }

    console.log("\n--- PART C: Multiply Two Matrices ---");
    console.log("Enter Matrix A:");
    let mulA = readMatrix();
    console.log("Enter Matrix B:");
    let mulB = readMatrix();
    let mulResult = multiplyMatrices(mulA, mulB);
    if (mulResult) {
        console.log("Product Matrix:");
        displayMatrix(mulResult);
    }
}

main();
// =============================================================================

const readlineSync = require('readline-sync');

