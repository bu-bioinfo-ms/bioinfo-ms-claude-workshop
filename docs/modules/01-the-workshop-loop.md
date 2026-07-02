# Module 1 — The workshop loop

**Goal:** feel the core loop of working with an agent once, end to end, on a
real (small) bug: **plan → act → verify → record → commit → push.**

**Time:** ~40 min · **Checkpoint:** the failing test passes because a real bug
was fixed, and the fix is committed **and pushed to your fork**.

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
6. **Push** — send the commit to your fork's remote. This is what makes your
   progress *durable*: you can stop now and resume later from a different
   session, machine, or a fresh clone, and nothing is lost. **A step isn't
   finished until it's pushed.**

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
2. **Plan.** Ask the guide to propose a fix *without editing yet*, and read it
   before approving. Does it match your diagnosis (case-sensitivity)? Approve or
   push back. (You can ask the guide to switch to **plan mode** for this — a
   mode that proposes without touching files. If that feels unfamiliar, don't
   worry: you'll practice plan mode deliberately in **Module 3**. For now, even
   a plan presented inline is enough — the point is that you *see and approve*
   the change before it happens.)
3. **Act.** Let it apply the fix.
4. **Verify.** This is the heart of the module. Add (or have the guide add) a
   test that would have caught the bug — e.g. that `gc_content("atgc") == 0.5` —
   in `examples/gc-content/test_gc_content.py`, and **run it**. Use `pytest` if
   it's installed (`pytest examples/gc-content/`); if not, a plain script that
   `assert`s the cases and prints `PASS` is completely fine — the runner matters
   far less than *seeing it go green*. Best practice: run the test against the
   **unfixed** code first and watch it fail (red), then fix and watch it pass
   (green). A test you never saw fail hasn't proven it can catch the bug.
5. **Record, commit & push.** The guide records the decision in `PROGRESS.md`,
   makes one conventional commit, e.g.
   `fix(gc-content): count soft-masked (lowercase) bases in GC content`, and
   **pushes it to your fork** so the work is safe to resume from anywhere.

## Checkpoint ✅

- Running the script now reports the correct GC content for `seq4_softmasked`.
- A test that exercises lowercase input **passes** (you saw it run).
- There's a commit whose message follows the `type(scope): summary` form, and
  it's **pushed to your fork** (`git status` shows nothing to push).

## Going deeper (optional)

Once the test is green, it's worth asking your guide: **"what *else* could break
here?"** The one-line fix (`.upper()`) is correct, but real sequences contain
more than `a/c/g/t` — ambiguity codes like `N`, gap characters (`-`), or
whitespace. What should GC content do with those? Are they in the denominator?
Deciding that is a design choice, not a bug fix — a good taste of the kind of
question Module 5 (co-design) is about. You don't have to change anything; just
notice that "the test passes" and "the code is right for every input" aren't the
same claim.

## Convention added to CLAUDE.md

Append this to the "Conventions we've adopted" section:

> - **Reproduce before fixing.** For any bug, first reproduce it and capture the
>   wrong output; a fix isn't done until a test that would have caught it passes.
> - **Conventional commits.** Commit messages use `type(scope): summary`
>   (`fix`, `feat`, `docs`, `refactor`, `test`, `chore`).
> - **Push after every commit.** A step isn't finished until it's pushed to your
>   fork — that's what lets you resume from any session, machine, or fresh clone.
