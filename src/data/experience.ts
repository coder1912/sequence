export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  badge?: string;
  type: "Full-Time / Contract" | "Internship" | "Entrepreneurial" | "Freelance";
  description: string;
  contributions: string[];
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "four-flags",
    role: "Data Analyst Intern",
    company: "Four Flags Athlete Solution Pvt. Ltd.",
    location: "Kerala, India",
    period: "May 2025 – Jul 2025",
    type: "Internship",
    description:
      "Spearheaded data consolidation, ETL pipeline restructuring, and executive dashboard development to empower management decision-making with automated financial and operational KPI tracking.",
    contributions: [
      "Gathered requirements from stakeholders and consolidated performance and financial data from multiple source systems, cutting data preparation time by 30% through re-engineered ETL pipelines.",
      "Built Power BI and Excel dashboards with automated refresh logic as part of low-to-medium complexity enhancement initiatives, turning raw data into KPI insights and achieving full stakeholder adoption for management decision-making.",
      "Produced executive summary reports for cross-functional teams, working independently and collaboratively to identify and eliminate recurring workflow inefficiencies, improving reporting accuracy.",
    ],
    skills: ["Power BI", "DAX", "SQL", "Advanced Excel", "ETL Pipelines", "Executive Reporting", "Requirements Gathering"],
  },
  {
    id: "mecwin",
    role: "R&D Junior Engineer — Firmware & Reporting Analytics",
    company: "Mecwin Technologies India Pvt. Ltd.",
    location: "Bangalore, India",
    period: "Sep 2023 – Feb 2024",
    type: "Full-Time / Contract",
    description:
      "Bridged engineering telemetry and executive business reporting across solar MPPT controller products. Managed field data integrity, functional specifications, and R&D budget tracking.",
    contributions: [
      "Delivered financial-grade data integrity for senior stakeholder reporting, achieving >90% accuracy while coordinating, testing, and tracking 500+ deployments end-to-end.",
      "Developed and tested firmware for solar MPPT pump controllers; led a technical team managing 500+ OTA updates and field installations with 90% data accuracy.",
      "Translated technical requirements into functional specifications and clear reports, liaising between engineering execution and business stakeholder reporting needs — core Agile business-analyst workflow.",
      "Tracked resource allocation and budget data across R&D projects to support operational efficiency reporting for senior management.",
    ],
    skills: ["Firmware Testing", "Data Integrity", "Requirements Translation", "Budget Tracking", "Agile / Scrum", "OTA Telemetry"],
  },
  {
    id: "dreamskill",
    role: "Founder & Firmware Lead",
    company: "DreamSkill (Startup Initiative)",
    location: "Kannur, India",
    period: "Sep 2020 – Jan 2022",
    badge: "Entrepreneurial Leadership",
    type: "Entrepreneurial",
    description:
      "Founded and led a 6-member cross-functional team to commercialize automated health-safety hardware during COVID-19, leading product design, circuit architecture, FP&A, and business operations.",
    contributions: [
      "Led end-to-end product design, microcontroller circuit development, and firmware coding for automated contactless hand-sanitizer dispensers.",
      "Formulated financial plans, pricing strategy, inventory budgets, and working capital allocations for institutional client rollouts.",
      "Coordinated procurement, assembly, testing, and post-sale service operations across schools and commercial facilities.",
    ],
    skills: ["Team Leadership", "FP&A & Budgeting", "Circuit Design", "Product Lifecycle", "Process Modeling", "Vendor Sourcing"],
  },
  {
    id: "freelance",
    role: "Freelance Embedded & IoT Systems Developer",
    company: "Self-Employed",
    location: "Remote / Kerala, India",
    period: "Nov 2021 – Aug 2022",
    type: "Freelance",
    description:
      "Engineered tailored embedded hardware and IoT monitoring solutions from requirements scoping through physical prototyping, firmware programming, and cloud dashboard deployment.",
    contributions: [
      "Designed and delivered IoT and embedded systems projects end-to-end, including the AgriSense Farm Control System, Car Black Box telemetry logger, and smart switchboard modules.",
      "Implemented communication protocols (UART, SPI, I2C) and sensor integrations across Arduino, ESP32, NodeMCU ESP8266, and PIC microcontrollers.",
    ],
    skills: ["Embedded C/C++", "Microcontrollers", "Hardware Debugging", "Sensors", "IoT Dashboards", "Rapid Prototyping"],
  },
  {
    id: "bsnl",
    role: "IoT Developer Intern",
    company: "BSNL Regional Telecom Training Centre",
    location: "Trivandrum, India",
    period: "2021 (During B.Tech)",
    type: "Internship",
    description:
      "Completed hands-on industrial training on IoT architectures, sensor acquisition networks, and Arduino-based remote monitoring frameworks.",
    contributions: [
      "Gained practical exposure to telecommunication sensor integration, embedded development, and remote telemetry transmission.",
      "Configured experimental sensor arrays transmitting environmental indicators over regional telecom protocols.",
    ],
    skills: ["IoT Architecture", "Arduino", "Sensor Networks", "Telecommunications"],
  },
  {
    id: "keltron",
    role: "Web Developer Intern",
    company: "KELTRON",
    location: "Kochi, India",
    period: "Undergraduate Internship",
    type: "Internship",
    description:
      "Gained core exposure to standalone system software development, development lifecycles, and database interactions within a premier state enterprise.",
    contributions: [
      "Assisted in development lifecycle workflows and testing standalone enterprise system software applications.",
      "Collaborated with senior software engineers on data validation and interface usability.",
    ],
    skills: ["Software Development Lifecycle", "Database Interactions", "Enterprise Systems"],
  },
];
