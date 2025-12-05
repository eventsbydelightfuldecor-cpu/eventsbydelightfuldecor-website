# Custom Domain Setup Instructions

## 🎯 Quick Setup Checklist

- [ ] Update CNAME file with actual domain
- [ ] Configure DNS records at domain registrar
- [ ] Enable custom domain in GitHub Pages settings
- [ ] Enable HTTPS

---

## Step 1: Update CNAME File

**File Location:** `CNAME` (in root directory)

**Current Content:** `YOURDOMAIN.com`

**Action Required:**
1. Replace `YOURDOMAIN.com` with your actual domain (e.g., `eventsbydelightfuldecor.com`)
2. Save the file
3. Commit and push to GitHub:
   ```bash
   cd "/Users/jgustavo/Events By Delightful Decor"
   git add CNAME
   git commit -m "Update custom domain"
   git push origin main
   ```

---

## Step 2: Configure DNS Settings

Go to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.) and add these DNS records:

### For Root Domain (e.g., eventsbydelightfuldecor.com):

Create **4 A Records** pointing to GitHub's servers:

```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

### For WWW Subdomain (e.g., www.eventsbydelightfuldecor.com):

Create **1 CNAME Record**:

```
Type: CNAME
Name: www
Value: eventsbydelightfuldecor-cpu.github.io
TTL: 3600
```

---

## Step 3: Enable Custom Domain in GitHub

1. Go to your repository settings:
   https://github.com/eventsbydelightfuldecor-cpu/eventsbydelightfuldecor-website/settings/pages

2. Under **"Custom domain"** section:
   - Enter your domain (e.g., `eventsbydelightfuldecor.com`)
   - Click **Save**

3. Wait for the DNS check to complete (green checkmark appears)
   - This usually takes 5-10 minutes
   - Can take up to 24 hours in rare cases

4. Once verified, check the box for **"Enforce HTTPS"**
   - This may take additional time to provision the SSL certificate
   - Your site will be secure with HTTPS

---

## Step 4: Test Your Domain

After DNS propagates (15 minutes - 48 hours, usually ~1 hour), test:

- ✅ `http://yourdomain.com` → Should redirect to HTTPS
- ✅ `https://yourdomain.com` → Should load your website
- ✅ `https://www.yourdomain.com` → Should load your website
- ✅ Green padlock icon in browser (HTTPS working)

---

## 📋 DNS Configuration by Popular Registrars

### **GoDaddy:**
1. Log in to GoDaddy account
2. Go to "My Products" → "Domains"
3. Click "DNS" next to your domain
4. Add the A and CNAME records listed above

### **Namecheap:**
1. Log in to Namecheap account
2. Go to "Domain List" → Click "Manage"
3. Go to "Advanced DNS" tab
4. Add the A and CNAME records listed above

### **Google Domains:**
1. Log in to Google Domains
2. Click your domain
3. Go to "DNS" in the left menu
4. Scroll to "Custom records"
5. Add the A and CNAME records listed above

### **Bluehost / HostGator / Other cPanel:**
1. Log in to cPanel
2. Go to "Zone Editor"
3. Select your domain
4. Add the A and CNAME records listed above

---

## ⚠️ Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **"Domain already taken"** | Remove CNAME file, wait 24hrs, then re-add |
| **"Domain is improperly configured"** | Double-check all 4 A records and CNAME are correct |
| **"DNS check failed"** | Wait longer (up to 48hrs), clear your DNS cache |
| **"HTTPS not available yet"** | Wait 24hrs for SSL certificate provisioning |
| **Old site still showing** | Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows) |
| **404 error on custom domain** | Ensure CNAME file exists in repository root |

---

## 🔧 Troubleshooting Commands

Check DNS propagation:
```bash
# Check A records
dig yourdomain.com

# Check CNAME record
dig www.yourdomain.com

# Check from multiple locations
# Visit: https://www.whatsmydns.net/
```

Clear local DNS cache:
```bash
# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Windows
ipconfig /flushdns

# Linux
sudo systemd-resolve --flush-caches
```

---

## 📞 Support

If you encounter issues:
1. Check GitHub Pages status: https://www.githubstatus.com/
2. Review GitHub's custom domain docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
3. Contact your domain registrar's support if DNS issues persist

---

## ✅ Final Checklist

Once everything is set up:

- [ ] CNAME file updated with real domain
- [ ] DNS A records added (4 records)
- [ ] DNS CNAME record added (www subdomain)
- [ ] Custom domain enabled in GitHub Pages settings
- [ ] DNS check passed (green checkmark)
- [ ] HTTPS enabled and working
- [ ] Domain loads website correctly
- [ ] WWW subdomain works
- [ ] All pages and assets load properly
- [ ] SSL certificate shows valid (green padlock)

---

**🎉 Once completed, your website will be live at your custom domain with HTTPS security!**

