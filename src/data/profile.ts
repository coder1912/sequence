export interface Profile {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  narrative: string;
  summary: string;
  email: string;
  location: string;
  links: {
    linkedin: string;
    github: string;
    credly: string;
    googleSkills: string;
    googleDriveProjects: string;
  };
}

export const PROFILE: Profile = {
  name: "AKHIL AJITH K C",
  title: "BUSINESS ANALYST",
  tagline: "Business Requirements · Process Improvement · Data-Driven Decisions",
  headline: "I turn business problems into actionable solutions.",
  narrative:
    "Business Analyst focused on understanding business needs, translating requirements into practical solutions, and using data-driven insights to support better decisions. With a foundation in Computer Science & Engineering and a completed MBA in Banking & Financial Engineering, majoring in Financial Engineering with minors in Business Analytics and Digital Marketing, I bring together business understanding, analytical thinking, and technical knowledge.",
  summary:
    "My core focus is Business Analysis, including requirements analysis, stakeholder collaboration, project coordination, process improvement, and solution evaluation. My supporting strengths include Data Analytics, MIS Reporting, Financial Modelling, and Banking & Risk Analytics.",
  email: "akhilajithkc@gmail.com",
  location: "Kerala, India",
  links: {
    linkedin: "https://www.linkedin.com/in/akhil-ajith-kc-452789313/",
    github: "https://github.com/coder1912",
    credly: "https://www.credly.com/users/akhil-ajith.ade81049/badges/credly",
    googleSkills: "https://www.skills.google/public_profiles/5a7f47c2-6b67-4b2f-becf-4495da56ce59",
    googleDriveProjects: "https://drive.google.com/drive/u/2/folders/1-BViDTPG3cKgVDHdKlVcSONFnmRDJsQw",
  },
};
