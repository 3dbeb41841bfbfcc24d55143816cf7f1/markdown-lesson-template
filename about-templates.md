# About Processing Templates

The `md-process` script is an executable JavaScript script that reads the file `template.md` and generates `readme.md`. The following processing will occur:

* Replace any occurrences of {{TOC}} with a table of contents (with hypertext links).
  - Note that the TOC is generated from all of the level 2 and above markdown headers (lines that begin with `##`).
* Replace any occurrences of {{path/to/file}} with the contents of that file.
* Replace any occurrences of {{ exec(command, path/to/file) }} with the stdout captured from running
the command.

You can view the incuded `template.md` for a working example and generate the resulting `readme.md` by running `md-process` from the command line.

## Options

`md-process` supports the following command-line options:

* -i <input-file-name>    # specify the name of the input file (the template)
* -o <output-file-name>   # specify the name of the output file

For example: `md-process -i my-template.md -o README.md`
