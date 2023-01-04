# Alternate Project for Fall 2022

## Project Setup

Clone this repository to create your starter project folder. Then you can delete the `.git` folder and run `git init` to
make it your own. You will have to `git add` and `git commit` all the files to make the starter code part of your repo.

Next, create your own repo on Github. Then you need to run `git remote add origin <url>` with the URL for your own repo
on Github.

On Github, enable GitHub Pages on the default branch (which should be `main`).

## Requirements

### HTML

Follow the comments in the HTML to finish the HTML in the `<head>`.

- Add a `<script>` tag that loads app.js as a module.
- Import two Google fonts, one for the header text and one for everything else.
- Add the `preconnect` `<link>` tags for the fonts.
- Add the `<link>` for your own CSS file.
- Add a Content-Security-Policy `<meta>` tag that includes img-src, connect-src, style-src, font-src, script-src, and
  default-src that prevent the loading of any files that are not required for the site to work.
- The loaded images inside `<main>` should be in paragraphs that contain an image and a span. The image is being loaded
  from `picsum.photos` with a 1:1 aspect ratio. The span will display the author who took the photo.

### CSS

All the needed CSS selectors are already in the CSS file along with comments for each selector explaining what it is
for.

- The header should have a fixed height so it can reveal a big portion of the background image, once selected.
- There needs to be one font used for the `<header> <h1>` text.
- A different font needs to be used for everything else in the body - form elements, labels, spans, paragraphs,
  headings, etc.
- Use `display: flex` to build a **centered** grid of image cards.
- The author label should be displayed over top of the image inside the card.
- The author label should have a subtle hover effect.
- There needs to be a consistent gap around all sides of the cards in the grid.

### Images

- The image loaded for the background of the header needs to be 1200px wide and 200px tall.
- The images loaded for the cards inside `<main>` will be 300x300 or 400x400 or 500x500 or 600x600 depending on the
  selection in the dropdown in `<nav>`.
- The images will all come from `picsum.photos`

### API

- [Picsum.photos](https://picsum.photos/) is the API source for all the images.
- For the header image use `https://picsum.photos/id/${id}/${width}/${height}?grayscale` as the source. The id variable
  is the id of the image to load, the width needs to be 1200 and the height needs to be 200.
- To load the images for the `<main>` area you need to fetch a JSON list of data about the images first, then loop
  through the data to build the cards with images and authors.
- The URL for the list is `https://picsum.photos/v2/list?limit=${perpage}&page=${num}`. The `perpage` variable is how
  many images you want in the list. The `num` variable is a random number that you need to generate between 1 and 20.
- Once you have the list, you need to use the `download_url`, `height`, `width`, and `author` properties to build your
  HTML.
- The `download_url` will include the original width and height for the image. These sizes are much to big to use on the
  page. So, you need to replace those two parts of the url with the width and height that the user picks from the
  `<select>` in the `<nav>`. A URL will look like this: `https://picsum.photos/id/85/400/400` after the width and height
  are updated.

### Script

- When the page loads and the DOMContentLoaded event is fired check in localStorage for a URL to use for the background
  image in the header. If there is nothing in localStorage then show the overlay and have the user pick one of the image
  choices.
- The `change` handler for the overlay form select will set the background image in the header and save the selection
  url in localStorage for the next page load.
- The `change` handler for the select in the `<nav>` will call the fetch for the JSON list and provide the size for the
  images to be loaded when building the grid.
- The `<header>` needs a double click listener which will clear localStorage, clear the background image from the
  header, and show the overlay so that the user can pick a new background image for the header.

## Submission

The grade for this will replace your grade for the final project.

Email Steve with your Github repository URL and Github pages URL.

Final submission is due by 5pm on Wednesday January 4, 2023. No extensions possible. If nothing is submitted by that
deadline, then your original grade will stay.
