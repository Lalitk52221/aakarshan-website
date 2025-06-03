import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
        port: "",
        pathname: "/public/**",
      },
    ],
  }
  
  /* config options here */
};

export default nextConfig;
