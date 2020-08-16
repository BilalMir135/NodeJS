const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

const myUrl2 = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

//Serialized URL
console.log('HREF = ', myUrl.href);
console.log('toString = ', myUrl.toString());

//Host (domain name)
console.log('Host = ', myUrl2.host);

//Hostname
console.log('Hostname = ', myUrl2.hostname);

//Pathname
console.log('Pathname = ', myUrl.pathname);

//Serialized Query
console.log('Serialized Query = ', myUrl.search);

//Params Obj
console.log('Params Object = ', myUrl.searchParams);

//Add Params
myUrl.searchParams.append('abc', '123');
console.log('Params Object after adding new param = ', myUrl.searchParams);

//Looping through params
myUrl.searchParams.forEach((value, key) => console.log(`${key}:${value}`));
