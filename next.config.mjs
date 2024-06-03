/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        VARIABLE_NAME: 'value',
        UPSTASH_REDIS_REST_URL: 'http://localhost:3000/',
      }
};

export default nextConfig;
