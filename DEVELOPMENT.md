# Development Guide

This guide will help you set up and work on the JavaScript Code Challenges project.

## Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git
- A code editor (VS Code recommended)

## Setting Up Development Environment

### 1. Fork and Clone

```bash
# Fork the repository on GitHub first, then:
git clone https://github.com/YOUR_USERNAME/javascript-code-challenges.git
cd javascript-code-challenges
```

### 2. Install Dependencies

```bash
cd web
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
javascript-code-challenges/
├── .github/                    # GitHub configuration
│   ├── workflows/              # CI/CD workflows
│   │   └── ci.yml             # Automated testing and building
│   ├── ISSUE_TEMPLATE/         # Issue templates
│   └── pull_request_template.md
├── web/                        # Next.js application
│   ├── src/
│   │   └── app/
│   │       ├── challenges/     # Challenge pages by category
│   │       │   ├── primitives/
│   │       │   ├── collections/
│   │       │   ├── functions/
│   │       │   ├── objects/
│   │       │   ├── async/
│   │       │   ├── dom/
│   │       │   └── event/
│   │       ├── concepts/       # Concept explanations
│   │       ├── interview_questions/
│   │       ├── layout.tsx      # Root layout
│   │       └── page.mdx        # Home page
│   ├── public/                 # Static assets
│   ├── eslint.config.mjs       # ESLint configuration
│   ├── next.config.mjs         # Next.js configuration
│   ├── tsconfig.json           # TypeScript configuration
│   └── package.json
├── .editorconfig               # Editor configuration
├── .prettierrc                 # Prettier configuration
├── CODE_OF_CONDUCT.md
├── SECURITY.md
├── contributing.md
├── usageGuide.md
└── README.md
```

## Working with MDX Files

Challenges and concepts are written in MDX (Markdown with JSX). Here's the structure:

```mdx
export const metadata = {
  title: "Category Name | Challenges",
}

### 1. Question Title

- Important point about the question
- Another important point

\`\`\`js copy
// Example code
const example = "value";
\`\`\`

- Solution explanation

\`\`\`js copy
function solution() {
  // Solution code
  return result;
}
\`\`\`

**Notes**

Additional details about the solution

**References**

- https://link-to-reference.com

---

### 2. Next Question...
```

## Available Scripts

In the `web` directory:

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Code Style Guidelines

### JavaScript/TypeScript

- Use 2 spaces for indentation
- Use semicolons
- Use double quotes for strings
- Follow ESLint rules

### MDX/Markdown

- Use proper heading hierarchy
- Code blocks should have language specified
- Add `copy` attribute to code blocks for copy button
- Follow existing format for consistency

### Commit Messages

Use clear, descriptive commit messages:

- `Add: New challenge for closures`
- `Fix: Typo in async challenges`
- `Update: Improve explanation for promises`
- `Docs: Update contributing guide`

## Testing Your Changes

1. **Visual Testing**: Run `npm run dev` and check your changes in the browser
2. **Build Testing**: Run `npm run build` to ensure no build errors
3. **Lint Testing**: Run `npm run lint` to check for code issues
4. **Format Testing**: Run `npm run format:check` to verify formatting

## Adding New Challenges

1. Choose the appropriate category file in `web/src/app/challenges/`
2. Add your challenge at the **end** of the file
3. Follow the existing format
4. Include code examples, notes, and references
5. Test locally
6. Submit a PR

## Common Issues

### Port Already in Use

If port 3000 is in use:
```bash
# Kill the process using port 3000 or
# Specify a different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Getting Help

- Check existing [Issues](https://github.com/sadanandpai/javascript-code-challenges/issues)
- Read the [Contributing Guide](../contributing.md)
- Ask questions in [Discussions](https://github.com/sadanandpai/javascript-code-challenges/discussions)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Nextra Documentation](https://nextra.site/)
- [MDX Documentation](https://mdxjs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

Happy coding! 🚀
