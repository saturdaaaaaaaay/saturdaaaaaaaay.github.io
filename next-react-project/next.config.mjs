/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true
    },
    assetprefix: isProd ? '/react_website_test/' : '',
    basePath: isProd ? '/react_website_test' : '',
    output: 'export'
};

export default nextConfig;
