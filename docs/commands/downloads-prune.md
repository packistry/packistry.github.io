---
id: downloads-prune
title: Prune Downloads Command
sidebar_label: Prune Downloads
sidebar_position: 16
---

# Prune Downloads Command

The `downloads:prune` command removes old download records. The total download counters of packages and versions are kept.

Packistry does not run this command itself, so schedule it, for example with a monthly cron job.

## How to Run the Command

```bash
packistry downloads:prune --older-than=365
```

## Options

| Name           | Description                                                                          |
|----------------|--------------------------------------------------------------------------------------|
| `--older-than` | Remove download records older than this many days (default `365`, at least `90`, as the download charts show the last 90 days) |
| `--dry-run`    | Preview changes without modifying anything                                           |
