import express from 'express';
import { JugaadData } from './JugaadData.js';

const app = express();
const port = 3000;

app.set('json spaces', 2);

const errorMessage = () => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>💀 Jugaad Not Found</title>
  <style>
    body {
      background: #0a0a0a;
      color: #00ffcc;
      font-family: 'Courier New', Courier, monospace;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-image: radial-gradient(#00ffcc22 1px, transparent 1px);
      background-size: 12px 12px;
    }
    .terminal {
      background-color: #000;
      border: 2px dotted #00ffcc;
      box-shadow: 0 0 20px #00ffcc88, inset 0 0 10px #00ffcc33;
      padding: 40px;
      border-radius: 12px;
      width: 90%;
      max-width: 750px;
      text-align: left;
      animation: flicker 1.4s infinite alternate;
      position: relative;
    }
    h1 {
      color: #ff0055;
      font-size: 26px;
      margin-bottom: 20px;
      border-bottom: 1px dotted #ff0055;
      padding-bottom: 8px;
      text-align: center;
    }
    p {
      margin: 6px 0;
      font-size: 16px;
    }
    .warning { color: #ffaa00; }
    .fail { color: #ff0033; text-shadow: 0 0 3px #ff0033; }
    .footer {
      margin-top: 30px;
      font-size: 14px;
      color: #888;
      border-top: 1px dotted #444;
      padding-top: 10px;
      text-align: center;
    }
    @keyframes flicker {
      0% { opacity: 1; }
      50% { opacity: 0.96; }
      100% { opacity: 0.93; }
    }
    ::selection { background: #00ffcc33; }
  </style>
</head>
<body>
  <div class="terminal">
    <h1>✖ ERROR 404: JUGAAD NOT FOUND</h1>
    <p class="warning">⚠️ SYSTEM BREACH DETECTED</p>
    <p>🔍 Scanning memory banks... <span class="fail">❌ FAILED</span></p>
    <p>💀 Kernel panic at module <span class="fail">"Desi Hacks"</span></p>
    <p>☠️ Leak detected in sector <span class="fail">0x404</span></p>
    <br>
    <p>&gt;&gt;&gt; Manual jugaad recovery required...</p>
    <p>&gt;&gt;&gt; <span class="fail">Abandon hope?</span> Try again. Or don’t. 😈</p>
    <div class="footer"> ~ Server Died  </div>
  </div>
</body>
</html>`;
};


app.get('/', (req, res) => {
res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>🛠️ Jugaad API Landing Page</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #0f0f0f;
      color: #00ffcc;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem;
    }

    h1 {
      color: #ff3366;
      margin-bottom: 0.3rem;
    }

    .subtitle {
      font-size: 1rem;
      color: #cccccc;
      margin-bottom: 2rem;
    }

    .endpoint {
      background: #1a1a1a;
      border-left: 4px solid #00ffcc;
      padding: 1rem;
      margin: 1rem 0;
      width: 100%;
      max-width: 700px;
      border-radius: 8px;
    }

    .endpoint code {
      color: #ffffff;
    }

    .button {
      padding: 0.7rem 1.2rem;
      margin-top: 0.5rem;
      background-color: #00ffcc;
      color: #0f0f0f;
      border: none;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

    .button:hover {
      background-color: #00ddb0;
    }

    pre {
      background: #111;
      color: #00ffcc;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      max-width: 700px;
      margin-top: 1rem;
    }

    input {
      padding: 0.5rem;
      margin-top: 0.5rem;
      border-radius: 4px;
      border: none;
      width: calc(100% - 1rem);
      max-width: 300px;
    }

    footer {
      margin-top: 3rem;
      font-size: 0.8rem;
      color: #666;
      text-align: center;
    }

    a {
      color: #00ffcc;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .section {
      width: 100%;
      max-width: 700px;
      margin-top: 2rem;
    }

    .toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #00ffcc;
      color: #0f0f0f;
      padding: 10px 16px;
      border-radius: 5px;
      font-weight: bold;
      display: none;
      z-index: 999;
    }
  </style>
</head>
<body>

  <h1>🛠️ Jugaad API</h1>
  <div class="subtitle">Explore Desi Hacks, Tips & Tricks through a fun JSON API</div>

  <div class="endpoint">
    <h3>🔀 Get Random Jugaad</h3>
    <code>GET /Jugaad</code><br/>
    <button class="button" onclick="getRandom()">Try It!</button>
  </div>

  <div class="endpoint">
    <h3>🔎 Search Jugaad by Query</h3>
    <code>GET /Jugaad/search/:query</code>
    <p>Example: <code>/Jugaad/search/mobile</code></p>
    <input id="queryInput" type="text" placeholder="Enter a keyword like mobile..." />
    <button class="button" onclick="searchQuery()">Search Now</button>
  </div>

  <div class="endpoint">
    <h3>🆔 Search Jugaad by ID</h3>
    <code>GET /Jugaad/search/id/:id</code>
    <p>Example: <code>/Jugaad/search/id/501</code></p>
    <input id="idInput" type="text" placeholder="Enter an ID like 501..." />
    <button class="button" onclick="searchById()">Search by ID</button>
  </div>

  <pre id="output">Click "Try It!" to fetch a random jugaad...</pre>

  <div class="section">
    <button class="button" onclick="toggleDocs()">📘 View Full API Description</button>
    <div id="apiDocs" style="display:none; margin-top:1rem;">
      <h3>📖 API Endpoints</h3>
      <ul style="line-height: 1.8;">
        <li><strong>GET /Jugaad</strong> - Get a random jugaad</li>
        <li><strong>GET /Jugaad/search/:query</strong> - Search jugaads by keyword</li>
        <li><strong>GET /Jugaad/search/id/:id</strong> - Get jugaad by unique ID</li>
      </ul>
      <h4>📦 Example Response:</h4>
      <pre>{
  "id": 501,
  "title": "Mobile Hack",
  "jugaad": "Use a balloon to amplify your phone's sound.",
  "category": "Tech",
  "language": "Hindi",
  "difficulty": "Easy",
  "region": "India",
  "tags": ["sound", "mobile", "trick"]
}</pre>
    </div>
  </div>

  <div class="toast" id="toast">✅ API call successful!</div>

  <footer>
    Made with 💡 by <a href="https://github.com/Sameersingh001">@Sameer Singh</a> | Open Source
  </footer>

  <script>
    function showToast(message) {
      const toast = document.getElementById('toast');
      toast.textContent = message || "✅ Done!";
      toast.style.display = 'block';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 3000);
    }

    async function getRandom() {
      const res = await fetch('/Jugaad');
      const data = await res.json();
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
      showToast("Random jugaad fetched!");
    }

    async function searchQuery() {
      const query = document.getElementById('queryInput').value.trim();
      if (!query) return alert("Please enter a query to search.");
      const res = await fetch(\`/Jugaad/search/\${query}\`);
      const data = await res.json();
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
      showToast("Query result fetched!");
    }

    async function searchById() {
      const id = document.getElementById('idInput').value.trim();
      if (!id) return alert("Please enter an ID.");
      const res = await fetch(\`/Jugaad/search/id/\${id}\`);
      const data = await res.json();
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
      showToast("Jugaad fetched by ID!");
    }

    function toggleDocs() {
      const docs = document.getElementById('apiDocs');
      docs.style.display = docs.style.display === 'none' ? 'block' : 'none';
    }
  </script>

</body>
</html>
`);

});







// GET random jugaad
app.get('/jugaad', (req, res) => {
  const index = Math.floor(Math.random() * JugaadData.length);
  const jugaad = JugaadData[index];

  if (jugaad) {
    res.json(jugaad);
  } else {
    res.status(404).type('html').send(errorMessage());
  }
});


//Get All Data 

app.get('/jugaad/all', (req, res) => {

  const jugaad = JugaadData

  if (jugaad) {
    res.send(jugaad);
  } else {
    res.status(404).type('html').send(errorMessage());
  }
 
});



// GET by ID
app.get('/jugaad/search/id/:id', (req, res) => {
  const ID = parseInt(req.params.id);

  const jugaadData = JugaadData.find(item => item.id === ID);
  if (jugaadData) {
    res.json(jugaadData);
  } else {
    res.status(404).type('html').send(errorMessage());
  }
});

// GET by search query
app.get('/jugaad/search/:query', (req, res) => {
  const query = req.params.query.toLowerCase();

  const results = JugaadData.filter(item => {
    return (
      item.title?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query) ||
      item.jugaad?.toLowerCase().includes(query) ||
      item.language?.toLowerCase().includes(query) ||
      item.difficulty?.toLowerCase().includes(query) ||
      item.region?.toLowerCase().includes(query) ||
      item.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  });

  if (results.length > 0) {
    res.json(results);
  } else {
    res.status(404).type('html').send(errorMessage());
  }
});



app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
