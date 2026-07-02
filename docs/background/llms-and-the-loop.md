# Background — LLMs, agents, and the loop we practice

> Read this once before or after the Module 0 session. It's the "why" behind
> everything the workshop has you *do*. Nothing here is prerequisite trivia —
> each idea maps directly to a habit you'll build.

---

## 1. What a large language model actually is

A large language model (LLM) like Claude is, at its core, a system trained to
**predict the next piece of text** given everything before it. It was trained on
an enormous amount of writing and code, and from that it learned patterns:
grammar, facts, coding idioms, how a FASTA parser is usually written, what a
bug report tends to look like.

Two consequences matter for you:

- **It's probabilistic, not a database.** It doesn't "look up" the answer; it
  generates the most plausible continuation. Usually that's right. Sometimes it
  is *confidently wrong* — it can invent a function that doesn't exist, cite a
  flag that was never added, or claim a test passed without running it. This
  isn't lying; it's the model producing plausible-looking text. **This single
  fact is why the workshop makes you verify everything.**
- **It has no memory between sessions on its own.** Each session starts fresh.
  Anything it "knows" about your project comes from what's put in front of it —
  the files it reads, the instructions in `CLAUDE.md`, the state in
  `PROGRESS.md`. That's why we write things down: durable markdown *is* the
  agent's memory.

## 2. From a model to an *agent*

Claude Code wraps the model in a loop and gives it **tools**: it can read files,
search the codebase, run shell commands, edit files, and use git. That turns a
text predictor into an **agent** — something that can take actions in your
project, observe the results, and act again.

This is a genuine shift in how you work:

- You're not copy-pasting snippets from a chat window. You *delegate* a task and
  the agent carries it out across many steps.
- Because it can *run* things, it can also *check* things — run the test, read
  the real error, look at the actual output. Your job is to make sure it does,
  and to confirm the evidence yourself.
- It will do exactly what you steer it toward. Vague instructions produce vague
  work; a clear plan produces focused work. Steering is the skill.

For bioinformatics specifically: most of your day is small, well-scoped, easily
verifiable tasks — parse this file format, fix this off-by-one, add a summary
statistic, wire up a plot, refactor a script. Those are exactly where an agent
shines, *if* you keep it honest with real data and real tests.

## 3. The loop we practice

Almost everything you'll do with an agent is the same six-step loop. The whole
workshop is built to make it muscle memory.

1. **Plan** — Agree on *what* and *how* **before** any code changes. It's cheap
   to change your mind in a plan and expensive to unwind a wrong implementation.
   For anything non-trivial, have the agent propose a plan and read it
   critically: does it match your understanding of the problem?
2. **Act** — Let the agent make the change. This is the part people imagine when
   they think "AI coding" — but it's only one of six steps, and the least
   interesting one.
3. **Verify** — **You** confirm it works by observing evidence: run the test,
   see the corrected output, reproduce the fixed behavior. Never accept "done"
   on the agent's say-so. If you didn't see it work, it isn't done. (This is the
   direct antidote to the "confidently wrong" failure mode from §1.)
4. **Record** — Write down what changed and *why*, somewhere durable
   (`PROGRESS.md`, a decision note, a commit body). Future-you and future
   sessions can't read your mind; they can read your markdown.
5. **Commit** — Capture the unit of work with a clear, conventional message
   (`type(scope): summary`). One coherent change per commit.
6. **Push** — Send the commit to your fork's remote. This is what makes progress
   **durable**: you can stop now and resume later from a different session,
   machine, or a fresh clone, and lose nothing. **A step isn't finished until
   it's pushed.**

The loop scales down and up: a one-line fix runs through it in two minutes; a
multi-day feature runs through it dozens of times. The steps don't change.

## 4. Why the workshop is built the way it is

Every mechanism you'll touch is also teaching you a transferable habit:

| Mechanism | The habit it builds |
|---|---|
| `PROGRESS.md` the guide reads & updates | Making decisions durable in markdown |
| A guide that pauses for your decisions | Driving an agent instead of watching it |
| `CLAUDE.md` that grows as you learn | Shaping agent behavior with project memory |
| One conventional commit per module | Clean, reviewable history |
| Push after every commit | Never losing work; resuming from anywhere |
| The `workshop` skill | Knowing when to reach for a reusable procedure |

## 5. Failure modes to watch for

Knowing how agents go wrong is half of using them well:

- **Confident hallucination.** Invented functions, wrong flags, "the test
  passes" without a test run. → *Verify with real evidence.*
- **Silent scope creep.** You asked for a bug fix; it also "helpfully"
  refactored three other files. → *Plan first; review the diff.*
- **Lost context.** A fresh session doesn't know last week's decision. → *Write
  it in `PROGRESS.md`/`CLAUDE.md` and push it.*
- **Over-trust on hard problems.** For ambiguous or high-stakes work, a bigger
  model with more reasoning effort is worth it. → *Choose your model
  deliberately (Module 2).*

## 6. How to get the most out of it

- Treat the agent as a fast, capable, literal-minded collaborator — not an
  oracle. It's brilliant and it's fallible in the same breath.
- Be specific. "Fix the GC bug" is weaker than "GC content under-reports
  lowercase bases; make counting case-insensitive and add a test that would
  have caught it."
- Insist on evidence. If it says something works, ask to *see* it work.
- Write down decisions as you make them. The five minutes you spend recording
  saves an hour of re-deriving later.
- Commit and push often. Small, safe, resumable steps beat one heroic session.

---

*Next: run Module 0 to meet your guide, then Module 1 to run this whole loop
once on a real bug. See [`docs/modules/README.md`](../modules/README.md).*
