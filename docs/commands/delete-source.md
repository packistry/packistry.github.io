---
id: delete-source
title: Delete Source Command
sidebar_label: Delete Source
sidebar_position: 7
---

# Delete Source Command

The `delete:source` command is used to delete one or more sources. This command allows you to search for and select the sources you wish to remove.

## How to Run the Command

To run the command, use the following command:

```bash
packistry delete:source
```

## Steps

When you run the command, it will guide you through the following steps:

### 1. **Select Sources**
You will be prompted to select the sources to delete. A search feature will allow you to filter sources by name and choose the ones you wish to remove.

### 2. **Confirmation**
Before deleting, you will be asked to confirm the deletion of the selected sources. If you confirm, the deletion process will proceed; if not, the command will be canceled.

### 3. **Source Deletion**
Once confirmed, the selected sources will be deleted, and a message will be displayed for each source that has been removed.

## Example Output

After successfully deleting the sources, you will see output similar to:

```bash
Source SourceOne deleted
Source SourceTwo deleted
```

This confirms that the selected sources have been successfully deleted.
