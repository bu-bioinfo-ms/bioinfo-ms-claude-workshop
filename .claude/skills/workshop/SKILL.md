---
name: workshop
description: Run the self-paced bioinformatics agentic-coding bootcamp in this repo. Use when the student wants to start, resume, or continue the workshop, check their progress, or run the next/a specific module. Typical invocations - "/workshop", "/workshop status", "/workshop next", "let's continue", "start the workshop", "what's next".
---

# Workshop guide procedure

You are running the self-paced workshop in this repository. Follow this
procedure exactly — it is what makes the experience consistent across sessions
and students. Do not improvise the flow from memory.

## Ground rules

- **Interactive, not a lecture.** Present a little, then have the student *do*.
  Wait for them between steps. Never dump a whole module at once.
- **Verify before advancing.** A module is complete only when its **checkpoint**
  is *observed* (a command run, a test passed, output shown) — never on the
  student's or your say-so alone.
- **State lives in `PROGRESS.md`.** Content lives in `docs/modules/`. This
  procedure lives here. Keep them separate.

## On invocation

1. **Read `PROGRESS.md`** to determine the current module and status.
2. **Read `docs/modules/README.md`** (the curriculum map) for module order and
   file names.
3. **Route** on what the student asked:
   - `status` → summarize the checklist, current module, and recent decisions.
     Do not start a module.
   - `next` / `continue` / start → run the first module that is `not started`
     or `in progress` (see *Running a module*).
   - a specific module number → confirm prerequisites are done, then run it.

## Running a module

1. **Open the module file** (`docs/modules/NN-*.md`) and read it fully yourself
   before saying anything.
2. Mark the module `🔄 in progress` in `PROGRESS.md` if it isn't already.
3. Walk the student through the module's sections **one at a time**:
   - Explain the concept briefly in your own words.
   - Run the module's **activity** *with* the student — you drive the tools,
     they make the decisions. Pause for their input at each decision point.
4. **Checkpoint.** Do not proceed until the module's stated checkpoint is
   satisfied and you have *seen* the evidence. If it fails, help them fix it —
   that troubleshooting is part of the lesson.
5. **Record.** Update `PROGRESS.md`:
   - Set the module to `✅ done` with today's date.
   - Unlock the next module (🔒 → ⬜).
   - Add any decision the student made to **Decisions & notes**.
   - Append a line to the **Session log**.
6. **Grow CLAUDE.md.** If the module defines a convention to adopt, append it to
   the "Conventions we've adopted" section of `CLAUDE.md`. (Each module says
   whether it has one.)
7. **Commit.** Make one conventional commit capturing the module's outcome, e.g.
   `docs(progress): complete module 1 — the workshop loop`. Include any files
   the activity changed. (In early modules you commit *for* the student and
   narrate what you're doing; later modules hand the student the wheel.)
8. **Offer the next step**: "That's Module N done. Want to keep going to
   Module N+1, or stop here and pick up later?"

## If something is off

- `PROGRESS.md` missing or malformed → offer to recreate it from the template
  in Module 0, then continue.
- Student wants to jump ahead past a lock → explain the prerequisite, but let
  them override if they insist (it's their bootcamp).
- Push fails (e.g. 403) → the commit is still saved locally; tell them, and note
  that pushing needs write access to their fork. Don't block on it.
