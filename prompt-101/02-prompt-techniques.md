# 02 — Core Prompting Techniques

This module covers four foundational techniques used across all AI assistants. Mastering these will dramatically improve your results.

---

## Technique 1: Zero-Shot Prompting

Ask the AI to perform a task **without providing any examples**. Works well for straightforward tasks where the AI already has strong domain knowledge.

**When to use:**
- Simple, well-known tasks (summarising, translating, formatting)
- When you need a quick first draft

**Template:**
```
[Task description]. [Output format].
```

**Example:**
```
List five risks of launching a mobile payments product in a new market.
Format your response as a numbered list with a one-sentence description for each risk.
```

---

## Technique 2: Few-Shot Prompting

Provide **two or more examples** of the expected input/output pair before asking your question. This guides the AI to match your desired style and format.

**When to use:**
- Consistent formatting is critical (e.g., user story templates)
- You have a specific writing style the AI should match
- Generating repetitive artefacts (test cases, acceptance criteria)

**Template:**
```
Here are some examples:

Input: [example input 1]
Output: [example output 1]

Input: [example input 2]
Output: [example output 2]

Now do the same for:
Input: [your actual input]
```

**Example:**
```
Convert these feature descriptions into user stories using this format:
"As a [user], I want [capability] so that [benefit]."

Feature: View account balance
User story: As a bank customer, I want to view my account balance on the home screen so that I can quickly check my finances without navigating to a separate page.

Feature: Transfer money to a contact
User story: As a bank customer, I want to transfer money directly to a saved contact so that I can send payments quickly without entering account details manually.

Now write a user story for:
Feature: Set up a recurring payment
```

---

## Technique 3: Chain-of-Thought (CoT) Prompting

Ask the AI to **show its reasoning step by step** before reaching a conclusion. This improves accuracy on complex reasoning tasks.

**When to use:**
- Evaluating trade-offs or making recommendations
- Debugging or root-cause analysis
- Complex estimation or prioritisation decisions

**Key phrases to trigger CoT:**
- "Think step by step"
- "Explain your reasoning before giving an answer"
- "Walk me through your thinking"

**Template:**
```
[Task or question]. Think step by step and explain your reasoning before giving your final answer.
```

**Example:**
```
We are deciding between building a native mobile app versus a progressive web app (PWA) for our new product.
Our users are aged 45-65, have low-to-moderate tech literacy, and are primarily on Android devices.
Our team has strong web development skills but limited native mobile experience.
Our launch timeline is 6 months.

Think step by step and explain your reasoning before recommending which approach we should take.
```

---

## Technique 4: Role / Persona Prompting

Assign the AI a **specific role or persona** to shape the perspective, tone, and expertise of its response.

**When to use:**
- You need expert-level depth in a specific domain
- You want the AI to critique your work from a particular viewpoint
- Simulating stakeholder conversations or user interviews

**Template:**
```
You are a [role/persona with relevant experience].
[Task or question].
```

**Common roles for product teams:**
| Role | Use case |
|---|---|
| `Senior product manager` | Writing and reviewing product artefacts |
| `Sceptical senior engineer` | Reviewing technical feasibility |
| `First-time user aged 60` | Evaluating UX accessibility |
| `Risk-averse CFO` | Stress-testing business cases |
| `Agile coach` | Reviewing team processes |
| `User researcher` | Designing interview questions |

**Example:**
```
You are a sceptical senior software engineer with 15 years of experience.
Review the following product requirements document and identify any technical ambiguities,
missing constraints, or assumptions that could cause problems during development.
Be direct and critical.

[Paste your requirements document here]
```

---

## Combining techniques

The most powerful prompts combine multiple techniques:

```
You are a senior product manager specialising in fintech. [Role prompting]

Here are two examples of well-written product hypotheses: [Few-shot]

Hypothesis 1: We believe that showing users a spending summary on the home screen
will increase daily active usage by 15% because users will form a habit of checking
their finances first thing in the morning.

Hypothesis 2: We believe that sending a push notification when a bill is due
will reduce late payment rates by 20% because users currently forget payment dates.

Now write a product hypothesis for the following feature. Think step by step about
the user behaviour change this feature is designed to drive before writing the hypothesis. [Chain-of-thought]

Feature: A savings round-up feature that rounds every purchase to the nearest dollar and saves the difference.
```

---

## Technique comparison at a glance

| Technique | Best for | Effort | Output consistency |
|---|---|---|---|
| Zero-shot | Simple, well-known tasks | Low | Variable |
| Few-shot | Formatted/templated artefacts | Medium | High |
| Chain-of-thought | Complex reasoning & trade-offs | Low | High |
| Role prompting | Expert perspective & critique | Low | High |

---

## Next

Continue to [03-exercises.md](03-exercises.md) to practise these techniques with real product-discovery scenarios.
