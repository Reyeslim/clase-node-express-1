import express from "express"
const router = express.Router()

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(), // cuantos segundos lleva el servidor corriendo
    timestamp: new Date(), // toISOString devuelve un string en formato simplificado de la fecha
  })
})

export default router
