export interface ExpertisePillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
}

export const EXPERTISE_PILLARS: ExpertisePillar[] = [
  {
    id: "business-analysis",
    number: "01",
    title: "BUSINESS ANALYSIS",
    subtitle: "Requirements analysis, process improvement & solution delivery",
    description:
      "Primary professional focus: translating business needs into actionable solutions through structured requirements analysis, BRDs, functional specifications, stakeholder collaboration, and Agile project coordination.",
    skills: [
      "Business Analysis",
      "Requirements Analysis",
      "Requirements Gathering & Documentation",
      "Business Requirements Documents (BRDs)",
      "Functional Specifications",
      "Stakeholder Collaboration",
      "Stakeholder Management & Engagement",
      "Business Process Analysis",
      "Business Process Improvement",
      "Gap Analysis",
      "Project Coordination",
      "Agile & Scrum",
      "Problem-Solving",
      "Root-Cause Analysis",
      "Solution Evaluation",
      "Business Rules",
      "Continuous Improvement",
      "Project Planning & Tracking",
      "Issue Resolution",
      "Cross-functional Team Coordination",
      "Resource Planning",
      "Budget Tracking",
      "Testing Coordination",
    ],
  },
  {
    id: "data-analytics-bi",
    number: "02",
    title: "DATA ANALYTICS & BUSINESS INTELLIGENCE",
    subtitle: "Interactive dashboards, MIS reporting & decision intelligence",
    description:
      "Transforming operational and transactional datasets into executive decision support via interactive Tableau and Power BI dashboards, automated SQL/Python ETL pipelines, and structured MIS reporting.",
    skills: [
      "Data Analysis",
      "Business Intelligence",
      "Management Information Systems (MIS)",
      "MIS Reporting",
      "KPI Monitoring",
      "Dashboard Development",
      "Business Performance Analysis",
      "Data Visualization",
      "Tableau",
      "Microsoft Power BI",
      "DAX",
      "Microsoft Excel & Advanced Excel",
      "SQL",
      "Microsoft SQL Server",
      "Python",
      "Pandas",
      "ETL",
      "Data Cleaning",
      "Data-Driven Decision Support",
      "Reporting & Analysis",
    ],
  },
  {
    id: "finance-banking-analytics",
    number: "03",
    title: "FINANCE & BANKING ANALYTICS",
    subtitle: "Financial modelling, banking risk & regulatory compliance",
    description:
      "Quantitative financial analysis combining pro-forma financial modelling, budget variance analysis, credit risk evaluation, and transaction monitoring for AML and fraud risk detection.",
    skills: [
      "Financial Analysis",
      "Financial Modelling",
      "Financial Engineering",
      "Banking Analytics",
      "Banking Risk Analytics",
      "Credit Risk Analysis",
      "Risk Analytics",
      "Anti-Money Laundering (AML)",
      "Fraud Detection",
      "Fraud Risk Assessment",
      "Budget Analysis",
      "Financial Reporting",
      "Financial Services",
    ],
  },
];
