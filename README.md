# ⛅ Async Weather Tracker

A Vanilla JavaScript web app that fetches real-time weather data using the OpenWeatherMap API. Built as a lab assignment for **Web Dev II (Advanced JS & React)** — Unit 2.

---

## 📌 Features

- 🔍 **City Search** — Enter any city name to fetch live weather data
- 🌡️ **Weather Display** — Shows city, temperature, condition, humidity, and wind speed
- 💾 **Search History** — Saves recent searches in Local Storage; click any to re-fetch
- ⚠️ **Error Handling** — Graceful messages for invalid cities and network errors
- 🔄 **Event Loop Visualizer** — On-screen console showing sync vs async execution order

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling (no frameworks) |
| Vanilla JavaScript | Logic, DOM, Fetch API |
| OpenWeatherMap API | Live weather data |
| Local Storage | Search history persistence |

> ⚠️ No UI libraries (Bootstrap, Tailwind, etc.) are used — pure HTML/CSS/JS only.

---

## 📁 Project Structure

```
├── index.html     # Main HTML structure
├── style.css      # All styling
└── script.js      # App logic (fetch, async/await, localStorage)
```

---

## 🚀 Getting Started

1. **Clone or download** this repository
2. Open `index.html` directly in your browser — no build step needed
3. The app uses the OpenWeatherMap API. The API key is already included in `script.js`

> If the API key stops working, get a free one at [openweathermap.org](https://openweathermap.org/api) and replace it in `script.js`:
> ```js
> const apiKey = "YOUR_API_KEY_HERE";
> ```

---

## 🧠 Concepts Demonstrated

### Async/Await & Fetch
```js
async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/...`);
    const data = await response.json();
}
```

### Event Loop Execution Order
The on-screen console box shows the order in which synchronous code, microtasks (Promises), and macrotasks (setTimeout) execute:

```
1 Sync Start
2 Sync End
[ASYNC] Start fetching
Promise.then (Microtask)
setTimeout (Macrotask)
[ASYNC] Data received
```

### Local Storage
```js
// Saved automatically on every successful search
localStorage.setItem("history", JSON.stringify(cities));
```

---

## 👨‍💻 Author

**Shreshth Kumar Chaudhary**
K.R. Mangalam University — B.Tech CSE
Course: Web Dev II · Assignment 2 · Unit 2
