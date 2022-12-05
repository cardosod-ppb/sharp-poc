const path = require('path');
const sharp = require('sharp');

async function main() {
  const sourcePath = path.resolve(__dirname, 'images', 'spiderman.png');
  const destinationPath = path.resolve(__dirname, 'build', 'spiderman.png');

  await sharp(sourcePath)
    .toFormat('png', {
      compressionLevel: 9,
      quality: 50,
      effort: 10,
    })
    .toFile(destinationPath);
}

main();
