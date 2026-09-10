# No-Dormancy Experiment tracker

Customers who tick the free Target-clone division at checkout are logged in
two places:

1. **Google Sheet** "Phamcliff No-Dormancy Experiment" in Will's Drive. The
   Apps Script (`../apps-script.gs`) creates it on first use and appends one
   row per participant, with a first check-in date one year out (Will is most curious a year or two later).
2. **`participants.csv`** in this folder: a local, gitignored mirror for
   working offline or with Claude Code. It is never committed (the site repo
   is public).

Every order email also carries a `No-Dormancy Experiment: YES` block, so the
Gmail inbox is the fallback source of truth if the sheet write ever fails.

## Filling the local CSV

- Export the Sheet as CSV and replace `participants.csv`, or
- ask Claude Code to "sync experiment participants": it searches Gmail for
  `"No-Dormancy Experiment: YES"` order emails and appends any rows that are
  not already in the CSV (matched on email + logged date).

## Checking in

Ask Claude Code to "list experiment check-ins due" to see rows whose
`check_in_due` has passed and `checked_in` is blank, then draft the check-in
emails in Will's voice. Record replies in `how_is_it_doing`.
