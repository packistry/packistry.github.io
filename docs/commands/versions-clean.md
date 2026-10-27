---
id: versions-clean
title: Clean Versions Command
sidebar_label: Clean Versions
sidebar_position: 17
---

# Clean Versions Command

The `versions:clean` command removes versions with version constraints Composer cannot parse, along with their archives. Composer rejects a whole package when one of its versions has such a constraint in `require`, `require-dev`, `conflict`, `provide` or `replace`.

Since 0.16.0, Packistry rejects these versions on upload and import. Run this command once to remove versions that were stored before.

## How to Run the Command

```bash
packistry versions:clean --dry-run
```

Every removed version is listed with its invalid constraints.

## Options

| Name        | Description                                |
|-------------|--------------------------------------------|
| `--dry-run` | Preview changes without modifying anything |
