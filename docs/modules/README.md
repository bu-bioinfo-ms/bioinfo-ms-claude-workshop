# Curriculum map

The workshop is a sequence of modules. Your guide (Claude) runs them via the
`workshop` skill and tracks your status in `PROGRESS.md`. Modules unlock in
order — each builds on the last.

| # | Module | You'll practice | Convention added to CLAUDE.md |
|---|--------|-----------------|-------------------------------|
| 0 | [Getting started](00-getting-started.md) | Forking, launching Claude Code, picking a model, meeting your guide | — |
| 1 | [The workshop loop](01-the-workshop-loop.md) | plan → act → verify → record → commit → push, on a real bug | Verify-before-done (already seeded); push-after-commit; one conventional-commit note |
| 2 | [Choosing your model](02-choosing-your-model.md) | Matching Opus / Sonnet / Haiku + effort to the task | model-choice heuristic |
| 3 | Steering with modes | Plan mode vs. auto/accept-edits; when to let it run | when to require a plan |
| 4 | Project memory: CLAUDE.md & skills | Reading & extending CLAUDE.md; authoring a tiny skill | project-specific rules |
| 5 | Co-design & durable decisions | Designing with the agent; writing a decision record before coding | decision-record location |
| 6 | Targeted sessions: bugs & features | Scoping a bug fix and a feature end-to-end on the example project | reproduce-first rule |
| 7 | GitHub integration & conventional commits | Opening a PR in your fork, agent code review, conventional commit format | commit message convention |

> **Appendix (optional):** Issue-driven feedback collection — using GitHub
> issues to record and triage feedback. Out of the core path; do it if curious.

## Presentation & background materials

- **Slides:** [`docs/slides/`](../slides/) — Marp decks for live sessions
  (render with `marp docs/slides/<file>.md` or the "Marp for VS Code"
  extension). Written so far:
  - [`preliminaries.md`](../slides/preliminaries.md) — accounts, tools, and
    concepts (git, GitHub, forking, cloning, the terminal, Python, Claude Code)
    to have in place *before* Module 0.
  - [`00-getting-started.md`](../slides/00-getting-started.md) — the Module 0
    session deck.
  - [`epilogue.md`](../slides/epilogue.md) — wrap-up: habits to keep, how Claude
    usage/rate limits work, the self-paced track, and where to get help.
- **Background:**
  [`docs/background/llms-and-the-loop.md`](../background/llms-and-the-loop.md) —
  a self-paced primer on LLMs, agents, and the loop.

## For today's live session (90 min)

The goal today is **not** to finish the curriculum — it's to understand how to
*engage* with it. We'll cover **Module 0** (onboarding) and run **Module 1**
end-to-end so you feel the whole loop once. Everything after that is self-paced:
open the repo any time, say "let's continue," and your guide resumes from
`PROGRESS.md`.

## Status of these materials

Modules 0, 1, and 2 are written. Modules 3–7 are outlined above and will be
filled in as the workshop develops. (Building a module is itself a nice
demonstration of co-design — see Module 5.)
