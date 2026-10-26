---
title: Upstream Mirroring
sidebar_position: 5
---

# Upstream Mirroring

Packistry can mirror other Composer repositories, called **upstreams**, such as Packagist, the package registry of a GitLab group, Private Packagist, Satis or another Packistry. Your projects then only need Packistry and one Packistry token.

Packistry caches the metadata and dists of mirrored packages, so installs keep working while an upstream is down.

## How it works

Upstreams are attached to a repository in priority order. When a package is requested that the repository does not have, Packistry asks the upstreams from top to bottom:

- The first upstream that has the package serves it. Versions of different upstreams are never merged.
- Packages of the repository itself always take precedence over mirrored packages.
- Metadata is cached and revalidated every 5 minutes. Every dist is downloaded from the upstream once.
- When an upstream is down, the cached metadata and dists keep being served.

Mirrored packages show up under the **Mirrored** tab on the packages page.

---

## 1. Add an Upstream

Navigate to **Upstreams** and add an upstream. There are two types.

### Packagist

Mirrors public packages from packagist.org, no URL needed.

Adding a GitHub token is recommended. Most Packagist dists are downloaded from GitHub, which limits anonymous downloads to 60 per hour. A token without any scopes is enough.

A Packagist upstream with a GitHub token counts as private, so it cannot be used by public repositories. See [Access](#access).

### Composer repository

Any Composer 2 repository. Enter the URL of the repository or its `packages.json`, for example:

- GitLab group: `https://gitlab.com/api/v4/group/123/-/packages/composer/packages.json`
- Private Packagist: `https://repo.packagist.com/acme`
- Satis or another Packistry: the URL of the repository

#### Credentials

Credentials are configured per host and are only sent to that host. Add them as credentials, not in the URL: URLs such as `https://user:token@gitlab.com/...` are rejected. The following types are supported:

| Type       | Use for                                                       |
|------------|---------------------------------------------------------------|
| HTTP Basic | A username and password or token                              |
| Bearer     | A token sent as `Authorization: Bearer`                       |
| Header     | A token sent in a custom header, such as GitLab's `PRIVATE-TOKEN` |

For a GitLab group, add an **HTTP Basic** credential for `gitlab.com` (or your own GitLab host) with a deploy token that has the `read_package_registry` scope. Use the deploy token's username as username and the token as password.

Stored secrets are never shown again. Leave the secret empty to keep it. When you change the host of a credential, enter its secret again, so a secret is never sent to a host it was not entered for.

:::info
Use **Test connection** on the upstream to check that Packistry can reach it with the configured credentials.
:::

### Filters

Filters limit which packages an upstream is asked for:

- **Only these packages**: only ask this upstream for packages matching one of these patterns, e.g. `acme/*`.
- **Exclude packages**: never ask this upstream for packages matching one of these patterns.

Use **Only these packages** for private upstreams. It keeps lookups fast, and makes sure the names of your private packages are never sent to other upstreams like Packagist.

---

### Changing the URL

Changing the URL of an upstream clears its cached metadata and dists. Mirrored packages stay with the upstream and are fetched from the new URL on the next request.

---

## 2. Attach the Upstream to a Repository

On the repositories page, click **Upstreams** next to the repository. Add the upstreams this repository should mirror and order them by priority, for example your private GitLab group first and Packagist last.

---

## 3. Configure Composer

Add the repository to Composer as described in the [installation guide](../installation.md#8-add-packistry-to-your-composer-configuration), for example:

```bash
composer config repositories.packistry composer https://packistry.example/r/company
```

Composer still uses packagist.org for packages Packistry does not know. When the repository has a Packagist upstream, you can disable packagist.org so all installs go through Packistry:

```bash
composer config repositories.packagist.org false
```

### Existing lock files

Existing lock files still point to the original dist urls. Run the following command once to download everything through Packistry:

```bash
composer update --lock
```

---

## Access

Upstreams are part of a repository, so access to a repository includes all of its mirrored packages. Mirrored packages can also be granted individually, like any other package.

To give someone access to only some upstreams, create a separate repository with just those upstreams.

:::warning
Anyone can download the packages of a public repository, including its mirrored packages. Upstreams with any credential count as private and cannot be used by public repositories. This includes a Packagist upstream with a GitHub token, as the upstream decides which dist URLs that token is sent to.
:::

---

## Missing Packages

A mirrored package stays with the upstream that first served it. When that upstream answers that it no longer has the package, the package is marked missing and installs of it fail. It is not handed to the next upstream, so another upstream cannot take over the name of a private package, for example when credentials expire.

The package becomes available again as soon as its upstream has it again. To move it to another upstream, an admin uses **Refresh from upstream** on the package. This fetches its metadata from its upstream right away, and resolves the package again through the repository's upstreams when its upstream no longer has it.

When an upstream is removed from a repository, its packages are resolved again on their next request.

---

## Internal Registries

Packistry does not connect to private or reserved addresses, such as loopback, private networks and cloud metadata endpoints, on behalf of an upstream. This includes metadata urls, dist urls and redirects. Only zip dists are mirrored.

To mirror an internal registry, such as a self-hosted GitLab, allow its host. Use `*` to allow every host.

```dotenv title=".env"
MIRROR_ALLOWED_HOSTS=gitlab.internal,satis.internal
```

---

## Maintenance

These commands help keep the mirror up to date and its storage in check:

- [`mirror:warm`](../commands/mirror-warm.md): cache everything a project needs, e.g. before relying on Packistry during an upstream outage.
- [`mirror:refresh`](../commands/mirror-refresh.md): fetch new versions before the metadata cache expires.
- [`mirror:prune`](../commands/mirror-prune.md): remove cached dists and metadata that are no longer used.
- [`downloads:prune`](../commands/downloads-prune.md): remove old download records.

Packistry does not schedule `mirror:prune` and `downloads:prune` itself. Run them periodically, for example with a cron job on the host:

```bash
0 3 * * * docker compose -f /path/to/compose.yaml exec -T packistry packistry mirror:prune
```

---

## Configuration

Mirroring can be tuned with the following environment variables. Durations are in seconds.

| Variable                  | Default | Description                                                                 |
|---------------------------|---------|-----------------------------------------------------------------------------|
| `MIRROR_METADATA_TTL`     | `300`   | How long cached metadata is served before it is revalidated upstream       |
| `MIRROR_NOT_FOUND_TTL`    | `600`   | How long an upstream's "package not found" answer is cached                |
| `MIRROR_DOWN_TTL`         | `60`    | How long an upstream is skipped after it failed to respond                 |
| `MIRROR_ROOT_TTL`         | `86400` | How long the metadata URL from an upstream's `packages.json` is trusted    |
| `MIRROR_CONNECT_TIMEOUT`  | `5`     | Connect timeout for upstream requests                                       |
| `MIRROR_TIMEOUT`          | `15`    | Timeout for upstream metadata requests                                      |
| `MIRROR_DOWNLOAD_TIMEOUT` | `300`   | Timeout for downloading a dist                                              |
| `MIRROR_DOWNLOAD_STATS`   | `full`  | `full` records every download, `counts` only keeps totals, `off` records nothing |
| `MIRROR_ALLOWED_HOSTS`    |         | Comma separated hosts that may resolve to private addresses, `*` allows all |
