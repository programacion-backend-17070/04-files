const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'fyh.txt')


// function escribir(data) {
//   fs.writeFile(filePath, data, (err) => {
//     if(!err) {
//       console.log("exito!")
//       fs.appendFile(filePath, "NUEVA LINEA\n\r", (err) => {
//         console.log("agregado")
//       })
//     } else {
//       console.log("error")
//     }
//   })
// }


// fs.readFile(filePath, "utf8", (err, data) => {
//   if (err) {
//     console.log("hay error")
//     console.error(err)
//   } else {
//     console.log(data)
//     escribir(new Date().toISOString())
    
//   }
// })

// fs.unlink(filePath, (err) => {
//   if (err) {
//     console.log("hay error")
//   } else {
//     console.log("borrado")
//   }
// })

// fs.mkdir(__dirname + "/carpeta", (err) => {
//   console.log(err)
// })

fs.readdir(__dirname + "/carpeta", (err, nombres) => {
  console.log(err, nombres)
})

console.log("fin")