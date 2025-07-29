
# 🛠️ Indian Jugaad API

**Indian Jugaad API** is a fun, JSON-powered API delivering creative Desi hacks, life tips, and tricks (aka *Jugaad* 🇮🇳). It’s a simple, open-source project built using **Node.js** and **Express** that lets users fetch random hacks, search by keyword or ID, and explore a large collection of jugaads.

🌐 **Live API**: [https://indian-jugaad-api.onrender.com/](https://indian-jugaad-api.onrender.com/)

---

## 🌟 Features

- 🔀 Fetch a random jugaad
- 🔎 Search by keyword (title, tags, region, etc.)
- 🆔 Retrieve jugaad by ID
- 📜 View full dataset with pagination
- 💡 Styled HTML landing page with interactive UI
- 🧪 JSON responses for API consumers

---

## 📦 Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML + Vanilla JavaScript (for demo/testing)
- **Data Source**: Modular JSON array (`JugaadData.js`)
- **Hosting**: Render

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Sameersingh001/jugaad-api.git
cd jugaad-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
node index.js
```

Server will start at:
**`http://localhost:3000/`**

---

## 🌐 Live API Access

Use the hosted version at:
🔗 [https://indian-jugaad-api.onrender.com](https://indian-jugaad-api.onrender.com)

---

## 📌 API Endpoints

| Method | Endpoint                            | Description          |
| ------ | ----------------------------------- | -------------------- |
| `GET`  | `/`                                 | Landing page with UI |
| `GET`  | `/jugaad`                           | Get a random jugaad  |
| `GET`  | `/jugaad/all`                       | Get all jugaads      |
| `GET`  | `/jugaad/all/pages?page=1&limit=50` | Paginated access     |
| `GET`  | `/jugaad/search/:query`             | Search by keyword    |
| `GET`  | `/jugaad/search/id/:id`             | Search by unique ID  |

---

## 📄 Example Response

```json
{
  "id": 501,
  "title": "Mobile Hack",
  "jugaad": "Use a balloon to amplify your phone's sound.",
  "category": "Tech",
  "language": "Hindi",
  "difficulty": "Easy",
  "region": "India",
  "tags": ["sound", "mobile", "trick"]
}
```

---

## 🧪 Example API Calls

### Random Jugaad

```bash
GET https://indian-jugaad-api.onrender.com/jugaad
```

### Search by Keyword

```bash
GET https://indian-jugaad-api.onrender.com/jugaad/search/mobile
```

### Get by ID

```bash
GET https://indian-jugaad-api.onrender.com/jugaad/search/id/501
```

### Paginated Data

```bash
GET https://indian-jugaad-api.onrender.com/jugaad/all/pages?page=2&limit=20
```

---

## 🖥️ Landing Page Preview

A fully styled HTML interface is served at the root `/`:

* Try endpoints using buttons
* View JSON response instantly
* Toggle API documentation
* Search by ID or query

📍 Visit: [https://indian-jugaad-api.onrender.com/](https://indian-jugaad-api.onrender.com/)

---



## 👨‍💻 Author

**Sameer Singh**

* GitHub: [@Sameersingh001](https://github.com/Sameersingh001)


---

## 🛡 License

**MIT License** — Open Source & free to use for all.
Contributions and PRs welcome!

---

## 💡 Contribution Guide

If you know a good jugaad:

* Add your entry in `JugaadData.js`
* Submit a pull request 🚀

---

> ✨ “Jugaad is not just a hack, it's a mindset.” – Desi Devs


