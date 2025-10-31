# 🧩 Mini API s Swagger UI

Jednoduchá ukázková aplikace v **Node.js + Express**, která ukazuje, jak vytvořit a otestovat REST API  
a zobrazit dokumentaci pomocí **Swagger UI** na adrese **`/api`**.

---

## 🚀 Co aplikace umí

| Endpoint | Metoda | Popis |
|-----------|--------|--------|
| `/health` | GET | Vrátí informaci, že server běží |
| `/posts`  | GET | Vrátí všechny uložené příspěvky z databáze |
| `/posts`  | POST | Vloží nový příspěvek |
| `/api`    | - | Swagger dokumentace (interaktivní testování API) |

---

## ⚙️ Požadavky

- **Node.js** 18 nebo novější  
- **npm** (součástí Node.js)  
- **MongoDB** – buď lokálně, nebo přes Docker  
- (volitelné) **Docker Desktop** + **Docker Compose**

---

## 🪄 Jak projekt spustit lokálně

### 1️⃣ Stažení projektu
```bash
git clone https://github.com/TVOJE_UZIVATELSKE_JMENO/mini-api-swagger.git
cd mini-api-swagger
npm install
npm run dev
node src/index.js


