const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file.txt')

fs.readFile(filePath, "utf8", (err, data) => {
  console.log(err, data)
})