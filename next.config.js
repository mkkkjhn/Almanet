/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        unoptimized: false,
        minimumCacheTTL: 31536000
    },
}

module.exports = nextConfig
