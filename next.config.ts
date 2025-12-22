import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

   images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
          port: "",
          pathname: "/images/**",
        },
        {
          protocol: "https",
          hostname: "cdn.creazilla.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
};

export default nextConfig;
