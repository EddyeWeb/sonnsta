/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos", "images.unsplash.com"],
    unoptimized: true, // <<< EZ A LÉNYEG
  },
  output: 'export', // <<< statikus export
};

export default nextConfig;
