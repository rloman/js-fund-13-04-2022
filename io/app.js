// credits
//
//https://nodejs.dev/learn/writing-files-with-nodejs

const fs = require('fs')

const content = 'Some content!'

fs.writeFile('./test.txt', content, err => {
  if (err) {
    console.error(err)
  } else {
    //file written successfully
    console.log("File written successfully");
  }
});