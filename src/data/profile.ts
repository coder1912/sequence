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
  title: "DATA & BUSINESS ANALYST",
  tagline: "Engineering foundation. Analytical mindset. Business perspective.",
  headline: "Turning data into decisions, with an engineering foundation.",
  narrative:
    "Data & Business Analyst combining a computer science and embedded systems engineering foundation with an MBA in Banking & Financial Engineering. Specialized in requirement gathering, ETL automation, financial modeling, and executive KPI reporting.",
  summary:
    "Experienced in analyzing business problems across banking, finance, and operations. Proven track record of streamlining ETL pipelines (cutting prep time by 30%), conducting AML and fraud risk analytics across 10,000+ transactions, and engineering production IoT firmware deployments.",
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
