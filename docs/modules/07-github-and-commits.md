# Module 7 — GitHub integration & conventional commits

> **Skeleton (draft).** Shape, activity, checkpoint, and convention are set;
> prose will deepen over time. Runnable as-is.

**Goal:** open a pull request in your fork, run an agent **code review** on it,
and cement the conventional-commit format you've been using since Module 1.

**Time:** ~35 min · **Checkpoint:** a PR exists in your fork, you ran a code
review on its diff, and its commits follow `type(scope): summary`.

---

## Why this matters

So far you've committed and pushed straight to your branch. Real collaboration
happens through **pull requests** — a reviewable unit of change — and Claude
Code can review the diff *before* a human ever looks. Two skills come together
here:

- **PRs as review units.** One PR = one logical change, with a description of
  what and why. The agent can open it (`gh pr create`) and review it.
- **Conventional commits.** `type(scope): summary` (`fix`, `feat`, `docs`,
  `refactor`, `test`, `chore`) — the format you've used all workshop. Structured
  history is searchable, and tools can generate changelogs from it.

## Activity — ship a change through a PR

Work with your guide; you approve each step.

1. Create a branch and make a small, real change (or reuse one from Module 6).
2. Open a PR in your fork with `gh pr create`, writing a clear title (in
   conventional-commit form) and a short body.
3. Run an agent code review on the diff (e.g. the `/review` or `/code-review`
   skill) and read the findings. Address anything real; push back on anything
   that isn't.
4. Merge it (it's your fork). Confirm the history reads cleanly.

## Checkpoint ✅

- A PR exists in your fork with a conventional-commit title and a clear body.
- You ran a code review on the diff and can describe one thing it flagged.
- Your commit messages follow `type(scope): summary`.

## Convention added to CLAUDE.md

Append this to the "Conventions we've adopted" section:

> - **Ship through reviewable PRs.** One logical change per PR, titled in
>   conventional-commit form (`type(scope): summary`) with a short body that
>   says what and why. Run an agent code review on the diff before merging.
