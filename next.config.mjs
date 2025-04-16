/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Whitelist Sanity's image CDN
    },
};

export default nextConfig;