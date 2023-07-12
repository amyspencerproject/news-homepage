# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Toggle the mobile menu (requires some JavaScript)

### Screenshot

![](./screenshots/screenshot%20mobile%20toggle%20navigation.png)
Mobile toggle view

### Links

- Github Repo URL: [News Homepage Code Repo](https://github.com/amyspencerproject/news-homepage)
- Live Site URL: [News Homepage Code Page](https://amyspencerproject.github.io/news-homepage/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Variables
- CSS Grid
- Mobile-first workflow

### What I learned

- Chose to use quite a bit of CSS Grid for this challenge. I need the practice with Grid and the design is 2D with defined columns and rows.
- Since this is only my second time building a modal nav option I decided to get thru it and then go back and refactor the solution. My goal was to learn how to make the modal navigation more accessible and more efficiently coded.
- The modal has a hamburger icon button to open and an X icon button to close. My first pass thru the challenge I put the X close button inside the modal div. This format require a lot of grid styling that was awkward. I wanted to just be able to swap out the icon files for the open hamburger and the close X inside of the same button div.
  - This was fairly easy. Both images were place inside the button div. The hamburger icon was give a class of "nav-open" and the X icons was given two classes, "hide" and "nav-close". Then JS was used to toggle between adding or removing the hide from each of the div classes.
- My first pass thru had very step wise JS directions. There were two eventListeners, one for opening the modal and one for closing the modal. This was accomplished by making a variable for every element class or id that either needed to be hidden or made visible.
  - Using the aria-expanded attribute on the now single button div allowed for boolean logic to toggle the "hide" class on and off. I made a function called toggleButton that would run with just a single event listener.
- I took things a step further with the boolean aria-expanded attribute and added a ternary expression and a step to change the value.

```
const expandedToggle = navButton.getAttribute("aria-expanded") === "true" ? true : false;
navButton.setAttribute("aria-expanded", !expandedToggle);

```

- This expression says if the aria-expanded value is true then change it to false and vice versa. This allowed me to get rid of all my if/else statements for hiding and showing elements based on the value of aria-expanded attribute. All that is taken care of with `classList.toggle()`

- My code had a warning when checked for accessibility. Inside of the `<nav>` I had designated the modal div surrounding the `<ul>` with `role="navigation"` which is like calling out navigation twice on for a screen reader. I removed the `role="navigation"`. I also learned that Chrome dev tools has an accessibility tool that lets you look at what the screen reader will be reading with regards to your elements.

## Author

- Website - [Amy Spencer](https://spencerproject.com/)
- Frontend Mentor - [@amyspencerproject](https://www.frontendmentor.io/profile/amyspencerproject)
- Linkedin - [amyspencercodes](https://www.linkedin.com/in/amyspencercodes/)
