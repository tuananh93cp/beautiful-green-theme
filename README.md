<<<<<<< HEAD
# 🌿 Beautiful Green Theme

Một extension trình duyệt tuyệt đẹp giúp thay đổi giao diện các trang web với theme màu xanh lá cây sang trọng và hiện đại.

## ✨ Tính năng

- 🎨 **Theme xanh lá cây đẹp mắt** - Thay đổi toàn bộ giao diện trang web
- 🌊 **Hiệu ứng động mượt mà** - Animations và transitions tinh tế
- 🎛️ **Điều khiển dễ dàng** - Bật/tắt theme và hiệu ứng từ popup
- 🔄 **Tương thích đa nền tảng** - Hỗ trợ cả Chrome và Firefox
- 📱 **Thiết kế responsive** - Tối ưu cho mọi kích thước màn hình
- 🌙 **Hỗ trợ Dark Mode** - Tự động điều chỉnh theo chế độ tối

## 🚀 Cài đặt

### Chrome
1. Mở Chrome và truy cập `chrome://extensions/`
2. Bật "Developer mode" ở góc trên bên phải
3. Nhấp "Load unpacked" và chọn thư mục `build/chrome`
4. Extension sẽ xuất hiện trong danh sách extensions

### Firefox
1. Mở Firefox và truy cập `about:debugging`
2. Nhấp "This Firefox" ở sidebar
3. Nhấp "Load Temporary Add-on"
4. Chọn file `manifest.json` trong thư mục `build/firefox`

## 🛠️ Phát triển

### Yêu cầu hệ thống
- Node.js (tùy chọn, để phát triển)
- PowerShell (cho Windows)
- 7-Zip (tùy chọn, để tạo ZIP packages)

### Build Extension
```powershell
# Chạy script build
.\build.ps1
```

### Cấu trúc thư mục
```
Extension1/
├── manifest.json              # Chrome manifest
├── manifest_firefox.json      # Firefox manifest
├── popup.html                 # Popup interface
├── popup.js                   # Popup logic
├── content-script.js          # Main theme logic
├── styles/
│   └── theme.css             # Theme styles
├── images/
│   └── background.svg        # Background image
├── icons/
│   ├── icon.svg              # Main icon
│   ├── icon16.png            # 16x16 icon
│   ├── icon48.png            # 48x48 icon
│   └── icon128.png           # 128x128 icon
└── build/                    # Built extensions
    ├── chrome/               # Chrome version
    └── firefox/              # Firefox version
```

## 🎨 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa các CSS variables trong `styles/theme.css`:
```css
:root {
    --green-primary: #66bb6a;
    --green-secondary: #43a047;
    --green-light: #81c784;
    --green-dark: #2e7d32;
    --green-accent: #4caf50;
}
```

### Thêm hiệu ứng mới
Thêm animations mới vào file `styles/theme.css` và điều khiển chúng từ `content-script.js`.

## 📦 Xuất bản lên Store

### Chrome Web Store
1. Truy cập [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
2. Tạo tài khoản developer (phí $5)
3. Upload file `beautiful-green-theme-chrome.zip`
4. Điền thông tin extension và screenshots
5. Submit để review

### Firefox Add-ons
1. Truy cập [Firefox Add-ons Developer Hub](https://addons.mozilla.org/developers/)
2. Tạo tài khoản developer (miễn phí)
3. Upload file `beautiful-green-theme-firefox.zip`
4. Điền thông tin extension
5. Submit để review

## 🔧 Gỡ lỗi

### Chrome DevTools
1. Mở DevTools (F12)
2. Vào tab "Sources"
3. Tìm extension script trong "Content scripts"

### Firefox DevTools
1. Mở DevTools (F12)
2. Vào tab "Debugger"
3. Tìm extension script trong danh sách

## 📋 Checklist cho Store

- [ ] ✅ Manifest hợp lệ
- [ ] ✅ Icons đầy đủ (16x16, 48x48, 128x128)
- [ ] ✅ Description chi tiết
- [ ] ✅ Screenshots chất lượng cao
- [ ] ✅ Privacy policy (nếu cần)
- [ ] ✅ Permissions tối thiểu
- [ ] ✅ Không có lỗi console
- [ ] ✅ Tương thích đa trình duyệt

## 🤝 Đóng góp

Hoan nghênh mọi đóng góp! Hãy tạo issue hoặc pull request.

## 📄 Giấy phép

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🌟 Hỗ trợ

Nếu thích extension này, hãy:
- ⭐ Đánh giá 5 sao trên Store
- 🔄 Chia sẻ với bạn bè
- 🐛 Báo lỗi qua Issues
- 💡 Đề xuất tính năng mới

---

**Tác giả:** XMP  
**Email:** lanhanh64529@gmail.com  
**Website:** https://github.com/tuananh93cp 
=======
# beautiful-green-theme
Beautiful Green Theme Extension for Chrome and Firefox
>>>>>>> 96d8e179ec72d52baf3338868c127224ebe32e58
