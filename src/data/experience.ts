export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  badge?: string;
  type: string;
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
    role: "R&D Junior Engineer",
    company: "Mecwin Technologies India Pvt Ltd",
    location: "Bangalore, India",
    period: "Sep 2023 – Feb 2024",
    type: "Full-Time / Contract",
    description:
      "Bridged business and technical requirements across R&D initiatives, collaborating with cross-functional technology teams within a Scrum-based delivery environment.",
    contributions: [
      "Translated business and technical requirements into functional specifications and Business Requirements Documents (BRDs) for NB-IoT, 4G RMS, and 2G RMS projects.",
      "Coordinated development, testing, and end-to-end project execution within a Scrum-based delivery environment, collaborating with cross-functional technology teams.",
      "Supported stakeholder reporting by tracking project progress, resource allocation, and budget data to improve visibility for senior-management decision-making.",
      "Bridged business and technical requirements to support project delivery, issue resolution, and continuous improvement.",
    ],
    skills: ["BRDs & Functional Specs", "Requirements Translation", "Scrum / Agile", "Stakeholder Reporting", "Budget Tracking", "Testing Coordination"],
  },
  {
    id: "dreamskill",
    role: "Co-Founder & Freelance Project Developer (Dreamskill)",
    company: "Dreamskill",
    location: "Kannur, India",
    period: "Sep 2020 – Aug 2022",
    badge: "Self-employed",
    type: "Self-employed",
    description:
      "Co-founded a student initiative during COVID-19, managing end-to-end project requirements, customer solutions, budgeting, and operations.",
    contributions: [
      "Co-founded a six-member student initiative during COVID-19, contributing to requirements, budgeting, business processes, execution, and sales.",
      "Coordinated project activities and customer requirements for freelance projects, ensuring requirements were understood and translated into deliverable solutions.",
      "Delivered STEM-based technical classes for school students and managed project execution across multiple activities.",
      "Contributed to business development and operational activities while coordinating with team members and customers.",
    ],
    skills: ["Requirements Scoping", "Budgeting", "Business Processes", "Project Coordination", "Customer Requirements", "Business Development"],
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
