# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Desktop view](./design/desktop%20view.jpeg)
![Desktop active view](./design/desktop%20active%20view.jpeg)
![Mobile view](./design/mobile%20view.png)
![Mobile active view](./design/mobile%20active%20view.jpeg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [jQuery](https://jquery.com/) - JS library

### What I learned

- I really got to understand the concept of traversing DOM elements.

```js
$(".item").on('click', function() { 
  ...
    $(this).children(".item img").removeClass("active");
    $(this).next(".submenu").slideUp(600);
  ...  
    $(this).children(".item img").addClass("active");
    $(this).next(".submenu").slideDown(600);
    $(this).next(".submenu").css("display", "flex");        
});
```

### Continued development

- Animations with jQuery

### Useful resources

- [Sololearn](https://www.sololearn.com) - A great app to learn web development. It helped me in gaining jQuery knowledge.

## Author

- Frontend Mentor - [@MrRyt247](https://www.frontendmentor.io/profile/MrRyt247)
- X - [@MrRyt19](https://www.twitter.com/MrRyt19)

## Acknowledgments

- OpenAI ChatGPT
- Sololearn