---
title: CS50 Final Project README.md
output:
  html_notebook:
    toc: true #setup table of content
    toc_depth: 4  #table of content to be x layers
editor_options:
  chunk_output_type: inline
---

# Proof of Work (PoW) - personal website with a series of computing exercises and interesting tidbits

<br />

### Video Demo:
[Watch here!](https://www.youtube.com/watch?v=7qZsX3_R2d0&t=33s)

<br />

### Description:
Humphrey from Singapore here and this is my CS50 final project.

When thinking about what to produce and submit for CS50, I have first and foremost considered what are my personal interests.

As I would like to make a mid-career change to get a decent job in technology,
I would think that building a website would be beneficial in the following ways:

- easily make references to my various profiles such as Linkedin, GitHub, Kaggle
- easily showcase some sample projects
  - which led to finding a series of computing exercises to sharpen and broaden development skills
  - in order to optimise time and resources, review other sample codes for development exposure and implement them in website
  - belief that this is an effective way to learn after reading testimonial that learning concepts are more important than learning syntax for developers, especially when working in teams, no need to re-invent the wheels

In addition:

- Improving web development skills would enable the building of other side projects and other businesses in the future
  - Frequently users would need access to a web interface in order to interact with businesses

- Tools used for web development:
  - HTML, CSS, JavaScript, GitHub/GitHub Pages/GitHub Desktop

- Notable technical features:
  - Webpage codes are stored in Github Repositories, and hosted on GitHub Pages
  - Codes can be stored in offline local repositories using GitHub Desktop when editing, then commit and pushed to online GitHub
  - Websites can be tested offline in local repositories to save time, as it takes time for edits to be reflected properly online in GitHub
  - Bootstrap templates used for design purposes
  - Button


Sample projects:

- Data analytic project study on Ethereum: Investment case discussion
- Series of computing exercises:
  - Music Boxes
  - Digital Clock
  - Night and Day

<br />

#### Data analytic project study on Ethereum: Investment case discussion
- A data analytic project is purposefully chosen, as the strategy is to seek out an entry level data analyst role
- Tools used: Tableau public (free to use), Excel, Powerpoint, WebViewer
  - Simple tools but effective to demonstrate the following:
    - thought processes
    - assimilation, synthesis of reseach information
    - effective communications
- Notable technical features:
  - Marking annotations and key events on presentation
  - WebViewer used to embed powerpoint presentation on website

<br />

#### Series of computing exercises: Music Boxes
- All three computing exercises are adapted from Coders' Projects for Raspberry Pi
- Music boxes play music notes, have also added one additional custom box to play a custom audio file
- Tools used: HTML, CSS, JavaScript, jQuery (JavaScript library)
- Notable technical features:
  - Audio tags are used to embed audio files in website
  - Objects such as boxes are used to toggle the music in this case, by clicking (".mousedown" function)
    - It is also possible to toggle the music using other ways such as the ".moveover" function when the mouse cursor brushes through the defined object
  - CSS is used for object visuals
  - There are other resources that can be researched for further design choices, eg. getting the codes and implementing color gradients in CSS
  - Learnt that jQuery is used to easier manipulate objects in Javascript, eg. get object from html by wrapping $ in JS code

<br />

#### Series of computing exercises: Digital Clock
- Digital clock displays current time in simple ways
- Tools used: HTML, CSS, JavaScript
- Notable technical features:
  - .Date() can be used to fetch current system time
  - different algorithm and logic are used for manipulating data to display 12hr format, instead of 24hr format
- Other possible feature(s) but not implemented:
  - It is also possible to add in time of other timezones, but that would require much more codes and logic, as the current way of fetching the current system time is not very compatible with coding in custom timezones, as each user viewing the website may belong to different specific timezones
    - As such, a possible solution is to get date with reference to UTC timezone, then offset hours accordingly to get the desired timezones, which is not the current approach used in this exercise

<br />

#### Series of computing exercises: Night and Day
- Introduction to toggling different CSS styles in website, which in this case is used to toggle day/night mode
- Tools used: HTML, CSS, JavaScript
- Notable technical features:
  - The codes used pleasing aesthetic and multiple objects to display day and night (eg. Sun and Moon, bright and dark skies)
  - One technical difficult encountered is that the default JS Bootstrap loaded has override the background colors, which led to objects which are meant to be toggle objects' background colors to not work properly
    - Solution implemented is to manipulate the background color directly in CSS by defining background color to the preferred default state, then add in logic to toggle the "dark mode" when the event is triggered
  - CSS features such as .hover and borders used to make it more obvious that the object icons are clickable
- Other possible feature(s) but not implemented:
  - It is also possible to replace the background with images if desired but not done in this exercise
  - Other ways of toggling "dark mode" can also be used, instead of the customised object that represents the sun/moon
  - Other design choices

<br />

#### Files locations - Sample projects:

- Main website files and styles for non-sample projects are hosted directly in main directory.

- Ethereum uses the following files hosted in GitHub:
  - ethereum.html

- Music boxes uses the following files hosted in GitHub:
  - Music boxes folder and the files contained within

- Digital Clock uses the following files hosted in GitHub:
  - Digital clock folder and the files contained within

- Night_day uses the following files hosted in GitHub:
  - Night_day folder and the files contained within
