/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "images.unsplash.com"],
    unoptimized: true,
  },
  output: 'export',
};

export default nextConfig;
