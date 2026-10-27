/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // build to a static "out" folder
  basePath: '/soonconnections',   // site lives at /soonconnections, not the domain root
  images: { unoptimized: true },  // next/image optimization needs a server
};

export default nextConfig;