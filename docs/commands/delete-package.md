---
id: delete-package
title: Delete Package Command
sidebar_label: Delete Package
sidebar_position: 8
---

# Delete Package Command

The `delete:package` command is used to delete one or more packages. This command allows you to search for and select the packages you wish to remove.

## How to Run the Command

To run the command, use the following command:

```bash
packistry delete:package
```

## Steps

When you run the command, follow these steps:

### 1. **Select Packages**
You will be prompted to select the packages you want to delete. A search feature allows you to filter packages by name, and you will see the associated repository for each package in the selection list.

### 2. **Confirmation**
Before deleting, you will be asked to confirm the removal of the selected packages. If you confirm, the deletion will proceed; if not, the command will be canceled.

### 3. **Package Deletion**
After confirming, the selected packages will be deleted, and a message will be displayed for each package that has been removed.

## Example Output

Once the packages are deleted, you will see a message like this:

```bash
Package [repository] PackageOne deleted
Package [repository] PackageTwo deleted
```

This confirms that the selected packages have been successfully deleted.
