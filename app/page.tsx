import ThemeToggle from "./ThemeToggle";

const projects = [
  {
    number: "01",
    category: "CLOUD INFRASTRUCTURE",
    title: "Secure Multi-Site Cloud Infrastructure",
    description:
      "Designed and deployed a multi-site cloud infrastructure using OpenStack and Kolla-Ansible, secured with pfSense and IPsec IKEv2 VPN tunnels.",
    tags: ["OpenStack", "Kolla-Ansible", "Linux", "pfSense", "IPsec", "Zabbix"]
  },
  {
    number: "02",
    category: "KUBERNETES & GITOPS",
    title: "Kubernetes GitOps Platform",
    description:
      "Built an automated application delivery platform using Kubernetes, Flux CD, GitHub Actions and container images hosted on GHCR.",
    tags: ["Kubernetes", "Minikube", "Flux CD", "Docker", "GitHub Actions"]
  },
  {
    number: "03",
    category: "PLATFORM ENGINEERING",
    title: "Platform Engineering with Backstage",
    description:
      "Developed an internal developer portal with a software catalog, reusable software templates and automated portfolio deployment.",
    tags: ["Backstage", "Scaffolder", "GitHub Actions", "Docker", "CI/CD"]
  },
  {
    number: "04",
    category: "CONTAINERIZATION & CI/CD",
    title: "Next.js Portfolio CI/CD",
    description:
      "Implemented an automated pipeline triggered from Backstage to build, publish and deploy a Next.js application using Docker Compose and a self-hosted runner.",
    tags: ["Next.js", "Docker", "Docker Hub", "GitHub Actions", "Backstage"]
  }
];

const certifications = [
  {
    name: "Cisco CCNAv7 – Introduction to Networks",
    provider: "Cisco Networking Academy",
    year: "2022"
  },
  {
    name: "AI for Beginners",
    provider: "HP LIFE",
    year: "2025"
  },
  {
    name: "TechUp Explorer",
    provider: "Udacity",
    year: "2026"
  },
  {
    name: "Introduction to AI and Generative AI",
    provider: "Udacity",
    year: "2026"
  }
];

const skills = [
  "Linux Administration",
  "Docker",
  "Kubernetes",
  "OpenStack",
  "Ansible",
  "Terraform",
  "Git & GitHub",
  "GitHub Actions",
  "Flux CD",
  "Backstage",
  "Networking",
  "Python",
  "AWS",
  "Azure",
  "pfSense",
  "Zabbix"
];

export default function Home() {
  return (
    <main className="container">
      <nav className="navbar">
        <a className="brand" href="#home">MH<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>

        <ThemeToggle />
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">
            JUNIOR CLOUD & DEVOPS ENGINEER
          </p>

          <h1>
            Building reliable
            <br />
            <span>cloud & DevOps</span>
            <br />
            solutions.
          </h1>

          <h2>Hi, I&apos;m Montassar Hannachi.</h2>

          <p className="intro">
            Junior Cloud and DevOps Engineer interested in Linux, Cloud Infrastructure, Automation and Platform Engineering.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore projects <span>↗</span>
            </a>
            <a className="secondary-button" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="hero-meta">
            <span>📍 Tozeur, Tunisia</span>
            <span>Available for opportunities</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="terminal-header">
            <span></span><span></span><span></span>
            <p>infrastructure.sh</p>
          </div>
          <div className="terminal-body">
            <p><span className="terminal-green">$</span> whoami</p>
            <p className="terminal-output">montassar-hannachi</p>
            <p><span className="terminal-green">$</span> focus --areas</p>
            <p className="terminal-output">Cloud Infrastructure</p>
            <p className="terminal-output">DevOps & Automation</p>
            <p className="terminal-output">Platform Engineering</p>
            <p><span className="terminal-green">$</span> status</p>
            <p className="terminal-success">● Building and learning</p>
            <p className="terminal-success">● Deployment update: v5 via Backstage</p>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT</p>
          <h2>Engineering with a practical mindset.</h2>
        </div>

        <div className="about-content">
          <p>
            I am an IT graduate focused on Cloud Computing, DevOps and
            system administration. My work combines Linux, networking,
            virtualization, containerization and infrastructure automation.
          </p>
          <p>
            Through hands-on projects, I have explored secure OpenStack
            environments, Kubernetes GitOps workflows and developer platforms
            with Backstage. I am continuously developing my technical skills
            and looking for opportunities to contribute to infrastructure
            and cloud engineering teams.
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">02 / TECHNOLOGIES</p>
          <h2>Technical toolbox.</h2>
          <p>Tools and technologies explored through coursework and practical projects.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <span className="skill-item" key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">03 / SELECTED WORK</p>
          <h2>Projects that demonstrate my skills.</h2>
          <p>Practical implementations across cloud, infrastructure and automation.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="certifications">
        <div className="section-heading">
          <p className="eyebrow">04 / LEARNING</p>
          <h2>Certifications & training.</h2>
        </div>

        <div className="certification-grid">
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.name}>
              <span className="cert-icon">↗</span>
              <div>
                <h3>{certification.name}</h3>
                <p>{certification.provider}</p>
              </div>
              <span className="cert-year">{certification.year}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <p className="eyebrow">05 / CONTACT</p>
        <h2>Let&apos;s build something reliable.</h2>
        <p>
          Interested in Cloud, DevOps, infrastructure automation
          or system administration opportunities?
          Let&apos;s connect.
        </p>

        <a className="primary-button" href="mailto:montassarmh04@gmail.com">
          montassarmh04@gmail.com <span>↗</span>
        </a>

        <div className="social-links">
          <a href="https://github.com/MontassarHannachi" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/montassar-hannachi/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Montassar Hannachi</p>
        <p>Designed & built with Next.js</p>
      </footer>
    </main>
  );
}
