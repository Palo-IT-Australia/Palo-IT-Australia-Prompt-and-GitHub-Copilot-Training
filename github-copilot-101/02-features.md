# 02 — GitHub Copilot Key Features

---

## Feature 1: Inline Code Completions

This is Copilot's core feature. As you type, Copilot reads your surrounding code and suggests completions as grey "ghost text". Press `Tab` to accept.

### Triggering better completions

The quality of inline completions depends on the context you provide:

**1. Write a descriptive comment first**
```python
# Calculate the total price including tax at the given rate
# Returns 0 if the price is negative
def calculate_total(price: float, tax_rate: float) -> float:
    # Copilot will now suggest a well-constrained implementation
```

**2. Use a descriptive function name**
```javascript
// Copilot generates a full implementation just from the name
function validateEmailAddress(email) {
```

**3. Write the first line of the implementation**
```python
def sort_users_by_last_name(users: list[dict]) -> list[dict]:
    return sorted(  # Copilot completes from here
```

**4. Provide a docstring with parameters and return types**
```python
def calculate_compound_interest(principal, rate, time, n=12):
    """
    Calculate compound interest.

    Args:
        principal: Initial investment amount
        rate: Annual interest rate as a decimal (e.g., 0.05 for 5%)
        time: Time in years
        n: Number of times interest is compounded per year (default: 12)

    Returns:
        Final amount after compound interest
    """
    # Copilot suggests the implementation from the docstring
```

### Multi-line suggestions

Copilot can suggest entire function bodies. If the ghost text is multi-line, use `Ctrl + →` (Windows/Linux) or `Cmd + →` (macOS) to accept word by word, or `Tab` to accept the full suggestion.

---

## Feature 2: Copilot Chat

Copilot Chat is a conversational AI assistant embedded in your IDE. It understands your codebase and can help you write, debug, explain, and refactor code without leaving your editor.

### How to open Copilot Chat
- **Chat panel:** Click the Copilot icon in the sidebar, or press `Ctrl + Shift + I` / `Cmd + Shift + I`
- **Inline chat:** Place your cursor on a line or select code, then press `Ctrl + I` / `Cmd + I`

### Slash commands

Copilot Chat supports built-in slash commands for common tasks:

| Command | What it does |
|---|---|
| `/explain` | Explains the selected code in plain English |
| `/fix` | Suggests a fix for a bug or error |
| `/tests` | Generates unit tests for the selected code |
| `/doc` | Generates documentation or a docstring |
| `/optimize` | Suggests performance improvements |
| `/new` | Scaffolds a new file, class, or project |

**Example usage:**
1. Select a function in your editor
2. Press `Ctrl + I` to open inline chat
3. Type `/explain` — Copilot explains what the function does
4. Type `/tests` — Copilot generates unit tests for it

### Chat participants (`@`)

Use `@` to target specific contexts:

| Participant | Context |
|---|---|
| `@workspace` | Ask questions about your entire codebase |
| `@vscode` | Ask questions about VS Code settings and features |
| `@terminal` | Get help with terminal commands |
| `@github` | Ask questions about GitHub (PRs, issues, Actions) |

**Example:**
```
@workspace Where is the authentication logic in this project?
@workspace How does this app connect to the database?
```

### Variables (`#`)

Use `#` to attach specific context to your question:

| Variable | What it attaches |
|---|---|
| `#file` | A specific file |
| `#selection` | The currently selected code |
| `#editor` | The current editor content |
| `#terminalLastCommand` | The last terminal command and its output |

**Example:**
```
#file:src/auth.js Explain the token refresh logic in this file.
#terminalLastCommand Why did this command fail?
```

---

## Feature 3: Writing Effective Chat Prompts

The same principles from Prompt 101 apply in Copilot Chat. Here are IDE-specific best practices:

### Be specific about what you want

| Instead of... | Try... |
|---|---|
| "Fix this" | "Fix the bug on line 42 — the function returns null when the input array is empty" |
| "Write tests" | "Write unit tests for the `calculateDiscount` function covering: no discount, 10% discount, and invalid negative input" |
| "Explain this code" | "Explain this code to a junior developer who is unfamiliar with async/await" |

### Include context about constraints
```
Refactor the `fetchUserData` function to use async/await instead of Promises.
Keep the same function signature and error handling behaviour.
The codebase uses ES2020 and does not use TypeScript.
```

### Ask for alternatives
```
Show me two different ways to implement pagination in this API endpoint.
Explain the trade-offs between each approach.
```

### Iterative debugging
```
// Step 1 — describe the symptom
This function returns undefined when users array has more than 100 items. 
What could cause this?

// Step 2 — share the error
I'm getting this error: [paste error message]
Here's the stack trace: [paste stack trace]

// Step 3 — validate the fix
The fix you suggested works, but now the unit tests for filterUsers() are failing.
Can you explain why and suggest an update?
```

---

## Feature 4: Test Generation

One of Copilot's most time-saving features is generating unit tests. Give it a function and ask for tests with specific scenarios.

### In the chat panel
```
/tests

Write unit tests for the function above.
Cover these cases:
1. Happy path with valid input
2. Empty input
3. Input with null values
4. Boundary values (min and max)
Use Jest and follow the existing test file structure in this project.
```

### With inline completions
```javascript
// Test: should return the correct discount for a VIP customer
test('VIP customer gets 20% discount', () => {
  // Copilot suggests the full test body
```

---

## Feature 5: Code Explanation and Review

### Explain unfamiliar code
Select code → right-click → **Copilot** → **Explain** (or use `/explain` in Chat).

Great for:
- Onboarding to a new codebase
- Understanding legacy or undocumented code
- Learning new libraries or frameworks

### Ask for a code review
```
Review this function for:
1. Potential security vulnerabilities
2. Edge cases that are not handled
3. Performance issues
4. Code readability

Be specific about any concerns and suggest improvements with example code.
```

---

## Feature 6: Copilot in Pull Requests (GitHub.com)

When you open a pull request on GitHub.com, Copilot can:

- **Summarise changes** — generate a PR description from your diff
- **Review code** — identify bugs, style issues, and missing tests
- **Answer questions** — chat about the PR in the comment thread

### Generating a PR description
On the PR creation page, click the Copilot sparkle icon next to the description field. Copilot generates a summary based on your commits and diff.

---

## Feature 7: Copilot CLI (Terminal)

Copilot CLI helps you write and understand shell commands without leaving the terminal.

### Installation
```bash
gh extension install github/gh-copilot
```

### Usage
```bash
# Suggest a command
gh copilot suggest "find all files larger than 10MB in the current directory"

# Explain a command you do not understand
gh copilot explain "tar -czf archive.tar.gz --exclude=node_modules ."
```

---

## Next

Continue to [exercises/](exercises/) for hands-on practice with all these features.
