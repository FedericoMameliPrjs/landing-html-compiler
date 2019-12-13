module.exports = {
  entries:[
    './public/index.html'
  ],
  output: './dist',
  rules: [
    {
      pattern: /\/public\//g,
      replace: '/media/enel_special_20/'
    },
    {
      pattern: /(https:\/\/livelanding.prezzogiusto.com)/g,
      replace: ''
    },
    {
      pattern: /(https:\/\/[a-z]\.prezzogiusto.com)/g,
      replace: ''
    },
    {
      pattern: /\.\//g,
      replace: '/cdn/'
    }
  ]
};
