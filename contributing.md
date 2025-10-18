### Contribution Guide

Thank you for considering contributing to JavaScript Code Challenges! We welcome contributions from the community.

#### Ways to Contribute

- 💡 Add new challenges or questions
- 📝 Improve existing solutions or explanations
- 🐛 Fix bugs or issues
- 📚 Enhance documentation
- ✨ Suggest new features or improvements
- 🔍 Fix spelling, grammar, or formatting issues

---

#### Getting Started

1. **Fork the repository** to your GitHub account
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/javascript-code-challenges.git
   cd javascript-code-challenges
   ```
3. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Set up the development environment**:
   ```bash
   cd web
   npm install
   npm run dev
   ```

---

#### Question/Challenge Contribution Guidelines

- The question should be **unambiguous** and as **generic** as possible
- Only JavaScript questions with **coding solutions** are allowed (No theoretical questions)
- Any coding hints to be provided along with the question can be included as an example
- This repo does not aim to solve algorithm questions in JavaScript
- Answer can contain a maximum of 4 parts:
	- **Important points** related to solving the question or about the implementation logic - _optional but recommended_
	- **Solution program** (single or multiple solutions) - _mandatory_
	- **Notes** (additional detail about the answer) - _optional_
	- **References** - _optional but recommended_

---

#### Standards to Follow

- No full stop at the end of the question or points
- Output of the code is mentioned in front of the statement with comments
- Code comments should be before or after the code in a separate line
- Driver codes are added only when necessary
- The difficulty level of the question in general increases with the question number
- Follow the existing format of markdown and code
- Add new questions to the **end** of the respective section

---

#### File Structure

Challenges are located in MDX files:
```
web/src/app/
├── challenges/
│   ├── primitives/page.mdx
│   ├── collections/page.mdx
│   ├── functions/page.mdx
│   ├── objects/page.mdx
│   ├── async/page.mdx
│   ├── dom/page.mdx
│   └── event/page.mdx
└── concepts/
    ├── primitives/page.mdx
    ├── collections/page.mdx
    └── ...
```

---

#### Code Formatting

We use Prettier for code formatting. Before submitting:

```bash
# Check formatting
npm run format:check

# Auto-format your code
npm run format
```

---

#### Submitting Your Contribution

1. **Commit your changes** with a clear message:
   ```bash
   git add .
   git commit -m "Add: New challenge for array manipulation"
   ```
2. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```
3. **Create a Pull Request** from your fork to the main repository
4. Fill out the PR template with all required information
5. Wait for review and address any feedback

---

#### Pull Request Guidelines

- Provide a clear description of what your PR does
- Reference any related issues
- Ensure all checks pass (linting, build)
- Be responsive to feedback and questions
- One PR per feature/fix (avoid combining multiple unrelated changes)

---