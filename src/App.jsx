import { useState, useEffect, useRef } from "react";

// ── DATA ─────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1, num: "01",
    title: "HR People Analytics Dashboard",
    tag: "Power BI · ML", year: "2025",
    accent: "#C8FF00",
    desc: "End-to-end HR analytics on IBM's 1,470 employee dataset. Built Gradient Boosting ML model (84% accuracy, ROC-AUC 0.80) to predict attrition. 3-page Power BI dashboard covering KPIs, attrition drivers, and employee insights.",
    tech: ["Power BI", "Python", "Scikit-learn", "DAX", "Pandas"],
    highlights: [
      { label: "Employees",   value: "1,470"    },
      { label: "Attrition",   value: "16.12%"   },
      { label: "ML Accuracy", value: "84%"      },
      { label: "Dashboards",  value: "3 Pages"  },
    ],
    modal: {
      overview: "End-to-end HR People Analytics project on IBM's employee attrition dataset — 1,470 employees × 35 features. Built a complete Python EDA pipeline and Gradient Boosting ML model achieving 84% accuracy and ROC-AUC of 0.80 to predict which employees are likely to leave. Delivered a 3-page Power BI dashboard covering KPI overview, attrition analysis, and employee insights.",
      dashboards: [
        {
          name: "Page 1 — HR Overview",
          desc: "4 KPI cards showing Total Employees (1,470), Attrition Rate (16.12%), Avg Monthly Income ($6,503), and Avg Age (37). Bar charts showing attrition by Department and Job Role with interactive slicers.",
        },
        {
          name: "Page 2 — Attrition Analysis",
          desc: "Deep-dive into attrition drivers — Salary Band (Low earners leave most), Tenure Group (0-2 yrs highest risk), Work-Life Balance impact, and Gender distribution. Department and Attrition slicers for filtering.",
        },
        {
          name: "Page 3 — Employee Insights",
          desc: "Monthly Income by Job Role, Employee Count by Department (donut chart), Job Satisfaction scores by role, and Avg Income comparison between employees who stayed vs left.",
        },
        {
          name: "ML Model — Gradient Boosting",
          desc: "Compared 6 ML models (Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, KNN, SVM). Gradient Boosting won with 84% accuracy and ROC-AUC 0.80. Top attrition drivers: Monthly Income, Age, Total Working Years, Overtime, Job Role.",
        },
      ],
      stats: [
        { label: "Employees",    value: "1,470"     },
        { label: "Attrition",    value: "16.12%"    },
        { label: "Best Model",   value: "Gradient Boosting" },
        { label: "ML Accuracy",  value: "84%"       },
        { label: "ROC-AUC",      value: "0.80"      },
        { label: "Dashboards",   value: "3 Pages"   },
      ],
    },
  },
  {
    id: 2, num: "02",
    title: "Real-Time Sales Intelligence Platform",
    tag: "Python · Streamlit", year: "2025",
    accent: "#FF6B35",
    desc: "End-to-end sales analytics platform built with Python, Prophet forecasting, and Streamlit. ETL pipeline processing 9,800 orders across 4 years. Live dashboard with 12-month sales forecast, regional analysis, and product intelligence.",
    tech: ["Python", "Streamlit", "Prophet", "Plotly", "SQLite", "Pandas"],
    highlights: [
      { label: "Orders",    value: "9,800"    },
      { label: "Years",     value: "2015-2018" },
      { label: "Forecast",  value: "12 Months" },
      { label: "Live App",  value: "Deployed"  },
    ],
    link: "https://sales-intelligence-platform-7gxjlq4qp9yhnsappmykkgv.streamlit.app/",
    modal: {
      overview: "End-to-end Real-Time Sales Intelligence Platform built with Python, Prophet, Plotly and Streamlit. ETL pipeline extracts, transforms and loads 9,800 sales orders into SQLite database. Includes 12-month Prophet forecasting, interactive regional maps, product intelligence, and customer analysis — all deployed as a live web app on Streamlit Cloud.",
      dashboards: [
        {
          name: "ETL Pipeline",
          desc: "Automated Python pipeline extracting 9,800 rows from CSV, transforming with feature engineering (Year, Month, Quarter, ShippingDays, SalesBand) and loading into SQLite database using SQLAlchemy.",
        },
        {
          name: "Overview Dashboard",
          desc: "4 KPI cards (Total Sales $2.3M, Total Orders 9,800, Avg Order Value $234, Total Customers 793). Sales by Category pie chart and Segment bar chart with interactive filters.",
        },
        {
          name: "Trends & Forecasting",
          desc: "Monthly sales trend from 2015-2018 with Prophet model forecasting next 12 months. Confidence intervals shown. Best months: November/December. Avg forecasted daily sales displayed.",
        },
        {
          name: "Products & Customers",
          desc: "Top 10 products (Canon imageCLASS Copier #1 at $61,599) and Top 10 customers (Sean Miller #1 at $25,043). Ship mode distribution pie chart.",
        },
        {
          name: "Regional Analysis",
          desc: "Sales by Region bar chart, interactive US choropleth map showing sales by state, and Top 10 States ranking. West region leads at $725,457.",
        },
      ],
      stats: [
        { label: "Total Sales",   value: "$2.3M"     },
        { label: "Orders",        value: "9,800"     },
        { label: "Customers",     value: "793"       },
        { label: "Forecast",      value: "12 Months" },
        { label: "Top Product",   value: "Canon Copier" },
        { label: "Top Region",    value: "West"      },
      ],
    },
  },
  {
    id: 3, num: "03",
    title: "House Price Prediction",
    tag: "ML · Sklearn", year: "2023",
    accent: "#A78BFA",
    desc: "Kaggle competition — predicted sale prices for 1,459 homes (81 features). Built automated ML pipelines with Scikit-learn for imputation, encoding, and scaling. Random Forest (R² 0.8936) outperformed Linear Regression (R² 0.8867). Submitted 1,459 predictions.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Joblib"],
    highlights: [
      { label: "Dataset",   value: "1,460 rows" },
      { label: "Features",  value: "81 cols"    },
      { label: "R² Score",  value: "0.8936"     },
      { label: "MAE",       value: "$17,468"    },
    ],
    modal: {
      overview: "Kaggle House Prices — Advanced Regression Techniques. Built a complete supervised ML pipeline to predict residential sale prices on a dataset of 1,460 training rows and 81 features. The pipeline automated preprocessing for both numeric and categorical columns, trained two models, compared performance, and generated a final 1,459-row submission file.",
      dashboards: [
        {
          name: "Data Preprocessing Pipeline",
          desc: "ColumnTransformer pipeline with separate numeric (median imputation + StandardScaler) and categorical (most-frequent imputation + OneHotEncoder) branches. Handled all missing values automatically across 81 features.",
        },
        {
          name: "Linear Regression Baseline",
          desc: "Trained on 1,168 samples (80/20 split). Results: MAE $18,285 · RMSE $29,476 · R² 0.8867. Served as the performance baseline for comparison.",
        },
        {
          name: "Random Forest Model (Best)",
          desc: "RandomForestRegressor with 300 estimators. Results: MAE $17,468 · RMSE $28,573 · R² 0.8936 — outperformed Linear Regression on all three metrics. Model saved as house_price_model.pkl using Joblib.",
        },
        {
          name: "Actual vs Predicted Plot",
          desc: "Scatter plot comparing y_test vs best model predictions. Sample prediction: $140,646 vs actual $154,500 — within 9% error on an unseen test row.",
        },
        {
          name: "Kaggle Submission",
          desc: "Generated submission.csv with 1,459 predictions for the test set. Top predicted prices ranged from ~$121K to ~$204K, with the model producing smooth, realistic price distributions.",
        },
      ],
      stats: [
        { label: "Train Rows",  value: "1,168"    },
        { label: "Features",    value: "81 cols"  },
        { label: "Best Model",  value: "Random Forest" },
        { label: "R² Score",    value: "0.8936"   },
        { label: "MAE",         value: "$17,468"  },
        { label: "RMSE",        value: "$28,573"  },
      ],
    },
  },
  {
    id: 4, num: "04",
    title: "Encrypted Data Storage (ABE)",
    tag: "Data Security", year: "2023",
    accent: "#38BDF8",
    desc: "Secure cloud storage architecture with Attribute-Based Encryption aligned to enterprise governance. Dataset versioning, audit traceability, and lifecycle management across AWS & Azure.",
    tech: ["AWS", "Azure", "ABE", "Data Governance"],
    modal: {
      overview: "Designed a secure cloud data storage architecture integrating Attribute-Based Encryption (ABE) with enterprise-grade data governance standards, lifecycle management, and full audit traceability.",
      dashboards: [
        { name: "ABE Architecture",    desc: "Attribute-Based Encryption schema with role-based access control policies aligned to enterprise governance standards." },
        { name: "Lifecycle Management", desc: "Dataset versioning system ensuring data integrity and full auditability across cloud pipelines (AWS + Azure)." },
        { name: "Audit Traceability",  desc: "Access logs and audit trails providing complete visibility into data access patterns and security events." },
      ],
      stats: [
        { label: "Cloud",      value: "AWS + Azure"    },
        { label: "Encryption", value: "ABE"            },
        { label: "Focus",      value: "Security"       },
        { label: "Outcome",    value: "Enterprise governance" },
      ],
    },
  },,
];


