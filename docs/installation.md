---
sidebar_position: 2
---
# Installation

Follow the steps below to set up **Packistry** and start managing your PHP packages in a self-hosted Composer repository.

### 1. Run the Packistry Server

You can run Packistry locally or on a cloud platform using Docker. First, set up the necessary environment variables and create a Docker Compose file.

#### 1.1: Generate .env with APP_KEY

Create an .env file and generate an APP_KEY:

```bash
echo "APP_KEY=base64:$(openssl rand -base64 32)" >> .env
```

#### 1.2: Create compose.yaml

Create a compose.yaml file for Docker Compose.

:::info
The default configuration uses SQLite and creates an archive directory for published packages in the current directory.

- A SQLite database (database.sqlite) will be created in the current directory.
- A folder ./archives will hold the zip archives of published packages.

For other setups:
- [Packistry with MySQL database (Docker Compose)](guides/mysql.md)
- [Packistry with MySQL database and archives in S3 (Docker Compose)](guides/store-archives-s3.md)
- [Deploy using Kamal with free TLS certificate from let's encrypt](guides/kamal.md)
:::

```yaml title="compose.yaml"
services:
  packistry:
    image: ghcr.io/packistry/packistry:latest
    restart: unless-stopped
    environment:
      - APP_KEY=${APP_KEY}
      # Uncomment and set APP_URL in .env if not running on http://localhost
      # - APP_URL=${APP_URL} 
    ports:
      - 80:80
    volumes:
      # Use current directory to store database.sqlite and archives directory
      - ./:/data
```

> _Ensure Docker Compose is installed and Docker is running on your system or cloud environment._
> Alternatively, you can run Packistry directly with Docker: `docker run -p 80:80 -e APP_KEY=[app_key] -v /host/data/path:/data ghcr.io/packistry/packistry:latest`
---

### 2. Create a User

Once the server is running, create an admin user by running the following command:

```bash
docker compose exec packistry packistry add:user
```

Follow the prompts to set up your admin account.Follow the prompts to set up your admin account.

---

### 3. Access the Web UI

After setting up the user, open your web browser and go to [http://localhost](https://localhost) to access the Packistry Web UI. Log in with the credentials you just created.

---

### 4. Create a Repository

Navigate to [http://localhost/repositories?open=true](http://localhost/repositories?open=true) and create a new repository to start managing your packages.

---

### 5. Add Sources

Navigate to [http://localhost/sources?open=true](http://localhost/sources?open=true) to connect your repositories from platforms like GitHub, GitLab, Gitea or Bitbucket.

---

### 6. Add a Package

To import repositories from the sources you set up, go to [http://localhost/packages?open=true](http://localhost/packages?open=true). Packistry will automatically configure webhooks to update your packages with the latest tags and branches.

---

### 7. Add Packistry to Your Composer Configuration

To integrate Packistry with Composer, add Packistry to your `composer.json` file. Replace `[url]` with the appropriate domain where Packistry is running:

- `http://localhost`
- `https://domain.com`
- `https://sub.domain.com:1234`

Run the following command:

```bash
composer config repositories.packistry composer [url]
```

---

### 8A. Optionally, Authenticate with the Repository using deploy tokens

:::info
Use a deploy token for CI, server access to repositories, or other integrations.
:::

For private repositories, authentication is required. Replace `[hostname]` with your Packistry server hostname (e.g., `localhost`, `domain.com`, or `sub.domain.com:1234`), and use a personal or deploy token for access:
To generate a deploy token navigate to [http://localhost/deploy-tokens?open=true](http://localhost/deploy-tokens?open=true) and assign the repositories the token has access too.

```bash
composer config bearer.[hostname] "pkdt-9m5HWKPaTg08fArR66zRAbthl7kEYBSIoxByltwibeb01ebf"
```

### 8B. Optionally, Authenticate with the Repository using personal access tokens
:::info
Use a personal token, for example, to authenticate your local machine.
:::

For private repositories, authentication is required. Replace `[hostname]` with your Packistry server hostname (e.g., `localhost`, `domain.com`, or `sub.domain.com:1234`), and use a personal or deploy token for access:
To generate a personal access token navigate to [http://localhost/personal-tokens?open=true](http://localhost/personal-tokens?open=true) and generate a token

```bash
composer config --global bearer.[hostname] "pkpat-9m5HWKPaTg08fArR66zRAbthl7kEYBSIoxByltwibeb01ebf"
```

---

### 9. Optionally, Allow Insecure HTTP Connections

If you are using Packistry over an unsecured HTTP connection (e.g., for local development), configure Composer to allow insecure connections:

```bash
composer config secure-http false
```

> _Note: For production environments, it's strongly recommended to use HTTPS to ensure secure communication._

---

### 10. Install a Package from Packistry

Once your setup is complete, you can install a package from your Packistry repository. Replace `vendor/name` with the package you wish to install:

```bash
composer require vendor/name
```

---

By following these steps, you can quickly set up and start using Packistry to manage your Composer packages in a self-hosted environment.
