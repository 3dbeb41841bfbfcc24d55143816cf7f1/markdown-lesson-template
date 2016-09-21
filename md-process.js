let fs = require("fs");
let path = require("path");

/** Create a Table of Contents for the content. A TOC entry will be generated
  * for each header of level 2 or greater (lines starting with '##')
 **/
function makeTOC(content) {
  let headerPattern = /##.*/g  // include headers at level 2 and up
  let tocHeaders = content.match(headerPattern);
  let toc = tocHeaders.map( h => {
    let level = 0;
    while(h[++level] === '#');
    let guts = h.substring(level).trim();
    let link = guts
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/,|_|!|\*|\(|\)/g, '');
    let indent = '  '.repeat(level-2);  // indent nested toc lines
    return indent + '* [' + guts + '](#' + link + ')';
  });

  toc.unshift('## Table of Contents\n');
  return toc.join('\n');
}

function generateOutput(command, args) {
  const execFileSync = require('child_process').execFileSync;
  console.log('Executing:', command, args);
  try {
    return execFileSync(command, args, { encoding: 'utf-8' }).replace(/[\r\n]*$/, "");
  }
  catch (err) {
    console.error(err.stack)
    if (err.pid) {
      console.log('%s (pid: %d) exited with status %d', err.file, err.pid, err.status);
    }
  }
}

/** Process the template, searching for double curly braces (i.e. {{embeddedExpression}} )
  *  - {{TOC}}              - will cause a Table of Contents to be generated and inserted into the placeholder
  *  - {{embeddedFileName}} - will cause the file contents to be inserted into the placeholder
 **/
function processTemplate(template, baseDir) {
  // regex for capturing {{path/file.js}}
  let regex = new RegExp("\\{\\{([^:\\}]+)\\}\\}", "g");

  return template
  .replace(regex, function(embeddedExpression) {
    embeddedExpression = embeddedExpression.substr(2, embeddedExpression.length - 4).trim();
    if (embeddedExpression === 'TOC') {
      console.log('inserting TOC');
      return makeTOC(template);
    }
    else if (embeddedExpression.startsWith('exec(')) {
      let args = embeddedExpression.substring(5).replace(/\)/g, '').split(',');
      args = args.map( arg => arg.trim() );
      let command = args.shift();
      console.log('args:', args);
      let output = generateOutput(command, args);
      console.log(`transcluding output of '%s'`, embeddedExpression);
      return output;
    }
    else {
      console.log(`transcluding '%s'`, embeddedExpression);
      return fs.readFileSync(path.join(baseDir, embeddedExpression), 'utf-8').replace(/[\r\n]*$/, "");
    }
  });
}

let inputFile = 'template.md';
let outputFile = 'readme.md';

console.log(`Processing '${inputFile}' ==> '${outputFile}'.`);

let cwd = process.cwd();
let template = fs.readFileSync(require("path").join(cwd, inputFile), "utf-8");
let readme = processTemplate(template, cwd);
let comment = `
{::comment}
This is a comment which is
completely ignored.
{:/comment}`
readme = comment + readme;
fs.writeFile(outputFile, readme, "utf-8", function() { console.log('=== All done! ==='); });