const EXPERIENCE = [
  {
    role: "Data Analyst", company: "Eco Servants", location: "USA", period: "Oct 2025 – Present",
    bullets: [
      "Designed data models improving reporting reliability by 28%",
      "Built Power BI & Tableau dashboards for executive & non-technical audiences",
      "Optimised SQL query efficiency across large-scale structured datasets",
      "Developed automated data refresh workflows in AWS & Azure",
    ],
  },
  {
    role: "Data Analyst Intern", company: "Kominfo Solutions", location: "India", period: "Mar 2022 – Feb 2023",
    bullets: [
      "Built relational data transformation workflows, improving reporting efficiency by 18%",
      "Automated data refresh workflows, reducing manual reporting effort by 25%",
      "Designed KPI dashboards with forecasting insights for non-technical stakeholders",
      "Generated executive reports translating complex datasets into clear business narratives",
    ],
  },
];

const SKILLS = [
  { category: "Analytics & BI",  items: ["Power BI (DAX)", "Tableau", "Excel (Advanced)", "Matplotlib", "Seaborn"] },
  { category: "Programming",     items: ["SQL (MySQL · SQL Server · Oracle)", "Python (Pandas · NumPy)", "R", "KQL"] },
  { category: "Cloud & Data",    items: ["AWS (EC2 · S3 · Lambda)", "Microsoft Azure", "ETL Pipelines", "Data Governance"] },
];

// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── CURSOR ────────────────────────────────────────────────────────────────────
function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: -200, y: -200 });
  const ring    = useRef({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);
    let raf;
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.13;
      ring.current.y += (pos.current.y - ring.current.y) * 0.13;
      if (dotRef.current)  dotRef.current.style.transform  = `translate(${pos.current.x - 4}px,${pos.current.y - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ring.current.x - 22}px,${ring.current.y - 22}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const grow   = (e) => { if (e.target.closest("a,button,[data-hover]") && ringRef.current) ringRef.current.classList.add("cur-ring--big"); };
    const shrink = (e) => { if (e.target.closest("a,button,[data-hover]") && ringRef.current) ringRef.current.classList.remove("cur-ring--big"); };
    document.addEventListener("mouseover", grow);
    document.addEventListener("mouseout",  shrink);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); document.removeEventListener("mouseover", grow); document.removeEventListener("mouseout", shrink); };
  }, []);
  return (<><div ref={dotRef} className="cur-dot" /><div ref={ringRef} className="cur-ring" /></>);
}

// ── IMAGE SLIDESHOW ──────────────────────────────────────────────────────────
function ImageSlideshow({ images }) {
  const [current, setCurrent] = useState(0);
  return (
    <div className="slideshow">
      <img src={images[current].src} alt={images[current].caption} className="slideshow__img" />
      <p className="slideshow__caption">{images[current].caption}</p>
      <div className="slideshow__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`slideshow__dot${i === current ? " slideshow__dot--active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
      <div className="slideshow__btns">
        <button className="slideshow__btn" onClick={() => setCurrent(i => (i - 1 + images.length) % images.length)}>←</button>
        <button className="slideshow__btn" onClick={() => setCurrent(i => (i + 1) % images.length)}>→</button>
      </div>
    </div>
  );
}

