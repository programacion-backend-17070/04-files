function bloqueante() {
  console.log("bloqueante");
  for (let i = 0; i < 10e9; i++) {
    i;
  }
}

console.time("tiempo")
console.log("primera instruccion")
bloqueante()
console.log("final")
console.timeEnd("tiempo")
