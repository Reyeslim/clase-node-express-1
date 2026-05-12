import express from "express"
import productRouter from "./routes/productsRoutes.js"
import userRouter from "./routes/usersRoutes.js"
import healthRouter from "./routes/healthRoutes.js"

const app = express()

app.use(express.json()) // le dice a express que entienda JSON
app.use(express.urlencoded({ extended: true })) // Analiza cuerpos de peticiones POST

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenido a mi API de Express",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      products: "/api/products",
      users: "/api/users",
    },
  })
})

app.use(healthRouter)
app.use("/api", productRouter)
app.use("/api", userRouter)

app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    message: `La ruta ${req.url} no existe en este servidor`,
    availableRoutes: ["/health", "/api/products", "/api/users"],
  })
})

export default app
