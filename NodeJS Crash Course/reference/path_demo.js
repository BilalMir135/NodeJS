const path = require('path');

//Base file name
console.log('Complete path with file = ', __filename);
console.log('Base File name = ', path.basename(__filename));

//Directory Name
console.log('Directory name = ', path.dirname(__filename));
//only __dirname will also give same result but here we are finding dirname through filename

//File extension
console.log('File Ectension = ', path.extname(__filename));

//Create path object
console.log('Path Object = ', path.parse(__filename));

//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.js'));
