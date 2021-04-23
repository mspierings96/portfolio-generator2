const fs = require('fs');
const generatePage = require('./src/page-template');

const profileDataArgs = process.argv.slice(2);

console.log(profileDataArgs);

const [Mitchell, mspierings96] = profileDataArgs;

console.log(Mitchell, mspierings96);

const pageHTML = generatePage(Mitchell, mspierings96);

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});