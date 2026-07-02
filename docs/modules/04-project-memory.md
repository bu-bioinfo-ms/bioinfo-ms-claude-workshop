# Module 4 — Project memory: CLAUDE.md & skills

> **Skeleton (draft).** Shape, activity, checkpoint, and convention are set;
> prose will deepen over time. Runnable as-is; deepening it with your guide is a
> co-design exercise (Module 5).

**Goal:** understand how `CLAUDE.md` shapes the agent's behavior, extend it with
a rule of your own, and see what a *skill* is by looking at (or writing) one.

**Time:** ~30 min · **Checkpoint:** you added a project-specific rule to
`CLAUDE.md` and *observed* it change how the agent behaves.

---

## Why this matters

Two kinds of memory shape every session:

- **`CLAUDE.md` — always-on project memory.** It's loaded into context every
  session. The "Conventions we've adopted" section you've been growing since
  Module 1 *is* this — and you've already felt it work: it's why your guide
  greets you and pushes after every commit.
- **Skills — on-demand procedures.** A skill is a named, reusable procedure the
  agent loads when it's relevant. This whole workshop runs on one: the
  `workshop` skill in `.claude/skills/workshop/`.

The lesson: you're not stuck with the agent's defaults. You *teach* it, and the
teaching is durable and version-controlled.

## Activity — extend your project's memory

Work with your guide.

1. Read the "Conventions we've adopted" section of `CLAUDE.md` — the rules you
   added in Modules 1–3. Notice how each one changes behavior.
2. Add one small rule of your own (e.g. a code style you prefer, or "explain bio
   terms briefly when you use them"). Then give the agent a task and watch
   whether the rule takes effect. If it doesn't, refine the wording — that
   feedback loop is the skill.
3. Open `.claude/skills/workshop/SKILL.md` and skim it. See how a procedure is
   just structured markdown the agent follows.
4. *(Optional stretch)* Author a trivial skill of your own and invoke it.

## Checkpoint ✅

- You added a project-specific rule to `CLAUDE.md` and saw it take effect.
- You can explain, in one sentence, the difference between `CLAUDE.md`
  (always-on) and a skill (on-demand).

## Convention added to CLAUDE.md

Append this to the "Conventions we've adopted" section:

> - **Teach the project, don't repeat yourself.** Durable project rules go in
>   `CLAUDE.md`; a repeatable multi-step procedure worth naming goes in a skill.
>   If you find yourself giving the same instruction twice, write it down.
