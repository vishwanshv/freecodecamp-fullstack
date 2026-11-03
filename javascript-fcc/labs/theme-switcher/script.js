
const themes = [
  {
    name: "light",
    message: "You have selected the light theme!"
  },
  {
    name: "dark",
    message: "You have selected the dark theme!"
  },
  {
    name: "ocean",
    message: "You have selected the ocean theme!"
  }
];

const themeButton = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");
const status = document.querySelector('[aria-live="polite"]');

const themeItems = document.querySelectorAll(
  '#theme-dropdown li[role="menuitem"]'
);

// Toggle dropdown visibility
themeButton.addEventListener("click", () => {
  if (themeDropdown.hasAttribute("hidden")) {
    themeDropdown.removeAttribute("hidden");
    themeButton.setAttribute("aria-expanded", "true");
  } else {
    themeDropdown.setAttribute("hidden", "");
    themeButton.setAttribute("aria-expanded", "false");
  }
});

// Select and apply a theme
themeItems.forEach(item => {
  item.addEventListener("click", () => {

    const selectedTheme = themes.find(
      theme => theme.name === item.textContent.trim()
    );

    if (selectedTheme) {
      // Remove previous theme classes
      document.body.classList.remove(
        "theme-light",
        "theme-dark",
        "theme-ocean"
      );

      // Add selected theme class
      document.body.classList.add(
        `theme-${selectedTheme.name}`
      );

      // Display the selected theme's message
      status.textContent = selectedTheme.message;

      // Close dropdown
      themeDropdown.setAttribute("hidden", "");
      themeButton.setAttribute("aria-expanded", "false");
    }
  });
});
