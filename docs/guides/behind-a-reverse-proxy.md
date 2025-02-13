---
title: Behind a Reverse Proxy
sidebar_position: 1
---

## Configuring Packistry Behind a Reverse Proxy

When running Packistry behind a reverse proxy, you need to ensure that headers are forwarded correctly and that the proxy IP is trusted. Below is an  example configuration for [Kamal](https://kamal-deploy.org/) to achieve this.

### Example Configuration

```yaml
...
proxy:
  host: [DOMAIN NAME]
  ssl: true
  forward_headers: true # make sure the proxy forwards headers

env:
  clear:
    APP_URL: https://[DOMAIN NAME]
    TRUSTED_PROXIES: 172.18.0.2 # Specify the trusted proxy IP(s), comma-separated if multiple
  secret:
    - APP_KEY
...
```

