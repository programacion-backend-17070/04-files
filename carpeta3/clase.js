const fs = require('fs').promises;

class Contenedor {
  constructor(filePath) {
    this.filePath = filePath;
    this.id = 1
  }

  // objeto de este tipo:
  // {
  //   nombre,
  //   precio,
  //   thumbnail,
  // }
  async save (objeto) {
    objeto.id = this.id

    try {
      const raw = await fs.readFile(this.filePath)
      const data = JSON.parse(raw)

      data.push(objeto)

      await fs.writeFile(this.filePath, JSON.stringify(data, null, 2), "utf8")
      this.id++
    } catch (e) {
      console.log(e)
    }
  }

  async getById(id) {
    try {
      const raw = await fs.readFile(this.filePath)
      const data = JSON.parse(raw)

      const obj = data.find((obj) => obj.id === id)

      if(!obj) {
        return null
      }

      return obj
    } catch (e) {
      console.log(e)
    }
  }
  
  async getAll() {
    try {
      const raw = await fs.readFile(this.filePath)
      return JSON.parse(raw)
    } catch (e) {
      console.log(e)
    }
  }

  async deleteById(id) {
    try {
      const raw = await fs.readFile(this.filePath)
      const data = JSON.parse(raw)

      const filtrado = data.filter(obj => obj.id !== id)
      await fs.writeFile(this.filePath, JSON.stringify(filtrado, null, 2), "utf8")
    } catch (e) {
      console.log(e)
    }
  }

  async deleteAll() {
    try {
      await fs.writeFile(this.filePath, JSON.stringify([], null, 2), "utf8")
    } catch (e) {
      console.log(e)
    }
  }
}

module.exports = Contenedor