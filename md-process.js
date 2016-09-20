let fs = require("fs");
let path = require("path");

function makeTOC(content) {
  let headerPattern = /##.*/g  // include headers at level 2 and up
  let tocHeaders = content.match(headerPattern);
  let toc = tocHeaders.map( h => {
    let level = 0;
    while(h[level] === '#') level += 1;
    let guts = h.substring(level).trim();
    let link = guts
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/,/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
    .replace(/\*/g, '')
    .replace(/_/g, '');
    let indent = '  '.repeat(level-2);
    return indent + '* [' + guts + '](#' + link + ')';
  });

  toc.unshift('## Table of Contents\n');
  return toc.join('\n');
}

function processTemplate(template, baseDir) {
  // regex for capturing {{path/file.js}}
  let regex = new RegExp("\\{\\{([^:\\}]+)\\}\\}", "g");

  return template
  .replace(regex, function(embeddedExpression) {
    embeddedExpression = embeddedExpression.substr(2, embeddedExpression.length - 4).trim();
    if (embeddedExpression === 'TOC') {
      console.log('  inserting TOC');
      return makeTOC(template);
    }
    else {
      console.log(`  transcluding '%s'`, embeddedExpression);
      return fs.readFileSync(path.join(baseDir, embeddedExpression), "utf-8").replace(/[\r\n]*$/, "");
    }
  });
}

let cwd = process.cwd();
let template = fs.readFileSync(require("path").join(cwd, "template.md"), "utf-8");
let readme = processTemplate(template, cwd);
fs.writeFile("readme.md", readme, "utf-8", function() {});
