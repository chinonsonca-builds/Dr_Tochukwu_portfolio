import styles from './media.module.css';

export const metadata = {
  title: "Media & Presentations | Dr. Tochukwu Nwachukwu",
  description: "Media appearances, keynote speeches, and conference presentations by Dr. Tochukwu Nwachukwu."
};

export default function Media() {
  const mediaAppearances = [
    { title: "Nigeria's Economic Outlook: Reforms and Risks", outlet: "Channels Television – Business Morning", year: "2024", type: "TV Appearance" },
    { title: "Public Financial Management Challenges in Nigeria", outlet: "TVC News – Business Connect", year: "2023", type: "TV Appearance" },
    { title: "Energy Subsidy Removal: Economic Implications", outlet: "Arise News – The Morning Show", year: "2023", type: "TV Appearance" },
    { title: "Nigeria's Debt Profile and Sovereign Risk", outlet: "NTA Network – Economy Watch", year: "2021", type: "TV Appearance" },
    { title: "COVID-19 Economic Recovery Strategies for Nigeria", outlet: "Channels Television", year: "2020", type: "TV Appearance" },
    { title: "Fiscal Policy and Budget Performance Analysis", outlet: "Voice of Nigeria (VON Radio)", year: "2019", type: "Radio Appearance" },
  ];

  const keynotePresentations = [
    { title: "Subnational PFM Reforms: Lessons from Nigeria's States", outlet: "International Monetary Fund (IMF) Seminar, Washington D.C.", year: "2023", type: "Keynote Speech" },
    { title: "Ease of Doing Business: The Road to Investment-Led Growth", outlet: "World Bank-PEBEC National Summit, Abuja", year: "2022", type: "Keynote Speech" },
    { title: "Industrialization Policy and Economic Diversification in Nigeria", outlet: "FMITI Annual Policy Dialogue, Abuja", year: "2022", type: "Keynote Speech" },
    { title: "Budget Credibility and Fiscal Transparency in West Africa", outlet: "African Development Bank (AfDB) Governance Forum", year: "2019", type: "Keynote Speech" },
  ];

  const conferencePresentations = [
    { title: "Macro-Financial Linkages and Determinants of Private Saving", outlet: "African Economic Research Consortium (AERC) Biannual Conference", year: "2009", type: "Conference Paper" },
    { title: "Pension Reforms and Social Protection in Nigeria", outlet: "Nigerian Economic Society (NES) Annual Conference", year: "2016", type: "Conference Paper" },
    { title: "Governance and PFM: Moving from Compliance to Performance", outlet: "Global Development Network (GDN) Annual Conference, New Delhi", year: "2018", type: "Conference Paper" },
    { title: "Climate Finance and Green Budgeting in Sub-Saharan Africa", outlet: "African Union Economic Commission Conference", year: "2021", type: "Conference Paper" },
  ];

  const renderCards = (list, prefix) => list.map((item, idx) => (
    <div key={`${prefix}-${idx}`} className={styles.card}>
      <div className={styles.cardType}>{item.type}</div>
      <h2 className={styles.cardTitle}>{item.title}</h2>
      <div className={styles.cardMeta}>
        <span>{item.outlet}</span>
        <strong>{item.year}</strong>
      </div>
    </div>
  ));

  return (
    <main className={styles.mediaContainer}>
      <h1 className={styles.title}>Media & Presentations</h1>
      <p className={styles.subtitle}>
        A record of Dr. Tochukwu Nwachukwu's media engagements, keynote addresses, and academic conference presentations spanning over a decade of public discourse.
      </p>

      <h2 className={styles.sectionTitle}>📺 Media Appearances</h2>
      <div className={styles.grid}>
        {renderCards(mediaAppearances, 'media')}
      </div>

      <h2 className={styles.sectionTitle}>🎤 Keynote Speeches</h2>
      <div className={styles.grid}>
        {renderCards(keynotePresentations, 'keynote')}
      </div>

      <h2 className={styles.sectionTitle}>🎓 Conference Presentations</h2>
      <div className={styles.grid}>
        {renderCards(conferencePresentations, 'conference')}
      </div>
    </main>
  );
}
