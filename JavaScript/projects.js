   // Store all project cards

    function handleProjectSections(){
        const projectspc = document.getElementById('projectspc');
        const projectsphone = document.getElementById('projectsphone');
        if (window.innerWidth <= 768) {
            projectspc.style.display = 'none';
            projectsphone.style.display = 'block';
             displayProjects();
        } else {
            projectspc.style.display = 'block';
            projectsphone.style.display = 'none';
        }
       
    }
     const projects = [
            {
                image: "portfolio.png",
                title: "Portfolio Website",
                description: "A modern portfolio showcasing my work and skills with interactive elements.",
                tech: ["HTML", "CSS", "JavaScript"],
                demoLink: "https://salaheddinedev.zertline.com/#home",
                sourceLink: "https://github.com/SalahEddine-Ra/portfolio"
            },
            {
                image: "clearmind.png",
                title: "Task Manager",
                description: "A minimalist task management application with real-time updates.",
                tech: ["HTML", "CSS", "JavaScript"],
                demoLink: "https://salaheddine-ra.github.io/To-do-liste/",
                sourceLink: "https://github.com/SalahEddine-Ra/To-do-liste"
            },
            {
                image: "pc.avif",
                title: "E-Commerce Platform",
                description: "A static front-end e-commerce website for sports clothing, built with HTML and CSS.",
                tech: ["HTML", "CSS"],
                demoLink: "https://elites-style.zertline.com/",
                sourceLink: "https://github.com/SalahEddine-Ra/Elites-Style"
            },
            {
                image: "mypersonalcard.png",
                title: "Personal Card",
                description: "A sleek personal card to access my CV via QR code. Perfect for networking.",
                tech: ["Adobe Illustrator"]
            },
            {
                image: "edu.jpg",
                title: "Portfolio for a center",
                description: "A modern website for an education center built with the Zertline team.",
                tech: ["HTML", "CSS", "JavaScript"],
                demoLink: "https://groupelexcellence.net/"
            },
            {
                image: "mybank.png",
                title: "Bank System",
                description: "A complete banking system with user authentication and transaction management.",
                tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
                sourceLink: "https://github.com/SalahEddine-Ra/Bank-System"
            }
        ];

        const projectsPerPage = 2;
        let currentPage = 1;
        const totalPages = Math.ceil(projects.length / projectsPerPage);

        function createProjectCard(project) {
            return `
                <div class="project-card">
                    <div class="project-image">
                        <img src="${project.image}" alt="${project.title}" loading="lazy">
                        <div class="image-overlay"></div>
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="project-tech">
                            ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            ${project.demoLink ? `<div class="project-links"><a href="${project.demoLink}" target="_blank">Live Demo</a></div>` : ''}
                            ${project.sourceLink ? `<div class="project-links"><a href="${project.sourceLink}" target="_blank">Source Code</a></div>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }

        function displayProjects() {
            const startIndex = (currentPage - 1) * projectsPerPage;
            const endIndex = startIndex + projectsPerPage;
            const projectsToShow = projects.slice(startIndex, endIndex);
            
            const projectsContainer = document.getElementById('projectsContainer');
            projectsContainer.innerHTML = projectsToShow.map(project => createProjectCard(project)).join('');
            
            updatePagination();
        }

        function updatePagination() {
            const pageNumbers = document.getElementById('pageNumbers');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            // Update Previous button
            prevBtn.style.display = currentPage > 1 ? 'block' : 'none';

            // Update Next button
            nextBtn.style.display = currentPage < totalPages ? 'block' : 'none';

            // Update page numbers
            let pageNumbersHTML = '';
            for (let i = 1; i <= totalPages; i++) {
                if (i <= 3 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                    pageNumbersHTML += `<button class="page-number ${i === currentPage ? 'active' : ''}" 
                        onclick="goToPage(${i})">${i}</button>`;
                } else if (i === 4 && currentPage > 4) {
                    pageNumbersHTML += '<span class="page-ellipsis">...</span>';
                } else if (i === totalPages - 1 && currentPage < totalPages - 2) {
                    pageNumbersHTML += '<span class="page-ellipsis">...</span>';
                }
            }
            pageNumbers.innerHTML = pageNumbersHTML;
        }

        function goToPage(page) {
            currentPage = page;
            displayProjects();
        }

        // Event listeners for Previous and Next buttons
        document.getElementById('prevBtn').addEventListener('click', () => {
            if (currentPage > 1) {
                goToPage(currentPage - 1);
            }
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            if (currentPage < totalPages) {
                goToPage(currentPage + 1);
            }
        });

    window.addEventListener('resize', handleProjectSections);
    window.addEventListener('DOMContentLoaded', handleProjectSections);

    // Initial display
    // displayProjects();