// ── PROJECT MODAL ─────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  // close on backdrop click
  const handleOverlayClick = (e) => { if (e.target === overlayRef.current) onClose(); };

  const { modal, title, tag, year, tech, accent } = project;

  return (
    <div className="modal-overlay" ref={overlayRef} onClick={handleOverlayClick}>
      <div className="modal" style={{ "--m-accent": accent }}>
        {/* Dashboard Images Slideshow */}
        {project.images && <ImageSlideshow images={project.images} />}

        {/* Header */}
        <div className="modal__header">
          <div className="modal__meta">
            <span className="modal__tag">{tag}</span>
            <span className="modal__year">{year}</span>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className="modal__body">
          <h2 className="modal__title">{title}</h2>
          <p className="modal__overview">{modal.overview}</p>

          {/* Stats grid */}
          <div className="modal__stats">
            {modal.stats.map(s => (
              <div key={s.label} className="modal__stat">
                <span className="modal__stat-val">{s.value}</span>
                <span className="modal__stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Dashboards */}
          <h3 className="modal__section-title">Dashboards / Components</h3>
          <div className="modal__dashboards">
            {modal.dashboards.map((d, i) => (
              <div key={i} className="modal__dash">
                <div className="modal__dash-num">0{i + 1}</div>
                <div>
                  <p className="modal__dash-name">{d.name}</p>
                  <p className="modal__dash-desc">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech pills */}
          <h3 className="modal__section-title">Tech Stack</h3>
          <ul className="modal__tech">
            {tech.map(t => <li key={t}>{t}</li>)}
          </ul>
          {/* View Live buttons */}
          <div className="modal__cta-row">
            {project.link && project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="modal__cta"
              >
                View Dashboard 1 →
              </a>
            )}
            {project.link2 && (
              <a
                href={project.link2}
                target="_blank"
                rel="noreferrer"
                className="modal__cta modal__cta--outline"
              >
                View Dashboard 2 →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);
  return (
    <nav className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <a href="#hero" className="nav__logo">NR<span className="accent">.</span></a>
      <ul className="nav__links">
        {["About","Experience","Projects","Skills","Contact"].map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`} className="nav__link">{l}</a></li>
        ))}
      </ul>
      <a href="#contact" className="btn btn--sm">Hire Me</a>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 80); }, []);
  return (
    <section id="hero" className={`hero${ready ? " hero--in" : ""}`}>
      <span className="hero__bg" aria-hidden="true">DA</span>
      <div className="grain" aria-hidden="true" />
      <div className="hero__inner">
        <p className="hero__tag"><span className="dot" /> Open to new opportunities</p>
        <h1 className="hero__title">
          <span>Nagarajulu</span>
          <span className="hero__title--outline">Reddy Nalla</span>
          <span className="hero__title--small">Data Analyst · BI · People Analytics</span>
        </h1>
        <p className="hero__sub">
          I turn complex, unrelated data points into clear, trustworthy reporting solutions —
          empowering non-technical stakeholders to make smarter, faster decisions.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="#contact"  className="btn btn--outline">Let's Talk →</a>
        </div>
        <div className="hero__badges">
          <span className="badge">M.S. Data Science &amp; Analytics — FAU</span>
          <span className="badge">GPA 3.96 / 4.0</span>
          <span className="badge">AWS Certified</span>
        </div>
      </div>
      <div className="hero__scroll"><span>Scroll</span><div className="hero__scroll-line" /></div>
      <div className="hero__circle hero__circle--1" />
      <div className="hero__circle hero__circle--2" />
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About() {
  const [ref, inView] = useInView();
  return (
    <section id="about" ref={ref} className={`section about${inView ? " section--in" : ""}`}>
      <div className="container about__grid">
        <div className="about__left">
          <p className="section__eyebrow">/ About Me</p>
          <h2 className="section__title">Data that<br /><em>drives decisions.</em></h2>
        </div>
        <div className="about__right">
          <p className="about__body">
            I'm <strong>Nagarajulu Reddy Nalla</strong>, a Data Analyst with a Master's in
            Data Science &amp; Analytics from Florida Atlantic University (GPA 3.96/4.0)
            and hands-on experience designing data models, building reporting pipelines, and
            delivering people-centered insights that drive strategic decisions.
          </p>
          <p className="about__body">
            I specialise in SQL, Power BI, Tableau, and Python-based analytics workflows,
            with a strong product-centric mindset toward data discoverability and quality.
            I bridge the gap between raw data and real business value.
          </p>
          <div className="about__stats">
            {[["3.96","GPA / 4.0"],["28%","Reporting improvement"],["25%","Manual effort saved"]].map(([n,l]) => (
              <div key={l} className="about__stat">
                <span className="about__stat-num">{n}</span>
                <span className="about__stat-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
function Experience() {
  const [ref, inView] = useInView();
  return (
    <section id="experience" ref={ref} className={`section experience${inView ? " section--in" : ""}`}>
      <div className="container">
        <p className="section__eyebrow">/ Experience</p>
        <h2 className="section__title">Where I've worked.</h2>
        <div className="exp__list">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="exp__item" style={{ "--di": i }}>
              <div className="exp__meta">
                <span className="exp__period">{e.period}</span>
                <span className="exp__location">{e.location}</span>
              </div>
              <div className="exp__body">
                <div className="exp__header">
                  <h3 className="exp__role">{e.role}</h3>
                  <span className="exp__company">{e.company}</span>
                </div>
                <ul className="exp__bullets">
                  {e.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function ProjectCard({ p, i, onOpen }) {
  const [ref, inView] = useInView(0.1);
  return (
    <article
      ref={ref}
      className={`project${inView ? " project--in" : ""}`}
      style={{ "--delay": `${i * 0.12}s`, "--accent": p.accent }}
      onClick={() => onOpen(p)}
      data-hover
    >
      <div className="project__num">{p.num}</div>
      <div className="project__body">
        <div className="project__top">
          <span className="project__tag">{p.tag}</span>
          <span className="project__year">{p.year}</span>
        </div>
        <h3 className="project__title">{p.title}</h3>
        <p className="project__desc">{p.desc}</p>
        <ul className="project__tech">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
        {p.highlights && (
          <div className="project__highlights">
            {p.highlights.map(h => (
              <div key={h.label} className="project__hl">
                <span className="project__hl-val">{h.value}</span>
                <span className="project__hl-label">{h.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Click-to-open indicator or live link */}
      {p.link ? (
        <a href={p.link} target="_blank" rel="noreferrer" className="project__open project__open--live" onClick={e => e.stopPropagation()} aria-label="View live app">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
      ) : (
        <div className="project__open">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </div>
      )}
      <div className="project__glow" />
    </article>
  );
}

function Projects() {
  const [ref, inView] = useInView();
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects" ref={ref} className={`section work${inView ? " section--in" : ""}`}>
      <div className="container">
        <p className="section__eyebrow">/ Technical Projects</p>
        <h2 className="section__title">Projects I've built.</h2>
        <p className="projects__hint">Click any project to see full details →</p>
        <div className="work__grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} i={i} onOpen={setActiveProject} />
          ))}
        </div>
      </div>
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────
function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" ref={ref} className={`section skills${inView ? " section--in" : ""}`}>
      <div className="container">
        <p className="section__eyebrow">/ Tech Stack</p>
        <h2 className="section__title">What I work with.</h2>
        <div className="skills__grid">
          {SKILLS.map(({ category, items }, ci) => (
            <div key={category} className="skill-group" style={{ "--di": ci }}>
              <h3 className="skill-group__cat">{category}</h3>
              <ul className="skill-group__list">
                {items.map((item, ii) => (
                  item === "AWS (EC2 · S3 · Lambda)" ? (
                    <li key={item} className="skill-pill skill-pill--link" style={{ "--ii": ii }}>
                      <a
                        href="https://www.credly.com/badges/5b1d150a-c714-4ebe-aae2-7c8121ede1c7/public_url"
                        target="_blank"
                        rel="noreferrer"
                        title="Validation: 917c75f41e904f45814edf3007d8c87d"
                      >
                        {item} <span className="skill-pill__cert">✓ Certified</span>
                      </a>
                    </li>
                  ) : (
                    <li key={item} className="skill-pill" style={{ "--ii": ii }}>{item}</li>
                  )
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="edu__strip">
          <div className="edu__card">
            <span className="edu__label">M.S. Data Science &amp; Analytics</span>
            <span className="edu__school">Florida Atlantic University, FL, USA</span>
            <span className="edu__detail">GPA 3.96 / 4.0 · Dec 2023 – Dec 2025</span>
          </div>
          <div className="edu__card">
            <span className="edu__label">B.Tech Computer Science &amp; Engineering</span>
            <span className="edu__school">Panimalar Institute of Technology, India</span>
            <span className="edu__detail">GPA 8.5 / 10 · Apr 2019 – Apr 2023</span>
          </div>
          <a
            className="edu__card edu__card--cert"
            href="https://www.credly.com/badges/5b1d150a-c714-4ebe-aae2-7c8121ede1c7/public_url"
            target="_blank"
            rel="noreferrer"
            title="Validation: 917c75f41e904f45814edf3007d8c87d"
          >
            <span className="edu__cert-badge">AWS</span>
            <span className="edu__label">AWS Certified Cloud Practitioner</span>
            <span className="edu__school">Amazon Web Services</span>
            <span className="edu__detail">Issued Feb 13, 2026 · Expires Feb 13, 2029</span>
            <span className="edu__verify">View Certificate →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
// 🔑 Replace the URL below with your Formspree endpoint after signing up at formspree.io
const FORMSPREE_URL = "https://formspree.io/f/meerzlrd";

function Contact() {
  const [ref, inView] = useInView();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try emailing me directly.");
      }
    } catch {
      setError("Network error. Please try emailing me directly.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" ref={ref} className={`section contact${inView ? " section--in" : ""}`}>
      <div className="container contact__grid">
        <div className="contact__left">
          <p className="section__eyebrow">/ Contact</p>
          <h2 className="section__title">Let's build<br /><em>something great.</em></h2>
          <p className="contact__sub">
            Open to full-time Data Analyst roles, freelance analytics projects, and interesting collaborations.
          </p>
          <div className="contact__links">
            <a href="mailto:nallanagarajulu@gmail.com" className="contact__link">nallanagarajulu@gmail.com</a>
            <a href="tel:+15618161640"                 className="contact__link">+1 (561) 816-1640</a>
            <a href="https://www.linkedin.com/in/nalla-nagarajulu-reddy-a43840251" target="_blank" rel="noreferrer" className="contact__link">LinkedIn →</a>
            <a href="https://github.com/Nag4535/portfolio" target="_blank" rel="noreferrer" className="contact__link">GitHub →</a>
          </div>
        </div>
        <div className="contact__right">
          {sent ? (
            <div className="contact__thanks">
              <span className="contact__thanks-icon">✓</span>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about the role or project…" required value={form.message} onChange={handleChange} />
              </div>
              {error && <p className="contact__error">{error}</p>}
              <button type="submit" className="btn btn--primary btn--full" disabled={loading}>
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="nav__logo">NR<span className="accent">.</span></span>
        <p className="footer__copy">© {new Date().getFullYear()} Nagarajulu Reddy Nalla — Data Analyst</p>
        <a href="#hero" className="footer__top">↑ Top</a>
      </div>
    </footer>
  );
}


// ── CHATBOT ───────────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Naga, a friendly personal AI assistant on Nagarajulu Reddy Nalla's portfolio website. Answer questions about Nagarajulu concisely and professionally. Always refer to him as "Nagarajulu" or "he/him". If asked something unrelated to Nagarajulu, politely redirect.

ABOUT NAGARAJULU:
- Full name: Nagarajulu Reddy Nalla
- Email: nallanagarajulu@gmail.com | Phone: +1 (561) 816-1640
- Based in Florida, USA
- Open to: Full-time Data Analyst, Business Analyst, People Analytics roles

EDUCATION:
- M.S. Data Science & Analytics — Florida Atlantic University, FL (GPA 3.96/4.0, Dec 2023 – Dec 2025)
- B.Tech Computer Science & Engineering — Panimalar Institute of Technology, India (GPA 8.5/10, Apr 2019 – Apr 2023)
- AWS Certified Cloud Practitioner (Issued Feb 13, 2026 · Expires Feb 13, 2029)

EXPERIENCE:
1. Data Analyst @ Eco Servants, USA (Oct 2025 – Present)
   - Designed data models improving reporting reliability by 28%
   - Built Power BI & Tableau dashboards for executive audiences
   - Optimised SQL queries across large-scale datasets
   - Automated data refresh workflows in AWS & Azure

2. Data Analyst Intern @ Kominfo Solutions, India (Mar 2022 – Feb 2023)
   - Improved reporting efficiency by 18%
   - Reduced manual reporting effort by 25% via automation
   - Designed KPI dashboards with forecasting insights

PROJECTS:
1. Superstore Sales & Customer Analytics (Python · EDA, 2024)
   - 51,290 rows × 21 columns, 2011–2014 global orders
   - Monthly sales trends, top-10 products, customer segmentation, regional distribution
   - Top product: Apple Smart Phone ($86,936) | Top region: Central ($2.82M) | Best profit: Technology ($663,779)

2. Automotive Market Analytics Platform (Power BI, 2024)
   - ~6,000 rows × 30 columns Kaggle dataset
   - 3 dashboards: Revenue Analysis, Customer Service, Stock Market Analysis
   - BMW led revenue | Peak year: 2019 | Top rating: 4.80 | Texas #1 by reviews

3. House Price Prediction (ML · Sklearn, 2023)
   - Kaggle competition, 1,460 rows, 81 features
   - Random Forest R² 0.8936, MAE $17,468, RMSE $28,573
   - Generated 1,459 predictions submission file

4. Encrypted Data Storage with ABE (Data Security, 2023)
   - Attribute-Based Encryption, AWS + Azure
   - Dataset versioning, audit traceability, enterprise data governance

SKILLS:
- Analytics & BI: Power BI (DAX), Tableau, Excel (Advanced), Matplotlib, Seaborn
- Programming: SQL (MySQL, SQL Server, Oracle), Python (Pandas, NumPy), R, KQL
- Cloud & Data: AWS (EC2, S3, Lambda), Microsoft Azure, ETL Pipelines, Data Governance

Keep answers short (2-4 sentences max). Be warm and professional.`;

function Chatbot() {
  const [open, setOpen]       = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Naga 👋 Nagarajulu's AI assistant. Ask me anything about his experience, projects, or skills!" }
  ]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef             = useRef(null);
  const inputRef              = useRef(null);

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg = { role: "user", content: text };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: SYSTEM_PROMPT,
          messages: [...messages.filter((m, i) => i > 0), userMsg],
        }),
      });
      const data = await res.json();
      const reply = data?.content?.[0]?.text || data?.error || "Sorry, I couldn't get a response. Please try again.";
      setMessages(m => [...m, { role: "assistant", content: reply }]);
    } catch (err) {
      console.error("Chat error:", err);
      setMessages(m => [...m, { role: "assistant", content: "Network error. Please check your connection and try again!" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } };

  const SUGGESTIONS = ["What are his skills?", "Tell me about his projects", "Is he open to work?", "What's his experience?"];

  return (
    <>
      {/* Floating bubble */}
      <button
        className={`chat-bubble${open ? " chat-bubble--open" : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.02 2 11c0 2.67 1.19 5.07 3.08 6.74L4 22l4.51-1.5C9.61 20.83 10.78 21 12 21c5.52 0 10-4.02 10-9S17.52 2 12 2zm1 13H7v-2h6v2zm4-4H7V9h10v2z"/></svg>
        )}
        {!open && <span className="chat-bubble__dot" />}
      </button>

      {/* Chat window */}
      <div className={`chat-window${open ? " chat-window--open" : ""}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header__avatar">N</div>
          <div>
            <p className="chat-header__name">Naga AI</p>
            <p className="chat-header__sub">Ask me about Nagarajulu</p>
          </div>
          <div className="chat-header__online" />
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg--${m.role}`}>
              {m.role === "assistant" && <div className="chat-msg__avatar">N</div>}
              <div className="chat-msg__bubble">{m.content}</div>
            </div>
          ))}
          {loading && (
            <div className="chat-msg chat-msg--assistant">
              <div className="chat-msg__avatar">N</div>
              <div className="chat-msg__bubble chat-msg__bubble--typing">
                <span /><span /><span />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="chat-suggestions">
            {SUGGESTIONS.map(s => (
              <button key={s} className="chat-suggestion" onClick={async () => { const text = s; const userMsg = { role: "user", content: text }; setMessages(m => [...m, userMsg]); setLoading(true); try { const res = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ system: SYSTEM_PROMPT, messages: [userMsg] }) }); const data = await res.json(); const reply = data?.content?.[0]?.text || "Sorry, try again."; setMessages(m => [...m, { role: "assistant", content: reply }]); } catch { setMessages(m => [...m, { role: "assistant", content: "Network error!" }]); } finally { setLoading(false); } }}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="chat-input-row">
          <input
            ref={inputRef}
            className="chat-input"
            placeholder="Ask about Nagarajulu…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
          />
          <button className="chat-send" onClick={send} disabled={loading || !input.trim()} aria-label="Send">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}