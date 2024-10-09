---
id: concepts
title: Concepts Overview
sidebar_label: Concepts
sidebar_position: 2
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

## Deploy Tokens

**Deploy tokens** are used to grant access to private repositories. These tokens are typically used in CI/CD pipelines, automation tools, or by external services that need limited access to your repositories.

- Deploy tokens provide an easy way to securely grant access to packages in private repositories.
- Deploy Tokens are tied to specific repositories.
- Deploy Tokens can be recognized by the prefix `pkdt-`

## Personal Tokens

**Personal tokens** are used to grant access to private repositories your have access to. These tokens are typically used on your local machine.

- Personal tokens provide an easy way to securely grant access to packages in private repositories.
- Personal Tokens are tied to a specific user
- Personal Tokens can be recognized by the prefix `pkpat-`


## Users and Roles

Packistry allows you to manage **users**, each of whom is assigned a specific **role**. Roles define what actions a user can take:

- **Admin**: Full access to manage repositories, users, packages, and tokens.
- **User**: Limited access, often restricted to specific repositories.

You can assign repositories to individual users, granting them access only to the packages they need.

