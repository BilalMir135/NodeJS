//Module import/export
/* const Person = require('./person');

//import Person from './person'; node have not implemented this es6 syntax yet

const person1 = new Person('Bilal Mir', 22);

person1.greeting(); */

//Event Emitter
/* 
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('hello');
logger.log('hi'); */

//Server Creation
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  /*   
  if (req.url === '/') {
    fs.readFile(
      path.join(__dirname, 'public', 'index.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }

  if (req.url === '/about') {
    fs.readFile(
      path.join(__dirname, 'public', 'about.html'),
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
      }
    );
  }

  if (req.url === '/api/users') {
    const users = [
      { name: 'Anas Bin Sohail', job: 'MERN Stack Developer' },
      { name: 'Bilal Mir', job: 'Front-end Developer' },
      { name: 'Khizram Saeed Khan', job: 'Wordpress Developer' },
    ];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(users));
  } */

  //BUID FILEPATH
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  //Extension name
  let extname = path.extname(filePath);

  //Init content type
  let contentType = 'text/html';

  //Check and set content type
  switch (extname) {
    case '.js':
      contentType = 'text/js';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jgp':
      contentType = 'image/jpg';
      break;
  }

  //Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        //Page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        //Some server error
        res.writeHead(500);
        res.end(`Server error : ${err}`);
      }
    } else {
      //Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
