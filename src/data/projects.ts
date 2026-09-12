export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "BUSINESS / DATA" | "FINANCE" | "EMBEDDED / IoT";
  pillarLabel: string;
  featured: boolean;
  tagline: string;
  description: string;
  technologies: string[];
  metrics: string;
  scale?: string;
  focus: string[];
  problem?: string;
  approach?: string;
  results?: string;
  coverImage?: string;
  images?: string[];
  colabLinks?: { label: string; url: string }[];
  folderPath: string;
  githubUrl?: string;
  demoUrl?: string;
  driveFolderUrl?: string;
}

export const PROJECTS: Project[] = [
  // -------------------------------------------------------------
  // FEATURED PROJECT 01: AML & FRAUD RISK ASSESSMENT (FINANCE)
  // -------------------------------------------------------------
  {
    id: "aml-fraud-risk",
    slug: "aml-fraud-risk",
    title: "AML & Fraud Risk Assessment in Banking",
    category: "FINANCE",
    pillarLabel: "02 — Financial Analysis",
    featured: true,
    tagline: "Regulatory risk analytics and suspicious pattern detection across banking transactions",
    description:
      "Comprehensive anti-money laundering (AML) and financial crime investigation analyzing 10,000+ banking transactions. Engineered SQL pipelines and interactive Power BI dashboards to identify anomalous velocity spikes, structuring behaviors, and high-risk counterparties.",
    technologies: ["Python", "SQL", "Power BI", "DAX", "Statistical Analysis"],
    scale: "10,000+ Transactions · 2,500+ Fraud Records",
    metrics: "10,000+ Transactions · 2,500+ Fraud Records Analyzed",
    focus: [
      "Suspicious pattern identification",
      "Transaction velocity & structuring",
      "AML compliance risk scoring",
      "Regulatory reporting dashboards",
      "Business risk mitigation",
    ],
    problem:
      "Banking institutions encounter strict regulatory oversight and rising operational overhead when triaging high volumes of transaction data for illicit financial movement and money laundering.",
    approach:
      "Ingested multi-source transactional databases, performed extensive SQL data cleaning and structuring, designed automated risk-scoring logic in Python, and consolidated KPI summaries into executive Power BI reports.",
    results:
      "Surfaced high-risk customer segments, accelerated audit turnaround times, and supported data-backed compliance decision making.",
    colabLinks: [
      {
        label: "Google Colab 1 (Analysis & ETL Pipeline)",
        url: "https://colab.research.google.com/drive/10kLCzu5UzxEFnkrj5gg_ERgwGRn3s7gV?usp=sharing",
      },
      {
        label: "Google Colab 2 (Risk Modeling & Detection)",
        url: "https://colab.research.google.com/drive/1IpLaXpVkYOAAlsrheLChQwizY6G4oBQ8?usp=sharing",
      },
    ],
    folderPath: "Projects/FINANCE/AML & Fraud Risk Assessment in Banking",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },

  // -------------------------------------------------------------
  // FEATURED PROJECT 02: FINANCIAL MODELING (FINANCE)
  // -------------------------------------------------------------
  {
    id: "financial-modeling",
    slug: "financial-modeling",
    title: "Financial Modeling — Clothing Brand",
    category: "FINANCE",
    pillarLabel: "02 — Financial Analysis",
    featured: true,
    tagline: "Integrated financial model covering revenue forecasting, pricing, margins, and viability",
    description:
      "End-to-end corporate financial model built in Excel for an apparel venture. Developed dynamic revenue forecast schedules, product-level unit economics, gross margin thresholds, fixed/variable cost structures, break-even milestones, and scenario-based sensitivity analyses.",
    technologies: ["Excel", "Financial Modelling", "Scenario Analysis", "Sensitivity Tables", "FP&A"],
    scale: "Multi-Year Projections · Dynamic Sensitivity Scenarios",
    metrics: "Revenue · Margins · Forecasting · Break-Even Analysis",
    focus: [
      "Revenue forecasting & unit economics",
      "Product pricing & gross margins",
      "Fixed vs variable cost allocation",
      "Break-even point & payback calculation",
      "Scenario & sensitivity testing",
      "Monthly & annual pro-forma statements",
    ],
    problem:
      "Emerging retail and apparel businesses face severe cash flow uncertainty due to inventory holding costs, fluctuating manufacturing minimums, and unpredictable seasonal demand.",
    approach:
      "Constructed a modular financial architecture linking operational drivers (COGS, marketing spend, return rates) directly to pro-forma P&L statements with dynamic best-, base-, and worst-case scenario switches.",
    results:
      "Delivered strategic clarity on optimal product pricing tiers, required working capital reserves, and the exact sales volume needed to achieve operational profitability.",
    coverImage: "/projects/finance/Financial Modeling — Clothing Brand/Clothing Brand.png",
    images: ["/projects/finance/Financial Modeling — Clothing Brand/Clothing Brand.png"],
    folderPath: "Projects/FINANCE/Financial Modeling — Clothing Brand",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },

  // -------------------------------------------------------------
  // FEATURED PROJECT 03: AGRISENSE CONTROL SYSTEM (IOT)
  // -------------------------------------------------------------
  {
    id: "agrisense",
    slug: "agrisense",
    title: "AgriSense Control System",
    category: "EMBEDDED / IoT",
    pillarLabel: "03 — Embedded Systems & IoT",
    featured: true,
    tagline: "Smart agricultural telemetry with environmental sensors and remote monitoring dashboard",
    description:
      "Precision agriculture automation platform coupling field-deployed sensor microcontrollers with a centralized remote monitoring dashboard. Automates irrigation triggers based on soil moisture, ambient humidity, and temperature telemetry.",
    technologies: ["IoT", "Sensors", "Microcontrollers", "C/C++", "Remote Dashboard", "Telemetry"],
    scale: "Continuous Autonomous Telemetry & Automated Actuation",
    metrics: "Autonomous Multi-Sensor Monitoring & Threshold Control",
    focus: [
      "Sensor integration (Soil, Temp, Humidity)",
      "Low-power edge microcontroller firmware",
      "Real-time display & remote dashboard",
      "Automated irrigation threshold logic",
      "Farm environment optimization",
    ],
    problem:
      "Manual crop monitoring leads to irregular irrigation, nutrient runoff, wasted water resources, and reduced overall crop yield.",
    approach:
      "Engineered an integrated hardware-firmware stack reading analog sensor signals, filtering signal noise, and transmitting operational metrics to a cloud dashboard for real-time visualization and automatic pump control.",
    results:
      "Enabled hands-free greenhouse and field monitoring, reduced water consumption through closed-loop threshold control, and provided historical sensor logging.",
    coverImage: "/projects/IOT/AgriSense Control System/1773049014713.jpeg",
    images: ["/projects/IOT/AgriSense Control System/1773049014713.jpeg"],
    folderPath: "Projects/IOT/AgriSense Control System",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },

  // -------------------------------------------------------------
  // IOT PROJECTS
  // -------------------------------------------------------------
  {
    id: "automatic-sanitizer-dispenser",
    slug: "automatic-sanitizer-dispenser",
    title: "Automatic Sanitizer Dispenser",
    category: "EMBEDDED / IoT",
    pillarLabel: "Embedded Systems & IoT",
    featured: false,
    tagline: "Portable contactless automatic sanitizer dispenser with 5-day battery backup",
    description:
      "LUPE is an automatic sanitizer dispenser developed by Team Dream Skill during the COVID-19 pandemic. The portable dispenser was designed for convenient hands-free sanitization and features a 2-litre container, up to 5 days of battery backup, and approximately 4 hours of charging time.",
    technologies: ["Microcontrollers", "Sensors", "Circuit Design", "Power Management", "Rapid Prototyping"],
    metrics: "2-Litre Reservoir · 5-Day Battery Backup · 4-Hour Charge",
    focus: [
      "Hands-free contactless sanitization",
      "2-litre container capacity",
      "Up to 5 days battery backup",
      "Approximately 4 hours charging time",
    ],
    coverImage: "/projects/IOT/Automatic Sanitizer Dispenser/1683962280853.jpg",
    images: [
      "/projects/IOT/Automatic Sanitizer Dispenser/1683962280853.jpg",
      "/projects/IOT/Automatic Sanitizer Dispenser/robot page 2 (2)-01.jpeg",
    ],
    folderPath: "Projects/IOT/Automatic Sanitizer Dispenser",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "g-arm",
    slug: "g-arm",
    title: "G-ARM",
    category: "EMBEDDED / IoT",
    pillarLabel: "Embedded Systems & IoT",
    featured: false,
    tagline: "6-DOF robotic arm engineered for gesture-based handling and contactless delivery",
    description:
      "GARM is a 6-DOF robotic system designed for remote and gesture-based operation. It supports hand-gesture and mobile control and can be used to carry hazardous objects. The project was also designed to enable safer door delivery to people affected by the pandemic.",
    technologies: ["Robotics", "6-DOF Kinematics", "Gesture Control", "Embedded C", "Telemetry"],
    metrics: "6-DOF Robotic System · Gesture & Mobile Control",
    focus: [
      "Remote and hand-gesture operation",
      "Mobile device control interface",
      "Hazardous object transportation",
      "Contactless pandemic door delivery",
    ],
    coverImage: "/projects/IOT/G-ARM/robot page 2-01 (1).jpeg",
    images: ["/projects/IOT/G-ARM/robot page 2-01 (1).jpeg"],
    folderPath: "Projects/IOT/G-ARM",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "home-automation",
    slug: "home-automation",
    title: "Home Automation Switch Board",
    category: "EMBEDDED / IoT",
    pillarLabel: "Embedded Systems & IoT",
    featured: false,
    tagline: "Retrofittable 4-channel IoT switch board enabling manual and smartphone control",
    description:
      "Engineered an automated residential switchboard module allowing dual manual and Wi-Fi mobile control of four independent AC electrical channels without rewiring.",
    technologies: ["Arduino", "ESP8266", "IoT Protocols", "Relay Drivers", "Circuit Design"],
    metrics: "4-Channel Retrofit AC Home Automation",
    focus: [
      "Retrofit mechanical form-factor design",
      "Dual manual toggle & mobile app override",
      "Optocoupled relay electrical isolation",
      "Low-latency Wi-Fi communication",
    ],
    coverImage: "/projects/IOT/Home Automation Switch Board/robot page 2 (5)-01.jpeg",
    images: ["/projects/IOT/Home Automation Switch Board/robot page 2 (5)-01.jpeg"],
    folderPath: "Projects/IOT/Home Automation Switch Board",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "smart-door-lock",
    slug: "smart-door-lock",
    title: "Smart Door Lock",
    category: "EMBEDDED / IoT",
    pillarLabel: "Embedded Systems & IoT",
    featured: false,
    tagline: "RFID-authenticated electronic door lock with master enrollment security",
    description:
      "Arduino-powered access control mechanism featuring 13.56MHz RFID authentication, motorized deadbolt actuation, and secure card enrollment through master password authorization.",
    technologies: ["Arduino", "RFID (RC522)", "Embedded C", "Solenoid / Servo Actuation", "EEPROM"],
    metrics: "Contactless Access & Master Security Enrollment",
    focus: [
      "RFID card UID validation",
      "Master credential administrative enrollment",
      "Electronic locking actuation",
      "Tamper lockout security logic",
    ],
    coverImage: "/projects/IOT/Smart Door Lock/robot page 2 (6)-01.jpeg",
    images: ["/projects/IOT/Smart Door Lock/robot page 2 (6)-01.jpeg"],
    folderPath: "Projects/IOT/Smart Door Lock",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "car-black-box",
    slug: "car-black-box",
    title: "Car Black Box",
    category: "EMBEDDED / IoT",
    pillarLabel: "Embedded Systems & IoT",
    featured: false,
    tagline: "Vehicle telemetry data recorder using PIC microcontroller and RTC for crash analytics",
    description:
      "Developed a tamper-resistant vehicle event data recorder utilizing a PIC microcontroller and Real-Time Clock (RTC) to log speed, braking, gear states, and collision telemetry.",
    technologies: ["PIC Microcontroller", "RTC (DS1307)", "Embedded C", "EEPROM", "Hardware Debugging"],
    metrics: "Real-Time Crash Telemetry & Event Logging",
    focus: [
      "Real-time event logging to non-volatile EEPROM",
      "Microsecond timestamping via RTC",
      "State transition tracking (Gear, Speed, Brake)",
      "Automotive accident forensic analysis",
    ],
    folderPath: "Projects/IOT/car-black-box",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },

  // -------------------------------------------------------------
  // FINANCE PROJECTS
  // -------------------------------------------------------------
  {
    id: "fintrack",
    slug: "fintrack",
    title: "FinTrack",
    category: "FINANCE",
    pillarLabel: "Financial Analysis",
    featured: false,
    tagline: "Interactive Excel EMI and amortization calculator for investment and loan management",
    description:
      "Financial planning utility built in Excel enabling users to model varied amortization structures, prepayment impact, interest accruals, and investment allocation.",
    technologies: ["Excel", "Financial Formulas", "Loan Amortization", "Investment Planning"],
    metrics: "Multi-Tier EMI & Investment Modeling",
    focus: [
      "Dynamic loan amortization schedules",
      "Prepayment & interest savings analysis",
      "Investment return projection",
      "Clean financial user interface",
    ],
    coverImage: "/projects/finance/fintrack/Monthly EMI Tracker.png",
    images: ["/projects/finance/fintrack/Monthly EMI Tracker.png"],
    folderPath: "Projects/FINANCE/FinTrack",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "portfolio-tracker",
    slug: "portfolio-tracker",
    title: "Portfolio Tracker",
    category: "FINANCE",
    pillarLabel: "Financial Analysis",
    featured: false,
    tagline: "API-connected Google Sheets portfolio management tool adaptive to market conditions",
    description:
      "Dynamic portfolio management tool built in Google Sheets leveraging live financial API endpoints to track multi-asset allocations, risk exposure, and market shifts.",
    technologies: ["Google Sheets", "Google Apps Script", "Financial APIs", "Portfolio Rebalancing"],
    metrics: "Real-Time Multi-Asset Tracking & Exposure",
    focus: [
      "API live price feed integration",
      "Asset allocation & diversification ratios",
      "Goal-based rebalancing alerts",
      "Dynamic performance metrics",
    ],
    coverImage: "/projects/finance/Portfolio Tracker/Live Portfolio.png",
    images: ["/projects/finance/Portfolio Tracker/Live Portfolio.png"],
    folderPath: "Projects/FINANCE/Portfolio Tracker",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },

  // -------------------------------------------------------------
  // BUSINESS / DATA PROJECTS
  // -------------------------------------------------------------
  {
    id: "revpro-insights",
    slug: "revpro-insights",
    title: "RevPro Insights",
    category: "BUSINESS / DATA",
    pillarLabel: "Business & Data Analytics",
    featured: false,
    tagline: "Power BI executive dashboard visualizing 3-year revenue and profit trends",
    description:
      "Developed a corporate reporting dashboard visualizing three years of longitudinal revenue, operational expense, and profitability trends to drive data-informed executive decision making.",
    technologies: ["Power BI", "DAX", "Data Modeling", "Financial Visualization"],
    metrics: "3-Year Multi-Dimensional Trend Analytics",
    focus: [
      "Multi-year longitudinal trend analysis",
      "Interactive slice-and-dice dashboarding",
      "Profitability margin decomposition",
      "C-Suite management reporting",
    ],
    coverImage: "/projects/business-data/RevPro Insights/RevPro.png",
    images: ["/projects/business-data/RevPro Insights/RevPro.png"],
    folderPath: "Projects/BUSINESS-DATA/RevPro Insights",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "credit-card-fraud",
    slug: "credit-card-fraud",
    title: "Credit Card Fraud Detection & Risk Dashboard",
    category: "BUSINESS / DATA",
    pillarLabel: "Business & Data Analytics",
    featured: false,
    tagline: "Proactive fraud-trend and anomaly-indicator dashboard quantifying financial risk",
    description:
      "Engineered fraud detection dashboards and statistical anomaly models using SQL, Python, and Power BI to quantify business savings from proactive fraud mitigation.",
    technologies: ["Power BI", "SQL", "Python", "Risk Scoring", "DAX"],
    metrics: "Trend Indicators & Proactive Savings Quantification",
    focus: [
      "Fraud trend identification",
      "Anomaly indicators & scoring",
      "Business savings quantification",
      "Executive risk reporting",
    ],
    coverImage: "/projects/business-data/Credit Card Fraud Detection & Risk Dashboard/Screenshot 2026-09-12 022942.png",
    images: [
      "/projects/business-data/Credit Card Fraud Detection & Risk Dashboard/Screenshot 2026-09-12 022942.png",
      "/projects/business-data/Credit Card Fraud Detection & Risk Dashboard/Screenshot 2026-09-12 023038.png",
    ],
    folderPath: "Projects/BUSINESS-DATA/Credit Card Fraud Detection & Risk Dashboard",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "customer-churn",
    slug: "customer-churn",
    title: "Customer Churn & Risk Analysis",
    category: "BUSINESS / DATA",
    pillarLabel: "Business & Data Analytics",
    featured: false,
    tagline: "End-to-end data pipeline and Random Forest predictive model supporting retention",
    description:
      "Built an end-to-end analytics pipeline encompassing requirements gathering, SQL Server ETL processing, Power BI visualization, and a Random Forest predictive model to identify churn drivers and guide retention strategies.",
    technologies: ["SQL Server", "Power BI", "Python", "Random Forest", "ETL"],
    metrics: "End-to-End Retention Strategy Pipeline",
    focus: [
      "Requirements gathering & stakeholder alignment",
      "SQL Server ETL pipeline",
      "Random Forest churn classification",
      "Executive retention KPI dashboard",
    ],
    coverImage: "/projects/business-data/Customer Churn & Risk Analysis/Screenshot 2026-09-12 022348.png",
    images: [
      "/projects/business-data/Customer Churn & Risk Analysis/Screenshot 2026-09-12 022348.png",
      "/projects/business-data/Customer Churn & Risk Analysis/Screenshot 2026-09-12 022449.png",
      "/projects/business-data/Customer Churn & Risk Analysis/Screenshot 2026-09-12 022529.png",
    ],
    folderPath: "Projects/BUSINESS-DATA/Customer Churn & Risk Analysis",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "salesreport",
    slug: "salesreport",
    title: "SalesReport",
    category: "BUSINESS / DATA",
    pillarLabel: "Business & Data Analytics",
    featured: false,
    tagline: "Comprehensive revenue, profitability, product performance, and regional sales analytics",
    description:
      "Interactive sales analytics dashboard designed to provide a comprehensive view of revenue, profitability, product performance, sales channels, customers, and geographic trends. It combines executive KPIs with monthly trends, product-level analysis, channel performance, and regional insights to support data-driven business decisions.",
    technologies: ["Power BI", "DAX", "Data Modeling", "Sales Analytics"],
    metrics: "Multi-Channel Sales, Profitability & Regional Analytics",
    focus: [
      "Executive revenue & profitability KPIs",
      "Product & category performance trends",
      "Sales channel & customer analysis",
      "Regional & geographic insights",
    ],
    coverImage: "/projects/business-data/SalesReport/SalesReport_1.png",
    images: [
      "/projects/business-data/SalesReport/SalesReport_1.png",
      "/projects/business-data/SalesReport/SalesReport_2.png",
      "/projects/business-data/SalesReport/SalesReport_3.png",
    ],
    folderPath: "Projects/BUSINESS-DATA/SalesReport",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "wallmartsalesdashboard",
    slug: "wallmartsalesdashboard",
    title: "WallmartSalesDashboard",
    category: "BUSINESS / DATA",
    pillarLabel: "Business & Data Analytics",
    featured: false,
    tagline: "Retail sales evaluation across regions, segments, payment modes, and shipping methods",
    description:
      "Interactive sales dashboard focused on analyzing sales performance across regions, customer segments, product categories, payment modes, and shipping methods. The dashboard combines KPI summaries with monthly year-over-year trends and category-level breakdowns to provide a clear view of sales performance and business patterns.",
    technologies: ["Power BI", "DAX", "Retail Analytics", "Segment Analysis"],
    metrics: "Regional, Segment & YoY Trend Breakdown",
    focus: [
      "Regional & customer segment breakdown",
      "Product category performance",
      "Payment modes & shipping method tracking",
      "Monthly year-over-year sales patterns",
    ],
    coverImage: "/projects/business-data/WallmartSalesDashboard/Screenshot 2026-09-12 032835.png",
    images: ["/projects/business-data/WallmartSalesDashboard/Screenshot 2026-09-12 032835.png"],
    folderPath: "Projects/BUSINESS-DATA/WallmartSalesDashboard",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "ecommeresalesdashboard",
    slug: "ecommeresalesdashboard",
    title: "EcommereSalesDashboard",
    category: "BUSINESS / DATA",
    pillarLabel: "Business & Data Analytics",
    featured: false,
    tagline: "Consolidated e-commerce revenue, AOV, order volume, and geographic tracking",
    description:
      "Interactive e-commerce sales dashboard providing a consolidated view of revenue, profit, quantity, average order value, customer performance, product categories, payment methods, and monthly trends. It enables users to explore sales patterns across states, categories, sub-categories, customers, quarters, and payment modes.",
    technologies: ["Power BI", "DAX", "E-Commerce Metrics", "Customer Analytics"],
    metrics: "Consolidated Revenue · AOV · Multi-State Breakdown",
    focus: [
      "Revenue, profit & quantity KPIs",
      "Average Order Value (AOV) tracking",
      "State-level geographic distribution",
      "Category, quarter & payment breakdown",
    ],
    coverImage: "/projects/business-data/EcommereSalesDashboard/Screenshot 2026-09-12 023937.png",
    images: ["/projects/business-data/EcommereSalesDashboard/Screenshot 2026-09-12 023937.png"],
    folderPath: "Projects/BUSINESS-DATA/EcommereSalesDashboard",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "crop-yield",
    slug: "crop-yield",
    title: "Crop Yield Prediction & Efficient Use of Fertilizers",
    category: "BUSINESS / DATA",
    pillarLabel: "Business & Data Analytics",
    featured: false,
    tagline: "Machine learning model predicting crop yields and optimizing fertilizer consumption",
    description:
      "Engineered machine learning models to forecast agricultural yield and compute precise fertilizer allocation based on soil composition, rainfall, and regional climate variables.",
    technologies: ["Machine Learning", "Python", "Data Cleaning", "Scikit-Learn"],
    metrics: "Precision Agriculture Predictive Modeling",
    focus: [
      "Agricultural yield prediction",
      "Fertilizer optimization logic",
      "Exploratory data analysis",
      "Decision support for farming efficiency",
    ],
    folderPath: "Projects/BUSINESS-DATA/crop-yield",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
  {
    id: "mask-recognition",
    slug: "mask-recognition",
    title: "Automated COVID-19 Mask & Face Recognition System",
    category: "BUSINESS / DATA",
    pillarLabel: "Business & Data Analytics",
    featured: false,
    tagline: "Dual-stage deep learning and computer vision framework for institutional safety",
    description:
      "Computer vision application combining deep learning mask detection with machine learning face identification to verify institutional health protocol compliance.",
    technologies: ["Machine Learning", "Deep Learning", "OpenCV", "Python"],
    metrics: "Automated Real-Time Visual Compliance",
    focus: [
      "Face detection & bounding box alignment",
      "Mask presence classification",
      "Individual identification pipeline",
      "Real-time video inference",
    ],
    folderPath: "Projects/BUSINESS-DATA/mask-recognition",
    driveFolderUrl: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
];
