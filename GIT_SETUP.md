# 🚀 Hướng dẫn Push Extension lên GitHub

## 📋 **Chuẩn bị:**

### 1. **Tạo GitHub Repository:**
- Truy cập: https://github.com/tuananh93cp
- Click "New repository"
- Repository name: `beautiful-green-theme`
- Description: "Beautiful Green Theme Extension for Chrome and Firefox"
- Chọn Public
- ✅ Add README file
- ✅ Add .gitignore (Node)
- ✅ Choose license (MIT)

## 🚀 **Push bằng Cursor:**

### **Phương pháp 1: Git Panel**
```
1. Nhấn Ctrl + Shift + G
2. Click "Initialize Repository" (nếu chưa có)
3. Stage files: Click + bên cạnh từng file
4. Commit message: "Initial release - Beautiful Green Theme Extension"
5. Click ✓ để commit
6. Click ... → "Push" hoặc "Publish to GitHub"
```

### **Phương pháp 2: Command Palette**
```
1. Nhấn Ctrl + Shift + P
2. Gõ "Git: Initialize Repository"
3. Gõ "GitHub: Publish to GitHub"
4. Chọn repository name: beautiful-green-theme
5. Chọn Public/Private
```

### **Phương pháp 3: Terminal**
```bash
# Khởi tạo Git repo
git init

# Thêm remote
git remote add origin https://github.com/tuananh93cp/beautiful-green-theme.git

# Stage và commit
git add .
git commit -m "🌿 Initial release - Beautiful Green Theme Extension"

# Push lên GitHub
git push -u origin main
```

## 📁 **Cấu trúc Repository:**

```
beautiful-green-theme/
├── 📄 README.md
├── 📄 LICENSE
├── 📄 .gitignore
├── 📄 package.json
├── 📄 manifest.json
├── 📄 manifest_firefox.json
├── 📄 PRIVACY_POLICY.md
├── 📄 popup.html
├── 📄 popup.js
├── 📄 content-script.js
├── 📂 styles/
│   └── theme.css
├── 📂 images/
│   └── background.svg
├── 📂 icons/
│   ├── icon.svg
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── 📂 build/
│   ├── chrome/
│   └── firefox/
└── 📂 docs/
    ├── store-listing.md
    └── screenshots/
```

## 🏷️ **Git Tags cho Releases:**

```bash
# Tạo tag cho version 1.0.0
git tag -a v1.0.0 -m "Version 1.0.0 - Initial release"

# Push tag lên GitHub
git push origin v1.0.0

# Tạo Release trên GitHub
# Vào GitHub → Releases → Create new release
```

## 🔄 **Workflow để cập nhật:**

### **Khi có thay đổi:**
```bash
# 1. Stage thay đổi
git add .

# 2. Commit với message rõ ràng
git commit -m "🐛 Fix popup UI responsiveness"

# 3. Push lên GitHub
git push origin main
```

### **Khi release version mới:**
```bash
# 1. Cập nhật version trong manifest
# 2. Commit thay đổi
git commit -m "🚀 Version 1.1.0 - New features"

# 3. Tạo tag
git tag -a v1.1.0 -m "Version 1.1.0"

# 4. Push code và tag
git push origin main
git push origin v1.1.0
```

## 📋 **Checklist trước khi Push:**

- [ ] ✅ Đã test extension trên Chrome
- [ ] ✅ Đã test extension trên Firefox
- [ ] ✅ README.md đã cập nhật
- [ ] ✅ Version trong manifest đã đúng
- [ ] ✅ .gitignore đã tạo
- [ ] ✅ Build files đã loại trừ
- [ ] ✅ Thông tin cá nhân đã cập nhật

## 🌟 **Sau khi Push:**

### **Tạo Release:**
1. Vào GitHub repository
2. Click "Releases" → "Create new release"
3. Tag version: v1.0.0
4. Release title: "Beautiful Green Theme v1.0.0"
5. Description: Tóm tắt tính năng
6. Attach ZIP files của extension

### **Cập nhật Store:**
- Chrome Web Store: Link đến GitHub repo
- Firefox Add-ons: Link đến GitHub repo
- Cập nhật homepage_url trong manifest

## 🎯 **Tips:**

1. **Commit Messages:**
   - 🌿 Initial release
   - 🐛 Bug fixes
   - ✨ New features
   - 📝 Documentation
   - 🎨 UI improvements

2. **Branch Strategy:**
   - `main`: Stable version
   - `develop`: Development version
   - `feature/xxx`: New features

3. **GitHub Actions:**
   - Auto-build extension
   - Auto-create ZIP files
   - Auto-release when tag

---

**Repository sẽ là showcase tuyệt vời cho extension của bạn!** 🚀 