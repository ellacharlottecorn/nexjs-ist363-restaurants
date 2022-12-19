// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'ist363-restaurants.local',
        },
        {
          protocol: 'https',
          hostname: 'restaurants.ist363.xyz',
        },
      ],
    },
  }