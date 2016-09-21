---
title: Sample Lesson
type: lesson
duration: "1:30"
creator:
    name: Dr. Mike Hopper/ATL
competencies: javascript, ruby
---

# Sample Lesson

This is just a sample lesson demonstrating the use of a template to generate the `readme.md`.

{{TOC}}

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

## JavaScript Jams!

Here is the source code for `src/greeting.js`:

```javascript
{{ src/greeting.js }}
```

And the output is:

```
{{ exec(node, src/greeting.js) }}
```

### JavaScript Does Server Too!

<details>
  <summary><strong>Here is the source code for `src/express-app.js`</strong></summary>

```javascript
{{ src/express-app.js }}
```
</details>

---

## Ruby Rocks!

Here is the source code for `src/pet.rb`:

```ruby
{{ src/pet.rb}}
```

And the output is:

```
{{ exec(ruby, src/pet.rb) }}
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
