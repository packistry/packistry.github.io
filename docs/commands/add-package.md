---
id: add-package
title: Add Package Command
sidebar_label: Add Package
sidebar_position: 3
---

# Add Package Command

The `add:package` command helps you add a package from one of your pre-configured sources to a repository and select relevant projects for the import. It guides you through a few prompts, making it easy to add a package.

## How to Run the Command

To run the command, use the following command:

```bash
packistry add:package
```

## Step-by-Step Instructions

When you run the command, it will guide you through several prompts. Here’s what you need to do:

### 1. **Select a Repository**

First, you'll be asked to select a **repository** to add the package to. The command will display a list of repositories that you can choose from.


### 2. **Select a Package Source**

Next, you’ll need to select a **source** from which the package will be added. The available sources will be displayed for selection.

### 3. **Select Projects**

Once the source is selected, you’ll be prompted to choose which **projects** to import from the source. This step includes a search function where you can type the first few characters of the project name.

Type at least 4 characters to search for projects
- After entering your search term, a list of matching projects will appear, and you can select multiple projects.

### 4. **Webhook Setup (Optional)**

You will be asked whether you want to create a **webhook** for the package. A webhook helps automate certain tasks, like sending notifications or triggering updates when changes occur.
- Type `yes` to create the webhook or `no` if you don't want one.

### 5. **View the Added Package**

After completing the steps, the system will create the package and display the names of the added packages on the screen.

- Example output:
  ```bash
  Package One added
  Package Two added
  ```

This confirms that the packages have been successfully added to your selected repository.
