//todo: clean this mess up 
//todo: copy FA fonts to output folder
//todo: use __dirname to make all paths relative to this script.
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const sass = require('node-sass');
const rmrf = require('rimraf');
const copy = require('copy');

const outputFolder = './dist';
const srcFolder = './app/assets/';

rmrf.sync('./dist');
copy(path.join(srcFolder, 'fonts/**/*'), path.join(outputFolder, 'fonts'), function () {});
copy(path.join(srcFolder, 'images/**/*'), path.join(outputFolder, 'images'), function () {});
sassafras();

function sassafras () {
  const options = {
    file: './app/assets/stylesheets/style_guide/application-mars.scss',
    importer: function (url, prev, done) {
      if (url.startsWith('bootstrap')) {
        done({file: url.replace('bootstrap/', path.join(process.cwd() + '/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/'))});
      } else if (url.startsWith('font-awesome')) {
        done({file: url.replace('font-awesome', path.join(process.cwd() + '/node_modules/font-awesome/scss/font-awesome'))});
      } else if (url.startsWith('forever_style_guide')) {
        done({file: url.replace('forever_style_guide/', path.join(process.cwd() + '/app/assets/stylesheets/forever_style_guide/'))});
      } else {
        done();
      }
    }
  };
  
  sass.render(options, (err, result) => {
    if (!err) {
      mkdirp('./dist/css');
      fs.writeFileSync('./dist/css/styleguide.css', result.css)
    }
  });
}
