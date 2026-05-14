import { useState, useEffect, useRef } from "react";

// ── DATA ─────────────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    id: 1, num: "01",
    title: "Market Intelligence MLOps Platform",
    tag: "PyTorch · MLflow · FastAPI", year: "2025",
    accent: "#4F9CF9",
    desc: "Fine-tuned FinBERT on 2,264 financial news samples achieving 97.79% test accuracy. Full MLOps lifecycle: MLflow experiment tracking, champion/challenger evaluation, FastAPI inference server, and Evidently AI drift detection with automated retraining alerts.",
    tech: ["PyTorch", "HuggingFace", "MLflow", "FastAPI", "Evidently AI", "FinBERT", "Python"],
    highlights: [
      { label: "Test Accuracy", value: "97.79%" },
      { label: "F1 Score",      value: "97.81%" },
      { label: "Drift Monitor", value: "PSI ≥ 0.15" },
      { label: "Inference",     value: "FastAPI" },
    ],
    github: "https://github.com/Nag4535/market-intel-mlops",
    modal: {
      overview: "End-to-end MLOps platform for financial sentiment analysis. Fine-tuned ProsusAI/FinBERT on the Financial PhraseBank dataset (2,264 samples, 'sentences_allagree' subset) achieving 97.79% test accuracy and 97.81% weighted F1 — matching human expert-level performance. Features full MLOps lifecycle with MLflow tracking, champion/challenger model promotion, FastAPI inference server, and Evidently AI drift detection triggering automated retraining when PSI exceeds 0.15.",
      dashboards: [
        { name: "FinBERT Fine-Tuning", desc: "ProsusAI/FinBERT fine-tuned with PyTorch 2.2 using Apple Silicon MPS backend — 12x GPU speedup reducing training from ~25 minutes to under 2 minutes. HuggingFace Trainer API with AdamW optimizer, 2e-5 LR, 3 epochs." },
        { name: "MLflow Experiment Tracking", desc: "All training runs tracked: hyperparameters, per-epoch metrics, model artifacts. Champion/challenger evaluation promotes models only when new model exceeds champion accuracy by ≥0.5% — prevents production regressions." },
        { name: "FastAPI Inference Server", desc: "POST /predict endpoint accepts text arrays, returns label, confidence score, per-class probabilities, and inference latency in ms. GET /health confirms model is loaded and reports active device (MPS/CPU)." },
        { name: "Evidently AI Drift Detection", desc: "Population Stability Index (PSI) monitors text length and word count distributions. PSI ≥ 0.15 triggers automated retraining alert. Accuracy drops below 88% also trigger alerts." },
      ],
      stats: [
        { label: "Test Accuracy", value: "97.79%" },
        { label: "Weighted F1",   value: "97.81%" },
        { label: "Training Time", value: "~2 min" },
        { label: "GPU Speedup",   value: "12×"    },
        { label: "Dataset",       value: "2,264 samples" },
        { label: "Drift Alert",   value: "PSI ≥ 0.15" },
      ],
    },
  },
  {
    id: 2, num: "02",
    title: "Customer360 Intelligence Platform",
    tag: "ML · DL · ETL · Streamlit", year: "2025",
    accent: "#00C9A7",
    link: "https://customer360-intelligence-mf9fuabtqg9drmdsnwqnbd.streamlit.app/",
    github: "https://github.com/Nag4535/customer360-intelligence",
    desc: "End-to-end customer analytics on Instacart dataset — 206,209 customers, 33M+ orders, 49,688 products. ETL pipeline, RFM segmentation (7 tiers), Gradient Boosting churn prediction (ROC-AUC 0.7895), PyTorch Neural Network, and 5-page Streamlit dashboard.",
    tech: ["Python", "XGBoost", "PyTorch", "Streamlit", "SQLite", "Scikit-learn", "Plotly"],
    highlights: [
      { label: "Customers", value: "206K"   },
      { label: "Orders",    value: "33M+"   },
      { label: "ROC-AUC",   value: "0.7895" },
      { label: "Live Demo", value: "Deployed" },
    ],
    modal: {
      note: "Live demo uses 30K sample — Full 206K dataset, 5 notebooks & complete code on GitHub",
      overview: "End-to-end Customer 360 Intelligence Platform on the real Instacart dataset — 206,209 customers, 33M+ orders, 49,688 products across 21 departments. Pipeline covers ETL (6 CSV joins into SQLite), statistical EDA, RFM segmentation, ML churn prediction (4 models benchmarked), PyTorch deep learning, and a deployed 5-page Streamlit dashboard with customer health scores.",
      dashboards: [
        { name: "ETL Pipeline", desc: "Joins 6 Instacart CSVs into SQLite with feature engineering: day_name, time_of_day, ShippingDays, SalesBand. Master table: 33M+ rows processed via SQLAlchemy." },
        { name: "EDA Key Findings", desc: "206,209 users, avg 16.6 orders/user, 58.97% reorder rate. Banana #1 product (491,291 orders). Peak ordering: Saturday 10am. Produce is #1 department." },
        { name: "RFM Segmentation", desc: "7-tier segmentation: Champions, Loyal, Promising, New Customer, At Risk, Cannot Lose, Lost. Recency and Frequency scoring used as high-signal churn features." },
        { name: "Churn Prediction ML", desc: "Gradient Boosting won ROC-AUC 0.7895 vs XGBoost 0.7871, Logistic Regression 0.7851, Random Forest 0.7693. SMOTE oversampling handled 49.22% churn rate imbalance." },
        { name: "Deep Learning (PyTorch)", desc: "Feed-forward network: 4 layers (128-64-32-1), BatchNorm, Dropout, Adam optimizer, 50 epochs. Benchmarked vs Gradient Boosting baseline for performance comparison." },
        { name: "5-Page Streamlit Dashboard", desc: "Overview KPIs, RFM Segments, Churn Analysis with high-risk customer table, Product Intelligence, Customer Lookup with gauge chart and churn probability score." },
      ],
      stats: [
        { label: "Customers", value: "206,209"   },
        { label: "Orders",    value: "33M+"       },
        { label: "Products",  value: "49,688"     },
        { label: "Churn AUC", value: "0.7895"     },
        { label: "Segments",  value: "7 Tiers"    },
        { label: "Notebooks", value: "5 Complete" },
      ],
    },
  },
  {
    id: 3, num: "03",
    title: "Enterprise Multi-Agent AI Platform",
    tag: "AI Agents · LLaMA 3.3 · CrewAI", year: "2025",
    accent: "#F7B731",
    link: "https://multiagent-ai-system4535-jsywbxbaze8xtdxfnrlwsy.streamlit.app/",
    github: "https://github.com/Nag4535/MULTIAGENT-AI-SYSTEM4535",
    desc: "Enterprise-grade AI platform with 7 specialized AI agents powered by LLaMA 3.3 via Groq. Upload any dataset — agents automatically perform quality inspection, statistical analysis, ML recommendations, visualization design, executive reporting, business advisory, and strategic planning.",
    tech: ["Python", "Groq API", "LLaMA 3.3", "Streamlit", "Scikit-learn", "Plotly", "FPDF"],
    highlights: [
      { label: "AI Agents",  value: "7"         },
      { label: "LLM Model",  value: "LLaMA 3.3" },
      { label: "Features",   value: "10+"        },
      { label: "Live App",   value: "Deployed"   },
    ],
    modal: {
      overview: "Enterprise-grade Multi-Agent AI Analytics Platform powered by 7 specialized LLaMA 3.3 agents via Groq API. Upload any CSV, Excel, or JSON — the platform automatically runs quality inspection, statistical analysis, ML recommendations, visualization design, executive reporting, business advisory, and 90-day strategic planning. Features include Auto ML, Smart Data Cleaning, Multi-file Smart Join Wizard, Anomaly Detection, Time Series Analysis, Natural Language to Chart, PDF report export, and an interactive chat interface.",
      dashboards: [
        { name: "7 Specialized AI Agents", desc: "Quality Inspector, Statistical Analyst, ML Expert, Visualization Designer, Report Writer, Business Advisor, Strategy Director — each powered by LLaMA 3.3 via Groq API with rotating API keys for speed." },
        { name: "Smart Data Cleaning", desc: "Auto-detects missing values, fills numeric with median, fills text with mode, drops columns >50% missing, removes outliers using 3× IQR method. Zero manual input required." },
        { name: "Multi-file Smart Join Wizard", desc: "Upload multiple CSVs — system auto-detects relationships via common columns, suggests join strategy, and merges files automatically. Supports 33M+ row datasets." },
        { name: "Auto ML", desc: "Automatically detects classification vs regression task, trains Random Forest model, shows feature importance chart, actual vs predicted chart, and accuracy/R² score." },
        { name: "Anomaly Detection", desc: "Isolation Forest algorithm detects unusual rows automatically. Adjustable sensitivity slider, scatter plot visualization, and CSV export of anomalous rows." },
        { name: "Natural Language to Chart", desc: "Type any chart description in plain English — AI generates the exact Plotly chart automatically. Supports bar, line, scatter, pie, histogram, box plots." },
      ],
      stats: [
        { label: "AI Agents",    value: "7"             },
        { label: "LLM",          value: "LLaMA 3.3"     },
        { label: "File Formats", value: "CSV/Excel/JSON" },
        { label: "ML Models",    value: "Auto-detect"    },
        { label: "Features",     value: "10+"            },
        { label: "Deployment",   value: "Streamlit"      },
      ],
    },
  },
  {
    id: 4, num: "04",
    title: "Real-Time Sales Intelligence Platform",
    tag: "Python · Streamlit · Prophet", year: "2025",
    accent: "#FF6B35",
    link: "https://sales-intelligence-platform-7gxjlq4qp9yhnsappmykkgv.streamlit.app/",
    github: "https://github.com/Nag4535/sales-intelligence-platform",
    desc: "End-to-end sales analytics platform with Python, Prophet forecasting, and Streamlit. ETL pipeline processing 9,800 orders across 4 years. Live dashboard with 12-month sales forecast, US choropleth map, and product intelligence.",
    tech: ["Python", "Streamlit", "Prophet", "Plotly", "SQLite", "Pandas", "SQLAlchemy"],
    highlights: [
      { label: "Orders",   value: "9,800"     },
      { label: "Revenue",  value: "$2.3M"     },
      { label: "Forecast", value: "12 Months" },
      { label: "Live App", value: "Deployed"  },
    ],
    modal: {
      overview: "End-to-end Real-Time Sales Intelligence Platform built with Python, Prophet, Plotly, and Streamlit. ETL pipeline extracts, transforms, and loads 9,800 sales orders into SQLite via SQLAlchemy. Includes 12-month Prophet forecasting with confidence bands, interactive US choropleth map, product intelligence, customer rankings, and a 4-page live dashboard deployed on Streamlit Cloud.",
      dashboards: [
        { name: "ETL Pipeline", desc: "Automated Python pipeline: CSV → feature engineering (Year, Month, Quarter, ShippingDays, SalesBand) → SQLite via SQLAlchemy. Pre-computed aggregation CSVs for instant dashboard loads with @st.cache_data." },
        { name: "KPI Overview Dashboard", desc: "4 KPI cards: Total Sales $2.3M, Orders 9,800, Avg Order Value $234, Customers 793. Sales by Category pie chart and Segment bar chart with interactive sidebar filters." },
        { name: "Trends & 12-Month Forecast", desc: "Monthly trend 2015–2018 with Prophet model forecasting next 12 months. Multi-trace Plotly chart with upper/lower confidence band shading. Best months: November/December." },
        { name: "Products & Customer Rankings", desc: "Top 10 products (Canon imageCLASS Copier #1: $61,599) and Top 10 customers (Sean Miller #1: $25,043). Ship mode distribution pie chart." },
        { name: "US Geographic Analysis", desc: "Interactive US choropleth map (px.choropleth, Viridis scale) showing revenue by state. West region leads at $725,457. Top 10 states bar chart for territory planning." },
      ],
      stats: [
        { label: "Total Sales",  value: "$2.3M"      },
        { label: "Orders",       value: "9,800"      },
        { label: "Customers",    value: "793"        },
        { label: "Forecast",     value: "12 Months"  },
        { label: "Top Product",  value: "Canon Copier" },
        { label: "Top Region",   value: "West $725K" },
      ],
    },
  },
  {
    id: 5, num: "05",
    title: "Market Intel Data Pipeline",
    tag: "Kafka · Spark · Delta Lake · dbt", year: "2025",
    accent: "#A78BFA",
    github: "https://github.com/Nag4535/market-intel-data-pipeline",
    desc: "Real-time financial data pipeline — Part 1 of the Market Intelligence Platform. Ingests live news (NewsAPI) and SEC EDGAR filings through Apache Kafka → Spark Structured Streaming → Delta Lake with dbt transformation layers and Airflow orchestration.",
    tech: ["Apache Kafka", "Spark Streaming", "Delta Lake", "dbt", "Airflow", "Docker", "Python 3.11"],
    highlights: [
      { label: "Latency",    value: "Real-Time" },
      { label: "Sources",    value: "2 Live"    },
      { label: "Transform",  value: "dbt + DuckDB" },
      { label: "Storage",    value: "Delta Lake" },
    ],
    modal: {
      overview: "Real-time financial data pipeline forming the foundational data layer of the Market Intelligence Platform. Ingests live financial news (NewsAPI) and SEC EDGAR regulatory filings through Apache Kafka (3-partition topics) → Spark Structured Streaming → Delta Lake (ACID transactions, schema enforcement, time travel) → dbt SQL transformations → Apache Airflow orchestration.",
      dashboards: [
        { name: "Kafka Producers", desc: "news_producer.py polls NewsAPI; sec_producer.py fetches SEC EDGAR filings. Kafka topics with 3 partitions — replication factor 1 for local dev. Kafka UI at localhost:8080 for real-time monitoring." },
        { name: "Spark Structured Streaming", desc: "Streaming job reads from Kafka using spark.readStream, deserialises JSON with from_json and explicit StructType schema, applies timestamp parsing and null filtering, writes to Delta Lake with checkpoint for exactly-once guarantees." },
        { name: "Delta Lake Storage", desc: "ACID transactions, schema enforcement (rejects mismatched records), time travel (VERSION AS OF), snappy-compressed Parquet. Table lifecycle: compaction, vacuuming, Z-ordering for query performance." },
        { name: "dbt Transformation Layer", desc: "stg_articles.sql: staging model cleaning and standardising raw data. fct_sentiment_hourly.sql: hourly sentiment aggregations. fct_volume_spike.sql: flags volumes >2 std deviations above rolling average as breaking news spikes." },
        { name: "Airflow Orchestration", desc: "DAG with tasks: start producers → verify Kafka health → trigger Spark job → run dbt models → execute dbt tests. Failed tasks retry with exponential backoff. Slack/Email alerts on failure." },
      ],
      stats: [
        { label: "Message Broker", value: "Kafka 7.5"   },
        { label: "Processor",      value: "Spark 3.5"   },
        { label: "Storage",        value: "Delta Lake"  },
        { label: "Transform",      value: "dbt 1.7"     },
        { label: "Orchestration",  value: "Airflow"     },
        { label: "Infrastructure", value: "Docker"      },
      ],
    },
  },
  {
    id: 6, num: "06",
    title: "HR People Analytics Dashboard",
    tag: "Power BI · ML · Python", year: "2025",
    accent: "#FF6B6B",
    desc: "End-to-end HR analytics on IBM's 1,470 employee dataset. Built Gradient Boosting ML model (84% accuracy, ROC-AUC 0.80) to predict attrition. 3-page Power BI dashboard covering KPIs, attrition drivers, and employee insights.",
    tech: ["Power BI", "Python", "Scikit-learn", "DAX", "Pandas", "Gradient Boosting"],
    highlights: [
      { label: "Employees",   value: "1,470"   },
      { label: "Attrition",   value: "16.12%"  },
      { label: "ML Accuracy", value: "84%"     },
      { label: "ROC-AUC",     value: "0.80"    },
    ],
    modal: {
      overview: "End-to-end HR People Analytics project on IBM's employee attrition dataset (1,470 employees × 35 features). Built a complete Python EDA pipeline and Gradient Boosting ML model achieving 84% accuracy and ROC-AUC of 0.80. Delivered a 3-page Power BI dashboard covering KPI overview, attrition analysis, and employee insights with interactive slicers.",
      dashboards: [
        { name: "Page 1 — HR Overview", desc: "4 KPI cards: Total Employees (1,470), Attrition Rate (16.12%), Avg Monthly Income ($6,503), Avg Age (37). Bar charts: attrition by Department and Job Role with interactive slicers." },
        { name: "Page 2 — Attrition Analysis", desc: "Deep-dive into drivers — Salary Band (low earners leave most), Tenure Group (0-2 yrs highest risk), Work-Life Balance impact, Gender distribution. Department and Attrition slicers." },
        { name: "Page 3 — Employee Insights", desc: "Monthly Income by Job Role, Employee Count by Department (donut chart), Job Satisfaction scores by role, Avg Income comparison: stayed vs left." },
        { name: "ML Model — Gradient Boosting", desc: "Compared 6 models (Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, KNN, SVM). Gradient Boosting won: 84% accuracy, ROC-AUC 0.80. Top drivers: Monthly Income, Age, Total Working Years, Overtime." },
      ],
      stats: [
        { label: "Employees",   value: "1,470"            },
        { label: "Attrition",   value: "16.12%"           },
        { label: "Best Model",  value: "Gradient Boosting" },
        { label: "ML Accuracy", value: "84%"              },
        { label: "ROC-AUC",     value: "0.80"             },
        { label: "Dashboards",  value: "3 Pages"          },
      ],
    },
  },
  {
    id: 7, num: "07",
    title: "House Price Prediction",
    tag: "ML · Sklearn · Kaggle", year: "2023",
    accent: "#38BDF8",
    desc: "Kaggle competition — predicted sale prices for 1,459 homes (81 features). Automated ML pipelines with Scikit-learn for imputation, encoding, and scaling. Random Forest (R² 0.8936) outperformed Linear Regression (R² 0.8867). Generated 1,459 predictions.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Joblib", "Matplotlib"],
    highlights: [
      { label: "Dataset",  value: "1,460 rows" },
      { label: "Features", value: "81 cols"    },
      { label: "R² Score", value: "0.8936"     },
      { label: "MAE",      value: "$17,468"    },
    ],
    modal: {
      overview: "Kaggle House Prices — Advanced Regression Techniques. Built a complete supervised ML pipeline to predict residential sale prices on 1,460 training rows × 81 features. Automated preprocessing via ColumnTransformer, trained two models, compared performance rigorously, and generated a final 1,459-row submission file.",
      dashboards: [
        { name: "Data Preprocessing Pipeline", desc: "ColumnTransformer with separate numeric (median imputation + StandardScaler) and categorical (most-frequent imputation + OneHotEncoder) branches. Handled all missing values automatically across 81 features." },
        { name: "Linear Regression Baseline", desc: "Trained on 1,168 samples (80/20 split): MAE $18,285 · RMSE $29,476 · R² 0.8867. Served as performance baseline for comparison." },
        { name: "Random Forest (Best Model)", desc: "RandomForestRegressor with 300 estimators: MAE $17,468 · RMSE $28,573 · R² 0.8936 — outperformed Linear Regression on all three metrics. Saved as house_price_model.pkl via Joblib." },
        { name: "Kaggle Submission", desc: "Generated submission.csv with 1,459 predictions. Sample: $140,646 predicted vs $154,500 actual — within 9% error on unseen test row." },
      ],
      stats: [
        { label: "Train Rows", value: "1,168"         },
        { label: "Features",   value: "81 cols"       },
        { label: "Best Model", value: "Random Forest" },
        { label: "R² Score",   value: "0.8936"        },
        { label: "MAE",        value: "$17,468"       },
        { label: "RMSE",       value: "$28,573"       },
      ],
    },
  },
  {
    id: 8, num: "08",
    title: "Encrypted Data Storage (ABE)",
    tag: "Data Security · Cloud", year: "2023",
    accent: "#34D399",
    desc: "Secure cloud storage architecture with Attribute-Based Encryption aligned to enterprise data governance. Dataset versioning, full audit traceability, and lifecycle management across AWS & Azure.",
    tech: ["AWS", "Azure", "ABE", "Data Governance", "RBAC", "Schema Enforcement"],
    modal: {
      overview: "Designed a secure cloud data storage architecture integrating Attribute-Based Encryption (ABE) with enterprise-grade data governance standards, lifecycle management, and full audit traceability across AWS and Azure environments.",
      dashboards: [
        { name: "ABE Architecture", desc: "Attribute-Based Encryption schema with role-based access control (RBAC) policies aligned to enterprise governance standards. Fine-grained access control based on user attributes." },
        { name: "Lifecycle Management", desc: "Dataset versioning ensuring data integrity and full auditability across cloud pipelines. Automated retention policies and archival workflows." },
        { name: "Audit Traceability", desc: "Complete access logs and audit trails providing full visibility into data access patterns, security events, and compliance reporting." },
      ],
      stats: [
        { label: "Cloud",      value: "AWS + Azure"        },
        { label: "Encryption", value: "ABE"                },
        { label: "Access",     value: "RBAC"               },
        { label: "Focus",      value: "Enterprise Security" },
      ],
    },
  },
];

