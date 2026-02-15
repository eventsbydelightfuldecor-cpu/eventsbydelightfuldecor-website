# 🚀 Custom Domain Quick Start Guide

## ✅ What's Already Done

- ✅ CNAME file created and pushed to GitHub
- ✅ Detailed setup instructions created (`DOMAIN_SETUP_INSTRUCTIONS.md`)
- ✅ Website is live at: https://eventsbydelightfuldecor-cpu.github.io/eventsbydelightfuldecor-website/

---

## 📝 What You Need From Your Client

Ask your client for:
1. **The domain name** (e.g., `eventsbydelightfuldecor.com`)
2. **Access to DNS settings** (login to their domain registrar like GoDaddy, Namecheap, etc.)

---

## ⚡ Quick Setup (Once You Have the Domain)

### Step 1: Update CNAME File
```bash
cd "/Users/jgustavo/Events By Delightful Decor"
nano CNAME
# Replace "YOURDOMAIN.com" with actual domain (e.g., eventsbydelightfuldecor.com)
# Save and exit (Ctrl+X, Y, Enter)

git add CNAME
git commit -m "Update custom domain"
git push origin main
```

### Step 2: Configure DNS
Have your client add these DNS records at their domain registrar:

**4 A Records (for root domain):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**1 CNAME Record (for www):**
```
Name: www
Value: eventsbydelightfuldecor-cpu.github.io
```

### Step 3: Enable in GitHub
1. Go to: https://github.com/eventsbydelightfuldecor-cpu/eventsbydelightfuldecor-website/settings/pages
2. Under "Custom domain", enter the domain
3. Click Save
4. Wait for DNS check ✅
5. Enable "Enforce HTTPS"

---

## ⏱️ Timeline
- DNS propagation: 15 mins - 48 hours (usually ~1 hour)
- SSL certificate: Up to 24 hours after DNS verification

---

## 🧪 Test URLs (after setup)
- http://yourdomain.com → Should redirect to HTTPS
- https://yourdomain.com → Should load site ✅
- https://www.yourdomain.com → Should load site ✅

---

## 📞 Need Help?
Full detailed instructions are in: `DOMAIN_SETUP_INSTRUCTIONS.md`

