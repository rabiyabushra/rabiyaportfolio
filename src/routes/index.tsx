import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  ChevronDown,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
  Moon,
  Sun,
  FileDown,
  Code2,
  Layout,
  Server,
  Database,
  BrainCircuit,
  Cloud,
  Wrench,
  HeartPulse,
  Link2,
  FileLock2,
  Zap,
  Home,
  Palette,
  Puzzle,
  Library,
  ShieldCheck,
  Wallet,
  UtensilsCrossed,
  Terminal as TerminalIcon,
  Copy,
  Check,
  ExternalLink,
  Laptop,
  CheckCircle,
  FileText,
  Search,
  Sparkle,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";

// Photo placed in public/profile.jpg
const PROFILE_PHOTO: string | null = "/profile.jpg";
// Resume PDF URL or mailto fallback
const RESUME_URL: string | null = null;
const EMAIL = "rabiyabushram1ga23cs130@gmail.com";
const PHONE = "8431445615";
const GITHUB_URL = "https://github.com/rabiyabushra";
const LINKEDIN_URL = "https://linkedin.com/in/rabiya-bushra";
const COLLEGE = "Global Academy of Technology (VTU), Bengaluru";
const CGPA = "9.48";
const GRAD_YEAR = "2027";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rabiya Bushra M | Full-Stack, Cloud & Cybersecurity Developer" },
      {
        name: "description",
        content:
          "Portfolio of Rabiya Bushra M — Computer Science Undergraduate (9.48 CGPA) with 3 internships in Full-Stack, Cybersecurity (VAPT/OWASP), and Data Analytics. Building high-performance, secure software.",
      },
      { property: "og:title", content: "Rabiya Bushra M | Software Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Explore Rabiya's 3 industry internships, full-stack MERN & Spring Boot applications, AWS cloud projects, and AI/ML research.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = [
  ["About", "about"],
  ["Recruiter Snapshot", "snapshot"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Terminal", "terminal"],
  ["Certifications", "certifications"],
  ["Achievements", "achievements"],
  ["Leadership", "leadership"],
  ["Contact", "contact"],
];

const skills: { title: string; icon: LucideIcon; items: string[] }[] = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: ["Java", "JavaScript", "Python", "C", "SQL", "TypeScript"],
  },
  {
    title: "Cybersecurity & Systems",
    icon: ShieldCheck,
    items: [
      "Linux",
      "OWASP Top 10",
      "VAPT",
      "Vulnerability Assessment",
      "Web Security",
      "Network Protocols",
      "Searchable Encryption",
    ],
  },
  {
    title: "Frontend Engineering",
    icon: Layout,
    items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT", "Microservices Concepts"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL", "DynamoDB", "Query Optimization"],
  },
  {
    title: "Data / AI / ML",
    icon: BrainCircuit,
    items: ["Pandas", "Scikit-Learn", "XGBoost", "SHAP", "Random Forest", "Power BI", "Data Cleaning & EDA"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch", "Serverless Architecture"],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Maven", "Postman", "Linux CLI"],
  },
];

const certifications = [
  { name: "Google Cloud Career Launchpad — Cloud Engineer Track", provider: "Google Cloud", featured: true },
  { name: "Applied Generative AI Certification", provider: "Infosys Springboard", featured: true },
  { name: "AI-first Software Engineering", provider: "Infosys Springboard", featured: true },
  { name: "TechA Python Programming Foundation Certification", provider: "Infosys Springboard", featured: true },
  { name: "Academic Cohort India – Automation Developer Associate Training", provider: "UiPath", featured: true },
  { name: "Operating Systems Basics", provider: "Cisco Networking Academy", featured: true },
  { name: "Introduction to Cloud Computing", provider: "Infosys Springboard", featured: false },
  { name: "Introduction to OpenAI GPT Models", provider: "Infosys Springboard", featured: false },
  { name: "Building LLM Applications using Prompt Engineering", featured: false },
  { name: "Theory of Computation", provider: "Mind Luster", featured: false },
];

const experiences = [
  {
    role: "Cybersecurity Intern",
    company: "ThunderCipher",
    type: "Virtual Internship",
    date: "July 2026",
    badge: "Cybersecurity & VAPT",
    tags: ["Cybersecurity", "Networking", "Linux", "Vulnerability Assessment", "Web Security", "OWASP", "VAPT"],
    points: [
      "Completed a one-month virtual internship in Cybersecurity from 1 July to 31 July 2026.",
      "Gained practical exposure to Cybersecurity, Networking, Linux, Vulnerability Assessment, Web Security, OWASP, and VAPT.",
      "Worked with hands-on activities and assessments related to cybersecurity concepts and security practices.",
      "Analyzed system threat models and conducted security testing to identify and mitigate web and infrastructure vulnerabilities.",
    ],
  },
  {
    role: "Data Science & Analytics Intern",
    company: "Future Interns",
    type: "Virtual Internship",
    date: "Dec 2025 — Jan 2026",
    badge: "Data & Analytics",
    tags: ["Python", "Power BI", "Pandas", "EDA", "Sentiment Analysis"],
    points: [
      "Built interactive Power BI dashboards for clear data visualization, KPI tracking, and decision-making reports.",
      "Performed data cleaning, exploratory data analysis (EDA), and sentiment analysis using Python and Pandas.",
      "Extracted key statistical correlations from complex datasets to present clear analytical insights.",
    ],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Web Stack Academy",
    type: "Internship",
    date: "Sep 2025 — Nov 2025",
    badge: "Full-Stack Web Dev",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Git"],
    points: [
      "Developed full-stack MERN applications using React.js, Node.js, Express.js, and MongoDB.",
      "Built modular REST APIs, secure CRUD operations, and integrated backend database collections.",
      "Followed structured Software Development Life Cycle (SDLC) practices with Git and GitHub version control.",
    ],
  },
];

type ProjectCategory = "all" | "fullstack" | "cloud" | "aiml" | "security";

