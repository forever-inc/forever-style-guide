const path = require('path');
const fs = require('fs');
const cp = require('child_process');
const sass = require('node-sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const copy = require('copy');

class MarsStyleGuideBuild {

  constructor() {
    this.outputFolder = path.resolve(__dirname, './dist');
    this.assetsFolder = path.resolve(__dirname, './assets');
  }

  log(...args) {
    console.log(' -', ...args);
  }

  cleanDist() {
    this.log('clean: attempt removal of dist folder');
    cp.execSync(`rm -rf ${this.outputFolder}`);
    this.log('clean: removed dist folder');
    return this;
  }

  copyAssets() {
    this.log('copy: copying forever styleguide fonts');
    copy(path.join(this.assetsFolder, 'fonts/**/*'), path.join(this.outputFolder, 'fonts'), function () {});

    this.log('copy: copying forever styleguide images');
    copy(path.join(this.assetsFolder, 'images/**/*'), path.join(this.outputFolder, 'images'), function () {});

    this.log('copy: copying font-awesome fonts');
    copy(path.join(this.resolveNodeModuleFolder('font-awesome'), 'fonts/**/*'), path.join(this.outputFolder, 'fonts'), function () {});

    return this;
  }

  sassBuild(entryFile) {
    const outputFile = path.resolve(__dirname, this.outputFolder, 'css/styleguide.css');

    const options = {
      file: entryFile,
      outFile: outputFile,
      sourceMap: true,
      outputStyle: 'compressed',
      importer: (url, prev, done) => {

        //replace bootstrap imports
        if (url.startsWith('~bootstrap-sass')) {
          done({
            file: url.replace('~bootstrap-sass', `${this.resolveNodeModuleFolder('bootstrap-sass')}`)
          });
        }

        //replace font-awesome imports
        else if (url.startsWith('~font-awesome')) {
          done({
            file: url.replace('~font-awesome', `${this.resolveNodeModuleFolder('font-awesome')}`)
          });
        }

        //no replace
        else {
          done();
        }
      }
    };

    this.log('sass: starting render');
    sass.render(options, (err, result) => {
      if (!err) {
        const processedOutput = postcss([autoprefixer()]).process(result.css);
        cp.execSync(`mkdir -p ${path.resolve(__dirname, this.outputFolder, 'css')}`);
        fs.writeFileSync(outputFile, processedOutput.css);
        fs.writeFileSync(path.resolve(__dirname, this.outputFolder, 'css/styleguide.css.map'), result.map);
        this.log('sass: css rendered successfully');
      } else {
        this.log('sass: something went wrong in render step', err);
        process.exit(1);
      }
    });

    return this;
  }

  resolveNodeModuleFolder(moduleName) {
    const parent = path.resolve(process.cwd(), '../', moduleName);
    const child = `${__dirname}/node_modules/${moduleName}`;
    const other = `${process.cwd()}/node_modules/${moduleName}`;
    if (fs.existsSync(parent)) {
      return parent;
    } else if (fs.existsSync(child)) {
      return child;
    } else if (other) {
      return other;
    }
    console.error(`ERROR: Module not found: ${moduleName}.`);
    console.error(`  - Ensure you have run 'npm install'.`);
    console.error(`  - This script must be run from root of either the styleguide or a parent project folder.`);
    process.exit(1);
  }

}

console.log('BEGIN: Mars Styleguide Build');
new MarsStyleGuideBuild()
  .cleanDist()
  .copyAssets()
  .sassBuild(`${__dirname}/styles/application.scss`);
