---
id: add-deploy-token
title: Add Deploy Token Command
sidebar_label: Add Deploy Token
sidebar_position: 5
---

# Add Deploy Token Command

The `add:deploy-token` command is used to create deploy tokens for accessing private repositories in your system. A deploy token allows specific access to repositories, and this command guides you through creating one.

## How to Run the Command

To run the command, use the following command:

```bash
packistry add:deploy-token
```

## Steps

Once the command starts, it will prompt you for a few inputs:

### 1. **Name**
First, you will be asked to provide a **name** for the token. This is a label for easy reference.

### 2. **Select Repositories**
Next, you will be prompted to select which repositories the token should have access to. This is done via a search feature, where you can search for the specific private repositories by name.

### 3. **Token Creation**
After entering the name and selecting the repositories, Packistry will generate a token for you.

## Example Output

Once the token is created, the command will output a success message along with the **plain-text version of the token**. This token will look something like this:

```bash
Deploy token created
pkdt-0v8xHbiWeuVGwc14k9XRf3xCxISJqjksF7TnPmFcac22317e
```

Make sure to copy and save this token somewhere safe, as it will not be displayed again.
