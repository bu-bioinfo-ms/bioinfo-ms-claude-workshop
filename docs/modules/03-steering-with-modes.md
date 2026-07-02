# Module 3 — Steering with modes

> **Skeleton (draft).** The shape, activity, checkpoint, and convention are set;
> the prose will deepen as the workshop develops. Fleshing it out *with* your
> guide is itself a co-design exercise (Module 5). It's runnable as-is.

**Goal:** choose *how much autonomy* to hand the agent — plan mode vs.
approve-each-edit vs. auto/accept-edits — and know when to require a plan before
any code is touched.

**Time:** ~25 min · **Checkpoint:** you've run a task under two different modes,
can say in one sentence when you'd require a plan first, and recorded that rule
in `PROGRESS.md`.

---

## Why this matters

Mode is a throttle on autonomy — another lever *you* control, like the model
(Module 2). The trade-off is **speed vs. control**, and the right setting
depends on how ambiguous the task is and how expensive a wrong turn would be.

- **Plan mode** — the agent proposes *what* it would do and does **not** edit
  files. You read the plan and approve before anything happens. Best for
  ambiguous, wide-reaching, or hard-to-reverse work.
- **Normal (approve each action)** — the agent acts, but you okay edits and
  commands as they come. The default middle ground.
- **Auto / accept-edits** — you let it run and apply edits without stopping.
  Best for small, well-specified, easily-checked changes where a mistake is
  cheap to catch and undo.

> The habit that matters: **decide the mode on purpose** at the start of a task,
> instead of accepting whatever's on. Cheap decisions can run; expensive or
> fuzzy ones get a plan first.

## Activity — feel the difference

Work with your guide — you pick the mode each time.

1. Pick a small change on the example project (e.g. tidy a docstring, or the
   `--summary` flag idea from Module 2).
2. Do it once in **plan mode**: ask for a plan, read it, approve or push back,
   then let it apply. Notice how it feels to review *before* acting.
3. Do a second small change with **accept-edits/auto** and watch it just run.
4. Decide, out loud: for *your* work, what kind of task earns a required plan,
   and what you'd happily let run unattended?

> Switch modes in Claude Code with **shift+tab** (cycles plan / normal /
> accept-edits), or use the plan-mode entry your client offers.

## Checkpoint ✅

- You ran a task under two modes and can describe the difference you felt.
- You recorded, in `PROGRESS.md`, your personal rule for *when a plan is
  required*.

## Convention added to CLAUDE.md

Append this to the "Conventions we've adopted" section:

> - **Require a plan for anything ambiguous, wide-reaching, or hard to
>   reverse.** Let the agent run (accept-edits) only for small, well-specified,
>   easily-verified changes. Decide the mode deliberately at the start of a
>   task, not by accident.
