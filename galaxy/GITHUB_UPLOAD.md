# How to Upload to GitHub

There are two main ways to upload your project to GitHub.

## Method 1: Browser (Easiest)
1. Go to [github.com/new](https://github.com/new) and create a repository named `galaxy`.
2. On the setup page, click the link that says **"uploading an existing file"**.
3. Drag and drop the **`galaxy_source.zip`** file from your project folder into the browser.
4. Click **"Commit changes"**.

## Method 2: Command Line (Professional)
If you install Git and GitHub CLI (`winget install Git.Git GitHub.cli`), you can run these commands:

```powershell
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create repo and push
gh repo create galaxy --public --source=. --remote=origin --push
```

## Method 3: GitHub Desktop (Recommended for beginners)
1. Download [GitHub Desktop](https://desktop.github.com/).
2. Choose **"Add existing repository"** and select your project folder.
3. Click **"Publish repository"**.
