# Module 6 — Targeted sessions: bugs & features

> **Skeleton (draft).** Shape, activity, checkpoint, and convention are set;
> prose will deepen over time. Runnable as-is.

**Goal:** run two full sessions end-to-end — one **bug fix**, one **feature** —
and practice *scoping* each so you know exactly when it's done.

**Time:** ~45 min · **Checkpoint:** one bug and one feature have landed on the
example project — each reproduced/specified first, tested, committed, and
pushed.

---

## Why this matters

By now you know the loop (Module 1), the levers (Modules 2–3), and how to design
(Module 5). This module is about **scoping**: a good session starts with a crisp
goal and a concrete way to know it's finished. The two most common session
types scope differently:

- **Bug fix → reproduce first.** Don't touch code until you've reproduced the
  wrong behavior and captured it. The fix is done when a test that would have
  caught it passes. (You did this in Module 1 — now it's a habit.)
- **Feature → specify first.** Write down the acceptance check *before* building:
  "done means running `X` produces `Y`." Then build to that check.

## Activity — one bug, one feature

Work with your guide; you scope each session.

1. **Bug.** Pick a bug (or implement the non-`ACGT` decision from Module 5 as a
   correctness fix). Reproduce → plan → act → verify with a test → commit →
   push.
2. **Feature.** Add something small and real — e.g. a `--summary` flag to
   `gc_content.py` that prints the mean GC across all sequences. Write the
   acceptance check first, then run the loop.
3. For each, before starting, say out loud: "this session is done when ____."

## Checkpoint ✅

- A bug fix and a feature are both committed and pushed, each with a test/check
  you saw pass.
- For each, you stated the "done when…" condition *before* coding.

## Convention added to CLAUDE.md

Append this to the "Conventions we've adopted" section:

> - **Scope every session before you start it.** Bugs begin with a reproduction;
>   features begin with an acceptance check ("done means `X` produces `Y`").
>   Write the finish line down before writing code — it builds on the
>   reproduce-before-fixing rule from Module 1.
