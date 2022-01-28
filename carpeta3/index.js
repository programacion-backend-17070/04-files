const Contenedor = require('./clase')

const instancia = new Contenedor("./productos.json")

const producto1 = {
  nombre: "Play 5",
  precio: 15000,
  thumbnail: "url"
}

async function ejecutar() {
  await instancia.save(producto1)
}

ejecutar()