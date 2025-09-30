# 📖 Recipe Book (PWA) - Trần Nguyễn Ngọc Bảo - 22GIT

## Giới thiệu

**Recipe Book** là một Progressive Web App (PWA) được xây dựng bằng **React + Vite**.  
Ứng dụng cho phép bạn quản lý công thức nấu ăn một cách đơn giản, có thể chạy offline và cài đặt như một ứng dụng native trên điện thoại hoặc desktop.

## 🚀 Tính năng chính

- ➕ **Thêm công thức** (tên món, mô tả).
- 🗑️ **Xóa công thức**.
- 🔍 **Tìm kiếm công thức** theo tên.
- 📦 **Lưu trữ công thức cục bộ** bằng LocalStorage (không mất khi reload).
- 📱 **Hỗ trợ cài đặt** trên Android, iOS, Desktop.
- ⚡ **Offline-ready** nhờ Service Worker + Cache API.

## 🛠 Công nghệ sử dụng

- [React](https://react.dev/) (Vite + TypeScript)
- HTML, CSS, JavaScript (ES6+)
- LocalStorage để lưu dữ liệu
- Service Worker để cache và chạy offline
- Manifest.json để cài đặt PWA

## ▶️ Cách chạy project

### 1. Clone project từ GitHub

```bash
git clone https://github.com/your-username/recipe-book-pwa.git
cd recipe-book-pwa
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Chạy project (dev mode)

```bash
npm run dev
```

### 4. Build production

```bash
npm run build
```

### 5. Preview production build

```bash
npm run preview
```

## Link PWA

- https://recipebookpwa.onrender.com/
