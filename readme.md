---
title: Sample Lesson
type: lesson
duration: "1:30"
creator:
    name: Dr. Mike Hopper/ATL
competencies: Client, Server, Database, Testing
---

[//]: # (NOTE: This readme file was generated from the template.md file. You should *not* edit this file directly.)

# Sample Lesson

This is just a sample lesson demonstrating the use of a template to generate the `readme.md`.

## Table of Contents

* [Objectives](#objectives)
* [Preparation](#preparation)
* [Introduction](#introduction)
* [Topic 1](#topic-1)
* [Topic 2](#topic-2)
* [Topic 3](#topic-3)
  * [A Level 3 Heading](#a-level-3-heading)
* [Task Lists](#task-lists)
  * [A Level 3 Heading, *With* A __FUNKY__ (Name)](#a-level-3-heading-with-a-funky-name)
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

## Topic 1

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

## Topic 2

Here is the source code for `src/express-app.js`:

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

## Topic 3

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

### A Level 3 Heading

Just some random text.

## Task Lists

Here is a task list

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request

### A Level 3 Heading, *With* A __FUNKY__ (Name)

More random text.

## Summary

<details>
  <summary><strong>How are we feeling?</strong></summary>
  > Feeling great, thanks for asking!
</details>

## For Further Study

* Reference 1
* Reference 2
