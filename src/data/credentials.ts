export interface Certification {
  id: string;
  name: string;
  issuer: string;
  period?: string;
  credentialUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  details?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  description: string;
  link?: string;
}

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "MBA — Banking & Financial Engineering, Business Analytics and Digital Marketing",
    institution: "Chandigarh University",
    location: "Mohali, India",
    period: "Aug 2024 – Jun 2026",
    details: "Focusing on financial econometrics, risk assessment, corporate modeling, and business analytics.",
  },
  {
    degree: "Emertxe Certified Embedded Professional (ECEP)",
    institution: "Emertxe Information Technologies",
    location: "Bangalore, India",
    period: "Sep 2022 – Sep 2023",
    details: "Intensive industrial program covering embedded systems, microcontrollers, real-time protocols, and hardware debugging.",
  },
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "University College of Engineering",
    location: "Thodupuzha, India",
    period: "Aug 2017 – Nov 2021",
    details: "Core computer science fundamentals: algorithms, operating systems, networking, and software engineering.",
  },
];

export const CERTIFICATIONS_LIST: Certification[] = [
  { id: "goldman-sachs", name: "Controllers, Risk & Ops", issuer: "Goldman Sachs", period: "Dec 2025" },
  { id: "moodys", name: "SME Credit Skills", issuer: "Moody's Analytics", period: "2025" },
  { id: "deloitte", name: "Data Analytics Simulation", issuer: "Deloitte Australia", period: "May 2025" },
  { id: "cisco", name: "Data Analytics Essentials", issuer: "Cisco Networking Academy", period: "Sep 2026" },
  { id: "sbsc", name: "Training Program in Banking", issuer: "State Bank Staff College, Hyderabad", period: "Apr 2025" },
  { id: "mckinsey", name: "McKinsey Forward Program", issuer: "McKinsey & Company", period: "2026" },
  { id: "gcp-bigdata", name: "Google Cloud Big Data & Machine Learning Fundamentals", issuer: "Google Cloud / Coursera" },
  { id: "uci-project", name: "Project Planning", issuer: "University of California, Irvine (Coursera)" },
  { id: "cu-dataviz", name: "Data Visualisation & Advanced Credit Program", issuer: "Chandigarh University" },
  { id: "cu-etrading", name: "E-trading Advance Credit Program", issuer: "Chandigarh University" },
  { id: "tally-erp", name: "TallyERP — Level 2", issuer: "Tally Education" },
  { id: "deep-learning", name: "Neural Networks and Deep Learning", issuer: "deeplearning.ai (Coursera)" },
  { id: "industrial-iot", name: "Industrial IoT on Google Cloud Platform", issuer: "Google Cloud (Coursera)" },
  { id: "sdpk-robotics", name: "Introduction to Robotics", issuer: "ICT Academy / ASAP Kerala & Iconic 3DP Singapore" },
  { id: "cu-ethics", name: "Business Ethics", issuer: "Chandigarh University Advance Credit Program" },
];

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: "google-dev",
    title: "Google Developer Program — Silver League",
    organization: "Google Developers",
    description: "Earned Silver League status in the Google Developer community and achieved verified Google Cloud skill badges.",
    link: "https://www.skills.google/public_profiles/5a7f47c2-6b67-4b2f-becf-4495da56ce59",
  },
  {
    id: "hacktoberfest",
    title: "GitHub Hacktober Fest 2021",
    organization: "GitHub / DigitalOcean",
    description: "Completed open-source contributions and fulfilled challenge criteria in the international annual hackathon.",
  },
  {
    id: "gcp-facilitator",
    title: "Google Cloud Facilitator Program 2021",
    organization: "Google Cloud",
    description: "Completed comprehensive cloud hands-on labs and earned multi-track Google Cloud skill badges.",
  },
  {
    id: "project-robota",
    title: "Project Robota — Smart Access Security",
    organization: "KGEC Robotics Society / Hack2skill",
    description: "Certificate of participation for innovative engineering in the smart door lock and embedded security category.",
  },
  {
    id: "dreamskill-startup",
    title: "DreamSkill Hardware Venture Founder",
    organization: "Self-Initiated Startup",
    description: "Founded and led a 6-member team during COVID-19 to design, manufacture, and distribute automated hygiene hardware.",
  },
];
