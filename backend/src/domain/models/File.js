class File {
  name
  lines

  constructor (name, data) {
    this.name = name
    this.lines = this.formatLines(data)
  }

  formatLines (data) {
    return data.map(({ text, number, hex }) => {
      return {
        text,
        number: number && Number(number),
        hex
      }
    })
  }

  formatToJson () {
    return {
      name: this.name,
      lines: this.lines
    }
  }
}

export default File
