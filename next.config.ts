/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // assetPrefix is NOT needed for username.github.io sites
  images: {
    unoptimized: true, // Helpful for static export
  }
};

module.exports = nextConfig;
