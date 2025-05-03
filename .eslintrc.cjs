module.exports = {
  root: true, // Indicates this is the root ESLint configuration file
  env: {
    browser: true, // Enable browser global variables
    es2020: true,  // Use ES2020 globals and features
    node: true      // Enable Node.js global variables and Node.js scoping
  },
  extends: [
    "eslint:recommended", // Use ESLint's recommended rules
    "plugin:@typescript-eslint/recommended", // Use recommended TypeScript rules
    "plugin:react-hooks/recommended", // Use recommended rules for React Hooks
  ],
  ignorePatterns: [
    "dist", // Ignore build output directory
    ".eslintrc.cjs", // Ignore the config file itself
    'electron/build.js', // Ignore build script
    'electron/dev.js', // Ignore dev script
    // Add other files/directories to ignore as needed
  ],
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './electron/tsconfig.json'], // Point to tsconfig files
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react-refresh"], // Additional plugins to use
  rules: {
    "react-refresh/only-export-components": [
      "warn", // Warn instead of error
      { allowConstantExport: true }, // Allow constant exports alongside component exports
    ],
    "@typescript-eslint/no-explicit-any": "off", // Disable error for using 'any' type during development
    "@typescript-eslint/no-var-requires": "off", // Allow CommonJS require() syntax without errors
    "@typescript-eslint/no-unused-vars": "warn", // Warn about declared but unused variables
    "react-hooks/exhaustive-deps": "off", // Disable warning for missing dependencies in useEffect
    // Add or override rules here based on Project Rules
    // Example: require explicit return types (optional, but good practice)
    // '@typescript-eslint/explicit-function-return-type': 'warn',
    // Example: Enforce consistent type imports
    // '@typescript-eslint/consistent-type-imports': 'warn',
    // Allow console.log in development, warn in production (requires NODE_ENV check)
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    // More strict rules can be added here as required by core-rules.md
    // e.g., specific naming conventions, complexity limits, etc.
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version being used
    },
  },
};
