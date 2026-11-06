
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let markdown = markdownInput.value;

  // Convert headings
  markdown = markdown.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  markdown = markdown.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  markdown = markdown.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Convert images
  markdown = markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">'
  );

  // Convert links
  markdown = markdown.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  // Convert bold text
  markdown = markdown.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  markdown = markdown.replace(/__(.+?)__/g, "<strong>$1</strong>");

  // Convert italic text
  markdown = markdown.replace(/\*(.+?)\*/g, "<em>$1</em>");
  markdown = markdown.replace(/_(.+?)_/g, "<em>$1</em>");

  // Convert blockquotes
  markdown = markdown.replace(/^\s*> (.+)$/gm, "<blockquote>$1</blockquote>");

  return markdown;
}

// Listen for input changes
markdownInput.addEventListener("input", () => {
  const convertedHTML = convertMarkdown();

  // Display raw HTML as text
  htmlOutput.textContent = convertedHTML;

  // Render the converted HTML
  preview.innerHTML = convertedHTML;
});
