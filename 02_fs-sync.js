const fs = require('fs')
const path = require('path')

console.log(__dirname)
const filePath = path.join(__dirname, 'file.txt')

// relativo ./
// absoluto /
console.time("read")
try {
  const data = fs.readFileSync(filePath, 'utf8')

  fs.writeFileSync(filePath, "HOLA\n")
  fs.appendFileSync(filePath, "NUEVA LINEA\n")
  fs.unlinkSync(filePath)
  // throw new Error("un error")
} catch (e) {
  console.log("ERROR")
  console.log(e)
}

console.timeEnd("read")