const EXPERIENCE = [
  {
    role: "Data Analyst",
    company: "Eco Servants",
    location: "Boca Raton, FL",
    period: "03/2025 – Present",
    color: "#00C9A7",
    bullets: [
      "Analyzed behavioral patterns across 200K+ customers and 33M+ transactions using RFM modeling, segmenting users into 7 distinct tiers to inform targeted retention campaigns",
      "Engineered & validated a binary churn prediction model using scikit-learn and XGBoost achieving ROC-AUC of 0.7895 — flagging at-risk customers 30 days ahead of projected churn",
      "Architected 5+ automated ETL pipelines using Python and SQLAlchemy, reducing data preparation time by 30% and eliminating manual processing bottlenecks",
      "Developed Prophet-based time-series forecasting models with 18% improved accuracy over baseline, directly supporting quarterly financial planning cycles",
      "Delivered 3 interactive multi-page Power BI dashboards consolidating 80+ KPIs, adopted by senior stakeholders across sales, marketing, and operations",
      "Applied supervised ML regression across 80+ engineered features, improving prediction accuracy by 18% through systematic feature selection and hyperparameter tuning",
    ],
  },
  {
    role: "Data Engineer",
    company: "Reliance Jio Infocomm Ltd.",
    location: "Chennai, India",
    period: "01/2022 – 12/2023",
    color: "#4F9CF9",
    bullets: [
      "Architected end-to-end batch & real-time pipelines ingesting from 4+ source types into AWS S3 Data Lake using Medallion Architecture (Bronze/Silver/Gold) across 15+ pipeline stages",
      "Built Kafka producers/consumers processing 1M+ events/day with exactly-once semantics — reduced data latency from 4–6 hours to under 5 minutes after migrating 8 legacy batch pipelines",
      "Optimized Spark performance via partition tuning, broadcast joins, and caching — reducing job execution time by 40%; achieved 25% reduction in monthly EMR infrastructure costs",
      "Implemented Delta Lake with ACID transactions and time travel — improving query performance by 35%; built dbt pipelines with SCD Type 2 snapshots across 20+ data models",
      "Orchestrated 30+ production Airflow DAGs achieving 99.5% pipeline uptime; integrated AWS S3, Glue, Lambda, CloudWatch, and IAM end-to-end",
      "Implemented Great Expectations quality frameworks; built Power BI/Grafana monitoring dashboards reducing mean time to resolution by 50%; mentored 3 junior engineers",
    ],
  },
  {
    role: "Junior Data Engineer",
    company: "Bharti Airtel Ltd.",
    location: "Chennai, India",
    period: "03/2020 – 12/2021",
    color: "#FF6B6B",
    bullets: [
      "Built end-to-end batch pipelines into AWS S3 Data Lake using Medallion Architecture — processing large-scale datasets via PySpark across 10+ pipeline stages",
      "Developed Kafka producers/consumers for high-volume event streaming; implemented Spark Structured Streaming enabling near-real-time data availability",
      "Optimized Spark workloads via partition tuning and executor memory config — reducing job execution time by 35%; contributed to measurable EMR cloud cost reduction",
      "Constructed modular dbt pipelines with automated testing and SCD Type 2 snapshots across 15+ data models; implemented Delta Lake with ACID and time travel",
      "Orchestrated 15+ Airflow DAGs achieving 98% on-time pipeline delivery; integrated AWS S3, Glue, Lambda, and CloudWatch for a managed cloud platform",
      "Built Great Expectations frameworks and Power BI/Grafana dashboards — reducing mean time to resolution by 40%; established code review standards cutting onboarding by 50%",
    ],
  },
];

