const path = require('path');
const fs = require('fs');
const cp = require('child_process');
const sass = require('node-sass');
const copy = require('copy');

class MarsStyleGuideBuild {
  
  constructor() {
    this.outputFolder = path.resolve(__dirname, './dist');
    this.srcFolder = path.resolve(__dirname, './app/assets/');
    
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
    copy(path.join(this.srcFolder, 'fonts/**/*'), path.join(this.outputFolder, 'fonts'), function () {});

    this.log('copy: copying forever styleguide images');
    copy(path.join(this.srcFolder, 'images/**/*'), path.join(this.outputFolder, 'images'), function () {});

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
        if (url.startsWith('bootstrap')) {
          done({
            file: url.replace('bootstrap/', `${this.resolveNodeModuleFolder('bootstrap-sass')}/assets/stylesheets/bootstrap/`)
          });
        } 
        
        //replace font-awesome imports
        else if (url.startsWith('font-awesome')) {
          done({
            file: url.replace('font-awesome', `${this.resolveNodeModuleFolder('font-awesome')}/scss/font-awesome`)
          });
        } 
        
        //replace forever style guide imports
        else if (url.startsWith('forever_style_guide')) {
          done({
            file: url.replace('forever_style_guide/', `${__dirname}/app/assets/stylesheets/forever_style_guide/`)
          });
        } 
        
        //no replace
        else {
          done();
        }
      }
    };

    this.log('sass: starting render');
    const result = sass.render(options, (err, result) => {
      if (!err) {
        cp.execSync(`mkdir -p ${path.resolve(__dirname, this.outputFolder, 'css')}`);
        fs.writeFileSync(outputFile, result.css);
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
    console.log(parent);
    if (fs.existsSync(parent)) {
      return parent;
    } else if (fs.existsSync(child)) {
      return child;
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
  .sassBuild(`${__dirname}/app/assets/stylesheets/style_guide/application-mars.scss`);
