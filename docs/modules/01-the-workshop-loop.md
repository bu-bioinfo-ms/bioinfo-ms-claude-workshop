# Module 1 — The workshop loop

**Goal:** feel the core loop of working with an agent once, end to end, on a
real (small) bug: **plan → act → verify → record → commit.**

**Time:** ~40 min · **Checkpoint:** the failing test passes because a real bug
was fixed, and the fix is committed.

---

## The loop

Almost everything in agentic coding is this loop:

1. **Plan** — agree on *what* and *how* before touching code. Cheap to change
   your mind here; expensive later.
2. **Act** — let the agent make the change.
3. **Verify** — *you* confirm it works by observing evidence (run the test, see
   the output). Not "the agent said so."
4. **Record** — write down what changed and why, somewhere durable.
5. **Commit** — capture the unit of work with a clear message.

Today you'll run this loop on a planted bug in the example project.

## The task

`examples/gc-content/gc_content.py` computes the GC content of DNA sequences in
a FASTA file. It has a bug: it under-reports GC content for **soft-masked**
sequences (lowercase `a/c/g/t`, which genomics tools use to mark repetitive
regions). Look at `examples/gc-content/sample.fasta` — `seq4_softmasked` should
have the same GC content as an equivalent uppercase sequence, but it doesn't.

## Activity

Work *with* your guide — it drives the tools; you make the calls.

1. **Reproduce first.** Run the script on the sample and read the output. Which
   sequence looks wrong, and what's the correct value by hand?
   ```
   python examples/gc-content/gc_content.py examples/gc-content/sample.fasta
   ```
2. **Plan.** Ask the guide to switch to **plan mode** and propose a fix *without
   editing yet*. Read the plan. Does it match your diagnosis (case-sensitivity)?
   Approve or push back.
3. **Act.** Let it apply the fix.
4. **Verify.** This is the heart of the module. Add (or have the guide add) a
   test that would have caught the bug — e.g. that `gc_content("atgc") == 0.5` —
   and **run it**. Green means done; red means keep going.
5. **Record & commit.** The guide records the decision in `PROGRESS.md` and
   makes one conventional commit, e.g.
   `fix(gc-content): count soft-masked (lowercase) bases in GC content`.

## Checkpoint ✅

- Running the script now reports the correct GC content for `seq4_softmasked`.
- A test that exercises lowercase input **passes** (you saw it run).
- There's a commit whose message follows the `type(scope): summary` form.

## Convention added to CLAUDE.md

Append this to the "Conventions we've adopted" section:

> - **Reproduce before fixing.** For any bug, first reproduce it and capture the
>   wrong output; a fix isn't done until a test that would have caught it passes.
> - **Conventional commits.** Commit messages use `type(scope): summary`
>   (`fix`, `feat`, `docs`, `refactor`, `test`, `chore`).
