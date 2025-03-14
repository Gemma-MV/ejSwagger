const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swaggerOptions"); // Asegúrate de tener el archivo swaggerOptions.js
const app = express();

app.use(cors()); // Permitir CORS para todas las solicitudes
app.use(express.json());

// Configuración de Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /api/endpoint:
 *   get:
 *     summary: Obtiene un mensaje GET
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.get("/api/endpoint", (req, res) => {
  res.send("Soy un endpoint GET");
});

/**
 * @swagger
 * /api/endpoint:
 *   post:
 *     summary: Enviar un mensaje POST
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.post("/api/endpoint", (req, res) => {
  res.send("Soy un endpoint POST");
});

/**
 * @swagger
 * /api/endpoint:
 *   put:
 *     summary: Enviar un mensaje PUT
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.put("/api/endpoint", (req, res) => {
  res.send("Soy un endpoint PUT");
});

/**
 * @swagger
 * /api/endpoint:
 *   patch:
 *     summary: Enviar un mensaje PATCH
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.patch("/api/endpoint", (req, res) => {
  res.send("Soy un endpoint PATCH");
});

/**
 * @swagger
 * /api/endpoint:
 *   delete:
 *     summary: Eliminar un recurso
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 */
app.delete("/api/endpoint", (req, res) => {
  res.send("Soy un endpoint DELETE");
});

// Iniciar el servidor en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});