import styles from './about.module.css';

export const metadata = {
  title: "About Dr. Tochukwu Nwachukwu",
  description: "Biography, Education and Key Qualifications of Dr. Tochukwu Nwachukwu."
};

export default function About() {
  return (
    <main className={styles.aboutContainer}>
      <h1 className={styles.title}>About Dr. Tochukwu</h1>
      
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <img 
            src="https://res.cloudinary.com/dnafn0y7z/image/upload/w_600,c_scale/v1/Dr_Toch_Profile_hr5g6x.jpg" 
            alt="Dr. Tochukwu Nwachukwu" 
            className={styles.profileImg} 
          />
        </div>
        
        <div className={styles.bioText}>
          <p>
            Dr. Tochukwu Nwachukwu is a performance-focused economist and public financial management expert with a strong track record of success and twenty-six years of senior management experience spanning the academia, banking, international development, management consulting, not-for-profits, and the public sector.
          </p>
          <p>
            He is currently the Senior Special Adviser to the Federal Ministry of Industry, Trade and Investment (FMITI) on Economic Intelligence. Previously, he served as a Special Assistant on Financial Sector to the Nigerian President, and Technical Adviser to the Budget Office of the Federation.
          </p>
          <p>
            Over the years, Dr. Tochukwu has acquired extensive international and national technical expertise in identifying critical economic and financial policy issues; developing research and capacity development strategies; and leading the review, development, and management of a portfolio of international and economic development projects. His areas of expertise include Public Financial Management, Public Sector Governance, Economic and Social Research, Monetary and Fiscal Policy, and Development Finance.
          </p>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Education</h2>
      <div className={styles.gridList}>
        <div className={styles.listItem}>
          <div className={styles.itemYear}>2005 - 2009</div>
          <h3 className={styles.itemTitle}>Ph.D, Economics</h3>
          <p>University of Ibadan, Nigeria</p>
        </div>
        <div className={styles.listItem}>
          <div className={styles.itemYear}>2006</div>
          <h3 className={styles.itemTitle}>Postgraduate Certificate</h3>
          <p>Banking &amp; Public Policy, University of Potsdam, Germany</p>
        </div>
        <div className={styles.listItem}>
          <div className={styles.itemYear}>2003 - 2005</div>
          <h3 className={styles.itemTitle}>M.Sc, Economics</h3>
          <p>University of Ibadan, Nigeria</p>
        </div>
        <div className={styles.listItem}>
          <div className={styles.itemYear}>1995 - 2000</div>
          <h3 className={styles.itemTitle}>B.Sc, Economics</h3>
          <p>University of Ibadan, Nigeria</p>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Professional Memberships</h2>
      <div className={styles.gridList}>
        <div className={styles.listItem}>
          <h3 className={styles.itemTitle}>Global Development Network</h3>
          <p>New Delhi, India</p>
        </div>
        <div className={styles.listItem}>
          <h3 className={styles.itemTitle}>African Economic Research Consortium</h3>
          <p>Nairobi, Kenya</p>
        </div>
        <div className={styles.listItem}>
          <h3 className={styles.itemTitle}>African Evaluation Association</h3>
          <p>Accra, Ghana</p>
        </div>
        <div className={styles.listItem}>
          <h3 className={styles.itemTitle}>Nigerian Economic Society</h3>
          <p>Abuja, Nigeria</p>
        </div>
      </div>

    </main>
  );
}
