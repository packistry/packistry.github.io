---
id: add-user
title: Add User Command
sidebar_label: Add User
sidebar_position: 4
---

# Add User Command

The `add:user` command is used to create a new user. This command allows you to set up user credentials, assign a role, and define repository access where applicable.

## How to Run the Command

To run the command, use the following command:

```bash
packistry add:user
```

## Steps

When you run the command, it will guide you through the following inputs:

### 1. **Name**
First, you will be asked to provide the user's **name**. This is the name that will be associated with the user account.

### 2. **Email**
Next, you will be prompted to enter the user's **email address**. This will be used for login.

### 3. **Password**
You will then need to provide a **password** for the user.

### 4. **Role**
You will be prompted to select the **role** for the user. The role defines the level of access the user will have available roles include:
- **Admin**: Full access to the system.
- **User**: Limited access, to assigned repositories.

If the selected role is **User**, you will be prompted to select which repositories the user should have access to.

### 5. **Select Repositories (If Applicable)**
If the user role is set to **User**, you will be asked to select which repositories the user should have access to. This is done through a search interface where you can select private repositories from the list.

### 6. **User Creation**
Once all the details have been entered, the user will be created, and a confirmation message will be displayed.

## Example Output

After successfully creating the user, you will see:

```bash
User created
```
