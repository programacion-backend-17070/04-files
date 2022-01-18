const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'file.txt')
console.log(__dirname)
console.time("read")
const data = fs.readFileSync(filePath, 'utf8');
console.timeEnd("read")
fs.writeFileSync(filePath, "HOLA")
fs.appendFileSync(filePath, "nueva linea")
fs.unlinkSync(filePath)


