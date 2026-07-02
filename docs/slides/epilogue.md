---
marp: true
title: "Epilogue — What's Next"
description: "Wrap-up for the agentic coding workshop: habits to keep, how Claude usage limits work, the self-paced track, and where to get help."
theme: gaia
class: lead
paginate: true
backgroundColor: "#fbfbfd"
color: "#1d1d1f"
style: |
  section {
    font-size: 26px;
    line-height: 1.45;
  }
  h1 { color: #0b5cad; }
  h2 { color: #0b5cad; }
  a  { color: #0b5cad; }
  /* Gaia colors bold text yellow by default — override to a dark, high-contrast
     tone so the bold weight itself carries the emphasis and stays readable. */
  strong, b { color: #0b3d6b; }
  code { background: #eef2f7; padding: 0 .3em; border-radius: 4px; color: #1d1d1f; }
  table { font-size: 22px; }
  .small { font-size: 20px; color: #555; }
  .loop {
    font-size: 28px; font-weight: 700; text-align: center;
    color: #0b5cad; letter-spacing: .5px;
  }
---

<!--
Speaker notes live in HTML comments and don't render on the slide.
Render this deck with:  marp docs/slides/epilogue.md
or open it in VS Code with the "Marp for VS Code" extension.

This is the wrap-up deck. Use it at the end of the live session (or as a
self-paced read). Two jobs: (1) reinforce the transferable habits, and
(2) set students up to keep going on their own — including the usage-limit
reality that Pro/Max subscribers eventually meet.
-->

# Epilogue

## What's Next

<span class="small">Wrapping up · habits to keep · usage limits · the self-paced track · BU Bioinformatics MS</span>

<!--
Congratulate them. If they ran Module 1, they've done the whole loop once on a
real bug. Everything from here is repetition and depth.
-->

---

## What you just did

You ran the core loop end-to-end on real code:

<div class="loop">plan → act → verify → record → commit → push</div>

<br>

- You **drove** an agent instead of watching it.
- You **verified** with real evidence, not the agent's say-so.
- You **recorded** a decision and **pushed** it — durable, resumable progress.

<span class="small">That loop is 90% of agentic coding. The rest is depth and judgment.</span>

<!--
Anchor everything to the loop. The remaining modules just add judgment on top
of this same skeleton.
-->

---

## The habits worth keeping

Carry these out of the workshop into real work:

- **Verify before "done."** If you didn't see it work, it isn't done.
- **Push after every commit.** Progress must survive a fresh clone.
- **Plan before big changes.** Cheap to redirect a plan; expensive to unwind code.
- **Record decisions where they'll be found.** Markdown is memory.
- **Choose your model deliberately.** Capability *and* cost are both dials.

<span class="small">These are the conventions your <code>CLAUDE.md</code> has been accumulating — that's your real takeaway.</span>

<!--
Point back at their grown CLAUDE.md if you're live. The file IS the summary of
what they learned.
-->

---

## A reality of subscriptions: usage limits

Claude **Pro** and **Max** plans include generous but **finite** usage. Worth
understanding *before* you hit it mid-task.

- Usage is metered over a **rolling ~5-hour window** *and* a **weekly cap**.
- The 5-hour window starts at your **first prompt** and rolls forward; the
  weekly cap resets on a fixed schedule for your account.
- Hit either and new prompts pause **until the next reset** (you'll get a
  warning as you approach, and a clear "resets at …" message).

<span class="small">Exact numbers change and depend on your plan — bookmark the official page (last slide) for current figures.</span>

<!--
Frame limits as a resource trade-off, not a punishment. Don't quote hard numbers
on the slide — they drift. The support doc has current values; link it.
-->

---

## Your biggest lever: model choice

Limits track **how much work** you ask for — and bigger models do each unit of
work at higher cost.

| Model | Relative cost | Good for |
|---|---|---|
| **Haiku** | lowest | routine, well-specified, high-volume |
| **Sonnet** | moderate | most everyday coding |
| **Opus** | highest | hard reasoning, ambiguous, high-stakes |

<span class="small">Heavy all-Opus work can exhaust a Pro plan quickly; the same work on Sonnet/Haiku lasts far longer. This is exactly Module 2's skill — now with a cost lens.</span>

<!--
Tie back to Module 2. The heuristic isn't just about quality — it's also about
not burning your week's allocation on tasks a smaller model handles fine.
-->

---

## Stretching your usage

Beyond model choice:

- **Start fresh between unrelated tasks.** A long session re-sends its whole
  history every prompt — clear or start new when you switch topics.
- **Let long sessions compact.** Summarize old context instead of dragging it
  all forward (`/compact` in Claude Code).
- **Be specific.** Vague asks waste effort on exploration; a clear request and a
  plan get there in fewer steps.
- **Keep junk out of context.** Don't point the agent at build dirs, logs, or
  huge data files it doesn't need.

<!--
The single highest-impact habit after model choice is starting fresh sessions.
Students often keep one giant thread going for days and wonder why they burn out
their limit. /context shows them where tokens are going.
-->

---

## Check before you're blocked

Know where you stand so a limit is never a surprise:

- **In Claude Code:** `/status` (usage) and `/context` (where your tokens are
  going right now).
- **On claude.ai:** **Settings → Usage** shows your current window and weekly
  consumption.

<span class="small">If you do hit a limit: it's temporary. Wait for the reset, or drop to a smaller model for lighter tasks in the meantime.</span>

<!--
Encourage a quick /context habit when a session feels sluggish or heavy — it's
the fastest way to spot wasted context.
-->

---

## The self-paced track

Today was Modules 0–1. The rest are yours, any time:

| # | Module |
|---|---|
| 2 | Choosing your model *(written)* |
| 3 | Steering with modes: plan vs. auto |
| 4 | Project memory: CLAUDE.md & skills |
| 5 | Co-design & durable decisions |
| 6 | Targeted sessions: bugs & features |
| 7 | GitHub integration & conventional commits |

<span class="small">See <code>docs/modules/README.md</code> for the full map.</span>

<!--
Set expectations: some modules are fully written, others develop as the workshop
grows. Module 2 is ready to run right now.
-->

---

## How to pick up where you left off

It's one sentence:

> Open your fork in Claude Code and say **"let's continue."**

- Your guide reads `PROGRESS.md` and resumes at your next module.
- Because you **pushed**, this works from any machine or a fresh clone.
- Say **"/workshop status"** any time to see your checklist and decisions.

<!--
Have them actually say it once if you're live. Muscle memory for resuming is the
whole point of the self-paced design.
-->

---

## Where to get help

- **Curriculum & modules:** [`docs/modules/README.md`](../modules/README.md)
- **Background primer:** [`docs/background/llms-and-the-loop.md`](../background/llms-and-the-loop.md)
- **Usage & rate limits (current numbers):**
  - [Use Claude Code with Pro/Max](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan)
  - [How usage & length limits work](https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work)
- **Claude Code docs:** [claude.com/claude-code](https://claude.com/claude-code)

### Now go build something. Your guide is waiting. 🚀

<!--
End on momentum. The best next step is to open the repo and run Module 2.
-->
