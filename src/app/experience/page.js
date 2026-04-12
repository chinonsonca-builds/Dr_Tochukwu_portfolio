import styles from './experience.module.css';
import CVRequestForm from './CVRequestForm';

export const metadata = {
  title: "Experience | Dr. Tochukwu Nwachukwu",
};

export default function Experience() {
  const experiences = [
    {
      company: "Federal Ministry of Industry, Trade and Investment (FMITI)",
      role: "Senior Special Adviser on Economic Intelligence",
      date: "Present",
      description: "Providing high-level economic intelligence and advisory services to the Ministry to optimize trade policies and industrial growth."
    },
    {
      company: "Preston Consults Limited",
      role: "Chief Executive Officer",
      date: "July 2013 – Present",
      description: "Leading research, public policy analysis, and management technical assistance for national governments and international agencies."
    },
    {
      company: "Budget Office of the Federation",
      role: "Technical Adviser",
      date: "June 2012 – July 2013",
      description: "Developed the Federal Government’s Fiscal Strategy Paper and MTREF frameworks. Advised on budget decision-making and negotiations."
    },
    {
      company: "Office of the Chief Economic Adviser to the President",
      role: "Special Assistant to the President (Financial Sector)",
      date: "Oct 2010 – Jul 2011",
      description: "Undertook objective and evidence-based research on the Nigerian financial sector to assist the President in formulating sound national and international economic strategies."
    },
    {
      company: "Access Bank Plc",
      role: "Head, Economic Development and Special Intervention / Head, Economic Intelligence & Research",
      date: "Aug 2009 – Oct 2010",
      description: "Managed the Bankers’ Committee Sub-Committee on Economic Development and performed complex market research for executive management positioning."
    },
    {
      company: "International Monetary Fund (IMF)",
      role: "Visiting Fellow, IMF Institute",
      date: "Oct 2008 – Dec 2008",
      description: "Carried out policy-relevant research on macro-financial linkages and determinants of private saving."
    }
  ];

  return (
    <main className={styles.expContainer}>
      <h1 className={styles.title}>Professional Experience</h1>
      <p className={styles.subtitle}>A 26-year track record spanning government, banking, academia, and international development.</p>

      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <h2 className={styles.company}>{exp.company}</h2>
            <div className={styles.roleDate}>
              <span className={styles.role}>{exp.role}</span>
              <span className={styles.date}>{exp.date}</span>
            </div>
            <p className={styles.description}>{exp.description}</p>
          </div>
        ))}
      </div>
      
      <CVRequestForm />

    </main>
  );
}
