---
id: concepts
title: Concepts Overview
sidebar_label: Concepts
sidebar_position: 3
---

# Concepts Overview

This page provides an overview of the key concepts used in Packistry, explaining how various components like repositories, sources, users, tokens, and packages work together. Understanding these concepts will help you navigate the platform more effectively and make better use of the available features.

## Repositories

A **repository** is a storage location where your packages are hosted. Repositories can be public or private, and they serve as the central location for managing and distributing your packages.

- **Public Repositories**: Accessible by anyone.
- **Private Repositories**: Restricted access, requiring deploy tokens or specific user permissions.

## Sources

A **source** refers to an external system from which packages can be imported. This could be a platform like GitHub, GitLab, or any other supported package provider.

- Each source is associated with a **provider** (e.g., GitHub, Gitea).
- Sources also require an **access token** for authentication, which allows the system to fetch packages from the external provider.

## Packages

A **package** is a unit of software or code that is stored in a repository and can be imported, managed, and distributed. Packages are central to the functionality of Packistry, as they represent the actual content you're working with.

- Packages are added to repositories and can be managed through various commands.
- You can delete packages when they are no longer relevant.

### Importing Packages

Packages imported from a source take their name from the `composer.json` of their first imported version. When a newer version has a different name, the package is renamed, but only within the same vendor. A version that renames the package to another vendor is rejected.

### Uploading Packages

You can also upload a zip of a package version to a repository:

```bash
curl -X POST https://packistry.example/r/company/acme/package \
  -H "Authorization: Bearer pkpat-..." \
  -F file=@package.zip \
  -F version=1.0.0
```

- The token needs the **Write** ability.
- The token, or the user of a personal token, needs a grant on the repository, or a grant on the existing package. Only a repository grant can create new packages. Access through a public repository is not enough. Admins can upload to every repository.
- The name in `composer.json` must match the package in the URL. Uploads cannot rename a package.
- `version` is optional when `composer.json` contains a version.
- Versions with constraints Composer cannot parse are rejected. Use [`versions:clean`](commands/versions-clean.md) to remove such versions stored by earlier releases.
- Uploading a version of a mirrored package turns it into a local package.

## Upstreams

An **upstream** is another Composer repository that Packistry mirrors, such as Packagist, a GitLab group registry or Private Packagist.

- Upstreams are attached to repositories in priority order. Packages the repository does not have are served from the first upstream that has them.
- Packistry caches the metadata and dists of mirrored packages, so installs keep working while an upstream is down.
- Access to a repository includes its mirrored packages.

See the [Upstream Mirroring guide](guides/upstream-mirroring.md) to set one up.

## Deploy Tokens

**Deploy tokens** are used to grant access to private repositories. These tokens are typically used in CI/CD pipelines, automation tools, or by external services that need limited access to your repositories.

- Deploy tokens provide an easy way to securely grant access to packages in private repositories.
- Deploy Tokens are tied to specific repositories.
- Deploy Tokens have the **Read** and **Write** abilities, and never have access to the Packistry API.
- Deploy Tokens can be recognized by the prefix `pkdt-`

## Personal Tokens

**Personal tokens** are used to grant access to private repositories you have access to. These tokens are typically used on your local machine.

- Personal tokens provide an easy way to securely grant access to packages in private repositories.
- Personal Tokens are tied to a specific user
- Personal Tokens can be recognized by the prefix `pkpat-`

Personal tokens have one or more abilities:

| Ability | Allows                                                            |
|---------|-------------------------------------------------------------------|
| Read    | Installing packages with Composer                                 |
| Write   | [Uploading package versions](#uploading-packages)                 |
| API     | Using the Packistry API, with the permissions of the token's user |

:::info
Since 0.16.0, only tokens with the **API** ability can use the Packistry API. Existing tokens lost API access, create a new token with the **API** ability where needed.
:::


## Users and Roles

Packistry allows you to manage **users**, each of whom is assigned a specific **role**. Roles define what actions a user can take:

- **Admin**: Full access to manage repositories, users, packages, and tokens.
- **User**: Limited access, often restricted to specific repositories.

You can assign repositories to individual users, granting them access only to the packages they need.

#### Logging In

Users log in to the web UI with their email and password, or through an [authentication source](#authentication-sources).

- After 5 failed login attempts for the same email and IP address, logging in is blocked for up to a minute.
- Logging out ends the session.
- Changing a password logs out all other sessions of that user.

## Authentication Sources

Packistry allows you to define one or multiple authentication sources, enabling Single Sign-On (SSO) using OAuth 2.0 and OpenID Connect. Authentication sources provide a seamless way for users to log in without managing separate credentials.

#### Supported Providers

Packistry currently supports the following authentication providers:

* OpenID Connect – Authenticate using an OpenID Connect-compatible provider, such as Okta, Keycloak, or Microsoft Azure AD (Entra ID).
* GitHub – Authenticate using your GitHub account.
* GitLab – Authenticate using your GitLab credentials.
* Bitbucket – Authenticate via Bitbucket's OAuth.
* Google – Use Google authentication for login.

####  Role-Based Access Control

When configuring an authentication source, you can assign a default role to users upon their first login.

#### Repository Access

You can define which repositories users will have access to when they authenticate through a specific authentication source. Access to the selected repositories is granted upon their first login.
Enabling & Disabling Authentication Sources

Each authentication source can be toggled as Active or Inactive. When Inactive, users will be unable to sign in using that source. However, only the sign-in functionality will be deactivated deploy/personal tokens generated by users from that source will remain usable.

