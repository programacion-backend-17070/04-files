class Contenedor {
  constructor(filePath) {

  }

  async save (objeto) {
    try {
      await fs.appendFile(this.filePath, objeto)
    } catch (e) {

    }
  }
}

module.exports = Contenedor