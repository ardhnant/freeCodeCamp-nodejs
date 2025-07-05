 const fs = require('fs');

const readStream = fs.createReadStream('./data2.md', { encoding: 'utf8'});
const writeStream = fs.createWriteStream('./data.md');

//readStream.on('data', chunk => {
//   console.log('/n---- NEW CHUNK ----/n');
//   console.log(chunk);
 // writeStream.write('\nNEW CHUNK:\n');
 // writeStream.write(chunk);
//});

// piping
// readStream.pipe(writeStream);
 //
 //
 //
fs.readFile('./data2.md', (err, data) => {
   let wordCount = data.toString().length
   console.log(wordCount);
 })
