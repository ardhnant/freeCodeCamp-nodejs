const fs = require('fs');

/*fs.readFile('./data.md', (err, data) => {
  if(err){
    console.log('Error:', err.message);
  } else if(data.toString().length > 1000) {
    console.log('Man its too biggy i am lazy using lazy vim');
  } else {
    console.log(data.toString())
  }
});

console.log('Predection: Prolly gonna say its too big coz i know that mf his ass is lazy.');

setTimeout(() => {
  fs.writeFile('./data.md', 'I am literal God', () => {
   console.log('File was written');
  }
  )}, 3000);

  
fs.writeFile('./data2.md', 'I am literal God 2', () => {
  console.log('File was written');
 }
); 

if(!fs.existsSync('../lec2')){
  fs.mkdir('../lec2', (err) => {
   if(err){
      console.log('Error:', err.message);
    } else {
      console.log('Folder was made')
    };
  });
} else {
  fs.rmdir('../lec2', (err) => {
    if(err){
      console.log('Error:', err.message);
    } else {
      console.log('Folder was removed');
    }
  });
}*/

if(!fs.existsSync('../lec1/stream.js', () => {
  fs.writeFile('../lec1/stream.js', '', (err) => {
   if(err){
      console.log('Error:', err.message);
    } else {
      console.log('File was made')
    };
  });
}));
