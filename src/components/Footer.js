import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h3>Dr. Tochukwu Nwachukwu</h3>
        <p>Economist &amp; Public Financial Management Expert</p>
        
        <div className="footer-links">
          <a href="https://linkedin.com/in/tochukwu-nwachukwu-ph-d-63650710" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:t.nwachukwu@prestonconsultsltd.com">
            t.nwachukwu@prestonconsultsltd.com
          </a>
        </div>
        
        <p style={{marginTop: '20px', fontSize: '0.85rem', color: 'var(--text-secondary)'}}>
          &copy; {new Date().getFullYear()} Dr. Tochukwu Nwachukwu. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
