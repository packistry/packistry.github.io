---
id: rebuild-package
title: Rebuild Package Command
sidebar_label: Rebuild Package
sidebar_position: 12
---

# Rebuild Package Command

The `rebuild:package` command allows administrators to regenerate tags and branches for one or more packages.

## How to Run the Command

To run the command, use:

```bash
packistry rebuild:package
```

## Steps

When you execute the command, you’ll go through the following steps:

### 1. **Choose Scope**

You’ll be prompted with a yes/no confirmation:

```
Rebuild all packages? (yes/no)
```

* Selecting **yes** will rebuild every package in the system.
* Selecting **no** will let you pick specific packages.

### 2. **Select Packages (if applicable)**

If you chose not to rebuild all, you'll use an interactive search to select the packages. Each package will be displayed with its repository for clarity:

```
<repository-name> > <package-name>
```

You can filter packages by typing their name.
