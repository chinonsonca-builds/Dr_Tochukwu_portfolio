import styles from './publications.module.css';

export const metadata = {
  title: "Publications | Dr. Tochukwu Nwachukwu",
};

export default function Publications() {
  const technicalReports = [
    { title: "Project Implementation Completion and Impact Evaluation Report for the FGIP", publisher: "Federal Ministry of Finance / World Bank", year: "2024–2025", category: "Technical Report", link: "https://prestonconsultsltd.com/fgip-2025/" },
    { title: "Stakeholder Management for the National Assembly Library Trust Funds (NALTF)", publisher: "National Assembly", year: "2024", category: "Technical Report", link: "https://prestonconsultsltd.com/stakeholder-management/" },
    { title: "Data Collection for the 2024 Subnational Ease of Doing Business (EoDB) Survey", publisher: "PEBEC / World Bank", year: "2024", category: "Technical Report", link: "https://prestonconsultsltd.com/eodb-2024/" },
    { title: "Data Collection for the 2022 Subnational Ease of Doing Business (EoDB) Survey", publisher: "PEBEC", year: "2021–2022", category: "Technical Report", link: "https://prestonconsultsltd.com/track-record/" },
    { title: "Development of Training Needs Assessment (TNA) Tools", publisher: "Yobe State Government", year: "Jan–Mar 2021", category: "Technical Report", link: "https://prestonconsultsltd.com/trainingtools/" },
    { title: "Diagnostic Study of the Nigerian Health Sector", publisher: "Mastercard Foundation", year: "2021", category: "Technical Report", link: "https://prestonconsultsltd.com/track-record/" }
  ];

  const policyBriefs = [
    { title: "Impact of COVID-19 Pandemic on the Nigerian Economy and Government Policy Response", publisher: "Preston Consults", year: "2023", category: "Public Policy Brief", link: "https://prestonconsultsltd.com/covid-19-brief/" },
    { title: "Nigeria's Multi-Dimensional Poverty Index 2022: A tool for Evidence-Based Policy Making", publisher: "Preston Consults", year: "2022", category: "Public Policy Brief", link: "https://prestonconsultsltd.com/nigerias-multidimensional-poverty-index-2022/" },
    { title: "Nigeria's Fragile Economic Recovery: Bold Reforms Needed For Resilience", publisher: "Preston Consults", year: "2022", category: "Public Policy Brief", link: "https://prestonconsultsltd.com/nigerias-fragile-economic-recovery/" },
    { title: "Energy Subsidy Reforms in Nigeria: Getting it Right", publisher: "Preston Consults", year: "2020", category: "Public Policy Brief", link: "https://prestonconsultsltd.com/energysubsidyreforms/" },
    { title: "Building Resilience and Driving Transformation in the Health Sector: Policy Response to COVID-19 in Nigeria", publisher: "Preston Consults", year: "2020", category: "Public Policy Brief", link: "https://prestonconsultsltd.com/building-resilience-and-driving-transformation-in-the-health-sector/" },
    { title: "Driving Industrialization through Manufacturing Sector Growth: Policy Response to COVID-19 in Nigeria", publisher: "Preston Consults", year: "2020", category: "Public Policy Brief", link: "https://prestonconsultsltd.com/driving-industrialization-through-manufacturing-sector/" }
  ];

  const peerReviewedPapers = [
    { title: "Macro-Financial Linkages and Determinants of Private Saving", publisher: "IMF Institute / Peer-Reviewed", year: "2008", category: "Peer-Reviewed Paper" },
    { title: "Econometric Analysis of the Nigerian Financial Sector", publisher: "University of Ibadan Research Press", year: "2009", category: "Peer-Reviewed Paper" }
  ];

  return (
    <main className={styles.pubContainer}>
      <h1 className={styles.title}>Publications &amp; Reports</h1>
      <p className={styles.subtitle}>A curated library of technical reports, policy briefs, and peer-reviewed journals.</p>

      <h2 className={styles.sectionTitle}>Technical Reports</h2>
      <div className={styles.grid}>
        {technicalReports.map((doc, idx) => (
          <a key={`tech-${idx}`} href={doc.link} target="_blank" rel="noopener noreferrer" className={styles.card} style={{ textDecoration: 'none', display: 'flex' }}>
            <div className={styles.category}>{doc.category}</div>
            <h2 className={styles.cardTitle}>{doc.title}</h2>
            <div className={styles.cardMeta}>
              <span>{doc.publisher}</span>
              <strong>{doc.year}</strong>
            </div>
          </a>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Public Policy Briefs</h2>
      <div className={styles.grid}>
        {policyBriefs.map((doc, idx) => (
          <a key={`policy-${idx}`} href={doc.link} target="_blank" rel="noopener noreferrer" className={styles.card} style={{ textDecoration: 'none', display: 'flex' }}>
            <div className={styles.category}>{doc.category}</div>
            <h2 className={styles.cardTitle}>{doc.title}</h2>
            <div className={styles.cardMeta}>
              <span>{doc.publisher}</span>
              <strong>{doc.year}</strong>
            </div>
          </a>
        ))}
      </div>

      <h2 className={styles.sectionTitle}>Peer-Reviewed Papers</h2>
      <div className={styles.grid}>
        {peerReviewedPapers.map((doc, idx) => (
          <div key={`peer-${idx}`} className={styles.card}>
            <div className={styles.category}>{doc.category}</div>
            <h2 className={styles.cardTitle}>{doc.title}</h2>
            <div className={styles.cardMeta}>
              <span>{doc.publisher}</span>
              <strong>{doc.year}</strong>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
