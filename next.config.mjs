import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || process.env.NEXT_BASE_PATH || "";
const normalizedBasePath = basePath.startsWith("/") ? basePath : basePath ? `/${basePath}` : "";
const assetPrefix = normalizedBasePath ? `${normalizedBasePath}/` : undefined;

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix,
  basePath: normalizedBasePath || undefined,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
})

export default withMDX(nextConfig);
