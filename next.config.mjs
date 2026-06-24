/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
};

export default nextConfig;
