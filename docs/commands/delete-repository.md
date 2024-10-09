---
id: delete-repository
title: Delete Repository Command
sidebar_label: Delete Repository
sidebar_position: 6
---

# Delete Repository Command

The `delete:repository` command is used to delete one or more repositories. This command allows you to search for and select the repositories you want to remove.

## How to Run the Command

To run the command, use the following command:

```bash
packistry delete:repository
```

## Steps

When you run the command, it will guide you through the following steps:

### 1. **Select Repositories**
You will be prompted to select the repositories to delete. You can filter repositories by name using the search feature.

### 2. **Confirmation**
Before proceeding, you will be asked to confirm whether you want to delete the selected repositories. If you confirm, the deletion process will begin. If not, the command will be canceled.

### 3. **Repository Deletion**
Once confirmed, the selected repositories will be permanently deleted, and a message will appear for each repository that has been removed.

## Example Output

After successfully deleting the repositories, you will see messages like:

```bash
Repository RepositoryOne deleted
Repository RepositoryTwo deleted
```

This confirms that the selected repositories have been successfully deleted.
