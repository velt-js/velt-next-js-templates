import type { NextConfig } from "next";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

function getPackageDir(packageName: string): string {
  try {
    const resolved = require.resolve(packageName);
    let dir = path.dirname(resolved);
    while (
      dir !== "/" &&
      !dir.endsWith(`node_modules/${packageName}`) &&
      !dir.endsWith(`node_modules\\${packageName}`)
    ) {
      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
    return dir;
  } catch {
    return packageName;
  }
}

const nextConfig: NextConfig = {
  transpilePackages: [
    "@veltdev/react",
    "@veltdev/tiptap-crdt-react",
    "@veltdev/tiptap-crdt",
  ],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      yjs: getPackageDir("yjs"),
      "y-prosemirror": getPackageDir("y-prosemirror"),
      lib0: getPackageDir("lib0"),
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      yjs: "yjs",
      "y-prosemirror": "y-prosemirror",
      lib0: "lib0",
    },
  },
};

export default nextConfig;
