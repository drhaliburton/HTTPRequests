var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')               // Note 1
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Downloading...');
       })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function() {
         console.log('Download Complete');
       });
