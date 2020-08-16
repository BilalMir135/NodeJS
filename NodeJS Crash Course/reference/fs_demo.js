const fs = require('fs');
const path = require('path');

//CREATE DIRECTORY
fs.mkdir(path.join(__dirname, 'test'), {}, (error) => {
  if (error) throw error;
  console.log('Directory Created..');
});

//WRITE FILE
//write file will create new file and add text but if the file already exists it will override it
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!',
  (error) => {
    if (error) throw error;
    console.log('File written...');

    //APPEND FILE
    //(as writefile is asyn so will calling append file in its callback)
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      'I love NodeJS',
      (error) => {
        if (error) throw error;
        console.log('File updated...');
      }
    );
  }
);

//READ FILE
fs.readFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'utf8',
  (error, data) => {
    if (error) throw error;
    console.log(data);
  }
);

//FILE REMANE
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'newName.txt'),
  (error) => {
    if (error) throw error;
    console.log('File renamed..');
  }
);
