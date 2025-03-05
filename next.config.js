/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "platform-lookaside.fbsbx.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
