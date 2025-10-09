// =============================
// 🎯 INTRODUCTION TO TYPESCRIPT
// =============================

// 🔹 1. What is TypeScript?
// TypeScript (TS) is a superset of JavaScript that adds static typing.
// It helps catch errors at compile time instead of runtime.

// Example:
// let username: string = "Sudhanshu";
// username = 20; ❌ Error: Type 'number' is not assignable to type 'string'.


// 🔹 2. Why use TypeScript if it converts to JavaScript anyway?
// Because browsers only understand JS, but TypeScript helps developers write safer and cleaner code.
// After writing in TS, we use the TypeScript compiler (tsc) to convert TS → JS.


// 🔹 3. Is TypeScript used in frontend or backend?
// ✅ Both!
// - Frontend: React + TypeScript
// - Backend: Node.js + TypeScript
// It just depends on where you want type safety.


// 🔹 4. What is tsconfig.json?
// This file controls how TypeScript behaves when compiling.
// It defines things like:
//   - "rootDir": where your TS files are stored
//   - "outDir": where compiled JS files go
//   - "target": which JS version to output (ES6, ESNext, etc.)

// Example folder structure:
// src/  → TypeScript files
// dist/ → JavaScript output files


// 🔹 5. How to compile TypeScript to JavaScript?
// Step 1️⃣: Open your terminal in the project root.
// Step 2️⃣: Run this command →  tsc
// Step 3️⃣: All JS files will appear inside /dist folder (based on tsconfig.json)


// 🔹 6. Watch mode
// Instead of running `tsc` again and again, you can use:
// tsc --watch
// This automatically recompiles when you save a .ts file.


// 🔹 7. Common Commands:
// npm init -y        → Create package.json
// npm install axios  → Install axios (or any package)
// tsc                → Compile TypeScript files
// npx tsc --watch    → Compile automatically when changes are made


// 🔹 8. What is type narrowing?
// It means TypeScript "narrows down" the possible type of a variable
// after checking conditions like typeof or instanceof.

// Example:
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase()); // TS knows it's a string here
  } else {
    console.log(id.toFixed(2)); // TS knows it's a number here
  }
}


// 🔹 9. What are Generics?
// Generics allow you to create reusable code components that work with multiple types.
// Example:
function identity<T>(value: T): T {
  return value;
}
console.log(identity<number>(10));
console.log(identity<string>("Hello"));


// 🔹 10. Modules and Imports
// If you export functions or variables from one file, you can import them into another.
// Example:
// export function greet(name: string) {
//   return `Hello, ${name}`;
// }
// import { greet } from './greet';


// 🔹 11. Using External Libraries like Axios
// If you install a library (e.g., axios), you can import and use it directly in TS.
// Example:
// import axios from "axios";
// axios.get("https://api.github.com/users/sudhanshu695").then(res => console.log(res.data));


// 🔹 12. Do we push node_modules to GitHub?
// ❌ No. Never push node_modules.
// It contains thousands of auto-downloaded files. Instead, you push package.json and package-lock.json.
// Anyone can run `npm install` to get the same dependencies.


// 🔹 13. What files should be pushed to GitHub?
// ✅ src/ (your TypeScript files)
// ✅ dist/ (optional but useful if you want to show the JS output)
// ✅ tsconfig.json
// ✅ package.json
// ✅ README.md
// ❌ node_modules (ignored)
// ❌ .env or private keys (if any)


// 🔹 14. Example .gitignore file:
// node_modules
// dist
// *.log


// 🔹 15. How to clone and run this project
// Step 1️⃣: git clone <repo-url>
// Step 2️⃣: cd project-folder
// Step 3️⃣: npm install
// Step 4️⃣: tsc
// Step 5️⃣: Run compiled JS files from dist/

// Example: node dist/01-Annotation.js


// 🔹 16. Extra Notes
// TypeScript helps you write better JavaScript.
// It’s not mandatory, but it’s an industry standard now — especially with React, Node.js, and large projects.

