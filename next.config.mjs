/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,    // ✅ এটা যোগ করুন - double render বন্ধ হবে
  reactCompiler: true,       
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',         
      },
      {
        protocol: 'https',
        hostname: 'postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'iili.io',
      },
    ],
  },
};

export default nextConfig;