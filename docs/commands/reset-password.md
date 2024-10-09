---
id: reset-password
title: Reset Password Command
sidebar_label: Reset Password
sidebar_position: 11 
---

# Reset Password Command

The `reset:password` command allows administrators to reset the password for a specific user. This command is useful when a user has forgotten their password or needs it to be changed.

## How to Run the Command

To run the command, use the following command:

```bash
packistry reset:password
```

## Steps

When you run the command, it will guide you through the following steps:

### 1. **Select a User**
You will be prompted to select the user whose password you want to reset. A search feature allows you to filter users by name, and the selection list will show both the user's name and email address for clarity.

### 2. **Enter New Password**
Once a user is selected, you will be prompted to enter a new password. The password must meet a minimum length requirement (6 characters or more) to ensure security.

### 3. **Password Reset**
After entering the new password, the command will update the user's password, and a confirmation message will be displayed.

## Example Output

Once the password has been successfully reset, you will see the following message:

```bash
Password reset successful!
```

This confirms that the user's password has been updated.
