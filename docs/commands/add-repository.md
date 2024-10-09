---
id: add-repository
title: Add Repository Command
sidebar_label: Add Repository
sidebar_position: 1
---

# Add Repository Command

The `add:repository` command is used to create a new repository in Packistry. Repositories serve as storage locations for packages, and this command helps you easily create and configure them.

## How to Run the Command

To run the command, use the following command:

```bash
packistry add:repository
```

## Steps

When you run the command, it will prompt you for the following details:

### 1. **Name**
You will be asked to enter the **name of the repository**. This name will also be used as the path where the repository is served.

### 2. **Description (Optional)**
Next, you can provide an optional description for the repository. This helps give context to the repository's purpose or contents.

### 3. **Public or Private**
You will then be asked if you want to **make the repository public**. If you choose "Yes," the repository will be accessible to everyone; otherwise, it will remain private.

### 4. **Repository Creation**
After you enter the details, the repository will be created, and a confirmation message will appear.

## Example Output

Once the repository is created, the command will display a success message:

```bash
Repository created
```

You can now start using the newly created repository to serve packages.
