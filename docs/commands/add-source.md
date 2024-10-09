---
id: add-source
title: Add Source Command
sidebar_label: Add Source
sidebar_position: 2
---

# Add Source Command

The `add:source` command allows you to add a new source from which packages will be provided.

## How to Run the Command

To run the command, use the following command:

```bash
packistry add:source
```

## Steps

When you run the command, it will guide you through the following inputs:

### 1. **Name**
First, you will be asked to provide a **name** for the package source. This is a label that helps you identify the source.

### 2. **Provider**
Next, you will select a **provider** for the source. This can be a system like GitHub, GitLab, Gitea, or another supported package provider. You will be given a list of options to choose from.

### 3. **Base URL**
You will then be prompted to enter the **base URL** for the source. For example, if your provider is GitHub, the base URL would be `https://api.github.com`. 

### 4. **Access Token**
Lastly, you will be asked to provide an **access token** for the source. This token is required to authenticate your system with the provider, allowing it to access the packages.

### 5. **Source Creation**
Once all inputs are provided, the command will create the source and display a success message.

## Example Output

After the source is successfully created, you will see:

```bash
Source created
```

You can now use the newly added source to manage and provide packages for your repositories.
