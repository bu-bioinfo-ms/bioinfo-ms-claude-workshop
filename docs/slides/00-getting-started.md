---
marp: true
title: "Module 0 — Getting Started"
description: "Agentic coding workshop for Bioinformatics MS students — onboarding, LLM background, and the loop we practice."
theme: gaia
class: lead
paginate: true
backgroundColor: "#fbfbfd"
color: "#1d1d1f"
style: |
  section {
    font-size: 26px;
    line-height: 1.45;
  }
  h1 { color: #0b5cad; }
  h2 { color: #0b5cad; }
  a  { color: #0b5cad; }
  /* Gaia colors bold text yellow by default — override to a dark, high-contrast
     tone so the bold weight itself carries the emphasis and stays readable. */
  strong, b { color: #0b3d6b; }
  code { background: #eef2f7; padding: 0 .3em; border-radius: 4px; color: #1d1d1f; }
  table { font-size: 22px; }
  .loop {
    font-size: 30px; font-weight: 700; text-align: center;
    color: #0b5cad; letter-spacing: .5px;
  }
  .small { font-size: 20px; color: #555; }
  .step  { font-size: 24px; }
---

<!--
Speaker notes live in HTML comments like this and don't render on the slide.
Render this deck with:  marp docs/slides/00-getting-started.md
or open it in VS Code with the "Marp for VS Code" extension.
-->

# Agentic Coding for Bioinformatics

## Module 0 — Getting Started

<span class="small">A self-paced bootcamp you run *with* Claude · BU Bioinformatics MS</span>

<!--
Welcome them. One line: "Today isn't about finishing a curriculum — it's about
learning how to work WITH an agent. By the end you'll have run the full loop
once, on a real bug." Keep energy up; this is hands-on, not a lecture.
-->

---

## What this workshop is

- A **bootcamp that Claude runs for you.** You open the repo in Claude Code and
  it acts as your **guide**: figures out where you are, teaches the next module,
  has you do the work, checks it, and records your progress.
- You learn **agentic coding by doing it** — on real scientific code.
- You work entirely in **your own fork**. Your progress, commits, and PRs are
  yours.

<span class="small">Substrate for today: a tiny <code>gc-content</code> tool with a planted bug.</span>

<!--
Emphasize: this is self-paced AFTER today. They can stop any time and resume.
-->

---

## The twist: it teaches by being itself

Every mechanism of the workshop is *also* one of its lessons.

| The workshop uses… | …which teaches you |
|---|---|
| A `PROGRESS.md` it reads & updates | Durable decisions in markdown |
| Claude guiding you | Driving an agent; plan vs. auto |
| A growing `CLAUDE.md` | Project memory shapes behavior |
| One commit per module + push | Clean history; never lose work |
| A `workshop` skill | When to reach for a procedure |

<!--
This self-referential design is deliberate. Point it out — they'll see their
own CLAUDE.md grow as they finish modules.
-->

---

## First, what *is* a large language model?

- A system trained to **predict the next piece of text** from everything before
  it. It learned patterns from huge amounts of writing and code.
- **Probabilistic, not a database.** Usually right — sometimes *confidently
  wrong* (invents a function, claims a test passed without running it).
- **No memory between sessions on its own.** What it "knows" about your project
  is whatever is put in front of it.

<span class="small">👉 These two facts drive two habits: <b>verify everything</b> and <b>write things down</b>.</span>

<!--
Don't oversell or undersell. "Brilliant and fallible in the same breath."
This is the single most important framing for the whole day.
-->

---

## From a model to an *agent*

Claude Code wraps the model in a loop and gives it **tools**:

- read files · search the codebase · **run commands** · edit files · use git

That turns a text predictor into something that **takes actions, observes
results, and acts again**.

- You *delegate* a task; it carries it out across many steps.
- Because it can *run* things, it can *check* things — real tests, real output.
- It does exactly what you steer it toward. **Steering is the skill.**

<!--
Contrast with copy-pasting from a chat window. This is delegation.
-->

---

## The loop we practice

<div class="loop">plan → act → verify → record → commit → push</div>

<br>

<div class="step">

1. **Plan** — agree *what* & *how* before code. Cheap to change here.
2. **Act** — let the agent make the change.
3. **Verify** — *you* observe evidence. Not "the agent said so."
4. **Record** — write down what changed & why, durably.
5. **Commit** — one clear conventional message.
6. **Push** — make it durable & resumable.

</div>

<!--
This is the centerpiece slide. Walk each step slowly. Verify is the heart.
Everything else in the workshop is scaffolding around this loop.
-->

---

## Two steps people underrate

**Verify (step 3)** — the antidote to "confidently wrong."
If you didn't *see* it work — test green, output corrected — it isn't done.

**Push (step 6)** — the antidote to lost work.
A step isn't finished until it's pushed to your fork. Then you can resume from
**any session, machine, or a fresh clone** and lose nothing.

<span class="small">The guide will remind you to push every time — on purpose, so the habit sticks.</span>

<!--
Tie push back to "no memory between sessions": pushed markdown IS the memory
that survives.
-->

---

## Memory: how a fresh session catches up

- **`PROGRESS.md`** — your durable record. The guide reads it at every session
  start and updates it as you finish modules. *This* is how "let's continue"
  works.
- **`CLAUDE.md`** — project instructions the agent loads every session. It
  starts thin and **grows** as modules teach conventions. You'll watch your own
  project memory accumulate.

<span class="small">A <code>SessionStart</code> hook injects <code>PROGRESS.md</code> into context automatically — so resume "just works."</span>

<!--
Show them PROGRESS.md live if there's time. The growth of CLAUDE.md is a payoff
they'll feel by Module 4.
-->

---

## Setup

1. **Fork** the repo to your GitHub account.
2. **Clone** your fork and open it in Claude Code.
3. **Pick a model** — Opus is a good default for this reasoning-heavy guidance.
   You'll learn *how to choose* deliberately in **Module 2**.

<span class="small">All your work lives in your fork — that's where you have write access.</span>

<!--
Walk the room / check everyone is cloned and launched before moving on.
-->

---

## Activity — meet your guide

In your fork's Claude Code session:

1. It should **greet you** and check `PROGRESS.md` (that's `CLAUDE.md` at work).
2. **Tell it your name** — it records it in `PROGRESS.md`.
3. Ask it: **"What is this workshop and how does it work?"** and
   **"Where am I?"**

<span class="small">✅ Checkpoint: <code>PROGRESS.md</code> shows your name & model; Module 0 is done; Module 1 unlocked.</span>

<!--
This is the first real "delegate and observe" moment. Let them drive.
-->

---

## How you resume — the whole point

> Open the repo any time and say **"let's continue."**
> The guide reads `PROGRESS.md` and picks up exactly where you left off.

Because you **pushed**, that works even from a brand-new clone on a different
machine.

<!--
Have one person state the resume sentence out loud. That's the Module 0
checkpoint understanding.
-->

---

## Today (90 min) — feel the loop once

| Time | What |
|---|---|
| 0–15 | Concept + setup + pick a model |
| 15–30 | First contact with your guide (Module 0) |
| 30–75 | Run **Module 1** on a real planted bug |
| 75–90 | How resume works → the self-paced track |

<span class="small">Goal today: understand how to <i>engage</i> with the workshop — not finish it.</span>

<!--
Reset expectations one more time: after today it's self-paced.
-->

---

## Go deeper

- **Background primer:** [`docs/background/llms-and-the-loop.md`](../background/llms-and-the-loop.md)
  — LLMs, agents, the loop, and the failure modes to watch for.
- **Curriculum map:** [`docs/modules/README.md`](../modules/README.md)
- **Module 0:** [`docs/modules/00-getting-started.md`](../modules/00-getting-started.md)
- **Module 1:** [`docs/modules/01-the-workshop-loop.md`](../modules/01-the-workshop-loop.md)

### Let's continue → run **Module 1**.

<!--
Transition straight into Module 1 while momentum is high.
-->
