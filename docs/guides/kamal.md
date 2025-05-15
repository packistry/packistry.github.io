---
title: Deploy Packistry with Kamal
sidebar_position: 2
---
# Packistry Deployment with Kamal

The [Packistry Kamal repository](https://github.com/packistry/kamal) provides a streamlined setup for deploying Packistry using [Kamal](https://kamal-deploy.org/docs/). This guide walks you through configuring, deploying, and managing Packistry with ease.

## Prerequisites

Before getting started, make sure the following are installed, configured, and ready for use:

- **Kamal**: A deployment tool that should be installed on your local machine.
- **Server Access**: You must have root access to the server and an SSH key properly set up.
- **DNS Configuration**: An A record must be configured for your domain, pointing to the server's IP address.
- **Container Registry Credentials**: Ensure you have valid credentials for authentication with your container registry.

## Setup Instructions

### 1. Customize Deployment Configuration

The deployment process is driven by the `config/deploy.yml` file. Modify this file to match your environment, such as server address and environment variables.

**Replace all values enclosed in [] with your specific values**. For example, replace [IMAGE NAME] with your actual image name, and [DOMAIN NAME] with your domain name.

```yaml
service: packistry
image: [IMAGE NAME] # e.g., username/image-name

registry:
  server: ghcr.io/[IMAGE NAME]
  username: [USERNAME] # e.g., myusername
  password:
    - KAMAL_REGISTRY_PASSWORD # value is set in secrets

servers:
  - [SERVER IP] # e.g., 188.222.55.129

volumes:
  - ./data:/data

proxy:
  host: [DOMAIN NAME] # e.g., packistry.com
  ssl: true # Create an A record for the domain name pointing to your server's IP, and Kamal will obtain a free TLS certificate via Let's Encrypt.

env:
  clear:
    TRUSTED_PROXIES: * # Also, make sure the proxy the headers are forwarded from is trusted; accepts multiple IPs, comma-separated.
  secret:
    - APP_KEY # value is set in secrets

builder:
  arch: arm64 # Specify your server's architecture, e.g., amd64 or arm64
```

### 2. Configure Secrets

Copy the example secrets file and populate it with the necessary values:

```bash
cp .kamal/secrets.example .kamal/secrets
```

After copying, open the `.kamal/secrets` file and fill in the required values:

```plaintext
# Token for the GitHub Container Registry. Create one at https://github.com/settings/tokens/new with the "write:packages" scope.
KAMAL_REGISTRY_PASSWORD=your-registry-password
APP_KEY=your-app-key
```

To generate a secure `APP_KEY`, run:

```bash
echo "base64:$(openssl rand -base64 32)"
```

### 3. Initial Deployment Setup

For the first deployment, Kamal will SSH into your server, install Docker, build your container image, and deploy the application.

Run the following command to begin the setup:

```bash
kamal setup
```

Once the setup is complete, create an admin user by accessing the shell within the container:

```bash
kamal app exec -i sh
```

Inside the container, run:

```bash
packistry add:user
```

### 4. Updates and Subsequent Deployments

To deploy updates or new versions of the Packistry, follow these steps:

**Update the Dockerfile**: In the root of your project, modify the `Dockerfile` to use the latest version of the Packistry image. For example, update the version number as follows:

```diff
- FROM ghcr.io/packistry/packistry:0.7.2
+ FROM ghcr.io/packistry/packistry:0.8.0
```

**Run the Deployment**: After updating the `Dockerfile`, deploy the updated version by running:

```bash
kamal deploy
```

Kamal will pull the updated container image and deploy it to your server, ensuring that the latest version is running.

## Managing Volumes

Application data is persisted in the `/root/data` directory on the server. This ensures that your data remains intact between deployments and container restarts.

## Additional Customization

Feel free to adjust deployment scripts and configurations to suit your specific needs. For advanced customization options, refer to the official [Kamal Documentation](https://kamal-deploy.org/docs/).
