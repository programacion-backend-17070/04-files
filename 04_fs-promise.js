const fs = require('fs').promises;
const path = require('path');

// async y await
// (async () => {
//   try {
//     const data = await fs.readFile("./file.txt", "utf8")
//     await fs.writeFile("./file.txt", "HOLA")
//     console.log(data)
//   } catch (e) {
//     console.error(e)
//   }
// })()

async function leer() {
  await fs.writeFile("./file.txt", "HOLA")
  await fs.rename("./file.txt", "./file_nuevo.txt")
}
leer()


