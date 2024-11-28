document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial animation for page load
  const elementsToAnimate = document.querySelectorAll(".card, .intro-section h1, .intro-section p");
  elementsToAnimate.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateX(-50px)";
    setTimeout(() => {
      element.style.transition = "all 0.8s ease-out";
      element.style.opacity = "1";
      element.style.transform = "translateX(0)";
    }, index * 100);
  });

  // 2. Smooth scrolling for internal links
  document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // 3. Highlight active navigation link
  const navbarLinks = document.querySelectorAll(".navbar a");
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarLinks.forEach((link) => link.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // 4. Search functionality for cards
  const searchBox = document.createElement("input");
  searchBox.type = "text";
  searchBox.placeholder = "Search tutorials...";
  searchBox.classList.add("search-box");
  document.body.insertBefore(searchBox, document.querySelector(".main-content"));
  searchBox.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll(".card").forEach((card) => {
      const content = card.textContent.toLowerCase();
      card.style.display = content.includes(query) ? "block" : "none";
    });
  });

  // 5. Expand card content on click
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
    });
  });

  // 6. Back-to-top button
  const backToTop = document.createElement("button");
  backToTop.textContent = "↑";
  backToTop.classList.add("back-to-top");
  document.body.appendChild(backToTop);
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  // 7. Toggle dark mode
  const darkModeToggle = document.createElement("button");
  darkModeToggle.textContent = "🌙";
  darkModeToggle.classList.add("dark-mode-toggle");
  document.body.appendChild(darkModeToggle);
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  // 8. Random card highlight
  setInterval(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => card.classList.remove("highlight"));
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    randomCard.classList.add("highlight");
  }, 5000);

  // 9. Display total number of tutorials
  const totalTutorials = document.createElement("div");
  totalTutorials.textContent = `Total Tutorials: ${document.querySelectorAll(".card").length}`;
  totalTutorials.classList.add("total-tutorials");
  document.body.insertBefore(totalTutorials, document.querySelector(".intro-section"));

  // 10. Show a welcome message
  setTimeout(() => {
    alert("Welcome to the Coding Resources Page!");
  }, 1000);
});
