const fs = require('fs')

const info = {
  contenidoStr: null,
  contenidoObj: null,
  size: 0 // tarea
}

fs.readFile("./package.json", (err, data) => {
  const obj = JSON.parse(data)
  console.log(obj)
  info.contenidoObj = obj
  info.contenidoStr = data.toString()

  console.log(info)

  const infoData = JSON.stringify(info, null, 2)

  fs.writeFile("./info.txt", infoData, (err) => {
    console.log("escrito")
  })
})