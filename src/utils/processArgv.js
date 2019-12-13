exports.mapOptions = function (options = null) {

  if(!options){
    options = [...process.argv];
    options.splice(0, 2);
  }

  return options.reduce((obj, el) => {
    const entries = el.split('=');
    const option = {
      name: entries[0].replace('--', ''),
      value: entries[1]
    };

    obj[option.name] = option.value;
    return obj;
  }, {});
};

exports.getArgvOptions = function (){
  const options = [...process.argv];
      options.splice(0, 4);
  return options;
};
