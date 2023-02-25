/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports  = {
  webpack: (config, { isServer }) => {
    // Add the Solidity loader for .sol files
    config.module.rules.push({
      test: /\.sol$/,
      use: [
        {
          loader: "@truffle/solidity-loader",
          options: {
            network: "development",
          },
        },
      ],
    });

    return config;
  },
};
