const fs = require('fs');

const readFromFile = (fileName,callback)=>{
  // WRITE CODE HERE
    //return fs.readFileSync(fileName,'utf8');
    return fs.readFile(fileName,'utf8',(err, data) => {
        if (err) callback(err);
        callback(data);
    });
};

readFromFile('sample.txt', (data) => {
    console.log('START');
    console.log(data);
    console.log('END')
});
