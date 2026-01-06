/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // enables static export
  assetPrefix: isProd ? '/saksham-portfolio/' : '', // only for production
};

module.exports = nextConfig;
