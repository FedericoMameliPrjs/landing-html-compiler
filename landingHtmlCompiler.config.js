module.exports = {
  entries:[
    './public/index.html'
  ],
  rules: [
    {
      pattern: /\/public\//,
      replace: '/media/enel_special_20/'
    },
    {
      pattern: /https:\/\/livelanding.prezzogiusto.com/,
      replace: ''
    },
    {
      pattern: /https:\/\/[a-z]\.prezzogiusto.com/,
      replace: ''
    }
  ]
};
