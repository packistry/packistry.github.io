---
title: Behind a Reverse Proxy
sidebar_position: 1
---

## Configuring Packistry Behind a Reverse Proxy

When running Packistry behind a reverse proxy, you need to ensure that the proxy IP is trusted. Below is an example configuration for [Kamal](https://kamal-deploy.org/) to achieve this.

### Example Configuration

```yaml
...
proxy:
  host: [DOMAIN NAME]
  ssl: true

env:
  clear:
    APP_URL: https://[DOMAIN NAME]
    TRUSTED_PROXIES: *
  secret:
    - APP_KEY
...
```

