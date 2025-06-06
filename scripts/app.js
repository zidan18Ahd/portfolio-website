// Load Projects Dynamically
const projects = [
    {
        title: "CO₂ Emissions Tool",
        desc: "Analyzes global CO₂ data with Python & MySQL",
        link: "https://github.com/yourusername/co2-tool"
    },
    {
        title: "LLM Energy Research",
        desc: "Optimizing AI carbon footprint",
        link: "#"
    }
];

const projectGrid = document.querySelector('.project-grid');
projects.forEach(project => {
    projectGrid.innerHTML += `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.desc}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        </div>
    `;
});

// Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Message sent! I’ll reply soon.');
    contactForm.reset();
});
