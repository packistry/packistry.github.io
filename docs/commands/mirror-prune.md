---
id: mirror-prune
title: Prune Mirror Command
sidebar_label: Prune Mirror
sidebar_position: 15
---

# Prune Mirror Command

The `mirror:prune` command removes cached upstream dists and metadata that have not been used for a while, along with orphaned files. Removed packages are fetched from the upstream again the next time they are requested.

Packistry does not run this command itself, so schedule it, for example with a daily cron job.

## How to Run the Command

```bash
packistry mirror:prune --unused-for=90
```

## Options

| Name           | Description                                                                      |
|----------------|----------------------------------------------------------------------------------|
| `--unused-for` | Remove cached dists and metadata that have not been used for this many days (default `90`) |
| `--dry-run`    | Preview changes without modifying anything                                       |

Use `-v` to list every removed dist and metadata file.
