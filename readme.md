# About Processing Templates

The `md-process` script is an executable JavaScript script that reads a `filename-template.md` and generates a `filename.md`. The following processing will occur:

* Replace any occurrences of `{{TOC}}` with a table of contents (with hypertext links).
  - Note that the TOC is generated from all of the level 2 and above markdown headers (lines that begin with `##`).
  - Level 3 and above headers are indented according to their level.
* Replace any occurrences of `{{path/to/file}}` with the contents of that file.
* Replace any occurrences of `{{ exec(command, options) }}` with the stdout captured from running the command.

You can view the included examples in the `sample-lessons\templates` for a working example and generate the resulting output by running the `testit.sh` script.

## Options

`md-process` supports the following command-line options:

    -i <input-file-name>    # specify the name of the input file (the template)
    -o <output-file-name>   # specify the name of the output file

For example: `md-process -i my-template.md -o README.md`

## Creating a Sample Lesson Template

The `md-init` script can be used to create a sample lesson template:

```bash
md-init
```

Now simply rename the generated file (`sample-lesson-template.md`), start editing it, and run `md-process` to generate the resulting lesson markdown file.