const SKILLS = [
  { category: "Pipeline & Orchestration", items: ["Apache Airflow", "Apache Kafka", "Spark Structured Streaming", "Batch & Stream Processing", "FastAPI", "REST API Integration"] },
  { category: "Distributed Processing", items: ["Apache Spark", "PySpark", "AWS EMR", "Delta Lake", "Databricks", "DuckDB"] },
  { category: "Cloud & Infrastructure", items: ["AWS (S3 · EMR · Glue · Lambda · CloudWatch · IAM)", "Microsoft Azure", "Docker", "Terraform", "CI/CD (GitHub Actions)"] },
  { category: "AI / ML & MLOps", items: ["scikit-learn", "XGBoost", "PyTorch", "HuggingFace Transformers", "MLflow", "Prophet", "FinBERT / NLP", "Multi-Agent AI (LLaMA 3.3)", "Evidently AI"] },
  { category: "Data Architecture", items: ["Medallion Architecture (Bronze/Silver/Gold)", "Data Warehousing", "Data Lakes", "dbt (staging/intermediate/mart)", "Schema Design", "RFM Modeling"] },
  { category: "Analytics & BI", items: ["Power BI (DAX · Power Query)", "Tableau", "Streamlit", "Plotly", "Grafana", "Altair", "CloudWatch"] },
  { category: "Programming & Query", items: ["Python (Pandas · NumPy · pytest)", "SQL (MySQL · SQL Server · Oracle)", "PySpark", "R", "KQL", "SQLAlchemy"] },
  { category: "Data Quality & Governance", items: ["Great Expectations", "Data Lineage", "Schema Enforcement", "RBAC", "SLA Monitoring", "dbt Testing"] },
];

