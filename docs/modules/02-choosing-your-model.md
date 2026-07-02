# Module 2 — Choosing your model

**Goal:** learn to *deliberately* match a model (and its reasoning effort) to
the task in front of you, instead of always reaching for the biggest one.

**Time:** ~20 min · **Checkpoint:** you've run the same small task on two
different models, compared the results, and recorded a model-choice note in
`PROGRESS.md`.

---

## Why this matters

The model is a lever *you* control on every session. Bigger isn't always
better: a larger model costs more and can be slower, while a smaller one is
faster and cheaper and is often perfectly capable of routine work. Choosing well
is a real skill — and in a lab where you may run hundreds of agent sessions, it
adds up.

Two dials, not one:

- **Model** — how much raw capability you bring. Rough tiers:
  - **Opus** — most capable; reach for hard reasoning, ambiguous design,
    tricky debugging, or when a mistake is expensive. (Good default for *this
    workshop's* guidance, which is reasoning-heavy.)
  - **Sonnet** — strong all-rounder; great for most day-to-day coding.
  - **Haiku** — fastest and cheapest; ideal for routine, well-specified,
    high-volume work (simple edits, formatting, quick lookups).
- **Reasoning effort** — how long the model deliberates before answering.
  Higher effort helps on genuinely hard problems and wastes time on easy ones.

> Models improve over time and names change. Learn the *heuristic* — match
> capability and effort to task difficulty and cost of being wrong — not a
> fixed ranking.

## A quick heuristic

| Your task looks like… | Try |
|---|---|
| Ambiguous, high-stakes, "think hard about this" | Opus, higher effort |
| Normal feature work, refactor, code review | Sonnet, medium effort |
| Well-specified, repetitive, high-volume, low-risk | Haiku, low effort |
| Not sure? | Start one tier down and step up if it struggles |

## Activity — feel the difference

Work with your guide.

1. Pick one small, self-contained task on the example project — e.g. *"add a
   `--summary` flag to `gc_content.py` that also prints the mean GC across all
   sequences."* Keep it small enough to run twice.
2. Run it once on a **smaller/faster** model (e.g. Haiku or Sonnet). Note: did
   it get it right? How fast did it feel?
3. Reset (discard the change) and run the **same** task on a **larger** model
   (e.g. Opus). Compare quality, speed, and how much steering each needed.
4. Decide: for *this kind* of task, which would you actually pick day-to-day?

> Switching model mid-session: use the `/model` command in Claude Code. You can
> also set reasoning effort there.

## Checkpoint ✅

- You ran the same task on two different models and can describe the difference
  you observed (not just "the big one is better").
- You recorded, in `PROGRESS.md`, which model you'll default to and why.

## Convention added to CLAUDE.md

Append this to the "Conventions we've adopted" section:

> - **Match the model to the task.** Choose model + reasoning effort by
>   difficulty and cost of being wrong: Opus/high-effort for hard or high-stakes
>   work, Sonnet for everyday coding, Haiku for routine high-volume tasks. When
>   unsure, start one tier down and step up if it struggles.
