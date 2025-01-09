// Select elements
const sideMenu = document.querySelector("#sideMenu"); 
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

// Open the side menu
function openMenu() {
  sideMenu.style.transform = "translateX(-16rem)";
}

// Close the side menu
function closeMenu() {
  sideMenu.style.transform = "translateX(16rem)";
}

// Add scroll event listener for the navbar
window.addEventListener("scroll", () => {
  if (scrollY > 50) {
    navBar.classList.add("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm");
    navLinks.classList.remove("bg-white", "shadow-sm", "bg-opacity-50");
  } else {
    navBar.classList.remove("bg-white", "bg-opacity-50", "backdrop-blur-lg", "shadow-sm");
    navLinks.classList.add("bg-white", "shadow-sm", "bg-opacity-50");
  }
});

// Set initial theme based on local storage or system preference
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
);

// Toggle between light and dark modes
function toggleTheme() {
  document.documentElement.classList.toggle("dark");
  if (document.documentElement.classList.contains("dark")) {
    localStorage.theme = "dark";
  } else {
    localStorage.theme = "light";
  }
}
