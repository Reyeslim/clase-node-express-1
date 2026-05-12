import app from "./app.js"

const PORT = process.env.PORT || 3000 // coge el puerto del .env y si no coge el 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
