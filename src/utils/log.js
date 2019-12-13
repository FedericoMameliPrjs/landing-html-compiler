const chalk = require('chalk');

module.exports = function (message, type = null) {
  const types = {
    success: {
      icon: '✔',
      color: chalk.green
    },
    error: {
      icon: '❌',
      color: chalk.red
    },
    warn: {
      icon: '⚠',
      color: chalk.yellow
    },
    info: {
      icon: 'ℹ',
      color: chalk.cyan
    }
  };


  if(type === null){
    console.log(message);
  }
  else{
    console.log(types[type].color(`${types[type].icon}  ${message}`));
  }

};
