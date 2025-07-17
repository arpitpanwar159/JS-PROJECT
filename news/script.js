
// 1. Read More functionality
document.querySelector("button").addEventListener("click", () => {
  const moreText = document.createElement("p");
  moreText.textContent =
    "This is the extended content about Web 3.0 that gets revealed after clicking 'Read More'. It explores blockchain, decentralization, and user-ownership.";
  document.querySelector(".main-content").appendChild(moreText);
});

// 2. Sidebar click interaction
const sidebarItems = document.querySelectorAll(".sidebar .news-item h3");

sidebarItems.forEach((item) => {
  item.style.cursor = "pointer";
  item.addEventListener("click", () => {
    alert(`You clicked on: ${item.textContent}`);
  });
});

// 3. Highlight active navbar tab
const navLinks = document.querySelectorAll(".nav-links li");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// 4. Render bottom articles dynamically
const articles = [
  {
    id: "04",
    title: "AI Takes Over the World",
    desc: "A speculative look into AI dominance by 2040.",
    img: "https://via.placeholder.com/100",
  },
  {
    id: "05",
    title: "Quantum Computing Explained",
    desc: "How quantum bits could change computing forever.",
    img: "https://via.placeholder.com/100",
  },
];

const bottomContainer = document.querySelector(".bottom-articles");


  
  bottomContainer.appendChild(div);


