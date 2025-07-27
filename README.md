# 🇮🇳 Indian Jugaad API

Welcome to the **Indian Jugaad API** – a fun, free, and desi-style API that serves quirky, creative Indian life hacks (*aka* **Jugaads**). Whether you're building an app, experimenting with content, or learning how APIs work — this one's for you!

💡 **Built with love and jugaad by [Sameer Singh](https://github.com/Sameersingh001)**
🌐 **Live Demo:** [indian-jugaad-api.onrender.com](https://indian-jugaad-api.onrender.com)

---

## 🚀 Features

* 🔀 Get random jugaads
* 🔍 Search by **keyword**
* 🏪 Search by **ID**
* 🧾 Rich metadata: category, language, region, tags, difficulty
* ⚙️ RESTful and fully JSON-based
* 💻 Developer-friendly + Frontend preview

---

## 📂 API Endpoints


### 🔀 `GET /jugaad/all`


TO Get All jugaads..............


### 🔀 `GET /jugaad`

Returns a **random jugaad**.

**Example Response:**

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

### 🔍 `GET /jugaad/search/:query`

Search jugaads by keyword.

**Example:**
`GET https://indian-jugaad-api.onrender.com/jugaad/search/mobile`

**Example Response:**

```json
[
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
]
```

---

### 🏪 `GET /jugaad/search/id/:id`

Lookup a jugaad by its unique ID.

**Example:**
`GET https://indian-jugaad-api.onrender.com/jugaad/search/id/501`

**Example Response:**

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

## 💻 Example (JavaScript)

```js
fetch('https://indian-jugaad-api.onrender.com/jugaad')
  .then(res => res.json())
  .then(data => {
    console.log("Random Jugaad:", data);
  });
```

---

## 🌍 Frontend Preview

The root route `/` serves a custom landing page with:

* ⚡ Buttons to fetch random jugaads
* 🔍 Inputs to search by query or ID
* 📄 Live response preview
* 📘 Toggleable documentation

📍 Visit now: [https://indian-jugaad-api.onrender.com](https://indian-jugaad-api.onrender.com)

---

## ❌ Error Handling

If a query or ID does not match any jugaad, the API returns a custom **404 Hacker Terminal-style HTML** page — just for fun 😎

---

## 🧠 Tech Stack

* **Backend:** Node.js + Express
* **Hosting:** Render
* **Format:** RESTful JSON API
* **Open Source:** 100% free and community-powered

---

## 📜 License

Licensed under the [MIT License](LICENSE). Use it, remix it, and build cool stuff — desi style.

---

> *“Jugaad is not just a hack. It's a way of life.”* 🇮🇳
