#!/bin/bash

pushd sample-lessons/templates
../../md-init
../../md-process

OUTPUT_FILES="
lesson1.md
lesson2.md
proto-lesson.md
sample-lesson.md
"

for FILE in $OUTPUT_FILES
do
  mv $FILE ../output
done

popd
