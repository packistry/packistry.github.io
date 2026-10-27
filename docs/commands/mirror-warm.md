---
id: mirror-warm
title: Warm Mirror Command
sidebar_label: Warm Mirror
sidebar_position: 13
---

# Warm Mirror Command

The `mirror:warm` command caches the metadata and dists of every package in a `composer.lock`, so they are available when an upstream is down.

## How to Run the Command

```bash
packistry mirror:warm composer.lock --repository=company
```

The lock file must be readable inside the container, for example by copying it in first:

```bash
docker compose cp composer.lock packistry:/tmp/composer.lock
docker compose exec packistry packistry mirror:warm /tmp/composer.lock --repository=company
```

## Arguments and Options

| Name           | Description                                                        |
|----------------|--------------------------------------------------------------------|
| `lock`         | Path to a `composer.lock` file                                     |
| `--repository` | Path of the repository to warm, leave empty for the root repository |

## Example Output

The command shows the result for every package in the lock file and fails when a package could not be cached.

```
+-------------------+---------+---------------------------+
| Package           | Version | Result                    |
+-------------------+---------+---------------------------+
| acme/billing      | 2.4.0   | local package             |
| guzzlehttp/guzzle | 7.9.2   | cached from Packagist     |
| acme/legacy       | 1.0.3   | not found in any upstream |
+-------------------+---------+---------------------------+
```
