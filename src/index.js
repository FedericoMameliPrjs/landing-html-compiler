const fs = require('fs');
const path = require('path');

let config;

//search for config file
try{
  config = require(path.resolve(process.cwd(), './landingHtmlCompiler.config.js'));
  console.log(config);
}catch (err) {
  console.log(err)
}
