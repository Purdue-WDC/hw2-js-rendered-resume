# JS Rendered Resume

## Objective

Instead of adding items to your resume directly in HTML, use JavaScript.
This isn't useful on its own, but will be super helpful in conjunction with a server
in an approach called "client side rendering." It's a primitive version of what frontend
frameworks like React use.

## Instructions

Try to start early, so you can come to PSO if you get stuck!

### Phase 1 (80%)
- First, remove all itemized section content from your HTML resume.
- Then, add an id to each section container
- Finally, write all your section items into JavaScript objects, like in the starter code,
  and use DOM methods to put everything on the page.
- Use the [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) to
  add and remove CSS classes.

### Phase 2 (20%)
- Add tags to each resume item. For example, tag all experiences related to web development with
  "web development".
- Then, make buttons or a drop down menu that lets you filter items by tag.
    - Buttons can use the "onclick" attribute, same as any other element.
    - Dropdowns are a bit more complicated, look at the MDN documentatiaon for `<select>`
- Tags can be localized to section, or global if you have generic enough tags.

### Bonus (10%)
- For bonus, implement a special feature and write:
    - An explanation of what it does
    - A brief explanation of how it works
- Just a few sentences for the expalanation is fine
- Points awarded completely at our discretion

### References
- Make sure to include links to whatever resources you used in the comments
- This is an individual assignment, don't work together for anything other than general approach.