const CERTIFICATIONS = [
  { name: "AWS Certified Data Engineer", level: "Associate", color: "#FF9900", icon: "⚙" },
  { name: "AWS Certified AI Practitioner", level: "Foundational", color: "#FF9900", icon: "🤖" },
  { name: "AWS Certified Cloud Practitioner", level: "Foundational", color: "#FF9900", icon: "☁", link: "https://www.credly.com/badges/5b1d150a-c714-4ebe-aae2-7c8121ede1c7/public_url" },
];

// ── SYSTEM PROMPT ─────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are Naga, a friendly personal AI assistant on Nagarajulu Reddy Nalla's portfolio website. Answer questions about Nagarajulu concisely and professionally. Always refer to him as "Nagarajulu" or "he/him". If asked something unrelated to Nagarajulu, politely redirect.

ABOUT NAGARAJULU:
- Full name: Nagarajulu Reddy Nalla
- Email: Nagarajulunalla7@gmail.com | Phone: +1 (561) 816-1640
- Based in Arlington, TX, USA
- Open to: Data Engineer, AI/ML Engineer, Data Analyst roles
- GitHub: github.com/Nag4535

EDUCATION:
- M.S. Data Science & Analytics — Florida Atlantic University, FL (GPA 3.96/4.0, Dec 2023 – Dec 2025)

CERTIFICATIONS (3 AWS):
- AWS Certified Data Engineer — Amazon Web Services
- AWS Certified AI Practitioner — Amazon Web Services
- AWS Certified Cloud Practitioner — Amazon Web Services

EXPERIENCE:
1. Data Analyst @ Eco Servants, Boca Raton FL (03/2025 – Present)
   - RFM modeling: 200K+ customers, 33M+ transactions, 7 tiers
   - Churn model: ROC-AUC 0.7895, flags at-risk customers 30 days ahead
   - 5+ ETL pipelines, 30% time reduction
   - Prophet forecasting: 18% accuracy improvement
   - 3 Power BI dashboards, 80+ KPIs

2. Data Engineer @ Reliance Jio Infocomm Ltd., India (01/2022 – 12/2023)
   - Kafka: 1M+ events/day, exactly-once semantics
   - Reduced data latency from 4–6 hours to under 5 minutes
   - 40% Spark speedup, 25% EMR cost reduction
   - 30+ Airflow DAGs, 99.5% pipeline uptime
   - Delta Lake query performance +35%, dbt across 20+ models

3. Junior Data Engineer @ Bharti Airtel Ltd., India (03/2020 – 12/2021)
   - 15+ Airflow DAGs, 98% on-time delivery
   - 35% Spark speedup
   - Medallion Architecture pipelines on AWS S3

PROJECTS (8 total):
1. Market Intelligence MLOps Platform — FinBERT fine-tuned, 97.79% accuracy, MLflow, FastAPI, Evidently AI
2. Customer360 Intelligence — 206K customers, 33M+ orders, ROC-AUC 0.7895, 7-tier RFM, PyTorch, Streamlit
3. Enterprise Multi-Agent AI Platform — 7 LLaMA 3.3 agents via Groq, Auto ML, Natural Language to Chart
4. Real-Time Sales Intelligence Platform — $2.3M sales, 9,800 orders, Prophet 12-month forecast, live Streamlit
5. Market Intel Data Pipeline — Kafka → Spark → Delta Lake → dbt → Airflow real-time pipeline
6. HR People Analytics — 1,470 employees, Gradient Boosting 84% accuracy, 3-page Power BI
7. House Price Prediction — Kaggle, 81 features, Random Forest R² 0.8936
8. Encrypted Data Storage (ABE) — AWS + Azure, RBAC, enterprise governance

KEY METRICS: 5+ years experience, 97.79% FinBERT accuracy, 99.5% pipeline uptime, 40% Spark speedup, 25% EMR cost reduction, 33M+ records processed, 3 AWS certifications

