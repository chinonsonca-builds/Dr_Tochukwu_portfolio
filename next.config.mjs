/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Static HTML export → deploys to Cloudflare Pages
  trailingSlash: true,     // Cloudflare Pages prefers /about/ over /about
  images: {
    unoptimized: true      // Required for static export (images served from Cloudinary CDN)
  },
};

export default nextConfig;
