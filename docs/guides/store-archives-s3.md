---
title: Store Package Archives in S3
sidebar_position: 3
---

# Store Package Archives in S3

This guide walks you through setting up a Packistry service with S3 storage (via MinIO) and a MySQL database using Docker Compose.

## 1. Create the `.env` File and Generate an `APP_KEY`

Begin by creating a `.env` file and generating an `APP_KEY` to ensure the application is secure.

Run the following command to generate an `APP_KEY` and append it to your `.env` file:

```bash
echo "APP_KEY=base64:$(openssl rand -base64 32)" >> .env
```

### Complete the Environment Variables

After generating the `APP_KEY`, complete the rest of the `.env` file with the necessary environment variables for MySQL and S3 configurations:

```dotenv title=".env"
APP_KEY=
# If not running on http://localhost, set the appropriate APP_URL
# APP_URL=packistry.your-domain.com

# MySQL Configuration
DB_CONNECTION=mysql
DB_HOST=mysql
DB_DATABASE=packistry
DB_USERNAME=packistry
DB_PASSWORD=

# S3 Configuration
FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=packistry
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=archives
AWS_ENDPOINT=http://minio:9000
AWS_USE_PATH_STYLE_ENDPOINT=true
AWS_URL=http://localhost:9000/archives
```

> **Note:** Make sure to fill in the `DB_PASSWORD` and `AWS_SECRET_ACCESS_KEY` fields with appropriate values.

---

## 2. Create the `compose.yaml` File

Next, you'll create the `compose.yaml` file to define your Docker Compose configuration, which includes the Packistry service, MinIO (as an S3-compatible storage), and a MySQL database.

```yaml title="compose.yaml"
services:
  packistry:
    image: ghcr.io/packistry/packistry:latest
    restart: unless-stopped
    environment:
      - APP_KEY=${APP_KEY}
      # Uncomment and set if running on a custom domain
      # - APP_URL=${APP_URL}
      # MySQL Configuration
      - DB_CONNECTION=${DB_CONNECTION}
      - DB_DATABASE=${DB_DATABASE}
      - DB_USERNAME=${DB_USERNAME}
      - DB_PASSWORD=${DB_PASSWORD}
      - DB_HOST=${DB_HOST}
      # S3 Configuration
      - FILESYSTEM_DISK=${FILESYSTEM_DISK}
      - AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
      - AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
      - AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION}
      - AWS_BUCKET=${AWS_BUCKET}
      - AWS_ENDPOINT=${AWS_ENDPOINT}
      - AWS_USE_PATH_STYLE_ENDPOINT=${AWS_USE_PATH_STYLE_ENDPOINT}
      - AWS_URL=${AWS_URL}
    ports:
      - "80:80"
    volumes:
      - ./:/data
    depends_on:
      mysql:
        condition: service_healthy
      minio:
        condition: service_healthy

  minio:
    image: minio/minio:latest
    restart: unless-stopped
    ports:
      - "${FORWARD_MINIO_PORT:-9000}:9000"
      - "${FORWARD_MINIO_CONSOLE_PORT:-8900}:8900"
    environment:
      MINIO_ROOT_USER: ${AWS_ACCESS_KEY_ID}
      MINIO_ROOT_PASSWORD: ${AWS_SECRET_ACCESS_KEY}
    volumes:
      - minio-data:/data/minio
    command: minio server /data/minio --console-address ":8900"
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      retries: 3
      timeout: 5s

  mysql:
    image: mysql/mysql-server:8.0
    restart: unless-stopped
    ports:
      - "${FORWARD_DB_PORT:-3306}:3306"
    environment:
      MYSQL_ROOT_PASSWORD: ${DB_PASSWORD}
      MYSQL_ROOT_HOST: '%'
      MYSQL_DATABASE: ${DB_DATABASE}
      MYSQL_USER: ${DB_USERNAME}
      MYSQL_PASSWORD: ${DB_PASSWORD}
    volumes:
      - mysql-data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-p${DB_PASSWORD}"]
      retries: 3
      timeout: 5s

volumes:
  mysql-data:
    driver: local
  minio-data:
    driver: local
```

By following these steps, you'll have a complete environment for running Packistry with S3-compatible storage (MinIO) and a MySQL database using Docker Compose.

