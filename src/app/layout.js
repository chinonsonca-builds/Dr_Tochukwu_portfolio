import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Dr. Tochukwu Nwachukwu | Economist & PFM Expert",
  description: "Portfolio of Dr. Tochukwu Nwachukwu, Senior Special Adviser to FMITI on Economic Intelligence, Economist and Public Financial Management Expert.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
