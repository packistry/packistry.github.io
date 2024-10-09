---
id: delete-deploy-token
title: Delete Deploy Token Command
sidebar_label: Delete Deploy Token
sidebar_position: 10
---

# Delete Deploy Token Command

The `delete:deploy-token` command is used to delete one or more deploy tokens. This command helps you manage and remove deploy tokens that are no longer needed.

## How to Run the Command

To run the command, use the following command:

```bash
packistry delete:deploy-token
```

## Steps

When you run the command, it will guide you through the following steps:

### 1. **Select Deploy Tokens**
You will be prompted to select the deploy tokens you want to delete. A search feature allows you to filter tokens by name and choose the ones you wish to remove.

### 2. **Confirmation**
Before proceeding, you will be asked to confirm the deletion of the selected tokens. If you confirm, the tokens will be deleted; otherwise, the command will be canceled.

### 3. **Token Deletion**
Once you confirm, the selected tokens will be deleted, and a message will be displayed for each token that has been removed.

## Example Output

After successfully deleting the deploy tokens, you will see output similar to the following:

```bash
Deploy token TokenOne deleted
Deploy token TokenTwo deleted
```

This confirms that the selected deploy tokens have been successfully removed.