type Project = {
  title: string;
  category: "fullstack" | "cloud" | "aiml" | "security";
  tech: string[];
  problem: string;
  approach: string;
  outcome: string;
  github?: string;
  profileLink?: boolean;
  badge?: string;
  icon: LucideIcon;
};

const allProjects: Project[] = [
  {
    title: "BarrierLens",
    category: "aiml",
    icon: HeartPulse,
    tech: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "SHAP", "Machine Learning"],
    problem:
      "Millions of women in India face healthcare access barriers, yet traditional analysis struggles to reveal complex causes across large populations.",
    approach:
      "Developed an ML system using NFHS-5 survey data to identify household, logistic, and facility-level barriers through classification and SHAP explainability.",
    outcome:
      "Identified wealth, education, and rural residence as key predictors, producing actionable insights for policymakers. Co-authored research paper submitted.",
    badge: "Research Paper Submitted",
  },
  {
    title: "Serverless URL Shortener",
    category: "cloud",
    icon: Link2,
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "S3", "CloudWatch"],
    problem:
      "Traditional URL shorteners require continuous server maintenance, increasing cost, idling overhead, and infrastructure complexity.",
    approach:
      "Built a fully serverless application with Lambda functions triggered through API Gateway, DynamoDB storage, S3 hosting, and CloudWatch monitoring.",
    outcome:
      "Delivered an auto-scaling, cost-efficient shortener handling high throughput with zero idle server cost and sub-second latency.",
    github: "https://github.com/rabiyabushra/serverless-url-shortener",
  },
  {
    title: "Question Paper Delivery System",
    category: "security",
    icon: FileLock2,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC", "Crypto"],
    problem:
      "Educational institutions need a strictly secure, confidential workflow for exam paper creation, verification, approval, and tamper-proof storage.",
    approach:
      "Built role-based faculty, reviewer, and administrator workflows with secure REST APIs, JWT authentication, and MongoDB integration with audit trails.",
    outcome:
      "Created a secure, auditable delivery system with end-to-end controlled access at every stage of question paper handling.",
    github: "https://github.com/pbcs2025/QPDS_Project",
  },
  {
    title: "Secure KYC Search (PRSP Innovator)",
    category: "security",
    icon: ShieldCheck,
    tech: ["Java", "Searchable Encryption", "Cryptography", "Data Security"],
    problem:
      "Financial institutions must search customer KYC records without decrypting sensitive identity data on remote or third-party servers.",
    approach:
      "Implemented a privacy-preserving searchable encryption scheme allowing keyword searches over encrypted datasets while maintaining confidentiality.",
    outcome:
      "Successfully demonstrated secure keyword retrieval without exposing plain-text records; presented at HAL Hackathon 2025.",
    github: "https://github.com/rabiyabushra/PRSP_INNOVATOR",
  },
  {
    title: "Smart Energy ML",
    category: "aiml",
    icon: Zap,
    tech: ["Python", "Random Forest", "Machine Learning", "Data Analysis"],
    problem:
      "Energy consumption in households often goes unmanaged because appliance usage patterns lack predictive data insights.",
    approach:
      "Used simulated consumption data and Random Forest regression/classification models to predict usage patterns and identify optimization opportunities.",
    outcome:
      "Generated actionable efficiency insights, demonstrating how applied ML can support smarter, sustainable energy management.",
    github: "https://github.com/rabiyabushra/Smart-Energy-ML",
  },
  {
    title: "Homely Hub",
    category: "fullstack",
    icon: Home,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    problem:
      "Users need a seamless, intuitive platform to discover rental properties, view amenity details, and manage bookings effortlessly.",
    approach:
      "Developed a complete MERN platform with property listings, interactive detail pages, booking management flows, and backend database integration.",
    outcome:
      "Delivered a responsive, database-driven property discovery and booking application demonstrating end-to-end full-stack development.",
    github: "https://github.com/rabiyabushra/HomelyHub",
  },
  {
    title: "ChromaFind — Spot the Shade",
    category: "fullstack",
    icon: Palette,
    tech: ["Java 17", "Spring Boot", "React.js", "REST APIs"],
    problem:
      "Interactive color-matching games require rapid backend processing, reliable session-aware gameplay, and minimal latency.",
    approach:
      "Built a robust Spring Boot backend leveraging Java Collections, Stream API, and session state management paired with a dynamic React interface.",
    outcome:
      "An engaging, responsive full-stack game showcasing clean Java enterprise architecture and frontend-backend communication.",
    github: "https://github.com/rabiyabushra/chromafind",
  },
  {
    title: "Spot The Difference Game",
    category: "fullstack",
    icon: Puzzle,
    tech: ["Java", "OOP", "Swing / GUI"],
    problem:
      "Visual puzzles need efficient image comparison logic, pixel validation, and responsive interactive feedback mechanics.",
    approach:
      "Developed an object-oriented Java desktop game with comparison algorithms, scoring logic, and engaging user interaction features.",
    outcome:
      "An interactive desktop game that sharpens visual problem-solving skills with solid modular Java design.",
    github: "https://github.com/rabiyabushra/SpotTheDifferenceGame",
  },
  {
    title: "Library Management System",
    category: "fullstack",
    icon: Library,
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    problem:
      "Manual library record keeping leads to book tracking inaccuracies, overdue fine errors, and disorganized inventory.",
    approach:
      "Built secure JWT authentication, granular role-based access for librarians/students, book issuance workflows, and transaction history tracking.",
    outcome:
      "A scalable, secure RESTful API powering core library operations with high data consistency.",
    github: "https://github.com/rabiyabushra/Library-Project",
  },
  {
    title: "Money Tracker",
    category: "fullstack",
    icon: Wallet,
    tech: ["React.js", "JavaScript", "MongoDB", "Node.js"],
    problem:
      "Personal income and daily expenses need simple, secure tracking with intuitive categorization and balance calculation.",
    approach:
      "Built reusable modular React components, user authentication, and persistent database storage for categorized transaction records.",
    outcome:
      "A clean, functional financial tracker empowering users to visualize monthly budgets and spending habits.",
    github: "https://github.com/rabiyabushra",
    profileLink: true,
  },
  {
    title: "Restaurant Menu Website",
    category: "fullstack",
    icon: UtensilsCrossed,
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    problem:
      "Restaurant patrons need a swift, attractive way to browse culinary offerings, dietary filters, and prices on mobile devices.",
    approach:
      "Implemented real-time search and category filtering in a cross-browser responsive design with clean UI layouts.",
    outcome:
      "A polished, mobile-first restaurant website delivering rapid menu exploration and delightful user experience.",
    github: "https://github.com/rabiyabushra",
    profileLink: true,
  },
];

