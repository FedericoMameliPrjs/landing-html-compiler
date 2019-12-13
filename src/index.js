const fs = require('fs');
const path = require('path');

const {merge} = require('lodash/object');

const log = require('./utils/log');
const {mapOptions} = require('./utils/processArgv');


//load options
/*
* options.config => config file path. if not defined will search for landingHtmlCompiler.config.js
* */
const options = {
  config: './landingHtmlCompiler.config.js'
};

merge(options, mapOptions());

let config;

//search for config file
  try{
    config = require(path.resolve(process.cwd(), options.config));

    config.entries.forEach((entry, i) => {
      //1. carico file
      let template = fs.readFileSync(path.resolve(process.cwd(), entry), 'utf-8');

      //2. eseguo i pattern
      config.rules.forEach(rule => {
        template = template.replace(rule.pattern, rule.replace);
      });

      //3. save file in output dir
      if(config.hasOwnProperty('output')){
        const outputDir = path.resolve(process.cwd(), config.output);
        //check if directory exisist
        if(!fs.existsSync(outputDir))
          fs.mkdirSync(outputDir);

        const filename = getFilenameFromPath(entry) || `${i}.html`;
        fs.writeFileSync(`${outputDir}\\${filename}`, template);

      }else log('config.output not defined.\n   Please define it.', 'error');
    });
  }catch (err) {
    log(err, 'error');
  }


  function getFilenameFromPath(path) {
    let filename = path.match(/([A-z0-9_-]*)(\.)([A-z0-9]*)$/)[0];
    return filename;
  }