Keep answers short (2-4 sentences max). Be warm and professional.`;

// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// ── CURSOR ────────────────────────────────────────────────────────────────────
function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  useEffect(() => {
    const onMove = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", onMove);
    let raf;
    const tick = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (dotRef.current) dotRef.current.style.transform = `translate(${pos.current.x - 4}px,${pos.current.y - 4}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${ring.current.x - 20}px,${ring.current.y - 20}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const grow = (e) => { if (e.target.closest("a,button,[data-hover]") && ringRef.current) ringRef.current.classList.add("cur--big"); };
    const shrink = (e) => { if (e.target.closest("a,button,[data-hover]") && ringRef.current) ringRef.current.classList.remove("cur--big"); };
    document.addEventListener("mouseover", grow);
    document.addEventListener("mouseout", shrink);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); document.removeEventListener("mouseover", grow); document.removeEventListener("mouseout", shrink); };
  }, []);
  return (<><div ref={dotRef} className="cur-dot" /><div ref={ringRef} className="cur-ring" /></>);
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);
  const { modal, title, tag, year, tech, accent } = project;
  return (
    <div className="modal-overlay" ref={overlayRef} onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}>
      <div className="modal" style={{ "--m-accent": accent }}>
        <div className="modal__head">
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span className="modal__tag">{tag}</span>
            <span className="modal__year">{year}</span>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="modal__body">
          <h2 className="modal__title">{title}</h2>
          {modal.note && <div className="modal__note">📌 {modal.note}</div>}
          <div className="modal__links">
            {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="mbtn mbtn--primary">Live Demo →</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="mbtn mbtn--outline">GitHub →</a>}
          </div>
          <p className="modal__overview">{modal.overview}</p>
          <div className="modal__stats">
            {modal.stats.map(s => (
              <div key={s.label} className="modal__stat">
                <span className="modal__stat-val">{s.value}</span>
                <span className="modal__stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
          <h3 className="modal__sec">Components</h3>
          <div className="modal__dashes">
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
          <h3 className="modal__sec">Tech Stack</h3>
          <ul className="modal__tech">{tech.map(t => <li key={t}>{t}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const s = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", s);
    return () => window.removeEventListener("scroll", s);
  }, []);
  const links = ["About", "Experience", "Projects", "Skills", "Contact"];
  return (
    <nav className={`nav${scrolled ? " nav--on" : ""}`}>
      <a href="#hero" className="nav__logo">NRN<span className="accent">.</span></a>
      <ul className={`nav__links${menuOpen ? " nav__links--open" : ""}`}>
        {links.map(l => (
          <li key={l}><a href={`#${l.toLowerCase()}`} className="nav__link" onClick={() => setMenuOpen(false)}>{l}</a></li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a href="mailto:Nagarajulunalla7@gmail.com" className="nav__hire">Hire Me</a>
        <button className="nav__burger" onClick={() => setMenuOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 80); }, []);
  return (
    <section id="hero" className={`hero${ready ? " hero--in" : ""}`}>
      <div className="hero__grid-bg" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__badge">
          <span className="hero__dot" />
          Open to opportunities · Arlington, TX
        </div>
        <h1 className="hero__name">
          <span className="hero__name--line">Nagarajulu</span>
          <span className="hero__name--line hero__name--accent">Reddy Nalla</span>
        </h1>
        <p className="hero__roles">Data Engineer &nbsp;·&nbsp; AI/ML Engineer &nbsp;·&nbsp; AWS Certified Data Engineer</p>
        <p className="hero__sub">
          5+ years building scalable ETL/ELT pipelines, real-time streaming systems, and cloud-native data infrastructure.
          From Kafka to FinBERT — I build systems that turn raw data into real business impact.
        </p>
        <div className="hero__cta">
          <a href="#projects" className="hbtn hbtn--primary">View Projects</a>
          <a href="#contact" className="hbtn hbtn--outline">Let's Talk →</a>
          <a href="https://github.com/Nag4535" target="_blank" rel="noreferrer" className="hbtn hbtn--ghost">GitHub ↗</a>
        </div>
        <div className="hero__stats">
          {[["5+","Years Experience"],["97.79%","FinBERT Accuracy"],["99.5%","Pipeline Uptime"],["3×","AWS Certified"]].map(([v,l]) => (
            <div key={l} className="hero__stat">
              <span className="hero__stat-val">{v}</span>
              <span className="hero__stat-lbl">{l}</span>
            </div>
          ))}
        </div>
        <div className="hero__badges">
          <span className="hbadge">M.S. Data Science &amp; Analytics — FAU · GPA 3.96/4.0</span>
          <span className="hbadge">3× AWS Certified</span>
          <span className="hbadge">Medallion Architecture · Delta Lake · dbt</span>
        </div>
      </div>
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
          <p className="eyebrow">/ About Me</p>
          <h2 className="sec-title">Turning raw data<br /><em>into intelligence.</em></h2>
        </div>
        <div className="about__right">
          <p className="about__body">
            I'm <strong>Nagarajulu Reddy Nalla</strong> — a Data Engineer, AI/ML Engineer, and AWS-certified data professional with a Master's in Data Science & Analytics from Florida Atlantic University (GPA 3.96/4.0). I bring 5+ years of hands-on experience building production-grade data systems across Reliance Jio, Bharti Airtel, and Eco Servants.
          </p>
          <p className="about__body">
            I architect real-time Kafka pipelines, fine-tune transformer models (97.79% accuracy), build MLOps systems with MLflow and FastAPI, and deliver dashboards that drive C-level decisions. From Delta Lake and dbt to multi-agent AI with LLaMA 3.3 — I own the entire data and AI lifecycle.
          </p>
          <div className="about__stats">
            {[["3.96/4.0","GPA — FAU MSc"],["99.5%","Pipeline Uptime"],["33M+","Records Processed"],["3×","AWS Certified"]].map(([n, l]) => (
              <div key={l} className="about__stat">
                <span className="about__stat-num">{n}</span>
                <span className="about__stat-lbl">{l}</span>
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
  const [active, setActive] = useState(0);
  return (
    <section id="experience" ref={ref} className={`section experience${inView ? " section--in" : ""}`}>
      <div className="container">
        <p className="eyebrow">/ Experience</p>
        <h2 className="sec-title">Where I've worked.</h2>
        <div className="exp__panel">
          <div className="exp__tabs">
            {EXPERIENCE.map((e, i) => (
              <button key={i} className={`exp__tab${active === i ? " exp__tab--on" : ""}`} onClick={() => setActive(i)} style={{ "--tc": e.color }}>
                <span className="exp__tab-role">{e.role}</span>
                <span className="exp__tab-co">{e.company}</span>
              </button>
            ))}
          </div>
          <div className="exp__content">
            <div className="exp__content-head">
              <div>
                <h3 className="exp__role" style={{ color: EXPERIENCE[active].color }}>{EXPERIENCE[active].role}</h3>
                <p className="exp__company">{EXPERIENCE[active].company} · {EXPERIENCE[active].location}</p>
              </div>
              <span className="exp__period">{EXPERIENCE[active].period}</span>
            </div>
            <div className="exp__divider" />
            <ul className="exp__bullets">
              {EXPERIENCE[active].bullets.map((b, i) => (
                <li key={i}>
                  <span className="exp__arrow" style={{ color: EXPERIENCE[active].color }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PROJECT CARD ──────────────────────────────────────────────────────────────
function ProjectCard({ p, i, onOpen }) {
  const [ref, inView] = useInView(0.08);
  return (
    <article ref={ref} className={`pcard${inView ? " pcard--in" : ""}`}
      style={{ "--delay": `${i * 0.08}s`, "--ac": p.accent }}
      onClick={() => onOpen(p)} data-hover>
      <div className="pcard__top">
        <span className="pcard__num">{p.num}</span>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span className="pcard__tag">{p.tag}</span>
          <span className="pcard__year">{p.year}</span>
        </div>
      </div>
      <h3 className="pcard__title">{p.title}</h3>
      <p className="pcard__desc">{p.desc}</p>
      {p.highlights && (
        <div className="pcard__hls">
          {p.highlights.map(h => (
            <div key={h.label} className="pcard__hl">
              <span className="pcard__hl-val">{h.value}</span>
              <span className="pcard__hl-lbl">{h.label}</span>
            </div>
          ))}
        </div>
      )}
      <ul className="pcard__tech">{p.tech.slice(0, 5).map(t => <li key={t}>{t}</li>)}</ul>
      <div className="pcard__footer">
        {p.link
          ? <a href={p.link} target="_blank" rel="noreferrer" className="pcard__live" onClick={e => e.stopPropagation()}>Live Demo ↗</a>
          : <span className="pcard__detail">Click for details →</span>}
        {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="pcard__gh" onClick={e => e.stopPropagation()}>GitHub</a>}
      </div>
      <div className="pcard__glow" />
    </article>
  );
}

function Projects() {
  const [ref, inView] = useInView();
  const [active, setActive] = useState(null);
  return (
    <section id="projects" ref={ref} className={`section projects${inView ? " section--in" : ""}`}>
      <div className="container">
        <p className="eyebrow">/ Projects</p>
        <h2 className="sec-title">What I've built.</h2>
        <p className="projects__hint">Click any card for full details →</p>
        <div className="pcard-grid">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} onOpen={setActive} />)}
        </div>
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────
function Skills() {
  const [ref, inView] = useInView();
  return (
    <section id="skills" ref={ref} className={`section skills${inView ? " section--in" : ""}`}>
      <div className="container">
        <p className="eyebrow">/ Tech Stack</p>
        <h2 className="sec-title">What I work with.</h2>
        <div className="skills__grid">
          {SKILLS.map(({ category, items }, ci) => (
            <div key={category} className="skill-group" style={{ "--di": ci }}>
              <h3 className="skill-group__cat">{category}</h3>
              <ul className="skill-group__pills">
                {items.map((item, ii) => <li key={item} className="skill-pill" style={{ "--ii": ii }}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="certs">
          <p className="eyebrow" style={{ marginBottom: 20 }}>/ Certifications</p>
          <div className="certs__grid">
            {CERTIFICATIONS.map((c, i) => (
              <div key={i} className={`cert-card${c.link ? " cert-card--link" : ""}`}
                onClick={() => c.link && window.open(c.link, "_blank")} data-hover={c.link ? true : undefined}>
                <div className="cert-card__icon" style={{ background: "#FF990015", border: "1px solid #FF990030" }}>{c.icon}</div>
                <div>
                  <p className="cert-card__name">{c.name}</p>
                  <p className="cert-card__level" style={{ color: c.color }}>Amazon Web Services · {c.level}</p>
                  {c.link && <p className="cert-card__view">View Certificate →</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="edu__strip">
          <div className="edu__card">
            <span className="edu__deg">M.S. Data Science &amp; Analytics</span>
            <span className="edu__school">Florida Atlantic University, Boca Raton FL</span>
            <span className="edu__detail">GPA 3.96 / 4.0 · Dec 2023 – Dec 2025</span>
            <span className="edu__course">Machine Learning · Big Data Analytics · Deep Learning · Cloud Computing · Statistical Computing</span>
          </div>

        </div>
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
const FORMSPREE_URL = "https://formspree.io/f/meerzlrd";

function Contact() {
  const [ref, inView] = useInView();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = async (e) => {
    e.preventDefault(); setLoading(true); setError("");
    try {
      const res = await fetch(FORMSPREE_URL, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(form) });
      if (res.ok) setSent(true); else setError("Something went wrong. Please email me directly.");
    } catch { setError("Network error. Please email me directly."); }
    finally { setLoading(false); }
  };
  return (
    <section id="contact" ref={ref} className={`section contact${inView ? " section--in" : ""}`}>
      <div className="container contact__grid">
        <div className="contact__left">
          <p className="eyebrow">/ Contact</p>
          <h2 className="sec-title">Let's build<br /><em>something great.</em></h2>
          <p className="contact__sub">Open to Data Engineering, AI/ML Engineering, and Data Analytics roles. Let's connect.</p>
          <div className="contact__info">
            {[
              { icon: "✉", label: "Email", val: "Nagarajulunalla7@gmail.com", href: "mailto:Nagarajulunalla7@gmail.com" },
              { icon: "📞", label: "Phone", val: "+1 (561) 816-1640", href: "tel:+15618161640" },
              { icon: "⌨", label: "GitHub", val: "github.com/Nag4535", href: "https://github.com/Nag4535" },
              { icon: "📍", label: "Location", val: "Arlington, TX, USA", href: null },
            ].map(c => (
              <div key={c.label} className="contact__row">
                <span className="contact__icon">{c.icon}</span>
                <div>
                  <div className="contact__lbl">{c.label}</div>
                  {c.href ? <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="contact__val contact__val--link">{c.val}</a>
                    : <span className="contact__val">{c.val}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact__right">
          {sent ? (
            <div className="contact__thanks">
              <span className="contact__thanks-icon">✓</span>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={onSubmit}>
              <div className="field"><label htmlFor="cn">Name</label><input id="cn" name="name" type="text" placeholder="Your name" required value={form.name} onChange={onChange} /></div>
              <div className="field"><label htmlFor="ce">Email</label><input id="ce" name="email" type="email" placeholder="your@email.com" required value={form.email} onChange={onChange} /></div>
              <div className="field"><label htmlFor="cm">Message</label><textarea id="cm" name="message" rows="5" placeholder="Tell me about the role or project…" required value={form.message} onChange={onChange} /></div>
              {error && <p className="contact__error">{error}</p>}
              <button type="submit" className="hbtn hbtn--primary" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── CHATBOT ───────────────────────────────────────────────────────────────────
function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: "Hi! I'm Naga 👋 — Nagarajulu's AI assistant. Ask me about his experience, projects, certifications, or skills!" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => { if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: "smooth" }); }, [messages, open]);
  useEffect(() => { if (open && inputRef.current) inputRef.current.focus(); }, [open]);

  const send = async (text) => {
    const t = (text || input).trim();
    if (!t || loading) return;
    const userMsg = { role: "user", content: t };
    setMessages(m => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system: SYSTEM_PROMPT, messages: [...messages.filter((_, i) => i > 0), userMsg] }),
      });
      const data = await res.json();
      const reply = data?.content?.[0]?.text || data?.error || "Sorry, couldn't get a response. Try again!";
      setMessages(m => [...m, { role: "assistant", content: reply }]);
    } catch { setMessages(m => [...m, { role: "assistant", content: "Network error. Please try again!" }]); }
    finally { setLoading(false); }
  };

  const SUGGESTIONS = ["What are his top skills?", "Tell me about his projects", "Is he open to work?", "What are his AWS certifications?", "What's his biggest achievement?"];

  return (
    <>
      <button className={`chat-bubble${open ? " chat-bubble--open" : ""}`} onClick={() => setOpen(o => !o)} aria-label="Chat">
        {open
          ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12" /></svg>
          : <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.02 2 11c0 2.67 1.19 5.07 3.08 6.74L4 22l4.51-1.5C9.61 20.83 10.78 21 12 21c5.52 0 10-4.02 10-9S17.52 2 12 2zm1 13H7v-2h6v2zm4-4H7V9h10v2z" /></svg>}
        {!open && <span className="chat-bubble__dot" />}
      </button>
      <div className={`chat-win${open ? " chat-win--open" : ""}`}>
        <div className="chat-head">
          <div className="chat-head__av">N</div>
          <div><p className="chat-head__name">Naga AI</p><p className="chat-head__sub">Ask about Nagarajulu</p></div>
          <div className="chat-head__online" />
        </div>
        <div className="chat-msgs">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg chat-msg--${m.role}`}>
              {m.role === "assistant" && <div className="chat-msg__av">N</div>}
              <div className="chat-msg__bubble">{m.content}</div>
            </div>
          ))}
          {loading && (
            <div className="chat-msg chat-msg--assistant">
              <div className="chat-msg__av">N</div>
              <div className="chat-msg__bubble chat-msg__bubble--typing"><span /><span /><span /></div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
        {messages.length <= 1 && (
          <div className="chat-suggs">
            {SUGGESTIONS.map(s => <button key={s} className="chat-sugg" onClick={() => send(s)}>{s}</button>)}
          </div>
        )}
        <div className="chat-input-row">
          <input ref={inputRef} className="chat-input" placeholder="Ask about Nagarajulu…" value={input}
            onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} disabled={loading} />
          <button className="chat-send" onClick={() => send()} disabled={loading || !input.trim()} aria-label="Send">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" /></svg>
          </button>
        </div>
      </div>
    </>
  );
}

// ── FOOTER ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="nav__logo">NRN<span className="accent">.</span></span>
        <p className="footer__copy">© {new Date().getFullYear()} Nagarajulu Reddy Nalla · Data Engineer · AI/ML Engineer · 3× AWS Certified</p>
        <a href="#hero" className="footer__top">↑ Top</a>
      </div>
    </footer>
  );
}

// ── CSS ───────────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
  --bg:       #07070E;
  --bg2:      #0C0C16;
  --bg3:      #10101C;
  --border:   #1A1A2A;
  --border2:  #252538;
  --text:     #E2E2EE;
  --text2:    #8080A0;
  --text3:    #4A4A6A;
  --accent:   #4F9CF9;
  --accent2:  #00C9A7;
  --font:     'DM Sans', sans-serif;
  --font-d:   'Syne', sans-serif;
  --font-m:   'JetBrains Mono', monospace;
  --radius:   14px;
  --max:      1120px;
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;font-size:16px;}
body{font-family:var(--font);background:var(--bg);color:var(--text);overflow-x:hidden;cursor:none;}
::selection{background:#4F9CF930;}
img{max-width:100%;}

/* CURSOR */
.cur-dot{position:fixed;top:0;left:0;width:8px;height:8px;border-radius:50%;background:var(--accent);pointer-events:none;z-index:9999;transition:opacity .2s;}
.cur-ring{position:fixed;top:0;left:0;width:40px;height:40px;border-radius:50%;border:1.5px solid var(--accent);pointer-events:none;z-index:9998;opacity:.5;transition:width .25s,height .25s,opacity .25s;}
.cur--big{width:64px;height:64px;opacity:.25;margin:-12px;}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:0 40px;height:64px;transition:background .3s,border-color .3s;border-bottom:1px solid transparent;}
.nav--on{background:#07070Eee;backdrop-filter:blur(16px);border-color:var(--border);}
.nav__logo{font-family:var(--font-d);font-weight:800;font-size:20px;color:var(--text);text-decoration:none;letter-spacing:-1px;}
.accent{color:var(--accent);}
.nav__links{display:flex;gap:32px;list-style:none;}
.nav__link{color:var(--text2);text-decoration:none;font-size:13px;font-weight:500;letter-spacing:.05em;transition:color .2s;}
.nav__link:hover{color:var(--text);}
.nav__hire{background:var(--accent);color:#fff;border:none;padding:9px 20px;border-radius:9px;font-size:13px;font-weight:600;cursor:pointer;text-decoration:none;font-family:var(--font);transition:background .2s,transform .2s;}
.nav__hire:hover{background:#6AAEF9;transform:translateY(-1px);}
.nav__burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;}
.nav__burger span{display:block;width:22px;height:2px;background:var(--text2);border-radius:2px;transition:all .2s;}
.container{max-width:var(--max);margin:0 auto;padding:0 28px;}
.grain{position:absolute;inset:0;pointer-events:none;opacity:.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");}

/* HERO */
.hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;}
.hero__grid-bg{position:absolute;inset:0;background-image:linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px);background-size:52px 52px;opacity:.4;}
.hero__orb{position:absolute;border-radius:50%;filter:blur(100px);pointer-events:none;}
.hero__orb--1{width:700px;height:700px;background:var(--accent);opacity:.04;top:-20%;right:-5%;}
.hero__orb--2{width:400px;height:400px;background:var(--accent2);opacity:.04;bottom:0;left:-5%;}
.hero__inner{position:relative;z-index:1;max-width:var(--max);margin:0 auto;padding:130px 28px 80px;}
.hero__badge{display:inline-flex;align-items:center;gap:9px;background:#4F9CF910;border:1px solid #4F9CF930;border-radius:100px;padding:6px 16px;font-size:12px;color:var(--text2);font-weight:500;margin-bottom:28px;}
.hero__dot{width:7px;height:7px;border-radius:50%;background:var(--accent2);animation:pulse 2s infinite;}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.hero__name{font-family:var(--font-d);font-size:clamp(52px,9vw,100px);font-weight:800;line-height:.92;letter-spacing:-3px;margin-bottom:16px;}
.hero__name--line{display:block;}
.hero__name--accent{color:var(--accent);}
.hero--in .hero__name{animation:fadeUp .7s ease forwards;}
.hero__roles{font-size:17px;color:var(--text3);letter-spacing:.02em;margin-bottom:12px;}
.hero__sub{font-size:15px;color:var(--text3);max-width:540px;line-height:1.75;margin-bottom:36px;}
.hero__cta{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:60px;}
.hbtn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:10px;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;transition:all .2s;font-family:var(--font);}
.hbtn--primary{background:var(--accent);color:#fff;border:none;}
.hbtn--primary:hover{background:#6AAEF9;transform:translateY(-2px);}
.hbtn--outline{background:transparent;color:var(--text);border:1px solid var(--border2);}
.hbtn--outline:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px);}
.hbtn--ghost{background:transparent;color:var(--text2);border:1px solid var(--border);}
.hbtn--ghost:hover{color:var(--text);border-color:var(--border2);}
.hero__stats{display:flex;gap:48px;flex-wrap:wrap;margin-bottom:32px;}
.hero__stat-val{display:block;font-family:var(--font-d);font-size:28px;font-weight:800;color:var(--text);letter-spacing:-1px;}
.hero__stat-lbl{font-size:10px;color:var(--text3);font-weight:500;letter-spacing:.1em;text-transform:uppercase;margin-top:3px;}
.hero__badges{display:flex;flex-wrap:wrap;gap:10px;}
.hbadge{background:var(--bg3);border:1px solid var(--border);border-radius:100px;padding:5px 14px;font-size:11px;color:var(--text2);font-weight:500;}
@keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}

/* SECTIONS */
.section{padding:100px 0;opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease;}
.section--in{opacity:1;transform:translateY(0);}
.eyebrow{font-size:11px;font-weight:600;letter-spacing:.22em;color:var(--accent);text-transform:uppercase;margin-bottom:10px;}
.sec-title{font-family:var(--font-d);font-size:clamp(28px,4vw,44px);font-weight:700;letter-spacing:-1.5px;color:var(--text);margin-bottom:48px;line-height:1.1;}
.sec-title em{font-style:italic;color:var(--accent);}

/* ABOUT */
.about__grid{display:grid;grid-template-columns:1fr 2fr;gap:64px;align-items:start;}
.about__body{font-size:15px;color:var(--text2);line-height:1.8;margin-bottom:16px;}
.about__body strong{color:var(--text);}
.about__stats{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:32px;}
.about__stat{background:var(--bg3);border:1px solid var(--border);border-radius:12px;padding:16px;}
.about__stat-num{display:block;font-family:var(--font-d);font-size:22px;font-weight:800;color:var(--text);letter-spacing:-1px;}
.about__stat-lbl{font-size:11px;color:var(--text3);font-weight:500;letter-spacing:.06em;text-transform:uppercase;margin-top:4px;}

/* EXPERIENCE */
.exp__panel{display:flex;border:1px solid var(--border);border-radius:18px;overflow:hidden;background:var(--bg2);}
.exp__tabs{min-width:220px;border-right:1px solid var(--border);display:flex;flex-direction:column;}
.exp__tab{width:100%;background:none;border:none;border-left:2px solid transparent;padding:16px 22px;text-align:left;cursor:pointer;transition:all .2s;font-family:var(--font);}
.exp__tab:hover{background:var(--bg3);}
.exp__tab--on{background:var(--bg3);border-left-color:var(--tc,var(--accent));}
.exp__tab-role{display:block;font-size:13px;font-weight:600;color:var(--text2);}
.exp__tab-co{display:block;font-size:11px;color:var(--text3);margin-top:2px;}
.exp__tab--on .exp__tab-role{color:var(--text);}
.exp__content{flex:1;padding:36px;}
.exp__content-head{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:20px;}
.exp__role{font-family:var(--font-d);font-size:21px;font-weight:700;}
.exp__company{font-size:13px;color:var(--text2);margin-top:4px;}
.exp__period{font-size:12px;color:var(--text3);font-weight:500;font-family:var(--font-m);}
.exp__divider{height:1px;background:var(--border);margin-bottom:20px;}
.exp__bullets{list-style:none;display:flex;flex-direction:column;gap:12px;}
.exp__bullets li{display:flex;gap:12px;font-size:14px;color:var(--text2);line-height:1.65;}
.exp__arrow{flex-shrink:0;margin-top:3px;font-size:13px;}

/* PROJECTS */
.projects__hint{font-size:13px;color:var(--text3);margin-bottom:28px;font-family:var(--font-m);}
.pcard-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:18px;}
.pcard{background:var(--bg2);border:1px solid var(--border);border-radius:16px;padding:26px;cursor:pointer;transition:border-color .3s,transform .3s;opacity:0;transform:translateY(20px);position:relative;overflow:hidden;}
.pcard--in{opacity:1;transform:translateY(0);transition:opacity .5s ease var(--delay),transform .5s ease var(--delay),border-color .3s,box-shadow .3s;}
.pcard:hover{border-color:color-mix(in srgb,var(--ac) 40%,transparent);transform:translateY(-4px);}
.pcard__top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;}
.pcard__num{font-family:var(--font-m);font-size:11px;color:var(--ac,var(--accent));font-weight:500;letter-spacing:.1em;}
.pcard__tag{font-size:10px;background:var(--bg3);color:var(--text3);padding:3px 10px;border-radius:100px;border:1px solid var(--border);font-weight:500;}
.pcard__year{font-size:10px;color:var(--text3);font-family:var(--font-m);}
.pcard__title{font-family:var(--font-d);font-size:17px;font-weight:700;color:var(--text);margin-bottom:10px;line-height:1.25;}
.pcard__desc{font-size:13px;color:var(--text2);line-height:1.7;margin-bottom:14px;}
.pcard__hls{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-bottom:14px;}
.pcard__hl{background:var(--bg3);border:1px solid var(--border);border-radius:9px;padding:10px 12px;}
.pcard__hl-val{display:block;font-family:var(--font-d);font-size:16px;font-weight:700;color:var(--ac,var(--accent));}
.pcard__hl-lbl{font-size:9px;color:var(--text3);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-top:2px;}
.pcard__tech{display:flex;flex-wrap:wrap;gap:5px;list-style:none;margin-bottom:16px;}
.pcard__tech li{font-size:10px;background:var(--bg3);color:var(--text3);padding:3px 9px;border-radius:100px;border:1px solid var(--border);}
.pcard__footer{display:flex;justify-content:space-between;align-items:center;}
.pcard__live{font-size:12px;color:var(--ac,var(--accent));font-weight:600;text-decoration:none;font-family:var(--font-m);}
.pcard__detail{font-size:12px;color:var(--text3);font-family:var(--font-m);}
.pcard__gh{font-size:12px;color:var(--text3);text-decoration:none;transition:color .2s;}
.pcard__gh:hover{color:var(--text);}
.pcard__glow{position:absolute;inset:0;border-radius:16px;pointer-events:none;background:radial-gradient(circle at 80% 20%,color-mix(in srgb,var(--ac) 6%,transparent),transparent 60%);opacity:0;transition:opacity .3s;}
.pcard:hover .pcard__glow{opacity:1;}

/* MODAL */
.modal-overlay{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.85);backdrop-filter:blur(4px);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;overflow-y:auto;}
.modal{background:#0C0C16;border:1px solid #252538;border-radius:20px;width:100%;max-width:760px;max-height:85vh;overflow-y:auto;position:relative;margin:auto;box-shadow:0 25px 80px rgba(0,0,0,0.8);}
.modal__head{display:flex;justify-content:space-between;align-items:center;padding:22px 28px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--bg2);z-index:1;border-radius:20px 20px 0 0;}
.modal__tag{font-size:10px;background:var(--bg3);color:var(--m-accent,var(--accent));border:1px solid color-mix(in srgb,var(--m-accent,var(--accent)) 30%,transparent);padding:4px 12px;border-radius:100px;font-weight:600;}
.modal__year{font-size:11px;color:var(--text3);font-family:var(--font-m);}
.modal__close{background:none;border:none;color:var(--text2);cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:8px;transition:background .2s;}
.modal__close:hover{background:var(--bg3);}
.modal__close svg{width:18px;height:18px;}
.modal__body{padding:24px;}
.modal__title{font-family:var(--font-d);font-size:22px;font-weight:700;color:var(--text);margin-bottom:12px;line-height:1.2;}
.modal__note{background:#4F9CF910;border:1px solid #4F9CF930;border-radius:9px;padding:10px 14px;font-size:12px;color:var(--text2);margin-bottom:14px;}
.modal__links{display:flex;gap:10px;margin-bottom:18px;}
.mbtn{padding:9px 18px;border-radius:9px;font-size:13px;font-weight:600;text-decoration:none;cursor:pointer;transition:all .2s;font-family:var(--font);}
.mbtn--primary{background:var(--m-accent,var(--accent));color:#fff;border:none;}
.mbtn--outline{background:transparent;color:var(--text);border:1px solid var(--border2);}
.mbtn--outline:hover{border-color:var(--m-accent,var(--accent));}
.modal__overview{font-size:14px;color:var(--text2);line-height:1.75;margin-bottom:24px;}
.modal__stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:24px;}
.modal__stat{background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:12px;text-align:center;}
.modal__stat-val{display:block;font-family:var(--font-d);font-size:14px;font-weight:700;color:var(--m-accent,var(--accent));word-break:break-word;}
.modal__stat-lbl{font-size:10px;color:var(--text3);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-top:3px;}
.modal__sec{font-family:var(--font-d);font-size:14px;font-weight:700;color:var(--text);margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--border);}
.modal__dashes{display:flex;flex-direction:column;gap:14px;margin-bottom:24px;}
.modal__dash{display:flex;gap:14px;align-items:flex-start;}
.modal__dash-num{font-family:var(--font-m);font-size:12px;color:var(--m-accent,var(--accent));font-weight:500;min-width:24px;margin-top:1px;}
.modal__dash-name{font-size:13px;font-weight:600;color:var(--text);margin-bottom:3px;}
.modal__dash-desc{font-size:13px;color:var(--text2);line-height:1.65;}
.modal__tech{display:flex;flex-wrap:wrap;gap:7px;list-style:none;margin-bottom:8px;}
.modal__tech li{background:var(--bg3);color:var(--text2);font-size:11px;padding:5px 12px;border-radius:8px;border:1px solid var(--border);}

/* SKILLS */
.skills__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px;margin-bottom:48px;}
.skill-group{background:var(--bg2);border:1px solid var(--border);border-radius:14px;padding:22px;animation:fadeUp .5s ease calc(var(--di)*0.07s) backwards;}
.skill-group__cat{font-family:var(--font-d);font-size:12px;font-weight:700;color:var(--accent);margin-bottom:14px;letter-spacing:.1em;text-transform:uppercase;}
.skill-group__pills{display:flex;flex-wrap:wrap;gap:7px;list-style:none;}
.skill-pill{background:var(--bg3);color:var(--text2);font-size:11px;padding:5px 11px;border-radius:7px;border:1px solid var(--border);transition:all .2s;cursor:default;animation:fadeUp .4s ease calc((var(--di)*0.06s + var(--ii)*0.03s)) backwards;}
.skill-pill:hover{border-color:#4F9CF950;color:var(--text);}
.certs{margin-bottom:40px;}
.certs__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;}
.cert-card{background:var(--bg2);border:1px solid var(--border);border-radius:12px;padding:18px 22px;display:flex;align-items:center;gap:14px;transition:border-color .2s;}
.cert-card--link{cursor:pointer;}
.cert-card--link:hover{border-color:#FF990050;}
.cert-card__icon{width:42px;height:42px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
.cert-card__name{font-size:14px;font-weight:600;color:var(--text);line-height:1.3;}
.cert-card__level{font-size:11px;font-weight:600;margin-top:3px;}
.cert-card__view{font-size:11px;color:var(--text3);margin-top:4px;}
.edu__strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:14px;}
.edu__card{background:var(--bg2);border:1px solid var(--border);border-radius:14px;padding:22px;display:flex;flex-direction:column;gap:6px;}
.edu__deg{font-family:var(--font-d);font-size:15px;font-weight:700;color:var(--text);}
.edu__school{font-size:13px;color:var(--accent);font-weight:600;}
.edu__detail{font-size:12px;color:var(--text3);font-family:var(--font-m);}
.edu__course{font-size:11px;color:var(--text3);line-height:1.6;}

/* CONTACT */
.contact__grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start;}
.contact__sub{font-size:15px;color:var(--text2);line-height:1.75;margin-bottom:28px;}
.contact__info{display:flex;flex-direction:column;gap:16px;}
.contact__row{display:flex;gap:14px;align-items:flex-start;}
.contact__icon{font-size:18px;margin-top:2px;}
.contact__lbl{font-size:10px;color:var(--text3);font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-bottom:3px;}
.contact__val{font-size:13px;color:var(--text2);}
.contact__val--link{color:var(--accent);text-decoration:none;}
.contact__val--link:hover{text-decoration:underline;}
.contact__form{display:flex;flex-direction:column;gap:18px;}
.field{display:flex;flex-direction:column;gap:7px;}
.field label{font-size:12px;font-weight:600;color:var(--text2);letter-spacing:.04em;}
.field input,.field textarea{background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:12px 16px;font-size:14px;color:var(--text);font-family:var(--font);outline:none;transition:border-color .2s;resize:vertical;}
.field input:focus,.field textarea:focus{border-color:var(--accent);}
.field input::placeholder,.field textarea::placeholder{color:var(--text3);}
.contact__thanks{text-align:center;padding:48px;color:var(--text2);}
.contact__thanks-icon{display:block;font-size:40px;color:var(--accent2);margin-bottom:16px;}
.contact__error{font-size:13px;color:#FF6B6B;}

/* CHATBOT */
.chat-bubble{position:fixed;bottom:28px;right:28px;z-index:500;width:54px;height:54px;border-radius:50%;background:var(--accent);border:none;cursor:none;display:flex;align-items:center;justify-content:center;color:#fff;box-shadow:0 4px 24px #4F9CF940;transition:transform .2s,background .2s;}
.chat-bubble:hover{transform:scale(1.08);}
.chat-bubble svg{width:24px;height:24px;}
.chat-bubble__dot{position:absolute;top:10px;right:10px;width:8px;height:8px;border-radius:50%;background:#00C9A7;animation:pulse 2s infinite;}
.chat-win{position:fixed;bottom:92px;right:28px;z-index:499;width:360px;background:var(--bg2);border:1px solid var(--border2);border-radius:18px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 20px 60px #00000060;opacity:0;transform:translateY(16px) scale(.97);pointer-events:none;transition:opacity .25s,transform .25s;}
.chat-win--open{opacity:1;transform:translateY(0) scale(1);pointer-events:all;}
.chat-head{display:flex;align-items:center;gap:12px;padding:16px 18px;border-bottom:1px solid var(--border);background:var(--bg3);}
.chat-head__av{width:36px;height:36px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px;color:#fff;flex-shrink:0;}
.chat-head__name{font-size:14px;font-weight:600;color:var(--text);}
.chat-head__sub{font-size:11px;color:var(--text3);}
.chat-head__online{width:8px;height:8px;border-radius:50%;background:var(--accent2);margin-left:auto;animation:pulse 2s infinite;}
.chat-msgs{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:12px;max-height:340px;}
.chat-msg{display:flex;gap:8px;align-items:flex-end;}
.chat-msg--user{flex-direction:row-reverse;}
.chat-msg__av{width:28px;height:28px;border-radius:50%;background:var(--accent);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;flex-shrink:0;}
.chat-msg__bubble{max-width:80%;padding:10px 14px;border-radius:14px;font-size:13px;line-height:1.6;color:var(--text);}
.chat-msg--assistant .chat-msg__bubble{background:var(--bg3);border:1px solid var(--border);}
.chat-msg--user .chat-msg__bubble{background:var(--accent);color:#fff;}
.chat-msg__bubble--typing{display:flex;gap:5px;align-items:center;padding:12px 16px;}
.chat-msg__bubble--typing span{width:6px;height:6px;border-radius:50%;background:var(--text3);animation:typing 1.2s infinite;}
.chat-msg__bubble--typing span:nth-child(2){animation-delay:.2s;}
.chat-msg__bubble--typing span:nth-child(3){animation-delay:.4s;}
@keyframes typing{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}
.chat-suggs{padding:8px 14px;display:flex;flex-wrap:wrap;gap:6px;border-top:1px solid var(--border);}
.chat-sugg{background:var(--bg3);border:1px solid var(--border);border-radius:100px;padding:5px 12px;font-size:11px;color:var(--text2);cursor:pointer;transition:all .2s;font-family:var(--font);}
.chat-sugg:hover{border-color:var(--accent);color:var(--accent);}
.chat-input-row{display:flex;gap:8px;padding:12px 14px;border-top:1px solid var(--border);}
.chat-input{flex:1;background:var(--bg3);border:1px solid var(--border);border-radius:10px;padding:9px 14px;font-size:13px;color:var(--text);font-family:var(--font);outline:none;transition:border-color .2s;}
.chat-input:focus{border-color:var(--accent);}
.chat-input::placeholder{color:var(--text3);}
.chat-send{width:36px;height:36px;border-radius:9px;background:var(--accent);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#fff;transition:background .2s;}
.chat-send:hover:not(:disabled){background:#6AAEF9;}
.chat-send:disabled{opacity:.4;cursor:not-allowed;}
.chat-send svg{width:16px;height:16px;}

/* FOOTER */
.footer{border-top:1px solid var(--border);padding:28px 0;}
.footer__inner{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;}
.footer__copy{font-size:12px;color:var(--text3);}
.footer__top{font-size:12px;color:var(--text3);text-decoration:none;transition:color .2s;}
.footer__top:hover{color:var(--text);}

/* RESPONSIVE */
@media(max-width:900px){
  .about__grid{grid-template-columns:1fr;gap:32px;}
  .contact__grid{grid-template-columns:1fr;gap:40px;}
  .exp__panel{flex-direction:column;}
  .exp__tabs{flex-direction:row;overflow-x:auto;border-right:none;border-bottom:1px solid var(--border);}
  .exp__tab{border-left:none;border-bottom:2px solid transparent;white-space:nowrap;}
  .exp__tab--on{border-bottom-color:var(--tc,var(--accent));border-left:none;}
}
@media(max-width:680px){
  .nav{padding:0 20px;}
  .nav__links{display:none;}
  .nav__links--open{display:flex;flex-direction:column;position:fixed;top:64px;left:0;right:0;background:var(--bg2);border-bottom:1px solid var(--border);padding:20px;gap:16px;}
  .nav__burger{display:flex;}
  .hero__inner{padding:100px 20px 60px;}
  .hero__stats{gap:28px;}
  .pcard-grid{grid-template-columns:1fr;}
  .modal__stats{grid-template-columns:repeat(2,1fr);}
  .chat-win{width:calc(100vw - 32px);right:16px;}
  body{cursor:auto;}
  .cur-dot,.cur-ring{display:none;}
}
`;

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <style>{CSS}</style>
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
      <footer className="footer">
        <div className="container footer__inner">
          <span className="nav__logo">NRN<span className="accent">.</span></span>
          <p className="footer__copy">© {new Date().getFullYear()} Nagarajulu Reddy Nalla · Data Engineer · AI/ML Engineer · 3× AWS Certified</p>
          <a href="#hero" className="footer__top">↑ Top</a>
        </div>
      </footer>
      <Chatbot />
    </>
  );
}