function SectionHeading({ title, intro, tag }: { title: string; intro?: string; tag?: string }) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div>
        {tag && (
          <span className="mb-2 inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {tag}
          </span>
        )}
        <h2 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">{title}</h2>
        <span className="mt-4 block h-0.5 w-14 bg-primary" aria-hidden="true" />
      </div>
      {intro && <p className="max-w-xl text-sm leading-7 text-muted-foreground md:text-right">{intro}</p>}
    </div>
  );
}

function TechList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground transition-colors hover:border-primary/50"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectLink({ project }: { project: Project }) {
  if (!project.github) {
    return (
      <span className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-accent px-3 py-2 font-mono text-xs text-accent-foreground">
        <CheckCircle2 size={14} aria-hidden="true" /> {project.badge}
      </span>
    );
  }
  return (
    <a
      className="inline-flex h-10 items-center gap-2 rounded-md border border-border bg-secondary px-4 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      <Github size={16} aria-hidden="true" />{" "}
      {project.profileLink ? "View GitHub Profile" : "View on GitHub"}{" "}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* Storage can be unavailable in private contexts. */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={dark}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle relative inline-flex h-10 w-[4.5rem] shrink-0 items-center rounded-full border border-border bg-secondary p-1 transition-all hover:border-primary focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Sun size={14} className="absolute left-2 text-muted-foreground" aria-hidden="true" />
      <Moon size={14} className="absolute right-2 text-muted-foreground" aria-hidden="true" />
      <span
        className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform duration-300 ${dark ? "translate-x-8" : "translate-x-0"}`}
      >
        {dark ? <Moon size={14} aria-hidden="true" /> : <Sun size={14} aria-hidden="true" />}
      </span>
    </button>
  );
}

function ResumeButton({ className }: { className: string }) {
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!RESUME_URL) {
      e.preventDefault();
      navigator.clipboard?.writeText(EMAIL);
      toast.success("Resume request drafted! Email copied to clipboard: " + EMAIL);
      window.location.href = `mailto:${EMAIL}?subject=Resume%20Request%20for%20Rabiya%20Bushra%20M`;
    }
  };

  return RESUME_URL ? (
    <a href={RESUME_URL} download className={className} target="_blank" rel="noreferrer">
      <FileDown size={17} aria-hidden="true" /> Download Resume
    </a>
  ) : (
    <a href={`mailto:${EMAIL}?subject=Resume%20Request`} onClick={handleResumeClick} className={className}>
      <FileDown size={17} aria-hidden="true" /> Request Resume
    </a>
  );
}

function ProfilePhoto() {
  return (
    <div className="relative mx-auto w-64 sm:w-72 lg:w-88">
      {/* Outer ambient glow */}
      <div
        className="absolute -inset-6 rounded-3xl bg-gradient-accent opacity-25 blur-3xl transition-opacity hover:opacity-40"
        aria-hidden="true"
      />

      {/* Main framed photo card */}
      <div className="relative rounded-3xl border border-primary/30 bg-card p-3 shadow-2xl backdrop-blur-sm transition-transform duration-300 hover:scale-[1.01]">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-secondary">
          {PROFILE_PHOTO ? (
            <img
              src={PROFILE_PHOTO}
              alt="Portrait of Rabiya Bushra M"
              className="h-full w-full object-cover object-[center_18%] transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div
              className="flex h-full w-full items-center justify-center bg-secondary"
              role="img"
              aria-label="Profile photo placeholder"
            >
              <span className="text-gradient text-6xl font-bold sm:text-7xl">RB</span>
            </div>
          )}

          {/* Bottom gradient overlay with role */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-4 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-primary">Global Academy of Tech</p>
                <p className="text-sm font-semibold text-foreground">Computer Science & Eng.</p>
              </div>
              <span className="rounded-full border border-primary/40 bg-accent px-2.5 py-0.5 font-mono text-xs font-bold text-accent-foreground">
                9.48 CGPA
              </span>
            </div>
          </div>
        </div>

        {/* Floating Developer Badge: 3 Internships */}
        <div className="absolute -left-4 top-6 hidden items-center gap-2 rounded-lg border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur-md sm:flex">
          <BriefcaseBusiness className="h-4 w-4 text-primary" />
          <div className="text-left font-mono">
            <span className="block text-[10px] uppercase text-muted-foreground">Experience</span>
            <span className="text-xs font-bold text-foreground">3 Internships</span>
          </div>
        </div>

        {/* Floating Developer Badge: Cybersecurity & VAPT */}
        <div className="absolute -right-4 top-24 hidden items-center gap-2 rounded-lg border border-border bg-card/95 px-3 py-2 shadow-lg backdrop-blur-md sm:flex">
          <ShieldCheck className="h-4 w-4 text-emerald-500" />
          <div className="text-left font-mono">
            <span className="block text-[10px] uppercase text-muted-foreground">Security</span>
            <span className="text-xs font-bold text-foreground">OWASP & VAPT</span>
          </div>
        </div>

        {/* Floating Availability Pill */}
        <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-emerald-500/40 bg-background/95 px-4 py-1.5 font-mono text-xs font-medium text-emerald-500 shadow-xl backdrop-blur-md flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </span>
          <span>Open for Opportunities</span>
        </div>
      </div>
    </div>
  );
}

// Developer interactive terminal component
function DeveloperTerminal() {
  const [activeCommand, setActiveCommand] = useState("help");
  const [history, setHistory] = useState<string[]>([
    "rabiya@portfolio:~$ welcome",
    "Welcome to Rabiya's Developer Terminal! Select a command below or explore skills, internships, and recruiter stats.",
  ]);

  const runCommand = (cmd: string) => {
    setActiveCommand(cmd);
    const timestamp = new Date().toLocaleTimeString();
    let response: string[] = [];

    switch (cmd.toLowerCase()) {
      case "bio":
        response = [
          `[${timestamp}] $ rabiya --bio`,
          "• Name: Rabiya Bushra M",
          "• Education: B.E. Computer Science & Engineering @ Global Academy of Technology (VTU)",
          "• Academic Rank: CGPA 9.48 / 10.0 (Graduating 2027, 7th Sem)",
          "• Core Profile: Full-Stack Developer | Cloud & Applied ML | Cybersecurity Enthusiast",
          "• Location: Bengaluru, India (Open to Relocation & Remote)",
        ];
        break;
      case "internships":
        response = [
          `[${timestamp}] $ git log --internships --oneline`,
          "1. [July 2026] Cybersecurity Intern — ThunderCipher (Virtual)",
          "   → VAPT, OWASP Top 10, Linux, Web & Network Security assessments",
          "2. [Dec 2025 - Jan 2026] Data Science & Analytics Intern — Future Interns",
          "   → Interactive Power BI dashboards, Python data cleaning, sentiment analysis",
          "3. [Sep 2025 - Nov 2025] Full Stack Web Development Intern — Web Stack Academy",
          "   → MERN Stack, REST APIs, CRUD modules, database schema design, Git workflows",
        ];
        break;
      case "skills":
        response = [
          `[${timestamp}] $ list-stack --verbose`,
          "• Languages: Java 17, JavaScript (ES6+), Python, C, SQL, TypeScript",
          "• Full-Stack: React.js, Node.js, Express.js, Spring Boot, REST APIs, Tailwind CSS",
          "• Security: OWASP Top 10, VAPT, Linux, Network Protocols, Searchable Encryption",
          "• Cloud/DevOps: AWS (Lambda, API Gateway, DynamoDB, S3, CloudWatch), Git, Postman",
          "• Databases: MongoDB, MySQL, DynamoDB",
          "• Data/ML: Pandas, Scikit-Learn, XGBoost, SHAP, Random Forest, Power BI",
        ];
        break;
      case "why-hire":
        response = [
          `[${timestamp}] $ why-hire rabiya`,
          "✓ 1. Proven Full-Stack Depth: Built end-to-end MERN & Spring Boot applications with clean architecture.",
          "✓ 2. Security-Aware Engineer: Real hands-on VAPT, OWASP Top 10, and cryptographic search implementation.",
          "✓ 3. Exceptional Academic Rigor: Consistent 9.48 CGPA demonstrating top-tier discipline and fast learning.",
          "✓ 4. Research & Competitive Track: Co-authored ML paper + Winner DBMS Hackathon 2025 + SIH Shortlist.",
          "✓ 5. Immediate Value: High work ethic, proactive communication, and readiness to contribute to production code.",
        ];
        break;
      case "contact":
        response = [
          `[${timestamp}] $ cat ~/.contact_info`,
          `• Email:    ${EMAIL}`,
          `• Phone:    +91 ${PHONE}`,
          `• LinkedIn: ${LINKEDIN_URL}`,
          `• GitHub:   ${GITHUB_URL}`,
          `• Location: Bengaluru, Karnataka, India`,
        ];
        break;
      case "clear":
        setHistory(["rabiya@portfolio:~$ cleared terminal"]);
        return;
      case "help":
      default:
        response = [
          `[${timestamp}] $ help`,
          "Available developer commands:",
          "  bio          - Overview of background, education, and graduation",
          "  internships  - Summary of 3 completed industry internships",
          "  skills       - Complete technical toolkit breakdown",
          "  why-hire     - Recruiter highlights & competitive edge",
          "  contact      - Reach out directly via email, phone, or LinkedIn",
          "  clear        - Reset terminal window",
        ];
        break;
    }

    setHistory((prev) => [...prev.slice(-15), ...response]);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL);
    toast.success("Email copied: " + EMAIL);
  };

  return (
    <div className="terminal-card overflow-hidden rounded-xl border font-mono text-xs shadow-2xl">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-border/40 bg-secondary/80 px-4 py-3 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
          <span className="ml-3 font-semibold text-muted-foreground">rabiya@developer-console:~ (zsh)</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyEmail}
            className="flex items-center gap-1 rounded bg-accent px-2 py-0.5 text-[11px] text-accent-foreground hover:opacity-80"
            title="Copy Email"
          >
            <Copy size={11} /> copy email
          </button>
        </div>
      </div>

      {/* Terminal Interactive Command Quick-Buttons */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/30 bg-muted/40 px-4 py-2 text-[11px]">
        <span className="text-primary font-bold">Quick Commands:</span>
        {[
          ["$ bio", "bio"],
          ["$ internships", "internships"],
          ["$ skills", "skills"],
          ["$ why-hire", "why-hire"],
          ["$ contact", "contact"],
          ["$ clear", "clear"],
        ].map(([label, cmd]) => (
          <button
            key={cmd}
            type="button"
            onClick={() => runCommand(cmd)}
            className={`rounded border px-2.5 py-1 transition-all ${
              activeCommand === cmd
                ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm"
                : "border-border/60 bg-secondary hover:border-primary/60 text-secondary-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Terminal Body */}
      <div className="terminal-scroll max-h-72 min-h-48 overflow-y-auto bg-black/70 p-4 text-emerald-400 font-mono text-[12px] leading-relaxed">
        {history.map((line, idx) => (
          <div
            key={idx}
            className={
              line.startsWith("[") || line.startsWith("rabiya@")
                ? "text-primary font-bold pt-1"
                : line.startsWith("•") || line.startsWith("✓")
                ? "text-gray-200 pl-2"
                : "text-emerald-400/90 pl-2"
            }
          >
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2 pt-2 text-primary">
          <span>rabiya@portfolio:~$</span>
          <span className="inline-block h-4 w-2 animate-pulse bg-primary" />
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [projectCategory, setProjectCategory] = useState<ProjectCategory>("all");
  const [skillSearch, setSkillSearch] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.08 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [showAllCertifications, projectCategory]);

  const filteredProjects = useMemo(() => {
    if (projectCategory === "all") return allProjects;
    return allProjects.filter((p) => p.category === projectCategory);
  }, [projectCategory]);

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(EMAIL);
    toast.success("Email copied: " + EMAIL);
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(PHONE);
    toast.success("Phone number copied: +91 " + PHONE);
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Sticky Navigation Header */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-border bg-background/95 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-background/80 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-5 sm:px-8">
          <a href="#top" className="shrink-0 font-mono text-sm font-bold text-foreground" aria-label="Rabiya Bushra, back to top">
            RB<span className="text-primary">.</span>
          </a>

          {/* Availability Status Badge in Header */}
          <div className="hidden xl:flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
            Seeking 2026/2027 Roles
          </div>

          <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Portfolio sections">
            {navItems.map(([label, target]) => (
              <a
                key={target}
                href={`#${target}`}
                className="nav-link shrink-0 font-mono text-[11px] uppercase text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-3 lg:ml-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="hidden h-9 items-center gap-1.5 rounded-md border border-border bg-secondary px-3 text-xs font-semibold text-secondary-foreground transition-colors hover:border-primary/50 sm:inline-flex"
              title="Copy Email to Clipboard"
            >
              <Copy size={13} /> Copy Email
            </button>
            <ResumeButton className="hidden h-9 items-center gap-2 rounded-md bg-gradient-accent px-3 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex" />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Horizontal Navigation */}
        <nav
          className="flex gap-5 overflow-x-auto border-t border-border/60 px-5 py-2.5 lg:hidden"
          aria-label="Portfolio sections mobile"
        >
          {navItems.map(([label, target]) => (
            <a
              key={target}
              href={`#${target}`}
              className="nav-link shrink-0 font-mono text-[11px] uppercase text-muted-foreground transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="top"
        className="portfolio-grid hero-glow relative flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center border-b border-border px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.9fr]" data-reveal>
            <div className="hero-copy order-2 lg:order-1">
              {/* Recruiter Alert Pill */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-accent px-3.5 py-1.5 font-mono text-xs font-medium text-accent-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span>Open for Software Engineer & Cybersecurity Roles</span>
              </div>

              <h1 className="text-5xl font-bold leading-[1.02] tracking-normal text-foreground sm:text-7xl lg:text-[5.2rem]">
                Rabiya <span className="text-gradient">Bushra M</span>
              </h1>

              <p className="mt-4 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Bengaluru, India · Global Academy of Technology (VTU)
              </p>

              <p className="mt-6 text-xl font-medium text-foreground/90 sm:text-2xl">
                Computer Science Undergraduate <span className="text-primary">|</span> Full-Stack & Security Engineer
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Building secure, resilient software across the stack. 3 completed internships spanning{" "}
                <span className="font-semibold text-foreground">Cybersecurity (OWASP & VAPT)</span>,{" "}
                <span className="font-semibold text-foreground">Data Science</span>, and{" "}
                <span className="font-semibold text-foreground">MERN Full-Stack Development</span>. Maintaining a{" "}
                <span className="font-semibold text-primary">9.48 CGPA</span> and co-author of AI/ML healthcare
                accessibility research.
              </p>

              {/* Core Skill Chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Full-Stack MERN",
                  "Cybersecurity (OWASP & VAPT)",
                  "Spring Boot",
                  "AWS Serverless",
                  "Applied AI / ML",
                  "9.48 CGPA",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-accent px-3 py-1 font-mono text-[11px] text-accent-foreground transition-all hover:border-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Primary Call to Actions */}
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="button-feedback inline-flex h-12 items-center gap-2 rounded-md bg-gradient-accent px-5 text-sm font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
                >
                  Explore Projects <ArrowDown size={17} aria-hidden="true" />
                </a>
                <a
                  href="#snapshot"
                  className="button-feedback inline-flex h-12 items-center gap-2 rounded-md border border-primary/40 bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Recruiter Fast-Track <BriefcaseBusiness size={17} aria-hidden="true" />
                </a>
                <ResumeButton className="button-feedback inline-flex h-12 items-center gap-2 rounded-md border border-border bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary" />
              </div>

              {/* Social and Quick Actions */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="social-link">
                  <Github size={17} /> GitHub
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="social-link">
                  <Linkedin size={17} /> LinkedIn
                </a>
                <button type="button" onClick={handleCopyEmail} className="social-link text-left">
                  <Mail size={17} /> {EMAIL}
                </button>
                <button type="button" onClick={handleCopyPhone} className="social-link text-left">
                  <Phone size={17} /> +91 {PHONE}
                </button>
              </div>
            </div>

            {/* Profile Photo Display */}
            <div className="order-1 lg:order-2">
              <ProfilePhoto />
            </div>
          </div>
        </div>
      </section>

      {/* Recruiter Fast-Track Ribbon / At A Glance */}
      <section id="snapshot" className="scroll-mt-16 border-b border-border bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl" data-reveal>
          <div className="rounded-2xl border border-primary/30 bg-card p-6 shadow-xl sm:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center border-b border-border pb-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                  Candidate Snapshot
                </span>
                <h3 className="mt-1 text-2xl font-bold sm:text-3xl">Why Hire Rabiya Bushra M?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Quick summary designed for technical recruiters and hiring managers.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="button-feedback inline-flex h-10 items-center gap-2 rounded-md bg-gradient-accent px-4 text-xs font-semibold text-primary-foreground shadow"
                >
                  <Mail size={15} /> Copy Email to Schedule
                </button>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="button-feedback inline-flex h-10 items-center gap-2 rounded-md border border-border bg-secondary px-4 text-xs font-semibold text-secondary-foreground hover:border-primary"
                >
                  <Linkedin size={15} /> LinkedIn Profile <ExternalLink size={13} />
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-secondary/50 p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-primary">Academic Rigor</p>
                <p className="mt-2 text-3xl font-bold text-foreground">9.48 CGPA</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Global Academy of Technology (VTU) · Graduating 2027 (7th Sem) · Top percentiles.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-secondary/50 p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-primary">Practical Experience</p>
                <p className="mt-2 text-3xl font-bold text-foreground">3 Internships</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Cybersecurity @ ThunderCipher · Data Science @ Future Interns · Full-Stack @ Web Stack Academy.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-secondary/50 p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-primary">Hackathon Track</p>
                <p className="mt-2 text-3xl font-bold text-foreground">Winner & Finalist</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Winner DBMS Hackathon 2025 · Shortlisted Smart India Hackathon (SIH 2025).
                </p>
              </div>

              <div className="rounded-xl border border-border bg-secondary/50 p-5">
                <p className="font-mono text-xs uppercase tracking-wide text-primary">Security & Cloud</p>
                <p className="mt-2 text-3xl font-bold text-foreground">DevSecOps Mindset</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Hands-on VAPT, OWASP Top 10, Linux, AWS Serverless Lambda, and Searchable Encryption.
                </p>
              </div>
            </div>

            {/* Targeted roles and availability */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border/80 bg-accent/30 px-5 py-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase text-primary">Roles Targeted:</span>
                {[
                  "Software Development Engineer (SDE)",
                  "Full-Stack Developer",
                  "Backend Engineer",
                  "Cybersecurity Analyst",
                  "Cloud / DevOps Intern",
                ].map((role) => (
                  <span
                    key={role}
                    className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
                  >
                    {role}
                  </span>
                ))}
              </div>
              <div className="font-mono text-xs text-muted-foreground">
                📍 Location: <strong className="text-foreground">Bengaluru, India</strong> (Open to Relocation & Remote)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading
            tag="Background & Drive"
            title="About me"
            intro="A committed computer science student who combines academic excellence with real-world production code and security fundamentals."
          />
          <div className="grid gap-12 lg:grid-cols-[1.5fr_0.75fr]">
            <div>
              <p className="text-xl leading-9 text-foreground/90 sm:text-2xl sm:leading-10">
                I am a Computer Science undergraduate graduating in 2027 at Global Academy of Technology, Bengaluru
                (VTU), currently in my 7th semester with an exceptional <span className="text-primary font-bold">9.48 CGPA</span>.
              </p>
              <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                My approach to software engineering bridges full-stack application development, cloud scalability, and
                system security. Through 3 dedicated internships, I have built production-ready MERN stack apps,
                designed high-visibility Power BI data analytics pipelines, and conducted hands-on vulnerability
                assessment and penetration testing (VAPT) following OWASP guidelines.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
                I am also a co-author of research on machine learning approaches to healthcare accessibility in India,
                submitted using NFHS-5 data with XGBoost and SHAP explainability. When building systems, I prioritize
                clean architecture, secure-by-default workflows, and dependable user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border shadow-[var(--shadow-card)]">
              <div className="bg-card p-5">
                <p className="font-mono text-xs text-muted-foreground">CGPA</p>
                <p className="mt-2 text-3xl font-semibold text-primary">{CGPA}</p>
                <span className="text-[11px] text-muted-foreground">7th Semester</span>
              </div>
              <div className="bg-card p-5">
                <p className="font-mono text-xs text-muted-foreground">GRADUATION</p>
                <p className="mt-2 text-3xl font-semibold">{GRAD_YEAR}</p>
                <span className="text-[11px] text-muted-foreground">B.E. Computer Science</span>
              </div>
              <div className="col-span-2 bg-card p-5">
                <p className="font-mono text-xs text-muted-foreground">CORE SPECIALIZATIONS</p>
                <p className="mt-2 text-sm font-medium leading-6 text-foreground">
                  Full-Stack (MERN / Spring Boot) · AWS Serverless · Cybersecurity (OWASP / VAPT) · Applied ML
                </p>
              </div>
              <div className="col-span-2 bg-card p-5">
                <p className="font-mono text-xs text-muted-foreground">COLLEGE AFFILIATION</p>
                <p className="mt-2 text-sm font-medium leading-6 text-foreground">{COLLEGE}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading
            tag="Capabilities"
            title="Technical toolkit"
            intro="A robust stack spanning programming languages, secure backend architectures, AWS cloud infrastructure, applied machine learning, and cybersecurity tools."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, index) => (
              <article
                key={group.title}
                className={`card-lift flex flex-col rounded-lg border border-border bg-card p-6 ${
                  group.title === "Cybersecurity & Systems" ? "border-primary/40 bg-accent/10" : ""
                }`}
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <group.icon size={18} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-primary">{group.title}</p>
                    {group.title === "Cybersecurity & Systems" && (
                      <span className="font-mono text-[9px] text-emerald-500 font-semibold">New · ThunderCipher</span>
                    )}
                  </div>
                </div>
                <TechList items={group.items} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading
            tag="Industry Work"
            title="Professional experience"
            intro="Real-world internships demonstrating progressive expertise across cybersecurity auditing, data intelligence, and full-stack development."
          />

          <div className="border-t border-border">
            {experiences.map((item, idx) => (
              <article
                key={item.company + item.role}
                className="grid gap-6 border-b border-border py-10 md:grid-cols-[3rem_1.2fr_1.8fr] md:gap-8 transition-colors hover:bg-secondary/20 p-2 sm:p-4 rounded-xl"
              >
                <div className="hidden md:flex flex-col items-center">
                  <span
                    className={`mt-1 h-3.5 w-3.5 rounded-full ${
                      idx === 0 ? "bg-emerald-500 ring-4 ring-emerald-500/20" : "bg-primary"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="mt-2 h-full w-0.5 bg-border/80" />
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                    <span className="rounded-md border border-primary/30 bg-accent px-2 py-0.5 font-mono text-[10px] font-semibold text-accent-foreground">
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-2 text-base font-semibold text-primary">{item.company}</p>

                  <div className="mt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} /> {item.date}
                    </span>
                    <span>•</span>
                    <span>{item.type}</span>
                  </div>

                  <div className="mt-4">
                    <TechList items={item.tags} />
                  </div>
                </div>

                <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <ul className="space-y-2.5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-foreground/90">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Developer Terminal */}
      <section id="terminal" className="scroll-mt-16 border-b border-border bg-surface px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading
            tag="Interactive Console"
            title="Developer CLI simulation"
            intro="A live developer playground to quickly query candidate information, internship accomplishments, and core skills via simulated command line."
          />
          <DeveloperTerminal />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal>
            <SectionHeading
              tag="Engineered Solutions"
              title="Featured projects"
              intro="Selected work spanning cloud-native architectures, role-based secure workflows, machine learning research, and end-to-end full-stack applications."
            />

            {/* Category Filter Pills */}
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <span className="mr-2 font-mono text-xs uppercase text-muted-foreground">Filter:</span>
              {[
                ["All Projects", "all"],
                ["Full-Stack & Web", "fullstack"],
                ["Cloud & Serverless", "cloud"],
                ["Security & Systems", "security"],
                ["AI & Machine Learning", "aiml"],
              ].map(([label, cat]) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setProjectCategory(cat as ProjectCategory)}
                  className={`rounded-md border px-3.5 py-1.5 font-mono text-xs transition-all ${
                    projectCategory === cat
                      ? "border-primary bg-primary text-primary-foreground font-semibold shadow-sm"
                      : "border-border bg-secondary text-secondary-foreground hover:border-primary/50"
                  }`}
                >
                  {label} {cat === "all" ? `(${allProjects.length})` : `(${allProjects.filter((p) => p.category === cat).length})`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {filteredProjects.slice(0, 5).map((project) => (
              <article
                key={project.title}
                data-reveal
                className="card-lift group grid gap-8 rounded-xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[0.72fr_1.28fr] lg:p-10"
              >
                <div className="flex flex-col justify-between gap-8 border-b border-border pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-accent text-primary-foreground shadow-sm">
                        <project.icon size={20} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                          {project.category.toUpperCase()}
                        </p>
                        {project.badge && (
                          <span className="font-mono text-[10px] text-accent-foreground bg-accent px-2 py-0.5 rounded">
                            {project.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold sm:text-3xl text-foreground">{project.title}</h3>
                    <div className="mt-6">
                      <TechList items={project.tech} />
                    </div>
                  </div>
                  <ProjectLink project={project} />
                </div>
                <div className="grid gap-7 md:grid-cols-3">
                  {[
                    ["Problem", project.problem],
                    ["Approach", project.approach],
                    ["Outcome & Impact", project.outcome],
                  ].map(([label, text]) => (
                    <div key={label}>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary font-semibold">
                        {label}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length > 5 && (
            <>
              <div className="mb-8 mt-24 flex items-end justify-between" data-reveal>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Archive</p>
                  <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">More projects</h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {filteredProjects.length - 5} additional projects
                </span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.slice(5).map((project) => (
                  <article
                    key={project.title}
                    data-reveal
                    className="card-lift flex flex-col rounded-xl border border-border bg-card p-6"
                  >
                    <div className="mb-5 flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                        <project.icon size={18} aria-hidden="true" />
                      </span>
                      <div>
                        <h4 className="text-xl font-semibold leading-7">{project.title}</h4>
                        <span className="font-mono text-[10px] uppercase text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <TechList items={project.tech} />
                    <div className="mt-7 space-y-4 text-sm leading-6 text-muted-foreground">
                      <p>
                        <strong className="block font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                          Problem
                        </strong>
                        {project.problem}
                      </p>
                      <p>
                        <strong className="block font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                          Approach
                        </strong>
                        {project.approach}
                      </p>
                      <p>
                        <strong className="block font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                          Outcome
                        </strong>
                        {project.outcome}
                      </p>
                    </div>
                    <div className="mt-auto border-t border-border pt-5">
                      <ProjectLink project={project} />
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="scroll-mt-16 border-b border-border bg-surface px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div data-reveal>
            <SectionHeading
              tag="Continuous Learning"
              title="Certifications & credentials"
              intro="Industry-recognized courses across Google Cloud, applied generative AI, software engineering fundamentals, automation, and core computer science."
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications
              .filter((certification) => certification.featured || showAllCertifications)
              .map((certification) => (
                <article
                  key={certification.name}
                  data-reveal
                  className="card-lift group flex min-h-48 flex-col rounded-lg border border-border bg-card p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-accent-foreground transition-transform duration-200 group-hover:scale-105">
                      <BadgeCheck size={20} aria-hidden="true" />
                    </span>
                    <span className="font-mono text-[10px] uppercase text-primary">Certified</span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-6 text-card-foreground">
                    {certification.name}
                  </h3>
                  {certification.provider && (
                    <p className="mt-auto pt-4 text-xs font-mono text-muted-foreground">
                      Provider: {certification.provider}
                    </p>
                  )}
                </article>
              ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllCertifications((current) => !current)}
              aria-expanded={showAllCertifications}
              className="button-feedback inline-flex h-11 items-center gap-2 rounded-md border border-primary/40 bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {showAllCertifications ? "Show featured certifications" : "View all certifications"}
              <ChevronDown
                size={17}
                className={`transition-transform duration-300 ${showAllCertifications ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="scroll-mt-16 border-b border-border px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading
            tag="Recognition"
            title="Achievements & hackathons"
            intro="Competitive hackathon honors and collaborative engineering challenges solved under tight deadlines."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Winner", "DBMS Hackathon 2025", "Global Academy of Technology — Ranked 1st for database architecture & optimization."],
              [
                "Shortlisted",
                "Smart India Hackathon 2025",
                "Gamified Sustainable Farming Platform — Shortlisted national round among premier institutes.",
              ],
              [
                "Participant",
                "HAL Hackathon 2025",
                "Privacy-Preserving Searchable Encryption for Secure KYC Systems (Hindustan Aeronautics Limited).",
              ],
              [
                "Participant",
                "WWT All India Women-Only Hackathon",
                "National-level hackathon addressing scalable real-world digital solutions.",
              ],
            ].map(([badge, title, detail]) => (
              <article key={title} className="card-lift flex gap-5 rounded-lg border border-border bg-card p-6 sm:p-8">
                <Award className="mt-1 shrink-0 text-primary" size={24} />
                <div>
                  <span className="rounded bg-accent px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-foreground font-semibold">
                    {badge}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Activities */}
      <section id="leadership" className="scroll-mt-16 border-b border-border bg-surface px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading
            tag="Initiative & Community"
            title="Leadership & activities"
            intro="Fostering technical community engagement, mentoring peers, and driving cybersecurity focus groups."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                ShieldCheck,
                "Research Group Head",
                "Network & Security",
                "ACM Student Chapter, Global Academy of Technology — Leading discussions on modern network defense and vulnerabilities.",
              ],
              [
                Sparkles,
                "Organizer",
                "Prompt Battle",
                "ACM Student Chapter — Spearheaded campus prompt engineering tournament to test LLM reasoning.",
              ],
              [
                GraduationCap,
                "Active Member",
                "ACM Community Club",
                "Global Academy of Technology — Collaborating on peer coding workshops and open-source hackathons.",
              ],
            ].map(([Icon, role, area, org]) => {
              const LeadershipIcon = Icon as typeof Users;
              return (
                <article
                  key={role as string}
                  className="card-lift rounded-lg border border-border border-l-4 border-l-primary bg-card p-7"
                >
                  <LeadershipIcon className="text-primary" size={24} />
                  <p className="mt-6 font-mono text-xs uppercase font-semibold text-primary">{role as string}</p>
                  <h3 className="mt-1 text-xl font-bold">{area as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{org as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-grid scroll-mt-16 px-5 py-24 sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl" data-reveal>
          <SectionHeading
            tag="Get In Touch"
            title="Let’s build something impactful together."
            intro="Actively seeking software developer, full-stack, cloud, and security opportunities for 2026/2027. Let's discuss how I can contribute to your engineering team."
          />

          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="max-w-xl text-xl leading-9 text-muted-foreground">
                Whether you have an open full-time position, an internship opportunity, or want to discuss a technical
                project — my inbox is always open.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${EMAIL}?subject=Job%20Opportunity%20-%20Interview%20Invitation`}
                  className="button-feedback inline-flex h-12 items-center gap-2 rounded-md bg-gradient-accent px-6 text-sm font-semibold text-primary-foreground shadow-lg transition-opacity hover:opacity-90"
                >
                  <Mail size={17} /> Email Rabiya Directly
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="button-feedback inline-flex h-12 items-center gap-2 rounded-md border border-border bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Copy size={16} /> Copy Email
                </button>
              </div>

              {/* Recruiter quick card */}
              <div className="mt-10 rounded-xl border border-border/80 bg-card p-6 shadow-sm">
                <p className="font-mono text-xs uppercase text-primary font-bold">Fast Recruiter Summary</p>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p>• <strong>Location:</strong> Bengaluru, India (Open to Relocation & Remote)</p>
                  <p>• <strong>Notice Period / Availability:</strong> Ready for immediate internships & 2027 batch recruitment</p>
                  <p>• <strong>Primary Languages:</strong> Java, JavaScript, Python, SQL</p>
                  <p>• <strong>Verified CGPA:</strong> 9.48 / 10.0 (Global Academy of Technology / VTU)</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border">
              {[
                [Mail, "Email", EMAIL, `mailto:${EMAIL}`, handleCopyEmail],
                [Phone, "Phone", `+91 ${PHONE}`, `tel:+91${PHONE}`, handleCopyPhone],
                [Linkedin, "LinkedIn", "linkedin.com/in/rabiya-bushra", LINKEDIN_URL, undefined],
                [Github, "GitHub", "github.com/rabiyabushra", GITHUB_URL, undefined],
              ].map(([Icon, label, value, href, onCopy]) => {
                const ContactIcon = Icon as typeof Mail;
                return (
                  <div key={label as string} className="group flex items-center justify-between border-b border-border py-5">
                    <a
                      href={href as string}
                      target={(href as string).startsWith("http") ? "_blank" : undefined}
                      rel={(href as string).startsWith("http") ? "noreferrer" : undefined}
                      className="flex items-center gap-4 min-w-0 flex-1"
                    >
                      <ContactIcon size={18} className="shrink-0 text-primary" />
                      <span className="w-20 font-mono text-[11px] uppercase text-muted-foreground">
                        {label as string}
                      </span>
                      <span className="min-w-0 truncate text-sm font-medium text-foreground group-hover:text-primary">
                        {value as string}
                      </span>
                    </a>
                    {onCopy ? (
                      <button
                        type="button"
                        onClick={onCopy as () => void}
                        className="ml-2 rounded p-1.5 text-muted-foreground hover:bg-secondary hover:text-primary"
                        title={`Copy ${label as string}`}
                      >
                        <Copy size={15} />
                      </button>
                    ) : (
                      <ArrowUpRight size={15} className="ml-2 text-muted-foreground" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <footer className="mt-24 flex flex-col gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Rabiya Bushra M · Built with React & TypeScript</span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={13} /> Bengaluru, Karnataka, India
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}