---
title: Sample Lesson
type: lesson
duration: "1:30"
creator:
    name: Dr. Mike Hopper/ATL
competencies: javascript, ruby
---

<!--
This file is auto-generated from a 'template.md'
file using the 'md-process' script.
Therefore *DO NOT* edit this file directly!
Instead edit the template file and then run 'md-process'.
-->

# Sample Lesson

This is just a sample lesson demonstrating the use of a template to generate this `readme.md`.

## Table of Contents

* [Objectives](#objectives)
* [Preparation](#preparation)
* [Introduction](#introduction)
* [All Serious Developers use the Command Line](#all-serious-developers-use-the-command-line)
* [JavaScript Jams!](#javascript-jams)
  * [JavaScript Does Server Too!](#javascript-does-server-too)
* [Ruby Rocks!](#ruby-rocks)
* [Markdown Has Task Lists](#markdown-has-task-lists)
  * [A Level 3 Heading, *With* A __FUNKY__](#a-level-3-heading-with-a-funky-name)
* [Summary](#summary)
* [For Further Study](#for-further-study)

## Objectives
* Objective 1
* Objective 2
* Objective 3

## Preparation
*Before this lesson, students should already be able to:*

* Prereq 1
* Prereq 2
* Prereq 3

## Introduction

Markdown is fun but what I really love is Markdown templates!

---

## All Serious Developers use the Command Line

Here is the output of running `ls -als`:

```
total 32
0 drwxr-xr-x  10 drmikeh  staff   340 Jan  4 12:35 .
0 drwxr-xr-x   5 drmikeh  staff   170 Jan  4 12:31 ..
4 -rw-r--r--   1 drmikeh  staff  1648 Jan  4 12:33 lesson1-template.md
4 -rw-r--r--   1 drmikeh  staff  3946 Jan  4 12:38 lesson1.md
4 -rw-r--r--   1 drmikeh  staff  1489 Jan  4 12:19 lesson2-template.md
4 -rw-r--r--   1 drmikeh  staff  2196 Jan  4 12:38 lesson2.md
4 -rw-r--r--   1 drmikeh  staff  1425 Jan  4 12:19 proto-lesson-template.md
4 -rw-r--r--   1 drmikeh  staff  2132 Jan  4 12:38 proto-lesson.md
4 -rw-r--r--   1 drmikeh  staff  1489 Jan  4 12:38 sample-lesson-template.md
4 -rw-r--r--   1 drmikeh  staff  2196 Jan  4 12:38 sample-lesson.md
```

Here is the output of running `echo apple orange banana`:

```
apple orange banana
```


## JavaScript Jams!

Here is the source code for `src/greeting.js`:

```javascript
function delayedGreeting(message, waitTime) {
  setTimeout(function() {
    console.log(message);
  }, waitTime);
}

delayedGreeting('callbacks are fun', 1000);
delayedGreeting('closures rock', 500);

console.log('Goodbye');
```

And the output is:

```
Goodbye
closures rock
callbacks are fun
```

### JavaScript Does Server Too!

<details>
  <summary><strong>Here is the source code for `src/express-app.js`</strong></summary>

```javascript
var express = require('express');
var app = express();
var morgan = require("morgan");

// Middleware
app.use(morgan('combined'));

app.use(function(request, response, next) {
  console.log('Custom Middleware: %s request to %s from %s',
              request.method, request.path, request.ip);
  next();
});

// Routes
app.get('/', function(request, response) {
  // res.render('index');
  response.send('Hello from Express!');
});

// Start up the Express Engine
var port = 3000;
var server = app.listen(port);
console.log('App listening on port ' + port);
```
</details>

---

## Ruby Rocks!

Here is the source code for `src/pet.rb`:

```ruby
class Pet
  def initialize(name, type)
    @name = name
    @type = type
  end

  def to_s
    "#{@name} is a #{@type}"
  end
end

pets = [
  Pet.new('Snoopy', 'Dog'),
  Pet.new('Felix', 'Cat')
]

pets.each { |pet| puts pet }
```

And the output is:

```
Snoopy is a Dog
Felix is a Cat
```

---

## Markdown Has Task Lists

Here is a task list

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request

### A Level 3 Heading, *With* A __FUNKY__ (Name)

Some random text.

---

## Summary

<details>
  <summary><strong>How are we feeling?</strong></summary>
  > Feeling great, thanks for asking!
</details>

---

## For Further Study

* Reference 1
* Reference 2
