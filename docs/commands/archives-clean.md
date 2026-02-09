---
id: archives-clean
title: Clean Archives Command
sidebar_label: Clean Archives
sidebar_position: 13
---

# Clean Archives Command

The `archives:clean` command removes archive files that are not referenced by any package version. This helps keep repository storage tidy by deleting stray or obsolete archives.

## How to Run the Command

Run the command with:

```bash
packistry archives:clean
```

## Dry Run (Preview Only)

Use the `--dry-run` option to preview what would be removed without deleting anything:

```bash
packistry archives:clean --dry-run
```

## What the Command Does

When the command runs, it:

1. Loads all repositories with their packages and versions.
2. Builds a list of expected archive paths from version records.
3. Scans each repository’s storage path for files.
4. Removes any files that are not expected archives

For each repository, it prints the files it would remove (or did remove) and summarizes the total number of archives affected.
