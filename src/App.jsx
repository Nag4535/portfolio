import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  BarChart3,
  Database,
  Cloud,
  LineChart,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Brain,
  ExternalLink,
} from "lucide-react";

const skills = {
  "Programming & Analytics": [
    "SQL",
    "Python",
    "R",
    "MySQL",
    "SQL Server",
    "Oracle",
    "Pandas",
    "NumPy",
  ],
  "Visualization & Reporting": [
    "Power BI",
    "Tableau",
    "Excel",
    "DAX",
    "Matplotlib",
    "Seaborn",
    "Executive Reporting",
  ],
  "Cloud & Data Engineering": [
    "AWS EC2",
    "AWS S3",
    "AWS Lambda",
    "Azure",
    "ETL Pipelines",
    "Data Governance",
    "CI/CD Workflows",
  ],
  "Business & Data Expertise": [
    "KPI Development",
    "Forecasting",
    "Data Modeling",
    "Statistical Analysis",
    "Data Quality",
    "Stakeholder Communication",
  ],
};

const metrics = [
  { value: "28%", label: "Reporting reliability improvement" },
  { value: "25%", label: "Reduction in manual reporting effort" },
  { value: "6000+", label: "Records analyzed in automotive platform" },
  { value: "3.96/4.0", label: "Master's GPA in Data Science & Analytics" },
];

const highlights = [
  {
    icon: TrendingUp,
    title: "Business Impact",
    description: "I turn raw and disconnected data into KPI-driven decisions for business teams.",
  },
  {
    icon: Brain,
    title: "Analytical Thinking",
    description: "I combine SQL, Python, statistical analysis, and dashboarding to explain the why behind trends.",
  },
  {
    icon: ShieldCheck,
    title: "Data Trust",
    description: "I care deeply about validation, consistency, documentation, and stakeholder confidence in reporting.",
  },
];

const projects = [
  {
    title: "Superstore Sales Performance & Customer Analytics",
    category: "Dashboard Engineering",
    tools: ["SQL", "Power BI", "Statistical Analysis"],
    problem:
      "Built a business analytics solution to improve visibility into revenue performance, customer segmentation, and KPI trends.",
    highlights: [
      "Designed relational data models and reporting pipelines for accurate downstream analytics",
      "Developed dashboards for revenue segmentation, customer clustering, and KPI tracking",
      "Performed trend, variance, and contribution analysis to uncover pricing and inventory insights",
    ],
    impact: "Enabled clearer pricing and inventory decisions through business-friendly analytics storytelling.",
    github: "#",
    demo: "#",
  },
  {
    title: "Automotive Market Analytics Platform",
    category: "Forecasting Analytics",
    tools: ["SQL", "Power BI", "Time Series Analysis"],
    problem:
      "Created an analytics platform using 6,000+ automotive sales records to identify demand forecasting trends and support planning decisions.",
    highlights: [
      "Integrated SQL transformations with Power BI reporting",
      "Presented sales and demand trends through stakeholder-friendly dashboards",
      "Implemented data validation and reconciliation to improve reporting trustworthiness",
    ],
    impact: "Improved demand visibility and reporting trustworthiness for strategic planning.",
    github: "#",
    demo: "#",
  },
  {
    title: "House Price Prediction",
    category: "Machine Learning",
    tools: ["Python", "Machine Learning", "Power BI"],
    problem:
      "Developed a predictive analytics workflow for housing prices using feature engineering, cleaning, normalization, and visual storytelling.",
    highlights: [
      "Prepared structured datasets with feature engineering and preprocessing",
      "Visualized pricing trends, residual variance, and geographic comparisons",
      "Documented KPI contribution and driver analysis for clear business interpretation",
    ],
    impact: "Made predictive results easier to trust and interpret for non-technical stakeholders.",
    github: "#",
    demo: "#",
  },
  {
    title: "Encrypted Data Storage with Attribute-Based Access Control",
    category: "Data Governance",
    tools: ["Cloud Architecture", "Data Governance", "Security"],
    problem:
      "Designed a secure data storage architecture aligned with enterprise governance and controlled access principles.",
    highlights: [
      "Integrated attribute-based encryption concepts for secure storage",
      "Established versioning and audit traceability practices",
      "Improved data integrity across cloud-based pipeline workflows",
    ],
    impact: "Strengthened data governance, integrity, and traceability across cloud workflows.",
    github: "#",
    demo: "#",
  },
];

