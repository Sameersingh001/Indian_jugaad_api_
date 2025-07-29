
# 🛠️ Jugaad API

**Jugaad API** is a fun, JSON-based API that showcases Desi hacks, tips, and life tricks. Built with Node.js and Express, it allows users to fetch, search, and explore creative solutions — known in India as *"Jugaad."*


## 🌟 Features

- 🔀 Get a random Jugaad
- 🔍 Search by keyword, tag, or category
- 🆔 Retrieve specific Jugaad by ID
- 📜 Paginated access to all entries
- 🖥️ Styled landing page with interactive buttons

---

## 📦 Tech Stack

- Node.js
- Express.js
- CORS (enabled for frontend usage)
- JavaScript (Frontend interactivity)
- JSON data source (modularized via `JugaadData.js`)

---

## 📁 Project Structure

```

.
├── JugaadData.js       # JSON-like array of jugaads
├── Jugaad_Api.js            # Main Express server file
├── README.md           # Project documentation
└── public/             # Optional folder for static files or frontend

````

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sameersingh001/jugaad-api.git
cd jugaad-api
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
node index.js
```

By default, the server runs at:

```
http://localhost:3000
```

---

## 📌 API Endpoints

| Method | Endpoint                            | Description                          |
| ------ | ----------------------------------- | ------------------------------------ |
| `GET`  | `/`                                 | Landing page with usage instructions |
| `GET`  | `/jugaad`                           | Returns a random Jugaad              |
| `GET`  | `/jugaad/all`                       | Returns all Jugaad data              |
| `GET`  | `/jugaad/all/pages?page=1&limit=50` | Paginated access                     |
| `GET`  | `/jugaad/search/:query`             | Search by keyword, tag, or category  |
| `GET`  | `/jugaad/search/id/:id`             | Search by specific ID                |

---

## 🧪 Example Response

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

## 📄 Example Fetch in JavaScript

```js
fetch('http://localhost:3000/jugaad')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 📸 Landing Page Preview

The root `/` route renders a responsive HTML page with:

* Styled API explorer
* Input fields for ID and query search
* Live response preview box
* Button-based interactivity via vanilla JavaScript

---

## 🔍 SEO & Meta Tags (Optional for Hosting Frontend)

If you deploy the HTML frontend, add this in `<head>`:

```html
<meta name="description" content="Explore fun, innovative Desi hacks and Jugaads via this JSON API. Built by Sameer Singh.">
<meta name="keywords" content="jugaad, desi hacks, indian hacks, lifehacks, tech tricks, JSON API, open source">
<meta name="author" content="Sameer Singh">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta property="og:title" content="🛠️ Jugaad API by Sameer Singh" />
<meta property="og:description" content="A fun API delivering random Desi hacks (Jugaad) using Node.js and Express." />
```

---

## 👨‍💻 Author

**Sameer Singh**

* GitHub: [@Sameersingh001](https://github.com/Sameersingh001)
* Twitter: [@imSameerSingh](https://twitter.com/imSameerSingh)
* Email: `sameersingh001@example.com`

---

## 📜 License

This project is **Open Source**. Feel free to fork, use, or contribute.

---

## 🤝 Contribution

PRs are welcome! If you have more creative Jugaads, feel free to add them into `JugaadData.js`.

---

## ⚠️ Error Page Preview

If a route or resource isn't found, the app returns a neon-styled **404 Terminal Error Page** with a tech-cyberpunk theme.

---

Happy Jugaad-ing! 💡

```

---

Let me know if you’d like this exported as a file (`README.md`) or want a deployment guide for platforms like **Vercel**, **Railway**, or **Render**.
```
