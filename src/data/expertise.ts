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
    id: "embedded-iot",
    number: "01",
    title: "EMBEDDED SYSTEMS & IoT",
    subtitle: "Hardware engineering foundation & physical computing",
    description:
      "Deep technical foundation in low-level firmware architecture, hardware debugging, sensor acquisition, and real-time edge telemetry protocols that bridge the physical and digital domains.",
    skills: [
      "C",
      "C++",
      "Embedded C",
      "Microcontrollers",
      "Embedded Systems",
      "Hardware Debugging",
      "CAN",
      "I2C",
      "SPI",
      "UART",
      "MODBUS",
      "Arduino",
      "IoT",
    ],
  },
  {
    id: "financial-analysis",
    number: "02",
    title: "FINANCIAL ANALYSIS",
    subtitle: "Quantitative valuation, forecasting & regulatory compliance",
    description:
      "Advanced business acumen in pro-forma financial modeling, sensitivity forecasting, capital budgeting, and banking compliance risk assessment honed through specialized MBA engineering coursework.",
    skills: [
      "Financial Modelling",
      "Financial Forecasting",
      "FP&A",
      "Financial Reporting",
      "Risk Assessment",
      "Credit Risk",
      "AML",
      "Fraud Risk",
      "Budget Tracking",
      "Banking Operations",
      "Excel",
      "Tally ERP",
    ],
  },
  {
    id: "business-data-analytics",
    number: "03",
    title: "BUSINESS & DATA ANALYTICS",
    subtitle: "Core analytical mindset & executive decision intelligence",
    description:
      "Primary professional capability: translating ambiguous operational problems into structured SQL/Python ETL pipelines, predictive statistical insights, and automated Power BI dashboards adopted by C-suite leaders.",
    skills: [
      "SQL",
      "Python",
      "Power BI",
      "DAX",
      "Tableau",
      "Advanced Excel",
      "Data Cleaning",
      "Data Validation",
      "ETL",
      "Data Visualization",
      "Dashboard Development",
      "MIS Reporting",
      "Requirements Gathering",
      "Stakeholder Management",
      "Agile/Scrum",
      "UAT/Test Support",
    ],
  },
];
