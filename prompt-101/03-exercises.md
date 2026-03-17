# 03 — Hands-on Exercises

Complete each exercise in an AI assistant of your choice (ChatGPT, Claude, Microsoft Copilot, etc.).
For each exercise, note what worked well and what you would change in a second attempt.

---

## Exercise 1: Zero-Shot — User Research Planning

**Objective:** Use a zero-shot prompt to generate a user research plan.

**Scenario:**
Your team is building a budgeting tool for small business owners. You are about to start a discovery sprint and need to plan user interviews.

**Your task:**
Write a zero-shot prompt that produces:
- A list of 6 interview questions to understand the current pain points small business owners have with managing cash flow
- Questions ordered from broad to specific
- Questions that are open-ended (not yes/no)

**Starter prompt to improve:**
```
Write interview questions for small business owners about money.
```

**Challenge:** Rewrite the starter prompt using the anatomy learned in [01-introduction.md](01-introduction.md). Then run both versions and compare the outputs.

---

## Exercise 2: Few-Shot — Acceptance Criteria

**Objective:** Use few-shot prompting to generate consistent acceptance criteria.

**Scenario:**
Your team uses a specific format for acceptance criteria. You want the AI to match it.

**Your team's format:**
```
Scenario: [descriptive scenario title]
  Given [initial context]
  When [action taken]
  Then [expected outcome]
  And [additional outcome if needed]
```

**Task:**
1. Write a few-shot prompt with two examples in your team's format
2. Ask the AI to generate acceptance criteria for:
   - *A user who wants to filter a transaction list by date range*
   - *A user who wants to export their transaction history as a CSV file*

**Tip:** The more specific your examples, the more consistent the output.

---

## Exercise 3: Chain-of-Thought — Prioritisation

**Objective:** Use chain-of-thought prompting to help prioritise a backlog.

**Scenario:**
You have the following features in your backlog and need to prioritise the top 3 for the next quarter.

| Feature | Estimated effort | Stakeholder interest |
|---|---|---|
| Dark mode | 1 week | Low |
| Bulk CSV export | 2 weeks | High |
| Real-time notifications | 3 weeks | High |
| Onboarding tutorial | 1 week | Medium |
| Multi-currency support | 6 weeks | Medium |
| Dashboard customisation | 4 weeks | Low |

**Your task:**
Write a chain-of-thought prompt that asks the AI to reason through a prioritisation framework (e.g., RICE, MoSCoW, or effort/impact matrix) and recommend the top 3 features with justification.

**Reflection questions:**
- Did the AI apply the framework correctly?
- Did the reasoning change your own view of the priorities?
- What constraints did you forget to mention?

---

## Exercise 4: Role Prompting — Stakeholder Critique

**Objective:** Use role prompting to stress-test a product idea.

**Scenario:**
You have written the following one-pager for a new feature:

> **Feature: Automated Savings Coach**
> The app will analyse a user's spending patterns and automatically move a suggested amount to their savings account each week. The user sets a savings goal and the app calculates how much to transfer based on their remaining disposable income after bills are paid. Users can override the suggested amount or pause transfers at any time.

**Your task:**
Write three separate prompts — each with a different role — to critique this feature from different perspectives:

1. **A sceptical senior engineer** — focus on technical risks and unknowns
2. **A risk and compliance officer at a bank** — focus on regulatory concerns
3. **A user aged 65+ with low digital literacy** — focus on usability and trust

**Reflection:** Which role gave you the most useful feedback? Why?

---

## Exercise 5: Iteration Practice — Refining a Prompt

**Objective:** Practise the iteration mindset by improving a prompt through three versions.

**Starting prompt (Version 1):**
```
Help me write a product roadmap.
```

**Instructions:**
1. Run Version 1 and record the output
2. Identify what is missing (context? format? constraints? role?)
3. Write Version 2 with improvements and run it
4. Identify further gaps
5. Write Version 3 — your best version — and run it

**Document your three versions and key differences between them.**

**Reflection questions:**
- What single change made the biggest difference to output quality?
- At what point did adding more detail stop improving the output?

---

## Bonus Exercise: Prompt Chaining

**Objective:** Break a complex task into a sequence of connected prompts.

**Scenario:**
You want to write a full product brief for a new feature. Instead of one giant prompt, chain smaller prompts:

1. **Prompt 1:** Generate a problem statement for a target user and their pain point
2. **Prompt 2:** Using the problem statement from Prompt 1, generate three possible solutions
3. **Prompt 3:** Using the three solutions, write evaluation criteria and recommend one solution with justification
4. **Prompt 4:** Using the recommended solution, write a one-page product brief including scope, success metrics, and key risks

**Try this with any product idea relevant to your team.**

---

## Reflection template

After completing the exercises, fill in this template:

```
Exercise: [number and name]

My prompt:
[paste your final prompt here]

What worked well:
-
-

What I would change:
-
-

Key learning:
[one sentence]
```

---

## See also

[examples/product-discovery-prompts.md](examples/product-discovery-prompts.md) — a reference library of ready-to-use prompts.
