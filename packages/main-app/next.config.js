const { VENDOR_URL } = process.env;

module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/vendor",
        destination: `${VENDOR_URL}/vendor`,
      },
      {
        source: "/vendor/:path*",
        destination: `${VENDOR_URL}/vendor/:path*`,
      },
    ];
  },
  reactStrictMode: true,
};
