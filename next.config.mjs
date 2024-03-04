/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: '/about/index.html',
        destination: '/about',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
