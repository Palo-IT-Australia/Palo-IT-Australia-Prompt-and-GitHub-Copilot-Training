# 01 — Introduction to GitHub Copilot

## What is GitHub Copilot?

**GitHub Copilot** is an AI-powered coding assistant developed by GitHub and OpenAI. It is trained on billions of lines of public code and can:

- Complete code as you type (inline suggestions)
- Generate entire functions, classes, or tests from a comment or function signature
- Explain code you did not write
- Help debug and fix errors
- Answer coding questions in natural language via Copilot Chat

Copilot is available in VS Code, Visual Studio, JetBrains IDEs, Neovim, and the GitHub website.

---

## How does it work?

Copilot uses a large language model (LLM) that understands both natural language and code. When you type in your editor, Copilot reads:

1. **The current file** — the code already written above and below your cursor
2. **Other open files** — relevant context from other tabs in your editor
3. **Your comment or docstring** — intent you express in plain English

It then predicts the most likely code to come next and offers it as a grey "ghost text" suggestion.

> **Important:** Copilot is a probabilistic tool. It suggests the statistically likely next code — it does not understand your business logic or guarantee correctness. Always review and test suggestions.

---

## The Copilot product family

| Product | What it does |
|---|---|
| **GitHub Copilot** (core) | Inline code completions in your IDE |
| **Copilot Chat** | Conversational AI assistant inside your IDE |
| **Copilot CLI** | AI assistance in the terminal for shell commands |
| **Copilot on GitHub.com** | Chat and code suggestions directly in pull requests |
| **Copilot Workspace** | AI-assisted task planning and implementation (preview) |

This module focuses on the core product and Copilot Chat, which are the most widely used.

---

## Copilot vs. other AI coding tools

GitHub Copilot is deeply integrated into the development workflow. Key differences from general-purpose AI assistants (ChatGPT, Claude, etc.):

| Feature | GitHub Copilot | General AI assistant |
|---|---|---|
| IDE integration | Native (no copy-paste) | Manual copy-paste |
| Codebase awareness | Reads open files | Only what you paste |
| Inline completions | Yes (as you type) | No |
| Pull request review | Yes (on GitHub.com) | No |
| Context limit | Large (whole file + tabs) | Varies |

---

## Responsible use

### What Copilot is good at
- Boilerplate and repetitive code
- Common algorithms and data structures
- Writing and improving test coverage
- Explaining unfamiliar code
- Generating documentation and comments
- Translating code between languages

### What to watch for
- **Correctness:** Always test Copilot-generated code. It can produce plausible but incorrect logic.
- **Security:** Review suggestions for common vulnerabilities (SQL injection, hardcoded credentials, insecure deserialization). Do not blindly accept network or auth code.
- **Licencing:** Copilot has a "Duplication detection" filter. Enable it in settings to reduce suggestions that closely match public code.
- **Over-reliance:** Copilot accelerates coding but does not replace understanding. If you cannot explain the code it generates, do not ship it.
- **Sensitive data:** Never paste secrets, API keys, or personal data into a prompt or comment that Copilot might process.

---

## Key keyboard shortcuts (VS Code)

| Action | Shortcut |
|---|---|
| Accept suggestion | `Tab` |
| Dismiss suggestion | `Esc` |
| Next suggestion | `Alt + ]` (Windows/Linux) / `Option + ]` (macOS) |
| Previous suggestion | `Alt + [` (Windows/Linux) / `Option + [` (macOS) |
| Open Copilot Chat | `Ctrl + Shift + I` (Windows/Linux) / `Cmd + Shift + I` (macOS) |
| Inline chat | `Ctrl + I` (Windows/Linux) / `Cmd + I` (macOS) |

---

## Next

Continue to [02-features.md](02-features.md) to learn about Copilot's key features in depth.
