// const withPlugins = require('next-compose-plugins');
// const withImages = require("next-images");


// module.exports = withImages();
// module.exports = {
//     images: {
//       disableStaticImages: true
//     }
//   }
  
//   module.exports = withPlugins([
//     [withImages],
//   ], {
//     images: {
//       disableStaticImages: true
//     }
//   });

// const withReactSvg = require('next-react-svg')
// const path = require('path')

// module.exports = withReactSvg({
//   include: path.resolve(__dirname, '/public/Iconly'),
//   webpack(config, options) {
//     return config
//   }
// })

const withImages = require("next-images");
module.exports = withImages();