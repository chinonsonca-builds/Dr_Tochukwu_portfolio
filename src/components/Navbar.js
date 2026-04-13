import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link href="/" className="navbar-logo">
          <img 
            src="https://res.cloudinary.com/dnafn0y7z/image/upload/w_150,h_150,c_fill,r_max/v1/Dr_Toch_Profile_hr5g6x.jpg" 
            alt="Home" 
            className="nav-profile-img"
          />
        </Link>
        <div className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/publications">Publications</Link>
          <Link href="/media">Media & Presentations</Link>
          <Link href="/contact">Consultation</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
