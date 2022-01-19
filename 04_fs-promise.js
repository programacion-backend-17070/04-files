const fs = require('fs').promises;
const path = require('path');



(async () => {
  const filePath = path.join(__dirname, 'file.txt')
  const data = await fs.readFile(filePath, "utf8")
  console.log(data)
})()