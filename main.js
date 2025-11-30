// 1. Write a function that logs the current file path and directory. (0.5 Grade)
// • Output Example:{File:“/home/user/project/index.js”, Dir:“/home/user/project”}

// function logCurrentPaths() {
//     const filePath = __filename;
//     const dirPath = __dirname;
//     console.log(`{File:"${filePath}", Dir:"${dirPath}"}`);
// }
// logCurrentPaths();

// 2. Write a function that takes a file path and returns its file name. (0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf"

// const path = require("node:path");

// function getFileName(filePath) {
//     return path.basename(filePath);
// }
//     const inputPath = "C:\\Users\\Monica\\OneDrive\\Desktop\\Monica Nader - C45 Node.js Saturday 10Am-4Pm (Dokki) offline - Assignment 2";
// const filePath = getFileName(inputPath);

// console.log(`${filePath}`);


// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example: { dir: "/folder", name: "app", ext: ".js"}
// • Output Example: “/folder/app.js”

// const path = require("node:path");
// function getFileName(filePath) {
//     return path.basename(filePath);
// }
// function buildPathFromObj(pathObject) {
//     return path.format(pathObject);
// }
// const inputObject = { dir: "\\folder1", name: "main", ext: ".js" };
// const builtPath = buildPathFromObj(inputObject);

// console.log(`“${builtPath}”`);


// 4. Write a function that returns the file extension from a given file path. (0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”

// const path = require("node:path");
// function getFileName(filePath) {
//     return path.basename(filePath);
// }

// function getFileExtension(filePath) {
//     return path.extname(filePath);
// }

// const extensionInput = "/main.js";
// const fileExtension = getFileExtension(extensionInput);

// console.log(`${fileExtension}`);

// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example: { Name: “main”, Ext: “.js” }


// const path = require("node:path");

// function parsePath(filePath) {
//     const parsed = path.parse(filePath);
//     return {
//         Name: parsed.name,
//         Ext: parsed.ext
//     };
// }
// const inputPath = "/folder1/main.js";
// const outputObject = parsePath(inputPath);

// console.log("{ Name: “" + outputObject.Name + "”, Ext: “" + outputObject.Ext + "” }");

// 6. Write a function that checks whether a given path is absolute. (0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true

// const path = require("node:path");

// function isAbsolutePath(filePath) {
//     return path.isAbsolute(filePath);
// }   
// const absoluteInput = "C:\\Users\\Monica\\OneDrive\\Desktop\\Monica Nader - C45 Node.js Saturday 10Am-4Pm (Dokki) offline - Assignment 2";
// const isAbsolute = isAbsolutePath(absoluteInput);
// console.log(`${isAbsolute}`);


// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js

// const path = require("node:path");

// function joinPathSegments(...segments) {
//     return path.join(...segments);
// }   
// const joinedPath = joinPathSegments("folder1", "folder2", "folder3");
// console.log(`${joinedPath}`);

// 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js

// const path = require("node:path");

// function resolveToAbsolutePath(relativePath) {
//     return path.resolve(relativePath);
// }
// const relativeInput = "./main.js";
// const absolutePath = resolveToAbsolutePath(relativeInput);
// console.log(`${absolutePath}`);

// 9. Write a function that joins two paths. (0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt

// const path = require("node:path");

// function joinTwoPaths(path1, path2) {
//     return path.join(path1, path2);
// }
// const firstPath = "/folder1";
// const secondPath = "folder2/folder3/help.txt";
// const combinedPath = joinTwoPaths(firstPath, secondPath);
// console.log(`${combinedPath}`); 

// 10. Write a function that deletes a file asynchronously. (0.5 Grade)
// • Input Example: /path/to/file.txt
// • Output Example: The file.txt is deleted.

// const fs = require("node:fs").promises;

// async function deleteFile(filePath) {      
//     try {
//         await fs.unlink(filePath);
//         console.log(`${filePath}`);
//     } catch (error) {
//         console.error(`${filePath}:`, error);
//     }
// }

// const fileToDelete = "./folder1/folder2/folder3/data.txt"; 
// deleteFile(fileToDelete);

// data.txt etms7 

// 11. Write a function that creates a folder synchronously. (1 Grade)
// • Output Example: “Success”

// const fs = require("node:fs");
// function createFolder(folderPath) {
//     try {
//         fs.mkdirSync(folderPath, { recursive: true });
//         console.log("Success");
//     } catch (error) {
//         console.error("Error creating folder:", error);
//     }
// }

// const newFolderPath = "./folderA/folderB/folderC";
// createFolder(newFolderPath);

// 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
// • Output Example: Welcome event triggered!

// const EventEmitter = require("node:events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("start", () => {
//     console.log("Welcome event triggered!");
// });
// eventEmitter.emit("start");

// 13. Emit a custom "login" event with a username parameter. (0.5 Grade)
// • Input Example:"Ahmed"
// • Output Example: “User logged in: Ahmed”

// const EventEmitter = require("node:events");
// const eventEmitter = new EventEmitter();

// eventEmitter.on("login", (username) => {
//     console.log(`User logged in: ${username}`);
// });
// eventEmitter.emit("login", "Monica");

// 14. Read a file synchronously and log its contents. (1 Grade)
// • Input Example:"./notes.txt"
// • Output Example: the file content => “This is a note.”

// const fs = require("node:fs");

// function readFileSync(filePath) {
//     try {
//         const data = fs.readFileSync(filePath, "utf8");
//         console.log(data);
//     } catch (error) {
//         console.error("Error reading file:", error);
//     }
// }

// const fileToRead = "./folder1/folder2/folder3/help.txt";
// readFileSync(fileToRead);

// 15. Write asynchronously to a file. (1 Grade)
// • Input: path:"./async.txt", content:"Async save"

// const fs = require("node:fs").promises;

// async function writeFileAsync(filePath, content) {
//     try {
//         await fs.writeFile(filePath, content, "utf8");
//         console.log("File written successfully.");
//     } catch (error) {
//         console.error("Error writing file:", error);
//     }   
// }

// const filePathToWrite = "./async.txt";
// const contentToWrite = "Async save";
// writeFileAsync(filePathToWrite, contentToWrite);

// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true

// const fs = require("node:fs");
// function checkDirectoryExists(dirPath) {
//     return fs.existsSync(dirPath);
// }
// const directoryToCheck = "./folder1/folder2/folder3";

// const exists = checkDirectoryExists(directoryToCheck);
// console.log(`${exists}`);

// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// • Output Example: {Platform: “win32”, Arch: “x64”}

// const os = require("node:os");
// function getOSInfo() {

//     return {
//         Platform: os.platform(),
//         Arch: os.arch()
//     };
// }
// const osInfo = getOSInfo();
// console.log(`{Platform: “${osInfo.Platform}”, Arch: “${osInfo.Arch}”}`);
