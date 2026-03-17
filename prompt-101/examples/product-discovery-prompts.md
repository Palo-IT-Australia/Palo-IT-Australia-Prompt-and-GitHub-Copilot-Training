# Product Discovery Prompt Library

A reference collection of ready-to-use prompts for product teams running discovery sprints.
Copy, adapt, and use these in any AI assistant.

---

## User Research

### Interview question generation
```
You are an experienced UX researcher.

Generate 8 open-ended interview questions to understand how [target user group] currently
[activity or pain point being explored].

Requirements:
- Order questions from broad to specific
- Avoid leading questions
- Include at least two questions that explore emotional responses
- Format: numbered list with a brief note on what each question is designed to uncover
```

### Synthesising interview notes
```
You are a UX researcher synthesising findings from user interviews.

Below are raw notes from [number] interviews about [topic].
Identify the top 5 recurring themes, quote specific evidence for each theme,
and flag any contradictions or surprising insights.

Format your response as:
## Theme [number]: [theme title]
Evidence: [quotes or paraphrased examples]
Implication: [what this means for product decisions]

[Paste interview notes here]
```

### Jobs-to-be-done statement
```
Using the Jobs-to-be-Done framework, write a JTBD statement for the following user situation:

User: [describe the user]
Situation: [describe the context]
Current workaround: [describe how they solve it today]
Frustration: [describe the pain point]

Format: "When [situation], I want to [motivation], so I can [expected outcome]."
Also write a two-sentence explanation of the emotional and social dimensions of this job.
```

---

## Problem Definition

### Problem statement
```
Write a clear problem statement for a product team using this format:

[User] needs a way to [need or goal]
because [insight or root cause].
We know this is true because [evidence].

Context:
- User: [describe the user]
- Goal: [what they are trying to achieve]
- Current pain: [what gets in the way today]
- Evidence: [data, research, or observations you have]
```

### How might we questions
```
Generate 10 "How Might We" (HMW) questions based on the following problem statement.

Problem statement: [paste your problem statement]

Requirements:
- Cover a range of solution spaces (not just obvious ones)
- Some should be broad (systemic), some narrow (specific feature)
- Avoid HMWs that are too solution-specific or too vague
- Format: numbered list
```

### Assumption mapping
```
You are a product strategist running a discovery sprint.

List the top 10 assumptions embedded in the following product idea.
For each assumption, rate its:
- Importance (how critical to success if wrong): High / Medium / Low
- Evidence level (how much proof we have): Strong / Weak / None

Format as a table: Assumption | Importance | Evidence | Suggested validation method

Product idea: [describe your product idea]
```

---

## Solution Design

### User story generation
```
Write user stories for the following feature set.

Format each story as:
"As a [user], I want [capability] so that [benefit]."

Then add 3 acceptance criteria per story in Gherkin format:
Given [context]
When [action]
Then [outcome]

Feature set:
[list your features]

Target user: [describe your primary user]
```

### Hypothesis statement
```
Write a product hypothesis for the following feature using this format:

"We believe that [building this feature / making this change]
for [user segment]
will result in [measurable outcome]
because [underlying assumption about user behaviour]."

Also write a one-sentence description of how we would validate or invalidate this hypothesis.

Feature: [describe your feature]
Target user: [describe your user]
Desired outcome: [what metric or behaviour you want to change]
```

### Feature trade-off analysis
```
You are a senior product manager. Analyse the trade-offs between the following two approaches
to solving [problem].

For each approach, evaluate:
1. User experience impact
2. Technical complexity (assume a small team with [tech stack / skill set])
3. Time to market
4. Maintenance burden
5. Risk

Conclude with a recommendation and your reasoning.

Approach A: [describe approach A]
Approach B: [describe approach B]
```

---

## Backlog and Prioritisation

### MoSCoW prioritisation
```
You are a product manager facilitating a prioritisation session.

Apply MoSCoW prioritisation (Must have / Should have / Could have / Won't have this release)
to the following feature list. Justify each classification in one sentence.

Context:
- Release goal: [describe the goal of this release]
- Timeline: [e.g., 8-week sprint]
- Team size: [e.g., 3 engineers, 1 designer]

Feature list:
[paste your feature list]
```

### Epic breakdown
```
Break down the following epic into individual user stories suitable for a two-week sprint.

For each story:
- Write the story in "As a / I want / So that" format
- Estimate relative complexity: S / M / L / XL
- Identify any dependencies

Epic: [describe the epic]
Done definition for the epic: [describe what done looks like]
```

---

## Retrospectives and Team Health

### Sprint retrospective facilitation
```
You are an experienced agile coach facilitating a sprint retrospective.

Generate a 60-minute retrospective agenda using the [Start/Stop/Continue OR 4Ls OR Mad-Sad-Glad] format.

Include:
- A warm-up activity (5 min)
- Individual reflection time
- Group discussion prompts for each category
- A voting/prioritisation step
- An action item capture format

Team context: [describe team size, sprint length, any current challenges]
```

### Action item follow-up
```
Given the following retrospective action items from our last sprint, help me write
a brief update message for the team assessing which items were completed,
which are in progress, and which need to be carried over.

Be constructive and motivating in tone.

Action items: [paste action items with owner and due date]
Update notes: [paste any notes you have on progress]
```

---

## Documentation and Communication

### Executive summary
```
You are a senior product manager writing for a non-technical executive audience.

Summarise the following product requirements document into an executive summary of no more than 300 words.

Include:
- The problem being solved and who it affects
- The proposed solution (high level, no jargon)
- Expected business impact
- Key risks
- Next steps

[Paste your PRD here]
```

### Stakeholder update email
```
Write a brief stakeholder update email (under 200 words) for the following situation.

Tone: professional but approachable
Audience: [describe the stakeholders — e.g., non-technical executives]

Update content:
- What we shipped: [list key deliverables]
- What we learned: [key insights from this sprint]
- What's next: [planned work for next sprint]
- Any blockers or decisions needed: [list if applicable]
```
