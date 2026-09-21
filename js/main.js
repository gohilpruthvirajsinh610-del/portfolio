document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileNav();
  initActiveNav();
  initSmoothScroll();
  initBackToTop();
  initCopyEmail();
  initContactForm();

  // Render dynamic content first because skills,
  // projects, and journey are generated dynamically.
  renderDynamicContent();

  // Load GitHub data.
  initGitHub();

  // Initialize interactions after dynamic elements exist.
  initReveal();
  initProjectFilters();

  initTerminal();
});

/* =========================================
   THEME
========================================= */

function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }

  toggle?.addEventListener("click", () => {
    const current =
      document.documentElement.getAttribute("data-theme");

    const next = current === "light" ? "dark" : "light";

    if (next === "dark") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    localStorage.setItem("theme", next);
  });
}

/* =========================================
   MOBILE NAVIGATION
========================================= */

function initMobileNav() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileNavBreakpoint = 960;

  if (!menuToggle || !mobileNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  const mobileLinks = mobileNav.querySelectorAll("a");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });

  const closeMenuOnDesktop = () => {
    if (
      window.innerWidth > mobileNavBreakpoint &&
      mobileNav.classList.contains("open")
    ) {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    }
  };

  window.addEventListener("resize", closeMenuOnDesktop, { passive: true });
}

/* =========================================
   ACTIVE NAVIGATION
========================================= */

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    '.nav-links a[href^="#"], .mobile-nav a[href^="#"]'
  );

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );
        });
      });
    },
    {
      rootMargin: "-20% 0px -65% 0px",
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/* =========================================
   SMOOTH SCROLL
========================================= */

function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

/* =========================================
   PROJECT FILTERS
========================================= */

function initProjectFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      cards.forEach((card) => {
        const category = card.dataset.category;

        if (filter === "all" || category === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

/* =========================================
   REVEAL ANIMATIONS
========================================= */

function initReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!elements.length) return;

  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    elements.forEach((element) => {
      element.classList.add("visible");
    });

    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => observer.observe(element));
}

/* =========================================
   BACK TO TOP
========================================= */

function initBackToTop() {
  const button = document.getElementById("back-to-top");

  if (!button) return;

  const updateVisibility = () => {
    if (window.scrollY > 500) {
      button.classList.add("visible");
    } else {
      button.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", updateVisibility, { passive: true });

  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  updateVisibility();
}

/* =========================================
   COPY EMAIL
========================================= */

function initCopyEmail() {
  const copyButton = document.getElementById("copy-email");

  if (!copyButton) return;

  copyButton.addEventListener("click", async () => {
    const email = CONFIG.email;

    if (!email || email === "your.email@example.com") {
      alert("Please add your real email address in js/config.js first.");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);

      const originalText = copyButton.textContent;

      copyButton.textContent = "Copied!";

      setTimeout(() => {
        copyButton.textContent = originalText;
      }, 1500);
    } catch (error) {
      console.error("Failed to copy email:", error);
      alert("Unable to copy the email address.");
    }
  });
}

/* =========================================
   CONTACT FORM
========================================= */

function initContactForm() {
  const form = document.getElementById("contact-form");

  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const button = form.querySelector('button[type="submit"]');

    if (!button) return;

    const originalText = button.textContent;

    // Get form values
    const formData = new FormData(form);

    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const subject = formData.get("subject")?.trim();
    const message = formData.get("message")?.trim();

    // Basic frontend validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Prevent multiple submissions
    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const response = await fetch(
        "https://portfolio-api-xi-topaz.vercel.app/api/contact",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
            }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
          throw new Error(
              data.message || "Failed to send your message."
          );
      }

      // Success
      button.textContent = "Message Sent ✓";

      alert(
          data.message || "Your message has been sent successfully!"
      );

      form.reset();

    } catch (error) {
        console.error("Contact form error:", error);

        button.textContent = "Try Again";

        alert(
            error.message ||
            "Something went wrong. Please try again later."
        );
      } finally {
        setTimeout(() => {
            button.disabled = false;
            button.textContent = originalText;
        }, 2500);
      }
    });
  }

/* =========================================
   DYNAMIC CONTENT
========================================= */

function renderDynamicContent() {
  renderSkills();
  renderProjects();
  renderJourney();
  updateSocialLinks();

  const emailElement = document.getElementById("contact-email");

  if (emailElement && CONFIG.email) {
    emailElement.textContent = CONFIG.email;
  }
}

/* =========================================
   SKILLS
========================================= */

