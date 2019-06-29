// https://stackoverflow.com/questions/25460574/find-files-by-extension-html-under-a-folder-in-nodejs

const path = require('path');
const fs = require('fs');

let links = [];

function fromDir(startPath, filter){

  if (!fs.existsSync(startPath)){
    console.log("no dir ", startPath);
    return;
  }

  var files = fs.readdirSync(startPath);
  for(var i = 0; i < files.length; i++) {
    var filename = path.join(startPath, files[i]);
    var stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      fromDir(filename, filter);
    } else if (filename.indexOf(filter) >= 0) {
      links.push(filename.replace(/\\/g, '/'));
    };
  };

};

fromDir('.','.html');

fs.writeFile('./sitemap.html', `
<!DOCTYPE html>
<html>
  <head>
    <title>Thingkingland sitemap</title>
    <meta charset="UTF-8">
    <meta name="description" content="List of HTML files in Thingkingland."/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
  </head>
  <body>
    <h1>Thingkingland sitemap</h1>
    ${links.map(l => `<p><a href="./${l.replace(/index\.html$/, '')}">${l}</a></p>`).join('\n')}
  </body>
  <!-- MADE BY SEAN -->
</html>`, (err) => {});
