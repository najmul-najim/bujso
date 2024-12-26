// script.js

// Predefined data for classes, subjects, and chapters with links
const data = {
  "Class 6": {
    Mathematics: {
      link: "https://example.com/mathematics-class-6", // Subject link
      chapters: [
        { name: "Chapter 1: Numbers", link: "https://example.com/chapter1-numbers" },
        { name: "Chapter 2: Algebra", link: "https://example.com/chapter2-algebra" },
        { name: "Chapter 3: Geometry", link: "https://example.com/chapter3-geometry" },
      ],
    },
    Science: {
      link: "https://example.com/science-class-6",
      chapters: [
        { name: "Chapter 1: Living Things", link: "https://example.com/chapter1-living-things" },
        { name: "Chapter 2: Matter", link: "https://example.com/chapter2-matter" },
        { name: "Chapter 3: Energy", link: "https://example.com/chapter3-energy" },
      ],
    },
  },
  "Class 7": {
    Mathematics: {
      link: "https://example.com/mathematics-class-7",
      chapters: [
        { name: "Chapter 1: Fractions", link: "https://example.com/chapter1-fractions" },
        { name: "Chapter 2: Probability", link: "https://example.com/chapter2-probability" },
        { name: "Chapter 3: Trigonometry", link: "https://example.com/chapter3-trigonometry" },
      ],
    },
    Science: {
      link: "https://example.com/science-class-7",
      chapters: [
        { name: "Chapter 1: Cells", link: "https://example.com/chapter1-cells" },
        { name: "Chapter 2: Atoms", link: "https://example.com/chapter2-atoms" },
        { name: "Chapter 3: Forces", link: "https://example.com/chapter3-forces" },
      ],
    },
  },
};

// DOM Elements
const classSelect = document.getElementById("class-select");
const subjectSelect = document.getElementById("subject-select");
const chapterList = document.getElementById("chapter-list");
const subjectContainer = document.getElementById("subject-container");
const chaptersContainer = document.getElementById("chapters-container");

// Populate Class Dropdown
Object.keys(data).forEach((className) => {
  const option = document.createElement("option");
  option.value = className;
  option.textContent = className;
  classSelect.appendChild(option);
});

// Event Listener for Class Selection
classSelect.addEventListener("change", () => {
  const selectedClass = classSelect.value;
  subjectSelect.innerHTML = '<option value="" disabled selected>Choose a subject</option>';

  // Populate Subjects Dropdown
  Object.keys(data[selectedClass]).forEach((subject) => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  subjectContainer.style.display = "block"; // Show subject dropdown
  chaptersContainer.style.display = "none"; // Hide chapters initially
});

// Event Listener for Subject Selection
subjectSelect.addEventListener("change", () => {
  const selectedClass = classSelect.value;
  const selectedSubject = subjectSelect.value;
  const subjectData = data[selectedClass][selectedSubject];

  // Show Subject Link
  const subjectLink = document.createElement("a");
  subjectLink.href = subjectData.link;
  subjectLink.textContent = `Visit ${selectedSubject} Page`;
  subjectLink.target = "_blank";
  subjectLink.style.display = "block";
  subjectLink.style.marginTop = "10px";

  // Add Subject Link below the subject dropdown
  const existingLink = document.querySelector("#subject-container a");
  if (existingLink) existingLink.remove(); // Remove old link if it exists
  subjectContainer.appendChild(subjectLink);

  // Populate Chapters
  chapterList.innerHTML = ""; // Clear previous chapters
  subjectData.chapters.forEach((chapter) => {
    const li = document.createElement("li");
    
    const chapterLink = document.createElement("a");
    chapterLink.href = chapter.link;
    chapterLink.textContent = chapter.name;
    chapterLink.target = "_blank";
    
    li.appendChild(chapterLink);
    chapterList.appendChild(li);
  });

  chaptersContainer.style.display = "block"; // Show chapters
});