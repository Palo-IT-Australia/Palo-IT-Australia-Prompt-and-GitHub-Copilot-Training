# 01 — Introduction to Prompting

## What is a prompt?

A **prompt** is the text (or combination of text, images, and files) you send to an AI model to request a response. The quality of the prompt directly determines the quality of the output.

Think of a prompt as a conversation starter with a very capable, but very literal, collaborator. The AI will do exactly what you ask — no more, no less. Being clear, specific, and contextual is the key to getting great results.

---

## Why does prompt quality matter?

| Vague prompt | Specific prompt |
|---|---|
| "Write a user story" | "Write a user story for a first-time mobile banking user who wants to transfer money to a new payee. Include acceptance criteria in Gherkin format." |
| "Summarise this document" | "Summarise the following product requirements document in 5 bullet points, focusing on scope, key user groups, and success metrics." |
| "Help me with code" | "I have a Python function that calculates the total price of a shopping cart. Review it for edge cases and suggest improvements with explanations." |

The difference is **context**, **constraints**, and **desired format**.

---

## The anatomy of a well-formed prompt

A strong prompt typically contains some or all of these elements:

```
[Role / Persona]       — Who should the AI act as?
[Task]                 — What do you want it to do?
[Context]              — What background information is relevant?
[Input data]           — What material should it work with?
[Output format]        — How should the response be structured?
[Constraints]          — Any rules or restrictions to follow?
[Examples]             — Sample inputs/outputs to guide the style
```

### Example using all elements

```
You are a senior product manager at a fintech startup. [Role]

Write three user stories [Task] for a savings goal feature in a mobile app [Context].

The target users are millennials aged 25–35 who want to save for a house deposit [Context].

Format each story as:
"As a [user], I want [feature] so that [benefit]."
Then list 3 acceptance criteria per story in Gherkin (Given/When/Then) format. [Output format]

Keep language simple and avoid technical jargon. [Constraints]
```

---

## The prompt engineering mindset

1. **Start broad, then refine.** Your first prompt rarely needs to be perfect. Iterate.
2. **Provide context.** The AI only knows what you tell it.
3. **Specify the format.** Bullet lists, tables, code blocks, JSON — be explicit.
4. **Set constraints.** Word limits, tone, audience, what to avoid.
5. **Ask for reasoning.** Adding "explain your thinking" often improves accuracy.

---

## Common mistakes to avoid

| Mistake | Why it matters | Fix |
|---|---|---|
| Too vague | AI guesses your intent | Add specific details and context |
| No format specified | Output is hard to use | Say "respond in a table" / "use bullet points" |
| No role or persona | Generic, shallow answers | Add "You are a [role]..." |
| One-shot mindset | Expecting perfection first time | Plan to iterate 2–3 times |
| Providing no examples | Inconsistent style | Include 1–2 examples of expected output |

---

## Next

Continue to [02-prompt-techniques.md](02-prompt-techniques.md) to learn the four core prompting techniques.
