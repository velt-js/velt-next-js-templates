/** @type {import('next').NextConfig} */
const path = require('path');

// Helper to get package directory from main entry (for webpack alias deduplication)
const getPackageDir = (packageName) => {
  try {
    const resolved = require.resolve(packageName);
    let dir = path.dirname(resolved);
    while (dir !== '/' && !dir.endsWith(`node_modules/${packageName}`) && !dir.endsWith(`node_modules\\${packageName}`)) {
      const parent = path.dirname(dir);
      if (parent === dir) break;
      dir = parent;
    }
    return dir;
  } catch {
    return packageName;
  }
};

const nextConfig = {
  transpilePackages: ['@veltdev/react', '@veltdev/tiptap-crdt-react', '@veltdev/tiptap-crdt'],
  webpack: (config) => {
    // Resolve packages to single instances to prevent duplicate package issues
    config.resolve.alias = {
      ...config.resolve.alias,
      // Ensure single instances of Yjs packages
      'yjs': getPackageDir('yjs'),
      'y-prosemirror': getPackageDir('y-prosemirror'),
      'lib0': getPackageDir('lib0'),
    };
    return config;
  },
  turbopack: {
    resolveAlias: {
      // Ensure single instances of Yjs packages (turbopack uses package names, not absolute paths)
      'yjs': 'yjs',
      'y-prosemirror': 'y-prosemirror',
      'lib0': 'lib0',
    },
  },
}

module.exports = nextConfig
