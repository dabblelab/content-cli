const wrap = require('word-wrap')
const fs = require('fs')
const util = require('util')
const {createCanvas, loadImage, registerFont} = require('canvas')

class ImageGenerator {
  constructor(outputFolder = '.') {
    this.outputFolder = outputFolder
  }

  createImage(headline, style) {
    return new Promise((resolve, reject) => {
      registerFont('./src/lib/assets/fonts/GT-Walsheim-Regular.ttf', {family: 'GT Walsheim', weight: 'regular'})
      registerFont('./src/lib/assets/fonts/GT-Walsheim-Ultra-Bold.ttf', {family: 'GT Walsheim', weight: 'bold'})

      // GitHub: 1280×640px
      const width = 1520
      const height = 840

      const canvas = createCanvas(width, height)
      const context = canvas.getContext('2d')

      context.fillStyle = '#000'
      context.fillRect(0, 0, width, height)

      const name = wrap(headline, {width: 17, indent: ''})

      const lines = (name.split('\n')).length

      let nameY = 360
      let nameSize = '80pt'

      switch (lines) {
      case 1:
        nameY = 400
        nameSize = '90pt'
        break
      case 2:
        nameY = 380
        nameSize = '80pt'
        break
      }

      context.font = `bold ${nameSize} "GT Walsheim"`
      context.textAlign = 'right'
      context.textBaseline = 'middle'

      const textWidth = context.measureText(name).width
      let nameX = textWidth + 160

      const gradient = getGradient(context, canvas, style || Math.floor(Math.random() * 6) + 1)

      context.fillStyle = gradient
      context.fillText(name, nameX, nameY)

      loadImage('./src/lib/assets/images/logo-light.png')
      .then(image => {
        context.drawImage(image, 160, 160, 360, 72)
        const buffer = canvas.toBuffer('image/png')
        const start = Date.now()
        const filename = `${this.outputFolder}/image_${start}.png`

        const writeFile = util.promisify(fs.writeFile)

        writeFile(filename, buffer, 'binary')
        .then(() => {
          resolve(`GitHub cover image ${filename} was created with headline ${headline} and gradient ${style}`)
        })
      })
      .catch(error => {
        reject(error)
      })
    })
  }
}

function getGradient(context, canvas, style) {
  const gradient = context.createLinearGradient(100, 0, canvas.width - 100, 0)

  switch (style) {
  case 'purple-orange':
    // purple-orange
    gradient.addColorStop(0, 'rgb(203, 19, 231)')
    gradient.addColorStop(1, 'rgb(255, 145, 56)')
    break
  case 'orange-purple':
    // orange-purple
    gradient.addColorStop(0, 'rgb(255, 145, 56)')
    gradient.addColorStop(1, 'rgb(203, 19, 231)')
    break
  case 'blue-green':
    // blue-green
    gradient.addColorStop(0, 'rgb(12, 185, 239)')
    gradient.addColorStop(1, 'rgb(80, 254, 129)')
    break
  case 'green-blue':
    // green-blue
    gradient.addColorStop(0, 'rgb(80, 254, 129)')
    gradient.addColorStop(1, 'rgb(12, 185, 239)')
    break
  case 'purple-blue':
    // purple-blue
    gradient.addColorStop(0, 'rgb(203, 19, 231)')
    gradient.addColorStop(1, 'rgb(12, 185, 239)')
    break
  case 'blue-purple':
    // blue-purple
    gradient.addColorStop(0, 'rgb(12, 185, 239)')
    gradient.addColorStop(1, 'rgb(203, 19, 231)')
    break
  default:
    // purple-orange
    gradient.addColorStop(0, 'rgb(203, 19, 231)')
    gradient.addColorStop(1, 'rgb(255, 145, 56)')
    break
  }
  return gradient
}

module.exports = ImageGenerator