function renderSkills() {
  const container = document.getElementById("skills-container");

  if (!container || !CONFIG.skills) return;

  const categories = [
    {
      key: "programming",
      title: "Programming",
      icon: "<>",
    },
    {
      key: "web",
      title: "Web Development",
      icon: "🌐",
    },
    {
      key: "database",
      title: "Database",
      icon: "🗄",
    },
    {
      key: "tools",
      title: "Tools & Technologies",
      icon: "🛠",
    },
  ];

  container.innerHTML = categories
    .filter(
      (category) =>
        Array.isArray(CONFIG.skills[category.key]) &&
        CONFIG.skills[category.key].length
    )
    .map(
      (category) => `
        <article class="skill-card reveal">
          <div class="skill-card-header">
            <div class="skill-icon" aria-hidden="true">
              ${category.icon}
            </div>

            <h3>${category.title}</h3>
          </div>

          <div class="skill-tags">
            ${CONFIG.skills[category.key]
              .map(
                (skill) => `
                  <span class="skill-tag">${skill}</span>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

/* =========================================
   PROJECTS
========================================= */

function renderProjects() {
  const container = document.getElementById("projects-container");

  if (!container || !Array.isArray(CONFIG.projects)) return;

  container.innerHTML = CONFIG.projects
    .map((project) => {
      const placeholderBadge = project.isPlaceholder
        ? `<span class="placeholder-badge">Coming Soon</span>`
        : "";

      const githubLink =
        project.github && project.github !== "#"
          ? `
            <a
              href="${project.github}"
              class="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View ${project.title} on GitHub"
            >
              GitHub
            </a>
          `
          : "";

      const liveLink =
        project.live && project.live !== "#"
          ? `
            <a
              href="${project.live}"
              class="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View live demo of ${project.title}"
            >
              Live Demo
            </a>
          `
          : "";

      const technologies = Array.isArray(project.technologies)
        ? project.technologies
        : Array.isArray(project.tech)
          ? project.tech
          : [];

      return `
        <article
          class="project-card reveal"
          data-category="${project.category || "other"}"
        >

          <div class="project-image">
            ${
              project.image
                ? `
                  <img
                    src="${project.image}"
                    alt="${project.imageAlt || project.title}"
                    loading="lazy"
                  >
                `
                : `
                  <div class="project-image-placeholder">
                    ${project.title}
                  </div>
                `
            }

            ${placeholderBadge}
          </div>

          <div class="project-body">

            <h3 class="project-title">
              ${project.title}
            </h3>

            <p class="project-desc">
              ${project.description || ""}
            </p>

            ${
              technologies.length
                ? `
                  <div class="project-tech">
                    ${technologies
                      .map(
                        (technology) =>
                          `<span>${technology}</span>`
                      )
                      .join("")}
                  </div>
                `
                : ""
            }

            ${
              Array.isArray(project.features) &&
              project.features.length
                ? `
                  <ul class="project-features">
                    ${project.features
                      .map(
                        (feature) => `
                          <li>${feature}</li>
                        `
                      )
                      .join("")}
                  </ul>
                `
                : ""
            }

            ${
              githubLink || liveLink
                ? `
                  <div class="project-actions">
                    ${githubLink}
                    ${liveLink}
                  </div>
                `
                : ""
            }

          </div>
        </article>
      `;
    })
    .join("");
}

/* =========================================
   JOURNEY
========================================= */

function renderJourney() {
  const container = document.getElementById("journey-container");

  if (!container || !Array.isArray(CONFIG.journey)) return;

  if (!CONFIG.journey.length) {
    container.innerHTML = `
      <div class="timeline-empty">
        <p>No journey entries available yet.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = CONFIG.journey
    .map(
      (item) => `
        <article class="timeline-item reveal">

          <h3 class="timeline-title">
            ${item.title || ""}
          </h3>

          <p class="timeline-desc">
            ${item.description || ""}
          </p>

        </article>
      `
    )
    .join("");
}

/* =========================================
   SOCIAL LINKS
========================================= */

function updateSocialLinks() {
  const mapping = {
    "social-github": CONFIG.social?.github,
    "social-linkedin": CONFIG.social?.linkedin,
    "social-instagram": CONFIG.social?.instagram,
  };

  Object.entries(mapping).forEach(([id, url]) => {
    const element = document.getElementById(id);

    if (!element) return;

    // Keep the social icons visible while their profile URLs are being set up.
    // A real URL replaces the placeholder value from index.html.
    if (url && url !== "#") {
      element.href = url;
    }

    element.style.display = "";
  });
}

/* =========================================
   GITHUB
========================================= */

async function initGitHub() {
  const username = CONFIG.githubUsername;

  if (!username || username === "#") {
    console.warn("GitHub username is not configured.");
    return;
  }

  const profileButton = document.getElementById("github-profile-btn");
  const repoContainer = document.getElementById("repo-cards");

  if (profileButton) {
    profileButton.href = `https://github.com/${username}`;
  }

  if (!repoContainer) {
    console.warn("GitHub repository container not found.");
    return;
  }

  try {
    const [profileResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),

      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      ),
    ]);

    if (!profileResponse.ok) {
      throw new Error(
        `GitHub profile could not be loaded (${profileResponse.status}).`
      );
    }

    if (!reposResponse.ok) {
      throw new Error(
        `GitHub repositories could not be loaded (${reposResponse.status}).`
      );
    }

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    updateGitHubStats(profile, repos);
    renderGitHubRepositories(repos);

  } catch (error) {
    console.error("GitHub API Error:", error);

    repoContainer.innerHTML = `
      <p class="github-error">
        Unable to load GitHub repositories right now.
      </p>
    `;
  }
}


