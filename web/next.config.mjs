import nextra from "nextra";

const nextConfig = {
  images: {
    domains: ["github.com"],
  },
};

// Set up Nextra with its configuration
const withNextra = nextra({});

// Export the final Next.js config with Nextra included
export default withNextra({
  ...nextConfig,
});
