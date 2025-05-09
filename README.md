# PasteMax

<p align="center">
   <img src="https://github.com/user-attachments/assets/fe5ed9f2-fcb1-41d7-bc38-fb130fadf116" width="150" alt="PasteMaxIcon">
</p>

<p align="center">
   A modern file viewer application for developers to easily navigate, search, and copy code from repositories.<br/>
   Ideal for pasting into ChatGPT or your LLM of choice. Built with Electron, React, and TypeScript.
</p>

<p align="center">
   <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT"></a>
   <a href="https://github.com/kleneway/pastemax/issues"><img src="https://img.shields.io/github/issues/kleneway/pastemax" alt="GitHub issues"></a>
   <a href="https://github.com/kleneway/pastemax/releases"><img src="https://img.shields.io/github/v/release/kleneway/pastemax" alt="GitHub releases"></a>
</p>

## Overview

PasteMax is a simple desktop app built for developers using AI coding assistants. It makes sharing your code with LLMs easy, thanks to a smart file explorer with token counting, file filtering, quick copy, and a previewer. Select the files you need, skip binaries and junk, and get clean, formatted snippets ready for your LLM.

![PasteMax](https://github.com/user-attachments/assets/85ac9935-5ff9-45b2-b9fe-6b6cbdcdf6e7)
![IgnoreList](https://github.com/user-attachments/assets/25c4a56f-1470-4a91-a0f1-fe8d439e435d)
![FilePreviewer](https://github.com/user-attachments/assets/8f98fcca-3557-4225-92f4-38387cf6e843)

## Video

[YouTube Link](https://youtu.be/YV-pZSDNnPo)

## Features

- **File Tree Navigation**: Browse directories and files with an expandable tree view
- **Token Counting**: View the approximate token count for each file (useful for LLM context limits)
- **Search Capabilities**: Quickly find files by name or content
- **Selection Management**: Select multiple files and copy their contents together
- **Sorting Options**: Sort files by name, size, or token count
- **File Previewer**: View file contents in a dedicated preview pane
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing in any environment
- **Binary File Detection**: Automatic detection and exclusion of binary files
- **Smart File Exclusion**: Automatically excludes common files like package-lock.json, binary files, and more by default
- **File Change Watcher**: Automatically updates the files whenever changes are detected

## Installation

### Download Binary

Download the latest version from the [releases page](https://github.com/kleneway/pastemax/releases).

### Or Build from Source

1. Clone the repository:

```
git clone https://github.com/kleneway/pastemax.git
cd pastemax
```

2. Install dependencies:

```
npm install
```

3. Build the app:

```
npm run build:electron
npm run package
```

**Note**: If you encounter issues with `npm run package`, you can try the platform-specific command:

```
npm run package:win
npm run package:mac
npm run package:linux
```

After successful build, you'll find the executable files inside the `release-builds` directory:

**Windows:**

- `PasteMax Setup 1.0.0.exe` - Installer version
- `PasteMax 1.0.0.exe` - Portable version

**Mac:**

- `PasteMax 1.0.0.dmg` - Installer version
- `PasteMax 1.0.0.zip` - Portable version

**Linx:**

- `PasteMax 1.0.0.deb` - Installer version (Deb package)
- `PasteMax 1.0.0.rpm` - Installer version (RPM package)
- `PasteMax 1.0.0.AppImage` - Portable version

## Development

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Running in Development Mode

To run the application in development mode:

```
# Start the Vite dev server
npm run dev

# In a separate terminal, start Electron
npm run dev:electron
```

### Building for Production

To build the application for production:

```
# Build the React app with Vite and update paths for Electron
npm run build:electron

# Create platform-specific distributables
npm run package
```

## Project Structure

- `src/` - React application source code
  - `components/` - React components
  - `context/` - React context providers
  - `hooks/` - Custom React hooks
  - `types/` - TypeScript type definitions
  - `utils/` - Utility functions
  - `styles/` - CSS styles
  - `assets/` - Static assets like images
- `electron/` - Electron-related files
  - `main.js` - Electron main process
  - `preload.js` - Preload script for secure IPC
  - `renderer.js` - Renderer process utilities
  - `build.js` - Build script for production
  - `excluded-files.js` - Configuration for files to exclude by default
- `public/` - Public assets (favicon, etc.)
- `scripts/` - Utility scripts for building and testing
- `docs/` - Documentation

## Libraries Used

- Electron - Desktop application framework
- React - UI library
- TypeScript - Type safety
- Vite - Build tool and development server
- tiktoken - Token counting for LLM context estimation
- ignore - .gitignore-style pattern matching for file exclusions
- chokidar - File Watcher

## Troubleshooting

### "Cannot find module 'ignore'" error

If you encounter this error when running the packaged application:

```
Error: Cannot find module 'ignore'
Require stack:
- /Applications/PasteMax.app/Contents/Resources/app.asar/main.js
```

This is caused by dependencies not being properly included in the package. To fix it:

1. Run the dependency fixer script:

   ```
   node fix-dependencies.js
   ```

2. Rebuild the application:

   ```
   npm run build:electron && npm run package
   ```

3. Install the new version

### Other Issues

If you encounter other issues, please [report them on GitHub](https://github.com/kleneway/pastemax/issues).

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Star History ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=kleneway/pastemax&type=Date)](https://www.star-history.com/#kleneway/pastemax&Date)

---
