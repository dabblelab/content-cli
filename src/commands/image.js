const {Command, flags} = require('@oclif/command');
const ImageGenerator = require('../lib/imageGenerator');

class ImageCommand extends Command {
  async run() {
    const {flags} = this.parse(ImageCommand)
    const outputDir = flags.outputDir || '.'
    const image = new ImageGenerator(outputDir)
    image.createImage(flags.headline, flags.style)
    .then(result => {
      this.log(result)
    })
    .catch(error => {
      this.log(error)
    })
  }
}

ImageCommand.description = `Create a new YouTube or GitHub image asset.
...
Resulting image will be created in the current working directory.
`

ImageCommand.flags = {
  headline: flags.string({char: 'h', description: 'headline for poster images'}),
  style: flags.string({
    char: 's',
    description: 'image style',
    options: [
      'purple-orange',
      'orange-purple',
      'blue-green',
      'green-blue',
      'purple-blue',
      'blue-purple',
    ],
  }),
}

module.exports = ImageCommand
