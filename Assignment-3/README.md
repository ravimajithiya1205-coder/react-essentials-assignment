# 🌤️ Weather Information Dashboard

A modern **React-based Weather App** that fetches real-time weather data and displays it with a beautiful **Glass UI design** and dynamic backgrounds.

---

## 🚀 Live Demo

👉 https://react-essentials-assignment-weather.vercel.app/

---

## 📌 Project Overview

This project demonstrates the practical use of **React's `useEffect()` hook** for handling:

* API calls
* Side effects
* Cleanup operations
* Dependency management

It fetches live weather data from an external API and updates the UI dynamically.

---

## ✨ Features

* 🌍 Search weather by city
* 🌡️ Real-time temperature display
* 🌦️ Weather condition with icons
* 💧 Humidity & wind speed info
* 🎨 Dynamic background based on weather
* 🧊 Glassmorphism UI design
* 🔄 Auto-refresh every 60 seconds
* ⚡ Loading & error handling
* 📱 Responsive design using Bootstrap 5

---

## 🛠️ Tech Stack

* **React.js**
* **Bootstrap 5**
* **CSS (Glass UI)**
* **OpenWeatherMap API**

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── SearchBar.jsx
│   ├── WeatherCard.jsx
│
├── App.jsx
├── App.css
├── main.jsx
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/react-essentials-assignment.git
```

### 2️⃣ Navigate to project

```
cd react-essentials-assignment
cd Assignment-3
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Add API Key

Create a `.env` file in root:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

---

## ▶️ Run Project

```
npm run dev
```

---

## 🔑 API Used

* OpenWeatherMap API

Provides:

* Current weather data

---

## ⚡ useEffect Usage

This project uses multiple `useEffect()` hooks:

### ✅ 1. Fetch Weather Data

* Runs when `city` changes
* Fetches current weather

### ✅ 2. Cleanup Function

* Uses `AbortController`
* Prevents memory leaks

### ✅ 3. Auto Refresh

* Updates data every 60 seconds
* Uses `setInterval` with cleanup

---

## 🖼️ Screenshots

### 🌤️ Weather Dashboard

![alt text](src//assets/screenshot/weather_full.png)

---

## 🚀 Deployment (Netlify)

### Steps:

1. Run build:

```
npm run build
```

## 📸 Weather Images in README

1. Create a folder:

```
src/assets//screenshot
```

2. Add images

3. Use:

assets/
    screenshot/
        cityNotFound.png
        weather_full.png

![alt text](src/assets/screenshot/cityNotFound.png) 
![alt text](src//assets/screenshot/weather_full.png)

```

## 🤝 Contributing

Feel free to fork this repo and improve the project.

---

## 📄 License

This project is free to use for learning purposes.

---

## 👨‍💻 Author

**Ravi Majithiya**
Frontend Developer 💻
Passionate about building modern UI with React 🚀

---

## ⭐ Support

If you like this project:

* ⭐ Star the repo
* 🔁 Share with friends

---

🔥 *Built with passion using React & modern UI design*
