---
id: mirror-refresh
title: Refresh Mirror Command
sidebar_label: Refresh Mirror
sidebar_position: 14
---

# Refresh Mirror Command

The `mirror:refresh` command fetches cached upstream metadata again, so new versions show up before the metadata cache expires. When an upstream cannot be reached, the cached copy is kept.

A single mirrored package can also be refreshed in the Web UI with **Refresh from upstream** on the package page.

## How to Run the Command

Refresh all cached metadata:

```bash
packistry mirror:refresh
```

Refresh a single package:

```bash
packistry mirror:refresh acme/package
```

## Arguments and Options

| Name         | Description                                         |
|--------------|-----------------------------------------------------|
| `package`    | Only refresh this package, e.g. `acme/package`      |
| `--upstream` | Only refresh metadata of this upstream (id or name) |

Use `-v` to list every refreshed package.
