# Markdown to HTML Converter – Convert Markdown Syntax into HTML

**Live Demo:** [View Live Demo](https://vishwanshv.github.io/freecodecamp-fullstack/javascript-fcc/certification-projects/markdown-to-html-converter/)

## Preview

A JavaScript-based Markdown to HTML converter that allows users to write Markdown syntax and instantly see its HTML representation.

The application converts common Markdown elements, including headings, images, links, bold text, italic text, and blockquotes. It displays both the generated raw HTML code and a rendered HTML preview, updating automatically whenever the user modifies the Markdown input.

## Technical Highlights

- Structured the interface using HTML elements, including `textarea`, `div`, and heading elements.
- Used `document.getElementById()` to select the Markdown input, raw HTML output, and preview containers.
- Created a `convertMarkdown()` function to transform Markdown syntax into HTML.
- Used the `value` property to retrieve the Markdown entered by the user.
- Used the `replace()` string method with regular expressions to identify and replace Markdown syntax.
- Used regex anchors (`^` and `$`) to match Markdown headings at the beginning and end of lines.
- Used regex flags such as `g` (global) and `m` (multiline) to process multiple matches and individual lines.
- Used capture groups (`()`) and replacement references (`$1`, `$2`) to extract Markdown content and insert it into HTML tags.
- Implemented heading conversion for different Markdown levels (`#`, `##`, and `###`) using `<h1>`, `<h2>`, and `<h3>` elements.
- Converted Markdown image syntax into HTML `<img>` elements using captured alternative text and image URLs.
- Converted Markdown link syntax into HTML `<a>` elements using captured link text and URLs.
- Converted bold text syntax (`**text**` and `__text__`) into `<strong>` elements.
- Converted italic text syntax (`*text*` and `_text_`) into `<em>` elements.
- Converted blockquote syntax (`> text`) into HTML `<blockquote>` elements.
- Used `addEventListener("input", ...)` to detect changes in the Markdown textarea and trigger conversion automatically.
- Used `textContent` to display the generated HTML as plain text in the raw HTML output section.
- Used `innerHTML` to render the converted HTML inside the preview container.
- Implemented a responsive layout using CSS Flexbox for wider screens.
- Used a CSS media query at `600px` to adjust the height and arrangement of the input and output sections.
- Practiced string manipulation, regular expressions, capture groups, replacement patterns, DOM manipulation, event handling, and dynamic HTML rendering in JavaScript.
