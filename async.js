const request = require('request');

const test = () => {
  request('http://www.google.com',(error, response, body)=>{
    console.log('Response');
  });
}
//START OF PROGRAM
console.log("Hitting google");
test();
console.log("Some other work");
