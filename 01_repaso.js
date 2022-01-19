// 1 - 2
// 3 
// 4
// 1000 * 3 * 10^6 = 3 00 000 000
function delay (ret) {
  for (let i = 0; i < ret * 3e6; i++) {}
}

function hacerTarea(num, cb) {
  console.log(`Ejecutando tarea: ${num}`)
  setTimeout(cb, 100)
}

console.log("inicio")
console.time("delay")
hacerTarea(1, () => {
  hacerTarea(2, () => {
    hacerTarea(3, () => {
      hacerTarea(4, () => {
        console.log("fin")
        console.timeEnd("delay")
      })
    })
  })
})
  
// Hola
function mostrarLetras(s, cb) {
  for (let i = 0; i < s.length; i++) {
    setTimeout(() => {
      console.log(s[i], i * 1000)
    })
  }

  cb()
}

setTimeout(() => mostrarLetras("hola", ()=> console.log("fin")), 0)
setTimeout(() => mostrarLetras("hola", ()=> console.log("fin")), 250)
setTimeout(() => mostrarLetras("hola", ()=> console.log("fin")), 500)