const experience = [
  {
    role: "Data Analyst",
    company: "Eco Servants, USA",
    period: "Oct 2025 – Present",
    points: [
      "Designed and maintained data models that improved reporting reliability and downstream analytics accessibility",
      "Built user-friendly reporting pipelines with validation checks for non-technical stakeholders",
      "Developed interactive Power BI and Tableau dashboards for executive and business audiences",
      "Optimized SQL queries across large structured and semi-structured datasets",
      "Automated refresh and validation workflows in AWS and Azure environments",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Kominfo Solutions, India",
    period: "Mar 2022 – Feb 2023",
    points: [
      "Built relational data transformation workflows supporting enterprise analytics",
      "Developed SQL pipelines to standardize datasets for reporting teams",
      "Designed KPI dashboards with forecasting and operational tracking insights",
      "Automated refresh and transformation workflows to reduce manual reporting effort",
      "Translated complex datasets into executive reports and business summaries",
    ],
  },
];

const education = [
  {
    degree: "Master of Science in Data Science and Analytics",
    school: "Florida Atlantic University",
    period: "Dec 2023 – Dec 2025",
    extra: "GPA: 3.96/4.0",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    school: "Panimalar Institute of Technology",
    period: "Apr 2019 – Apr 2023",
    extra: "GPA: 8.5/10",
  },
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return (
    <div className={`rounded-[28px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${className}`}>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_32%),linear-gradient(180deg,_#f8fbff_0%,_#eef4ff_45%,_#f8fafc_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-white/50 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Nagarajulu Reddy Nalla</h1>
            <p className="text-sm text-slate-600">Data Analyst • Portfolio</p>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-950">About</a>
            <a href="#skills" className="transition hover:text-slate-950">Skills</a>
            <a href="#projects" className="transition hover:text-slate-950">Projects</a>
            <a href="#experience" className="transition hover:text-slate-950">Experience</a>
            <a href="#contact" className="transition hover:text-slate-950">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:38px_38px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-sm font-medium text-cyan-900 shadow-sm backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Open to Data Analyst Opportunities
                </div>

                <h2 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  A portfolio built to look like the kind of analytics work companies want to hire.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  I’m Nagarajulu Reddy Nalla, a Data Analyst specializing in SQL, Power BI, Python,
                  and cloud analytics. I design reporting systems, business dashboards, and
                  high-trust data workflows that make decision-making faster and clearer.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                  >
                    Explore Projects <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center rounded-2xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                  <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm">
                    <Mail className="h-4 w-4" />
                    <span>nallanagarajulu@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm">
                    <Phone className="h-4 w-4" />
                    <span>+1 (561) 816-1640</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-2 shadow-sm">
                    <MapPin className="h-4 w-4" />
                    <span>Arlington, USA</span>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <GlassCard className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500">Portfolio Snapshot</p>
                      <h3 className="mt-1 text-2xl font-bold text-slate-950">Impact at a glance</h3>
                    </div>
                    <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-900">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="text-2xl font-black tracking-tight text-slate-950">{metric.value}</div>
                        <div className="mt-1 text-sm text-slate-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <div className="grid gap-4 sm:grid-cols-3">
                  {highlights.map((item) => {
                    const Icon = item.icon;
                    return (
                      <GlassCard key={item.title} className="p-5">
                        <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                      </GlassCard>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <GlassCard className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">About Me</p>
              <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
                I build analytics experiences, not just charts.
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                My work is centered on reporting clarity, data trust, and business relevance. I enjoy
                taking messy, fragmented, or complex datasets and transforming them into dashboards,
                KPIs, and analysis that leaders can confidently use.
              </p>
            </GlassCard>

            <GlassCard className="p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-950 p-6 text-white">
                  <Database className="h-8 w-8" />
                  <h4 className="mt-4 text-xl font-semibold">Data Foundation</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    SQL, relational modeling, transformation pipelines, and validation workflows.
                  </p>
                </div>
                <div className="rounded-3xl bg-cyan-50 p-6">
                  <LineChart className="h-8 w-8 text-cyan-800" />
                  <h4 className="mt-4 text-xl font-semibold text-slate-950">Decision Support</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    KPI dashboards, trend analysis, forecasting, and stakeholder-ready storytelling.
                  </p>
                </div>
                <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-200">
                  <Cloud className="h-8 w-8 text-slate-900" />
                  <h4 className="mt-4 text-xl font-semibold text-slate-950">Cloud Workflow</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    AWS and Azure support for refresh automation, scalable reporting, and governance.
                  </p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-cyan-900 p-6 text-white">
                  <Sparkles className="h-8 w-8" />
                  <h4 className="mt-4 text-xl font-semibold">Recruiter Focused</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Built to highlight business value, measurable outcomes, and presentation quality.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <SectionTitle
            eyebrow="Skills"
            title="Core tools and capabilities"
            subtitle="Designed to present your profile like a polished analytics consultant rather than a simple student portfolio."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <GlassCard key={category} className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-xl font-semibold text-slate-950">{category}</h4>
                  <div className="h-2 w-24 rounded-full bg-slate-100">
                    <div className="h-2 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-white/50 bg-white/40 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <SectionTitle
              eyebrow="Projects"
              title="Featured analytics work"
              subtitle="Each project is presented with business framing, technical tools, and visible impact so your portfolio feels premium and hiring-ready."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <GlassCard key={project.title} className="group p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(15,23,42,0.12)]">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-800">
                        {project.category}
                      </span>
                      <h4 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h4>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{project.problem}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-100 p-3 transition group-hover:bg-slate-950 group-hover:text-white">
                      <LineChart className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full bg-slate-950 px-3 py-1 text-xs font-medium text-white"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 text-sm text-slate-600">
                    {project.highlights.map((point) => (
                      <div key={point} className="flex gap-3">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Business Impact</p>
                    <p className="mt-2 text-sm text-slate-700">{project.impact}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.github}
                      className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                    >
                      GitHub <Github className="ml-2 h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      className="inline-flex items-center rounded-2xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
                    >
                      Live Dashboard <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Experience" title="Professional journey" />
          <div className="space-y-6">
            {experience.map((job) => (
              <GlassCard key={`${job.role}-${job.company}`} className="p-7">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-slate-950 p-3 text-white">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-950">{job.role}</h4>
                      <p className="text-slate-600">{job.company}</p>
                    </div>
                  </div>
                  <span className="w-fit rounded-full border border-slate-300 bg-white px-3 py-1 text-sm text-slate-600">
                    {job.period}
                  </span>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-slate-600 md:grid-cols-2">
                  {job.points.map((point) => (
                    <div key={point} className="flex gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 lg:grid-cols-[1fr_1fr] lg:px-8">
          <GlassCard className="p-7">
            <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-950">Education</h3>
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <h4 className="font-semibold text-slate-950">{item.degree}</h4>
                  <p className="text-slate-600">{item.school}</p>
                  <p className="text-sm text-slate-500">
                    {item.period} • {item.extra}
                  </p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-7">
            <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-950">Certifications</h3>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-950 to-cyan-900 p-5 text-white">
              <h4 className="font-semibold">AWS Certified Cloud Practitioner</h4>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Foundation-level cloud knowledge covering AWS services, architecture, security,
                and pricing concepts.
              </p>
            </div>
          </GlassCard>
        </section>

        <section id="contact" className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_22%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
                <h3 className="mt-3 text-4xl font-bold tracking-tight">Let’s build something meaningful with data.</h3>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  I’m actively looking for opportunities where I can contribute through analytics,
                  data storytelling, dashboard development, and business-focused problem solving.
                </p>
              </div>

              <div className="grid gap-4">
                <a href="mailto:nallanagarajulu@gmail.com" className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-slate-300">nallanagarajulu@gmail.com</p>
                    </div>
                  </div>
                </a>

                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-slate-300">Replace with your LinkedIn profile URL</p>
                    </div>
                  </div>
                </a>

                <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10">
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-slate-300">Replace with your GitHub profile URL</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/*
DEPLOY SETUP

1) Create a Vite app
   npm create vite@latest nagarajulu-portfolio -- --template react

2) Install dependencies
   npm install
   npm install lucide-react

3) Install Tailwind CSS
   npm install -D tailwindcss @tailwindcss/vite

4) Update vite.config.js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import tailwindcss from '@tailwindcss/vite'

   export default defineConfig({
     plugins: [react(), tailwindcss()],
   })

5) Replace src/App.jsx with this file

6) In src/index.css add:
   @import "tailwindcss";

7) Put your resume file in public/resume.pdf

8) Start locally
   npm run dev

9) Build for production
   npm run build

10) Deploy
   - Vercel: import the GitHub repo and deploy
   - Netlify: import the GitHub repo and deploy
   Build command: npm run build
   Publish directory: dist
*/
