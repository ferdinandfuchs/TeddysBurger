# Teddy's Burger - Deployment Guide

This guide covers deploying the Teddy's Burger website to Netlify with Tina Cloud for content management.

---

## Prerequisites

- GitHub account with repository access
- Netlify account
- Tina Cloud account (https://app.tina.io)
- Custom domain (optional)

---

## Step 1: Tina Cloud Setup

### 1.1 Create a Tina Cloud Project

1. Go to [Tina Cloud](https://app.tina.io)
2. Sign in with your GitHub account
3. Click "Create Project"
4. Select your GitHub repository (TeddysBurger)
5. Choose the branch to deploy (usually `main`)

### 1.2 Get Your Credentials

After creating the project:

1. Go to **Project Settings** > **Tokens**
2. Copy the **Client ID**
3. Create a new **Content Token** (read-only is sufficient for builds)
4. Copy the token value

**Save these values - you'll need them for Netlify!**

### 1.3 Configure GitHub App (if prompted)

Tina Cloud needs GitHub access to:
- Read your repository
- Commit content changes

Follow the prompts to install the Tina GitHub App on your repository.

---

## Step 2: Netlify Setup

### 2.1 Connect Repository

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Choose "GitHub"
4. Select your TeddysBurger repository
5. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npx tinacms build && astro build`
   - **Publish directory**: `dist`

### 2.2 Set Environment Variables

In Netlify, go to **Site settings** > **Environment variables** and add:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Your Tina Cloud Client ID |
| `TINA_TOKEN` | Your Tina Cloud Content Token |

**Important**: These must be set BEFORE the first deploy!

### 2.3 Deploy

1. Click "Deploy site"
2. Wait for the build to complete (usually 1-2 minutes)
3. Your site will be live at a Netlify subdomain (e.g., `random-name.netlify.app`)

---

## Step 3: Custom Domain Setup

### 3.1 Add Domain in Netlify

1. Go to **Site settings** > **Domain management**
2. Click "Add custom domain"
3. Enter your domain (e.g., `teddys-burger-stuttgart.de`)
4. Click "Verify" and then "Add domain"

### 3.2 Configure DNS

#### Option A: Netlify DNS (Recommended)

1. Follow Netlify's prompts to transfer DNS management
2. Update nameservers at your domain registrar

#### Option B: External DNS

Add these DNS records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 75.2.60.5 |
| CNAME | www | your-site-name.netlify.app |

### 3.3 Enable HTTPS

1. In **Domain management**, scroll to "HTTPS"
2. Click "Verify DNS configuration"
3. Click "Provision certificate"
4. SSL certificate will be automatically provisioned via Let's Encrypt

---

## Step 4: Test the Deployment

### 4.1 Verify Site

1. Visit your site URL
2. Check all pages load correctly:
   - Homepage: `/`
   - Impressum: `/impressum`
   - Datenschutz: `/datenschutz`

### 4.2 Test Admin Panel

1. Visit `/admin` on your production site
2. Log in with Tina Cloud
3. Try editing content
4. Save changes
5. Verify the site rebuilds automatically

### 4.3 Test Content Flow

1. Edit a menu item in the admin
2. Save the changes
3. Wait for Netlify to rebuild (check deploy logs)
4. Verify changes appear on the live site

---

## Continuous Deployment

Once set up, the deployment flow is:

1. **Content Editor** makes changes in `/admin`
2. **Tina Cloud** commits changes to GitHub
3. **GitHub** triggers Netlify webhook
4. **Netlify** rebuilds and deploys the site
5. **Changes** appear live in 1-2 minutes

---

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_TINA_CLIENT_ID` | Yes | Tina Cloud project client ID |
| `TINA_TOKEN` | Yes | Tina Cloud content token |
| `NODE_VERSION` | No | Node.js version (set in netlify.toml) |

---

## Troubleshooting

### Build Fails

**Check the build logs in Netlify for specific errors.**

Common issues:

1. **Missing environment variables**
   - Ensure `NEXT_PUBLIC_TINA_CLIENT_ID` and `TINA_TOKEN` are set
   - Variable names are case-sensitive

2. **Node version mismatch**
   - Project requires Node 20+
   - Check `netlify.toml` has `NODE_VERSION = "20"`

3. **Tina token invalid**
   - Generate a new token in Tina Cloud
   - Update the environment variable

### Admin Panel Won't Load

1. Check browser console for errors
2. Verify Tina Cloud credentials are correct
3. Ensure the GitHub App has repository access
4. Check Tina Cloud project is connected to correct branch

### Content Changes Not Appearing

1. Check Netlify deploy logs for build status
2. Verify GitHub commit was created by Tina
3. Ensure automatic deploys are enabled in Netlify
4. Try triggering a manual deploy

### SSL Certificate Issues

1. Verify DNS is properly configured
2. Wait up to 24 hours for DNS propagation
3. In Netlify, click "Renew certificate"

---

## Maintenance

### Regular Tasks

- **Monitor build times** - Should be under 2 minutes
- **Check deploy logs** - Look for warnings or errors
- **Update dependencies** - Keep packages up to date
- **Backup content** - Content is in Git, but consider additional backups

### Updating the Site

For code changes:
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Netlify automatically deploys

For content changes:
1. Use the admin panel at `/admin`
2. Changes auto-deploy via Tina Cloud

---

## Security Best Practices

1. **Never commit `.env` files** - Use environment variables in Netlify
2. **Use read-only tokens** - Content tokens should be read-only
3. **Enable 2FA** - On GitHub, Netlify, and Tina Cloud accounts
4. **Review access** - Periodically audit who has admin access
5. **Keep dependencies updated** - Run `npm audit` regularly

---

## Support Resources

- **Astro Docs**: https://docs.astro.build
- **Tina CMS Docs**: https://tina.io/docs
- **Netlify Docs**: https://docs.netlify.com
- **Project Repository**: Your GitHub repository

---

*Last updated: November 2025*
