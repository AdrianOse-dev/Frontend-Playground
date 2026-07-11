document.addEventListener("DOMContentLoaded", function () {
  // 1. Array of Project Data with REAL Image URLs
  const projects = [
    {
      title: "Portfolio Website",
      category: "coding",
      image: "https://picsum.photos/id/1/300/200", // Laptop image
      description:
        "A personal portfolio built with HTML/CSS to showcase my work.",
      link: "#",
    },
    {
      title: "RPG Character Design",
      category: "design",
      image: "https://picsum.photos/id/96/300/200", // Abstract/Dark image
      description: "Concept art and character sprites for a 2D RPG game.",
      link: "#",
    },
    {
      title: "SEO Marketing Campaign",
      category: "marketing",
      image: "https://picsum.photos/id/60/300/200", // Office/Computer image
      description: "Increased organic traffic by 40% for a local startup.",
      link: "#",
    },
    {
      title: "Weather React App",
      category: "coding",
      image: "https://picsum.photos/id/119/300/200", // Macbook image
      description: "A dynamic weather dashboard using the OpenWeather API.",
      link: "#",
    },
    {
      title: "Tech Startup Branding",
      category: "design",
      image: "https://picsum.photos/id/180/300/200", // Notebook/Sketch image
      description: "Complete brand identity including logo and color palette.",
      link: "#",
    },
    {
      title: "Social Media Bot",
      category: "coding",
      image: "https://picsum.photos/id/160/300/200", // Phone/Tech image
      description: "Python script to automate Instagram engagement.",
      link: "#",
    },
    {
      title: "Ad Performance Analysis",
      category: "marketing",
      image: "https://picsum.photos/id/250/300/200", // Camera/Analysis image
      description: "A comprehensive report on Facebook Ad ROI.",
      link: "#",
    },
    {
      title: "3D Game Assets",
      category: "design",
      image: "https://picsum.photos/id/133/300/200", // Cars/Model image
      description: "Low-poly 3D models created in Blender for Unity.",
      link: "#",
    },
    {
      title: "E-commerce Platform",
      category: "coding",
      image: "https://picsum.photos/id/201/300/200", // Tech image
      description: "Full-stack online store with Stripe payment integration.",
      link: "#",
    },
  ];

  // 2. Function to display projects
  function renderProjects(filter) {
    const grid = document.getElementById("projects-grid");

    // Safety check: if the grid doesn't exist, stop to prevent errors
    if (!grid) return;

    grid.innerHTML = ""; // Clear current cards

    projects.forEach((project) => {
      // If filter is 'all' OR matches the project category, show it
      if (filter === "all" || project.category === filter) {
        const card = `
            <div class="project-card">
              <img src="${project.image}" alt="${project.title}">
              <h3>${project.title}</h3>
              <p>${project.description}</p>
              <a href="${project.link}">View Project</a>
            </div>
          `;
        grid.innerHTML += card;
      }
    });
  }

  // 3. Attach Click Events to Buttons
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      buttons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      this.classList.add("active");

      const text = this.innerText.toLowerCase();
      renderProjects(text);
    });
  });

  // 4. Initial Load
  renderProjects("all");
});