function updateGitHubStats(profile, repos) {
  const stats = document.querySelectorAll(
    "#github .stats-row .stat-item"
  );

  if (!stats.length) return;

  const totalStars = repos.reduce(
    (total, repo) => total + (repo.stargazers_count || 0),
    0
  );

  /* Repositories */
  const repositoriesValue =
    stats[0]?.querySelector(".stat-value");

  if (repositoriesValue) {
    repositoriesValue.textContent = profile.public_repos ?? 0;
  }


  /* Stars */
  const starsValue =
    stats[1]?.querySelector(".stat-value");

  if (starsValue) {
    starsValue.textContent = totalStars;
  }

  const starsLabel =
    stats[1]?.querySelector(".stat-label");

  if (starsLabel) {
    starsLabel.textContent = "Stars";
  }


  /* Followers */
  const followersValue =
    stats[2]?.querySelector(".stat-value");

  if (followersValue) {
    followersValue.textContent = profile.followers ?? 0;
  }
}


function renderGitHubRepositories(repos) {
  const container = document.getElementById("repo-cards");

  if (!container) return;

  if (!Array.isArray(repos) || repos.length === 0) {
    container.innerHTML = `
      <p class="github-empty">
        No public repositories found.
      </p>
    `;

    return;
  }

  container.innerHTML = repos
    .map(
      (repo) => `
        <article class="repo-card">

          <h3 class="repo-name">
            ${escapeGitHubHTML(repo.name)}
          </h3>

          <p class="repo-desc">
            ${escapeGitHubHTML(
              repo.description || "No description available."
            )}
          </p>

          <div class="repo-meta">

            <span>
              ${escapeGitHubHTML(
                repo.language || "Other"
              )}
            </span>

            <span>
              ★ ${repo.stargazers_count || 0}
            </span>

            <span>
              Forks ${repo.forks_count || 0}
            </span>

          </div>

          <a
            href="${repo.html_url}"
            class="btn btn-secondary repo-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View ${escapeGitHubHTML(
              repo.name
            )} repository"
          >
            View Repository
          </a>

        </article>
      `
    )
    .join("");
}


function escapeGitHubHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* =========================================
   TERMINAL
========================================= */

function initTerminal() {
  const body = document.getElementById("terminal-body");

  if (!body) return;

  const lines = [
    {
      type: "cmd",
      text: "whoami",
    },
    {
      type: "out",
      text: "Gohil — BCA Graduate | IT Professional",
    },
    {
      type: "cmd",
      text: "cat about.txt",
    },
    {
      type: "out",
      text:
        "BCA graduate. Building practical projects.\nLearning by doing. Always improving.",
    },
    {
      type: "cmd",
      text: "ls skills/",
    },
    {
      type: "out",
      text: "Python  JavaScript  PHP  HTML  CSS  MySQL",
    },
    {
      type: "cmd",
      text: "echo $FOCUS",
    },
    {
      type: "out",
      text:
        "Exploring IT, building practical projects & growing every day.",
    },
  ];

  let i = 0;

  body.innerHTML = "";

  function addLine() {
    if (i >= lines.length) {
      // Final prompt with cursor
      const line = document.createElement("div");

      line.className = "terminal-line";

      line.innerHTML = `
        <span class="terminal-prompt">$</span>
        <span class="terminal-cursor"></span>
      `;

      body.appendChild(line);

      return;
    }

    const item = lines[i];

    const line = document.createElement("div");

    line.className = "terminal-line";

    if (item.type === "cmd") {
      line.innerHTML = `
        <span class="terminal-prompt">$</span>
        <span class="terminal-cmd">${item.text}</span>
      `;
    } else {
      line.innerHTML = `
        <div class="terminal-output">
          ${item.text.replace(/\n/g, "<br>")}
        </div>
      `;
    }

    body.appendChild(line);

    i++;

    setTimeout(
      addLine,
      item.type === "cmd" ? 300 : 200
    );
  }

  // Start after a short delay
  setTimeout(addLine, 150);
}
