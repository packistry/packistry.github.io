---
title: Using MySQL Database
sidebar_position: 3
---

# Installation with MySQL database

### 1. Generate .env with APP_KEY

Create an .env file and generate an APP_KEY:

Run the following command to generate an APP_KEY and append it to the .env file:

```bash
echo "APP_KEY=base64:$(openssl rand -base64 32)" >> .env
```

In the .env file, complete the remaining environment variables for the MySQL database configuration:

```.env title=".env"
APP_KEY=
DB_DATABASE=packistry
DB_USERNAME=packistry
DB_PASSWORD=
```

#### 2. Create compose.yaml

Next, create the compose.yaml file to define your Docker Compose configuration. This file will set up both the Packistry service and a MySQL database.

```yaml title="compose.yaml"
services:
  packistry:
    image: ghcr.io/packistry/packistry:latest
    restart: unless-stopped
    environment:
      - APP_KEY=${APP_KEY}
      - DB_CONNECTION=${DB_CONNECTION:-mysql}
      - DB_DATABASE=${DB_DATABASE}
      - DB_USERNAME=${DB_USERNAME}
      - DB_PASSWORD=${DB_PASSWORD}
      - DB_HOST=${DB_CONNECTION:-database}
    ports:
      - "80:80"
    volumes:
      - packistry-storage:/data
    depends_on:
      database:
        condition: service_healthy
  database:
    restart: unless-stopped
    image: 'mysql/mysql-server:8.0'
    environment:
      MYSQL_ROOT_PASSWORD: '${DB_PASSWORD}'
      MYSQL_ROOT_HOST: '%'
      MYSQL_DATABASE: '${DB_DATABASE}'
      MYSQL_USER: '${DB_USERNAME}'
      MYSQL_PASSWORD: '${DB_PASSWORD}'
    volumes:
      - 'mysql-data:/var/lib/mysql'
    healthcheck:
      test:
        - CMD
        - mysqladmin
        - ping
        - '-p${DB_PASSWORD}'
      retries: 3
      timeout: 5s
volumes:
  packistry-storage:
  mysql-data:
    driver: local
```

By following these steps, you'll have Packistry running with a MySQL database.
