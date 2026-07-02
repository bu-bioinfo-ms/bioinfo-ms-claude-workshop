# Module 5 — Co-design & durable decisions

> **Skeleton (draft).** Shape, activity, checkpoint, and convention are set;
> prose will deepen over time. This module is *about* co-design, so fleshing it
> out with your guide is the most on-theme exercise in the whole workshop.

**Goal:** design a non-trivial change *with* the agent before writing code, and
capture the decision — what you chose and why — somewhere durable.

**Time:** ~35 min · **Checkpoint:** you wrote a short decision record for a real
change *before* implementing it, and it lives in the agreed location.

---

## Why this matters

For anything beyond a one-line fix, the expensive mistakes happen in the
*design*, not the typing. Deciding "what should this even do?" with the agent —
weighing options out loud — is cheap; discovering you built the wrong thing is
not. And a decision you don't write down is a decision you'll re-litigate next
week.

Co-design is a conversation, not a command:

1. State the goal and constraints.
2. Have the agent propose **2–3 options**, with trade-offs — don't accept the
   first.
3. *You* pick, and say why.
4. Write a **short decision record** (a few sentences: what, why, alternatives
   rejected) before any code.

## Activity — decide before you build

Work with your guide — you make the call.

1. Pick a real design question on the example project. A great one is left over
   from Module 1: **how should GC content treat non-`ACGT` characters** (`N`,
   gaps `-`, whitespace)? In the denominator or not?
2. Ask the guide for a few options with trade-offs. Push back on them.
3. Choose one and write a short decision record capturing what/why/rejected.
4. *(Optional)* Implement it, running the full loop from Module 1.

## Checkpoint ✅

- A short decision record exists for a real change, written *before* the code.
- You can point to where decision records live in this project.

## Convention added to CLAUDE.md

Append this to the "Conventions we've adopted" section:

> - **Design before you build; record the decision.** For any non-trivial
>   change, weigh 2–3 options with the agent first, then write a short decision
>   record (what / why / alternatives rejected) — in `PROGRESS.md`'s Decisions
>   section for small calls, or `docs/decisions/` for larger ones — *before*
>   implementing.
