import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          
          <div className="hero-text-content" style={{ marginTop: '-40px' }}>
            <h1 className="hero-heading" style={{ marginTop: '0' }}>
              Dr. Tochukwu<br/><span>Nwachukwu</span>
            </h1>
            <h2 style={{fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '15px', lineHeight: '1.6' }}>
              Economist <span style={{color: 'var(--accent-color)'}}>|</span> PFM Expert <span style={{color: 'var(--accent-color)'}}>|</span> Senior Special Adviser - FMITI <span style={{color: 'var(--accent-color)'}}>|</span> CEO - <a href="https://prestonconsultsltd.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>Preston Consults Limited</a>
            </h2>
            <p className="hero-description" style={{ fontSize: '1rem', marginBottom: '35px' }}>
              Over 26 years of strategic insight, driving public financial management and bridging academia, banking, and government.
            </p>
            <div className="hero-buttons">
              <Link href="/publications" className="hero-btn-primary">View Publications</Link>
              <Link href="/contact" className="hero-btn-secondary">Request Consultation</Link>
            </div>
          </div>

          <div className="hero-image-wrapper">
             <img 
              src="https://res.cloudinary.com/dnafn0y7z/image/upload/w_800,f_auto,q_auto,c_crop/v1/Dr_Toch_Profile_hr5g6x.jpg" 
              alt="Dr. Tochukwu Nwachukwu" 
              className="hero-image"
            />
          </div>

          <div className="hero-video-wrapper">
            <video 
              className="hero-inline-video" 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="https://res.cloudinary.com/dnafn0y7z/video/upload/v1775994725/Dr_Toch_BGV_xjovpz.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </section>
    </main>
  );
}
